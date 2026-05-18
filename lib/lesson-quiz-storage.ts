import { persistMeaningfulStudyActivity } from '@/lib/dashboard-local-progress'

const STORAGE_PREFIX = 'biblestem-lesson-quiz'

export type StoredLessonQuizAttempt = {
  scorePercent: number
  passed: boolean
  attempt: number
  savedAt: string
}

function storageKey(studySlug: string, lessonSlug: string): string {
  return `${STORAGE_PREFIX}:${studySlug}:${lessonSlug}`
}

/** Persist quiz outcome in the browser for signed-out users and as a fallback when Supabase is unavailable. */
export function saveLessonQuizResultLocal(
  studySlug: string,
  lessonSlug: string,
  payload: StoredLessonQuizAttempt,
): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(storageKey(studySlug, lessonSlug), JSON.stringify(payload))
  } catch {
    // ignore quota / private mode
  }
  if (payload.passed) {
    persistMeaningfulStudyActivity()
  }
}

export function readLessonQuizResultLocal(studySlug: string, lessonSlug: string): StoredLessonQuizAttempt | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(storageKey(studySlug, lessonSlug))
    if (!raw) return null
    const v = JSON.parse(raw) as StoredLessonQuizAttempt
    if (typeof v.scorePercent !== 'number' || typeof v.passed !== 'boolean') return null
    return v
  } catch {
    return null
  }
}

/**
 * When authenticated quiz persistence exists in Supabase, sync local attempts here.
 * TODO: implement `public.lesson_quiz_results` (or equivalent) and upsert from this helper after save.
 */
export async function syncLessonQuizResultToAccount(
  _studySlug: string,
  _lessonSlug: string,
  _payload: StoredLessonQuizAttempt,
  _userId: string | undefined,
): Promise<void> {
  void _studySlug
  void _lessonSlug
  void _payload
  void _userId
  // TODO(Supabase): persist quiz attempts server-side when table + RLS exist; until then localStorage only.
}
