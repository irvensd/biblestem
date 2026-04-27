/**
 * Lesson reflection/note persistence: localStorage always; Supabase when configured + signed in.
 */

export type NoteSaveTarget = 'device' | 'account'

const NOTE_PREFIX = 'biblestem-lesson-note:'

export function lessonNoteStorageKey(studySlug: string, lessonSlug: string, stepNumber: number): string {
  return `${NOTE_PREFIX}${studySlug}:${lessonSlug}:${stepNumber}`
}

export function readLessonNoteLocal(studySlug: string, lessonSlug: string, stepNumber: number): string {
  if (typeof window === 'undefined') return ''
  try {
    return localStorage.getItem(lessonNoteStorageKey(studySlug, lessonSlug, stepNumber)) ?? ''
  } catch {
    return ''
  }
}

export function writeLessonNoteLocal(studySlug: string, lessonSlug: string, stepNumber: number, content: string): void {
  try {
    localStorage.setItem(lessonNoteStorageKey(studySlug, lessonSlug, stepNumber), content)
  } catch {
    /* ignore */
  }
}

/** Count steps in this lesson with non-empty saved local notes. */
export function countLocalLessonNotes(studySlug: string, lessonSlug: string, totalSteps: number): number {
  if (typeof window === 'undefined') return 0
  let n = 0
  for (let i = 0; i < totalSteps; i++) {
    const v = readLessonNoteLocal(studySlug, lessonSlug, i).trim()
    if (v) n += 1
  }
  return n
}
