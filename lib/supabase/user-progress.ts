import type { SupabaseClient } from '@supabase/supabase-js'
import type { LastLessonState, LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import { lessonKey } from '@/lib/dashboard-local-progress'

type ProgressRow = {
  series_slug: string
  lesson_slug: string
  completed: boolean
  current_step_index: number
  total_steps: number
  updated_at: string
}

function rowsToLocal(rows: ProgressRow[], activityOn: string[]): LocalDashboardProgress {
  const completedKeys = rows.filter((r) => r.completed).map((r) => lessonKey(r.series_slug, r.lesson_slug))

  let lastLesson: LastLessonState | null = null
  let bestTs = 0
  for (const r of rows) {
    const ts = new Date(r.updated_at).getTime()
    if (ts >= bestTs) {
      bestTs = ts
      const total = Math.max(1, r.total_steps)
      const step = r.completed
        ? total - 1
        : Math.min(Math.max(0, r.current_step_index), total - 1)
      lastLesson = {
        seriesSlug: r.series_slug,
        lessonSlug: r.lesson_slug,
        stepIndex: step,
        totalSteps: total,
        updatedAt: r.updated_at,
      }
    }
  }

  const activityDays = [...new Set(activityOn)].sort()
  return { v: 1, completedKeys: [...new Set(completedKeys)], lastLesson, activityDays }
}

export async function fetchProgressState(
  supabase: SupabaseClient,
  userId: string,
): Promise<LocalDashboardProgress> {
  const [progRes, dayRes] = await Promise.all([
    supabase
      .from('user_study_progress')
      .select('series_slug, lesson_slug, completed, current_step_index, total_steps, updated_at')
      .eq('user_id', userId),
    supabase.from('user_activity_days').select('activity_on').eq('user_id', userId),
  ])

  const rows = (progRes.data ?? []) as ProgressRow[]
  const days = (dayRes.data ?? []) as { activity_on: string }[]
  const activityOn = days.map((d) =>
    typeof d.activity_on === 'string' ? d.activity_on.slice(0, 10) : String(d.activity_on).slice(0, 10),
  )
  return rowsToLocal(rows, activityOn)
}

/** Same calendar day as `dashboard-local-progress` (local timezone). */
function todayLocalDateString(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

async function recordActivityDayRemote(supabase: SupabaseClient, userId: string): Promise<void> {
  const activity_on = todayLocalDateString()
  await supabase.from('user_activity_days').upsert(
    { user_id: userId, activity_on },
    { onConflict: 'user_id,activity_on' },
  )
}

export async function upsertLessonProgressRemote(
  supabase: SupabaseClient,
  userId: string,
  seriesSlug: string,
  lessonSlug: string,
  stepIndex: number,
  totalSteps: number,
): Promise<void> {
  if (totalSteps <= 0) return
  await recordActivityDayRemote(supabase, userId)
  const step = Math.min(Math.max(0, stepIndex), totalSteps - 1)
  await supabase.from('user_study_progress').upsert(
    {
      user_id: userId,
      series_slug: seriesSlug,
      lesson_slug: lessonSlug,
      completed: false,
      current_step_index: step,
      total_steps: totalSteps,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,series_slug,lesson_slug' },
  )
}

export async function markLessonCompleteRemote(
  supabase: SupabaseClient,
  userId: string,
  seriesSlug: string,
  lessonSlug: string,
  totalSteps: number,
): Promise<void> {
  const total = Math.max(1, totalSteps)
  await recordActivityDayRemote(supabase, userId)
  await supabase.from('user_study_progress').upsert(
    {
      user_id: userId,
      series_slug: seriesSlug,
      lesson_slug: lessonSlug,
      completed: true,
      current_step_index: total - 1,
      total_steps: total,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,series_slug,lesson_slug' },
  )
}

export async function touchDashboardActivityRemote(supabase: SupabaseClient, userId: string): Promise<void> {
  await recordActivityDayRemote(supabase, userId)
}

export async function mergeLocalProgressIntoRemote(
  supabase: SupabaseClient,
  userId: string,
  local: LocalDashboardProgress,
): Promise<void> {
  const empty =
    local.completedKeys.length === 0 && !local.lastLesson && local.activityDays.length === 0
  if (empty) return

  for (const day of local.activityDays) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) continue
    await supabase.from('user_activity_days').upsert(
      { user_id: userId, activity_on: day },
      { onConflict: 'user_id,activity_on' },
    )
  }

  for (const key of local.completedKeys) {
    const sep = key.indexOf('::')
    if (sep < 0) continue
    const series_slug = key.slice(0, sep)
    const lesson_slug = key.slice(sep + 2)
    if (!series_slug || !lesson_slug) continue

    await supabase.from('user_study_progress').upsert(
      {
        user_id: userId,
        series_slug,
        lesson_slug,
        completed: true,
        current_step_index: 0,
        total_steps: 1,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,series_slug,lesson_slug' },
    )
  }

  if (local.lastLesson && local.lastLesson.totalSteps > 0) {
    const { seriesSlug, lessonSlug, stepIndex, totalSteps } = local.lastLesson
    const k = lessonKey(seriesSlug, lessonSlug)
    const done = local.completedKeys.includes(k)
    await supabase.from('user_study_progress').upsert(
      {
        user_id: userId,
        series_slug: seriesSlug,
        lesson_slug: lessonSlug,
        completed: done,
        current_step_index: done ? totalSteps - 1 : Math.min(stepIndex, totalSteps - 1),
        total_steps: totalSteps,
        updated_at: local.lastLesson.updatedAt || new Date().toISOString(),
      },
      { onConflict: 'user_id,series_slug,lesson_slug' },
    )
  }
}
