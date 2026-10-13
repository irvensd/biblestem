import { persistMeaningfulStudyActivity } from '@/lib/dashboard-local-progress'
import type { QuizAnswerSlot } from '@/lib/lesson-quiz-score'

const STORAGE_PREFIX = 'biblestem-lesson-quiz'

export type StoredLessonQuizAttempt = {
  scorePercent: number
  passed: boolean
  attempt: number
  savedAt: string
  /** Missing on older saves. Those records are finished attempts. */
  status?: 'submitted' | 'in_progress'
  questionIndex?: number
  answers?: QuizAnswerSlot[]
  checked?: boolean[]
}

const QUIZ_STORE_EVENT = 'biblestem-quiz-storage'

function storageKey(studySlug: string, lessonSlug: string): string {
  return `${STORAGE_PREFIX}:${studySlug}:${lessonSlug}`
}

export function subscribeLessonQuizStore(onChange: () => void): () => void {
  if (typeof window === 'undefined') return () => undefined
  window.addEventListener(QUIZ_STORE_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(QUIZ_STORE_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

export function getLessonQuizStorageRaw(studySlug: string, lessonSlug: string): string | null {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(storageKey(studySlug, lessonSlug))
  } catch {
    return null
  }
}

function notifyLessonQuizStore(): void {
  if (typeof window === 'undefined' || typeof window.dispatchEvent !== 'function' || typeof window.Event !== 'function') {
    return
  }
  try {
    window.dispatchEvent(new window.Event(QUIZ_STORE_EVENT))
  } catch {
    // The attempt is already stored. A subscriber refresh can wait for the next read.
  }
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
    return
  }
  notifyLessonQuizStore()
  if ((payload.status ?? 'submitted') === 'submitted' && payload.passed) {
    try {
      persistMeaningfulStudyActivity()
    } catch {
      // The quiz attempt is already stored. A full storage failure should not throw.
    }
  }
}

export function readLessonQuizResultLocal(studySlug: string, lessonSlug: string): StoredLessonQuizAttempt | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(storageKey(studySlug, lessonSlug))
    if (!raw) return null
    const v = JSON.parse(raw) as StoredLessonQuizAttempt
    if (typeof v.scorePercent !== 'number' || typeof v.passed !== 'boolean') return null
    const status = v.status === 'in_progress' ? 'in_progress' : 'submitted'
    return {
      scorePercent: v.scorePercent,
      passed: status === 'submitted' ? v.passed : false,
      attempt: typeof v.attempt === 'number' && v.attempt > 0 ? v.attempt : 1,
      savedAt: typeof v.savedAt === 'string' ? v.savedAt : '',
      status,
      questionIndex: typeof v.questionIndex === 'number' ? v.questionIndex : undefined,
      answers: Array.isArray(v.answers) ? v.answers : undefined,
      checked: Array.isArray(v.checked) ? v.checked.map((item) => item === true) : undefined,
    }
  } catch {
    return null
  }
}

/** Same storage key as a finished attempt. A draft never counts as a passing quiz. */
export function saveLessonQuizDraft(
  studySlug: string,
  lessonSlug: string,
  draft: {
    attempt: number
    questionIndex: number
    answers: QuizAnswerSlot[]
    checked: boolean[]
  },
): void {
  saveLessonQuizResultLocal(studySlug, lessonSlug, {
    scorePercent: 0,
    passed: false,
    attempt: draft.attempt,
    savedAt: new Date().toISOString(),
    status: 'in_progress',
    questionIndex: draft.questionIndex,
    answers: draft.answers,
    checked: draft.checked,
  })
}

/**
 * Writes the finished attempt locally first, then tries the account sync.
 * A failed sync leaves the local attempt in place.
 */
export async function persistSubmittedQuizAttempt(
  studySlug: string,
  lessonSlug: string,
  payload: StoredLessonQuizAttempt,
  userId: string | undefined,
  sync: typeof syncLessonQuizResultToAccount = syncLessonQuizResultToAccount,
): Promise<void> {
  const submitted: StoredLessonQuizAttempt = {
    scorePercent: payload.scorePercent,
    passed: payload.passed,
    attempt: payload.attempt,
    savedAt: payload.savedAt,
    status: 'submitted',
  }
  saveLessonQuizResultLocal(studySlug, lessonSlug, submitted)
  try {
    await sync(studySlug, lessonSlug, submitted, userId)
  } catch {
    // Local result remains the record until an account table exists.
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
