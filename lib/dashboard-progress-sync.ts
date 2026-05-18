/**
 * Persists lesson/dashboard progress: Supabase when `user.id` is present (configured project),
 * otherwise the same keys as `dashboard-local-progress` (demo / offline).
 */

import {
  DASHBOARD_PROGRESS_STORAGE_KEY,
  markLessonComplete,
  readLocalProgress,
  replaceLocalDashboardProgress,
  saveLessonProgress,
  type LocalDashboardProgress,
} from '@/lib/dashboard-local-progress'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import {
  fetchProgressState,
  markLessonCompleteRemote,
  mergeLocalProgressIntoRemote,
  upsertLessonProgressRemote,
} from '@/lib/supabase/user-progress'

const MIGRATION_FLAG_PREFIX = 'biblestem-progress-supabase-migrated:'

function dispatchProgressEvent(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event('biblestem-progress'))
}

/** Union completed lessons, activity days, and newest `lastLesson` (for dashboard + sync). */
export function mergeProgressSnapshots(
  a: LocalDashboardProgress,
  b: LocalDashboardProgress,
): LocalDashboardProgress {
  const completedKeys = [...new Set([...a.completedKeys, ...b.completedKeys])]
  const activityDays = [...new Set([...a.activityDays, ...b.activityDays])].sort()
  const studyTimeSeconds = Math.max(a.studyTimeSeconds ?? 0, b.studyTimeSeconds ?? 0)
  let lastLesson = a.lastLesson
  if (b.lastLesson) {
    if (!lastLesson) lastLesson = b.lastLesson
    else {
      const ta = new Date(a.lastLesson!.updatedAt).getTime()
      const tb = new Date(b.lastLesson.updatedAt).getTime()
      if (tb >= ta) lastLesson = b.lastLesson
    }
  }
  return { v: 1, completedKeys, lastLesson, activityDays, studyTimeSeconds }
}

/** Pull remote progress into localStorage so overview and other local readers match Supabase. */
export async function hydrateLocalProgressFromSupabase(userId: string): Promise<void> {
  const supabase = getSupabaseBrowserClient()
  if (!supabase) return
  try {
    const remote = await fetchProgressState(supabase, userId)
    const local = readLocalProgress()
    replaceLocalDashboardProgress(mergeProgressSnapshots(local, remote))
  } catch {
    /* network / RLS */
  }
}

function isEmptyProgress(p: LocalDashboardProgress): boolean {
  return p.completedKeys.length === 0 && !p.lastLesson && p.activityDays.length === 0
}

/**
 * One-time merge of legacy localStorage progress into Supabase after first Supabase login.
 */
export async function migrateLocalProgressForUserOnce(userId: string): Promise<void> {
  if (typeof window === 'undefined') return
  const supabase = getSupabaseBrowserClient()
  if (!supabase) return

  try {
    if (localStorage.getItem(`${MIGRATION_FLAG_PREFIX}${userId}`)) return
  } catch {
    /* ignore */
  }

  const local = readLocalProgress()
  if (isEmptyProgress(local)) {
    try {
      localStorage.setItem(`${MIGRATION_FLAG_PREFIX}${userId}`, '1')
    } catch {
      /* ignore */
    }
    return
  }

  await mergeLocalProgressIntoRemote(supabase, userId, local)
  try {
    localStorage.removeItem(DASHBOARD_PROGRESS_STORAGE_KEY)
    localStorage.setItem(`${MIGRATION_FLAG_PREFIX}${userId}`, '1')
  } catch {
    /* ignore */
  }
  dispatchProgressEvent()
}

export function persistSaveLessonProgress(
  seriesSlug: string,
  lessonSlug: string,
  stepIndex: number,
  totalSteps: number,
  userId: string | undefined,
): Promise<void> {
  const supabase = getSupabaseBrowserClient()
  if (userId && supabase) {
    return upsertLessonProgressRemote(supabase, userId, seriesSlug, lessonSlug, stepIndex, totalSteps)
      .catch(() => {
        /* network / RLS / missing table: still keep device progress */
      })
      .finally(() => {
        saveLessonProgress(seriesSlug, lessonSlug, stepIndex, totalSteps)
      })
  }
  saveLessonProgress(seriesSlug, lessonSlug, stepIndex, totalSteps)
  return Promise.resolve()
}

export function persistMarkLessonComplete(
  seriesSlug: string,
  lessonSlug: string,
  totalSteps: number,
  userId: string | undefined,
): Promise<void> {
  const supabase = getSupabaseBrowserClient()
  if (userId && supabase) {
    return markLessonCompleteRemote(supabase, userId, seriesSlug, lessonSlug, totalSteps)
      .catch(() => {
        /* network / RLS / missing table */
      })
      .finally(() => {
        markLessonComplete(seriesSlug, lessonSlug)
      })
  }
  markLessonComplete(seriesSlug, lessonSlug)
  return Promise.resolve()
}

/** Dashboard visits do not affect streak or study metrics. */
export function persistTouchDashboardActivity(_userId: string | undefined): Promise<void> {
  return Promise.resolve()
}
