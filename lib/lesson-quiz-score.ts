import {
  isQuizQuestionMulti,
  isQuizQuestionReflection,
  isQuizQuestionSingle,
  type LessonQuizQuestion,
  type LessonQuizSettings,
} from '@/lib/lesson-quiz-types'

/** Answer stored for one question. Multi selections are a list so they can be saved. */
export type QuizAnswerSlot =
  | { t: 'single'; v: number | null }
  | { t: 'multi'; v: number[] }
  | { t: 'reflection'; v: string }

export function initialQuizAnswers(questions: LessonQuizQuestion[]): QuizAnswerSlot[] {
  return questions.map((question) => {
    if (isQuizQuestionReflection(question)) return { t: 'reflection', v: '' }
    if (isQuizQuestionMulti(question)) return { t: 'multi', v: [] }
    return { t: 'single', v: null }
  })
}

/** Whether the learner has entered something that can be checked. This is not a score. */
export function isQuizQuestionAnswered(question: LessonQuizQuestion, answer: QuizAnswerSlot | undefined): boolean {
  if (!answer) return false
  if (isQuizQuestionReflection(question)) return answer.t === 'reflection' && answer.v.trim().length > 0
  if (isQuizQuestionMulti(question)) return answer.t === 'multi' && answer.v.length > 0
  return answer.t === 'single' && answer.v !== null
}

export function isQuizAnswerCorrect(question: LessonQuizQuestion, answer: QuizAnswerSlot | undefined): boolean {
  if (!answer) return false
  if (isQuizQuestionReflection(question)) return answer.t === 'reflection' && answer.v.trim().length > 0
  if (isQuizQuestionMulti(question)) {
    if (answer.t !== 'multi') return false
    const want = [...new Set(question.correctIndices)].sort((a, b) => a - b).join(',')
    const got = [...new Set(answer.v)].sort((a, b) => a - b).join(',')
    return want.length > 0 && want === got
  }
  if (!isQuizQuestionSingle(question) || answer.t !== 'single') return false
  return answer.v !== null && answer.v === question.correctIndex
}

/** Same rounding the quiz used when every question was scored together. */
export function scoreQuizPercent(questions: LessonQuizQuestion[], answers: QuizAnswerSlot[]): number {
  if (questions.length === 0) return 0
  let correct = 0
  for (let i = 0; i < questions.length; i++) {
    if (isQuizAnswerCorrect(questions[i], answers[i])) correct += 1
  }
  return Math.round((correct / questions.length) * 100)
}

export function quizMeetsPassingScore(scorePercent: number, passingScore: number): boolean {
  return scorePercent >= passingScore
}

/**
 * Value passed to the lesson reader after the whole quiz is submitted.
 * Optional quizzes unlock the lesson on submit. Required quizzes unlock only at the passing score.
 */
export function passingChangeAfterQuizSubmit(settings: LessonQuizSettings, scorePercent: number): boolean {
  if (!settings.quizRequired) return true
  return quizMeetsPassingScore(scorePercent, settings.passingScore)
}

/** Mirrors the lesson reader's Continue gate. Required quizzes stay blocked until a passing submit. */
export function quizBlocksLessonContinue(quizRequired: boolean, quizPassed: boolean): boolean {
  return quizRequired && !quizPassed
}

export function approvedQuizExplanation(question: LessonQuizQuestion): string | undefined {
  if (isQuizQuestionMulti(question)) return undefined
  const text = question.explanation?.trim()
  return text ? text : undefined
}

export function quizAnswersMatchQuestions(questions: LessonQuizQuestion[], answers: QuizAnswerSlot[] | undefined): boolean {
  if (!answers || answers.length !== questions.length) return false
  return questions.every((question, index) => {
    const answer = answers[index]
    if (!answer) return false
    if (isQuizQuestionReflection(question)) return answer.t === 'reflection' && typeof answer.v === 'string'
    if (isQuizQuestionMulti(question)) {
      return (
        answer.t === 'multi' &&
        Array.isArray(answer.v) &&
        answer.v.every((option) => Number.isInteger(option) && option >= 0 && option < question.options.length)
      )
    }
    return answer.t === 'single' && (answer.v === null || (answer.v >= 0 && answer.v < question.options.length))
  })
}

/** Drop a checked flag when that question has no answer, so a saved draft cannot reveal an empty question. */
export function sanitizeCheckedFlags(
  questions: LessonQuizQuestion[],
  answers: QuizAnswerSlot[],
  checked: boolean[] | undefined,
): boolean[] {
  return questions.map((question, index) => {
    const flagged = checked?.[index] === true
    return flagged && isQuizQuestionAnswered(question, answers[index])
  })
}

/** First question that still needs Check answer. Skipping ahead is not allowed. */
export function firstUncheckedQuestion(checked: boolean[]): number {
  const index = checked.findIndex((done) => !done)
  return index === -1 ? Math.max(0, checked.length - 1) : index
}

/** Keeps the learner on the question they just checked, and blocks a saved index from skipping ahead. */
export function visibleQuizQuestionIndex(checked: boolean[], requested: number | undefined): number {
  if (checked.length === 0) return 0
  const requestedIndex = Number.isFinite(requested) ? Math.trunc(requested ?? 0) : 0
  const bounded = Math.min(Math.max(0, requestedIndex), checked.length - 1)
  const earlierOpen = checked.findIndex((done, index) => index < bounded && !done)
  return earlierOpen === -1 ? bounded : earlierOpen
}

export function quizReadyToScore(
  questions: LessonQuizQuestion[],
  answers: QuizAnswerSlot[],
  checked: boolean[],
): boolean {
  return questions.every(
    (question, index) => checked[index] === true && isQuizQuestionAnswered(question, answers[index]),
  )
}
