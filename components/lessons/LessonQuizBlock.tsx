'use client'

import Link from 'next/link'
import { useCallback, useState, type Dispatch, type SetStateAction } from 'react'
import {
  type LessonQuizPayload,
  type LessonQuizQuestion,
  isQuizQuestionMulti,
  isQuizQuestionReflection,
  isQuizQuestionSingle,
} from '@/lib/lesson-quiz-types'
import { saveLessonQuizResultLocal, syncLessonQuizResultToAccount } from '@/lib/lesson-quiz-storage'
import { REPORT_ISSUE_LINK_CLASSNAME, supportReportHref } from '@/lib/support/report-issue-href'

export type LessonQuizBlockProps = {
  quiz: LessonQuizPayload
  studySlug: string
  lessonSlug: string
  userId?: string
  onPassingChange: (passed: boolean) => void
}

type AnswerSlot =
  | { t: 'single'; v: number | null }
  | { t: 'multi'; v: Set<number> }
  | { t: 'reflection'; v: string }

function initialAnswers(questions: LessonQuizQuestion[]): AnswerSlot[] {
  return questions.map((q) => {
    if (isQuizQuestionReflection(q)) return { t: 'reflection', v: '' }
    if (isQuizQuestionMulti(q)) return { t: 'multi', v: new Set<number>() }
    return { t: 'single', v: null }
  })
}

function isAnswered(q: LessonQuizQuestion, a: AnswerSlot): boolean {
  if (isQuizQuestionReflection(q)) return a.t === 'reflection' && a.v.trim().length > 0
  if (isQuizQuestionMulti(q)) {
    if (a.t !== 'multi') return false
    const uniq = new Set(q.correctIndices)
    return a.v.size === uniq.size && uniq.size > 0
  }
  return a.t === 'single' && a.v !== null
}

function isCorrect(q: LessonQuizQuestion, a: AnswerSlot): boolean {
  if (isQuizQuestionReflection(q)) return a.t === 'reflection' && a.v.trim().length > 0
  if (isQuizQuestionMulti(q)) {
    if (a.t !== 'multi') return false
    const want = [...new Set(q.correctIndices)].sort((x, y) => x - y).join(',')
    const got = [...a.v].sort((x, y) => x - y).join(',')
    return want === got
  }
  if (!isQuizQuestionSingle(q) || a.t !== 'single') return false
  return a.v !== null && a.v === q.correctIndex
}

export function LessonQuizBlock({ quiz, studySlug, lessonSlug, userId, onPassingChange }: LessonQuizBlockProps) {
  const { settings, questions } = quiz
  const [answers, setAnswers] = useState<AnswerSlot[]>(() => initialAnswers(questions))
  const [submitted, setSubmitted] = useState(false)
  const [attempt, setAttempt] = useState(1)

  const computePercent = useCallback(() => {
    let correct = 0
    for (let i = 0; i < questions.length; i++) {
      if (isCorrect(questions[i]!, answers[i]!)) correct += 1
    }
    return questions.length ? Math.round((correct / questions.length) * 100) : 0
  }, [questions, answers])

  const handleSubmit = () => {
    const pct = computePercent()
    const passed = pct >= settings.passingScore
    setSubmitted(true)
    const payload = {
      scorePercent: pct,
      passed,
      attempt,
      savedAt: new Date().toISOString(),
    }
    saveLessonQuizResultLocal(studySlug, lessonSlug, payload)
    void syncLessonQuizResultToAccount(studySlug, lessonSlug, payload, userId)
    if (settings.quizRequired) {
      onPassingChange(passed)
    } else {
      onPassingChange(true)
    }
  }

  const handleRetake = () => {
    setAnswers(initialAnswers(questions))
    setSubmitted(false)
    setAttempt((v) => v + 1)
    if (settings.quizRequired) onPassingChange(false)
  }

  const allAnswered = questions.every((q, i) => isAnswered(q, answers[i]!))

  return (
    <div className="space-y-6">
      {questions.map((q, qi) => (
        <QuizQuestionBlock key={q.id} q={q} qi={qi} answers={answers} setAnswers={setAnswers} submitted={submitted} />
      ))}

      {!submitted ? (
        <button
          type="button"
          disabled={!allAnswered}
          onClick={handleSubmit}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-blue-800 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-900 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
        >
          Check answers
        </button>
      ) : (
        <div className="rounded-xl border border-zinc-200/90 bg-stone-50/70 px-4 py-3 text-sm text-zinc-700 ring-1 ring-zinc-950/[0.03]">
          <p>
            Score:{' '}
            <span className="font-semibold tabular-nums text-zinc-900">{computePercent()}%</span>
            {computePercent() >= settings.passingScore ? (
              <span className="text-zinc-600"> (pass)</span>
            ) : (
              <span className="text-zinc-600">
                {' '}
                (need {settings.passingScore}%)
              </span>
            )}
          </p>
          {settings.allowRetake && computePercent() < settings.passingScore ? (
            <button
              type="button"
              onClick={handleRetake}
              className="mt-3 text-sm font-medium text-blue-800 hover:text-blue-900"
            >
              Retake quiz
            </button>
          ) : null}
          <p className="mt-4 border-t border-zinc-200/80 pt-4">
            <Link
              href={supportReportHref({
                type: 'quiz-issue',
                study: studySlug,
                lesson: lessonSlug,
                step: 'quiz',
              })}
              className={REPORT_ISSUE_LINK_CLASSNAME}
            >
              Report quiz issue
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}

function QuizQuestionBlock({
  q,
  qi,
  answers,
  setAnswers,
  submitted,
}: {
  q: LessonQuizQuestion
  qi: number
  answers: AnswerSlot[]
  setAnswers: Dispatch<SetStateAction<AnswerSlot[]>>
  submitted: boolean
}) {
  if (isQuizQuestionReflection(q)) {
    const row = answers[qi]
    const text = row?.t === 'reflection' ? row.v : ''
    return (
      <fieldset className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <legend className="sr-only">Reflection</legend>
        <p className="text-sm font-medium leading-snug text-zinc-900">{q.prompt}</p>
        <textarea
          value={text}
          disabled={submitted}
          onChange={(e) =>
            setAnswers((prev) => {
              const next = [...prev]
              next[qi] = { t: 'reflection', v: e.target.value }
              return next
            })
          }
          rows={5}
          className="mt-3 w-full resize-y rounded-lg border border-zinc-300/90 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-blue-200/80 placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-2 focus:ring-offset-0"
          placeholder="Write a few honest sentences…"
        />
        {submitted && q.explanation ? (
          <p className="mt-3 border-t border-zinc-100 pt-3 text-sm leading-relaxed text-zinc-600">{q.explanation}</p>
        ) : null}
      </fieldset>
    )
  }

  if (isQuizQuestionMulti(q)) {
    const row = answers[qi]
    const sel = row?.t === 'multi' ? row.v : new Set<number>()
    const want = new Set(q.correctIndices)
    return (
      <fieldset className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <legend className="sr-only">Question {qi + 1}</legend>
        <p className="text-sm font-medium leading-snug text-zinc-900">{q.prompt}</p>
        <p className="mt-1 text-xs text-zinc-500">Select all that apply.</p>
        <div className="mt-3 space-y-2">
          {q.options.map((opt, oi) => {
            const on = sel.has(oi)
            const should = want.has(oi)
            const wrong = submitted && on && !should
            const showCorrect = submitted && should
            return (
              <label
                key={oi}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                  on && !submitted
                    ? 'border-blue-800 bg-blue-50/90 text-zinc-900'
                    : 'border-zinc-200/90 bg-stone-50/50 text-zinc-800 hover:border-zinc-300'
                } ${showCorrect ? 'border-emerald-700/35 bg-emerald-50/45' : ''} ${wrong ? 'border-red-300/70 bg-red-50/35' : ''}`}
              >
                <input
                  type="checkbox"
                  className="mt-1 shrink-0 accent-blue-800"
                  checked={on}
                  disabled={submitted}
                  onChange={() =>
                    setAnswers((prev) => {
                      const next = [...prev]
                      const cur = prev[qi]?.t === 'multi' ? new Set(prev[qi]!.v) : new Set<number>()
                      if (cur.has(oi)) cur.delete(oi)
                      else cur.add(oi)
                      next[qi] = { t: 'multi', v: cur }
                      return next
                    })
                  }
                />
                <span>{opt}</span>
              </label>
            )
          })}
        </div>
      </fieldset>
    )
  }

  const row = answers[qi]
  const picked = row?.t === 'single' ? row.v : null
  if (!isQuizQuestionSingle(q)) return null
  const sq = q
  return (
    <fieldset className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <legend className="sr-only">Question {qi + 1}</legend>
      <p className="text-sm font-medium leading-snug text-zinc-900">{sq.prompt}</p>
      <div className="mt-3 space-y-2">
        {sq.options.map((opt, oi) => {
          const sel = picked === oi
          const wrong = submitted && picked === oi && oi !== sq.correctIndex
          const showCorrect = submitted && oi === sq.correctIndex
          return (
            <label
              key={oi}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                sel && !submitted
                  ? 'border-blue-800 bg-blue-50/90 text-zinc-900'
                  : 'border-zinc-200/90 bg-stone-50/50 text-zinc-800 hover:border-zinc-300'
              } ${showCorrect ? 'border-emerald-700/35 bg-emerald-50/45' : ''} ${wrong ? 'border-red-300/70 bg-red-50/35' : ''}`}
            >
              <input
                type="radio"
                name={`quiz-q-${sq.id}`}
                className="mt-1 shrink-0 accent-blue-800"
                checked={sel}
                disabled={submitted}
                onChange={() =>
                  setAnswers((prev) => {
                    const next = [...prev]
                    next[qi] = { t: 'single', v: oi }
                    return next
                  })
                }
              />
              <span>{opt}</span>
            </label>
          )
        })}
      </div>
      {submitted && sq.explanation ? (
        <p className="mt-3 border-t border-zinc-100 pt-3 text-sm leading-relaxed text-zinc-600">{sq.explanation}</p>
      ) : null}
    </fieldset>
  )
}
