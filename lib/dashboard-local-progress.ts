/**
 * Client-only persisted study progress (demo). Replace with Supabase user_lesson_progress later.
 */

export type LastLessonState = {
  seriesSlug: string
  lessonSlug: string
  stepIndex: number
  totalSteps: number
  updatedAt: string
}

export type LocalDashboardProgress = {
  v: 1
  /** `${seriesSlug}::${lessonSlug}` for completed lessons */
  completedKeys: string[]
  lastLesson: LastLessonState | null
  /** Local calendar days (YYYY-MM-DD) with study activity */
  activityDays: string[]
}

export const DASHBOARD_PROGRESS_STORAGE_KEY = 'biblestem-dashboard-progress'

const STORAGE_KEY = DASHBOARD_PROGRESS_STORAGE_KEY

export function lessonKey(seriesSlug: string, lessonSlug: string): string {
  return `${seriesSlug}::${lessonSlug}`
}

export function emptyLocalProgress(): LocalDashboardProgress {
  return { v: 1, completedKeys: [], lastLesson: null, activityDays: [] }
}

function defaultProgress(): LocalDashboardProgress {
  return emptyLocalProgress()
}

export function readLocalProgress(): LocalDashboardProgress {
  if (typeof window === 'undefined') return defaultProgress()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress()
    const p = JSON.parse(raw) as Partial<LocalDashboardProgress>
    if (p.v !== 1) return defaultProgress()
    return {
      v: 1,
      completedKeys: Array.isArray(p.completedKeys) ? p.completedKeys : [],
      lastLesson:
        p.lastLesson &&
        typeof p.lastLesson.seriesSlug === 'string' &&
        typeof p.lastLesson.lessonSlug === 'string' &&
        typeof p.lastLesson.stepIndex === 'number' &&
        typeof p.lastLesson.totalSteps === 'number'
          ? p.lastLesson
          : null,
      activityDays: Array.isArray(p.activityDays) ? p.activityDays : [],
    }
  } catch {
    return defaultProgress()
  }
}

function writeLocalProgress(p: LocalDashboardProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {
    /* quota / private mode */
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('biblestem-progress'))
  }
}

/** Replace stored progress (e.g. hydrate from Supabase after login). */
export function replaceLocalDashboardProgress(p: LocalDashboardProgress): void {
  if (p.v !== 1) return
  writeLocalProgress({
    v: 1,
    completedKeys: [...p.completedKeys],
    lastLesson: p.lastLesson ? { ...p.lastLesson } : null,
    activityDays: [...p.activityDays],
  })
}

/** Same as `replaceLocalDashboardProgress` but does not dispatch `biblestem-progress` (avoids feedback loops). */
export function replaceLocalDashboardProgressSilent(p: LocalDashboardProgress): void {
  if (p.v !== 1) return
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        v: 1,
        completedKeys: [...p.completedKeys],
        lastLesson: p.lastLesson ? { ...p.lastLesson } : null,
        activityDays: [...p.activityDays],
      }),
    )
  } catch {
    /* quota / private mode */
  }
}

function todayLocalDate(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function recordActivityDay(p: LocalDashboardProgress): void {
  const t = todayLocalDate()
  if (!p.activityDays.includes(t)) {
    p.activityDays = [...p.activityDays, t].sort()
  }
}

/** Call when the user finishes the last step of a lesson (completion screen). */
export function markLessonComplete(seriesSlug: string, lessonSlug: string): void {
  const p = readLocalProgress()
  const k = lessonKey(seriesSlug, lessonSlug)
  if (!p.completedKeys.includes(k)) {
    p.completedKeys = [...p.completedKeys, k]
  }
  recordActivityDay(p)
  if (
    p.lastLesson?.seriesSlug === seriesSlug &&
    p.lastLesson.lessonSlug === lessonSlug
  ) {
    p.lastLesson = {
      ...p.lastLesson,
      stepIndex: Math.max(p.lastLesson.stepIndex, p.lastLesson.totalSteps - 1),
      totalSteps: p.lastLesson.totalSteps,
      updatedAt: new Date().toISOString(),
    }
  }
  writeLocalProgress(p)
}

/** Call when the user moves between steps (or lands on a lesson). */
export function saveLessonProgress(
  seriesSlug: string,
  lessonSlug: string,
  stepIndex: number,
  totalSteps: number,
): void {
  if (totalSteps <= 0) return
  const p = readLocalProgress()
  p.lastLesson = {
    seriesSlug,
    lessonSlug,
    stepIndex: Math.min(Math.max(0, stepIndex), totalSteps - 1),
    totalSteps,
    updatedAt: new Date().toISOString(),
  }
  recordActivityDay(p)
  writeLocalProgress(p)
}

/** Optional: call when dashboard loads so streak can count “showed up”. */
export function touchDashboardActivity(): void {
  const p = readLocalProgress()
  recordActivityDay(p)
  writeLocalProgress(p)
}

export function isLessonComplete(seriesSlug: string, lessonSlug: string): boolean {
  return readLocalProgress().completedKeys.includes(lessonKey(seriesSlug, lessonSlug))
}

/** Clear progress / streak data on this device (settings → reset on this device). */
export function clearLocalDashboardProgress(): void {
  writeLocalProgress(defaultProgress())
}
