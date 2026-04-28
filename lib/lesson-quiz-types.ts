/** Optional end-of-lesson quick review (guided reader step). */

/** Four-option single answer (default quiz shape). */
export type LessonQuizQuestionSingle = {
  id: string
  kind?: 'single'
  prompt: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
}

/** Select all correct options (exact set match). */
export type LessonQuizQuestionMulti = {
  id: string
  kind: 'multi'
  prompt: string
  options: [string, string, string, string]
  /** 0–3; learner must match this set exactly. */
  correctIndices: [number, ...number[]]
}

/** Open reflection; scored as correct when non-empty after submit. */
export type LessonQuizQuestionReflection = {
  id: string
  kind: 'reflection'
  prompt: string
  explanation?: string
}

export type LessonQuizQuestion = LessonQuizQuestionSingle | LessonQuizQuestionMulti | LessonQuizQuestionReflection

export interface LessonQuizSettings {
  /** When true, the learner must score at or above `passingScore` before finishing the lesson. */
  quizRequired: boolean
  /** Percent 0–100. */
  passingScore: number
  allowRetake: boolean
}

export interface LessonQuizPayload {
  eyebrow?: string
  title?: string
  description?: string
  settings: LessonQuizSettings
  questions: LessonQuizQuestion[]
}

export function isQuizQuestionSingle(q: LessonQuizQuestion): q is LessonQuizQuestionSingle {
  return q.kind !== 'multi' && q.kind !== 'reflection'
}

export function isQuizQuestionMulti(q: LessonQuizQuestion): q is LessonQuizQuestionMulti {
  return q.kind === 'multi'
}

export function isQuizQuestionReflection(q: LessonQuizQuestion): q is LessonQuizQuestionReflection {
  return q.kind === 'reflection'
}
