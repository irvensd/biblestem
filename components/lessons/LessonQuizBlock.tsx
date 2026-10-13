'use client'

import Link from 'next/link'
import { useEffect, useId, useMemo, useRef, useSyncExternalStore } from 'react'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import {
  approvedQuizExplanation,
  initialQuizAnswers,
  isQuizAnswerCorrect,
  isQuizQuestionAnswered,
  passingChangeAfterQuizSubmit,
  quizAnswersMatchQuestions,
  quizMeetsPassingScore,
  quizReadyToScore,
  sanitizeCheckedFlags,
  scoreQuizPercent,
  visibleQuizQuestionIndex,
  type QuizAnswerSlot,
} from '@/lib/lesson-quiz-score'
import {
  isQuizQuestionMulti,
  isQuizQuestionReflection,
  isQuizQuestionSingle,
  type LessonQuizPayload,
  type LessonQuizQuestion,
} from '@/lib/lesson-quiz-types'
import {
  getLessonQuizStorageRaw,
  persistSubmittedQuizAttempt,
  readLessonQuizResultLocal,
  saveLessonQuizDraft,
  subscribeLessonQuizStore,
  type StoredLessonQuizAttempt,
} from '@/lib/lesson-quiz-storage'
import { REPORT_ISSUE_LINK_CLASSNAME, supportReportHref } from '@/lib/support/report-issue-href'

export type LessonQuizBlockProps = {
  quiz: LessonQuizPayload
  studySlug: string
  lessonSlug: string
  userId?: string
  onPassingChange: (passed: boolean) => void
}

const controlClass = `inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-blue-800 px-5 text-sm font-medium text-white hover:bg-blue-900 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none sm:w-auto ${READER_FOCUS_RING}`

export function LessonQuizBlock({ quiz, studySlug, lessonSlug, userId, onPassingChange }: LessonQuizBlockProps) {
  const { settings, questions } = quiz
  const raw = useSyncExternalStore(
    subscribeLessonQuizStore,
    () => getLessonQuizStorageRaw(studySlug, lessonSlug),
    () => null,
  )
  const stored = useMemo(() => {
    void raw
    return readLessonQuizResultLocal(studySlug, lessonSlug)
  }, [raw, studySlug, lessonSlug])
  const view = useMemo(() => quizViewFromStored(questions, stored), [questions, stored])
  const feedbackRef = useRef<HTMLParagraphElement>(null)
  const finishLock = useRef(false)
  const pendingFeedbackFocus = useRef(false)
  const progressId = useId()
  const question = view.phase === 'question' ? questions[view.index] : questions[0]
  const answer = view.phase === 'question' ? view.answers[view.index] : undefined
  const questionChecked = view.phase === 'question' && view.checked[view.index] === true
  const answered = question ? isQuizQuestionAnswered(question, answer) : false
  const progressLabel =
    view.phase === 'question' && questions.length ? `Question ${view.index + 1} of ${questions.length}` : 'Question 0 of 0'
  const unlock =
    view.phase === 'results'
      ? passingChangeAfterQuizSubmit(settings, view.scorePercent)
      : settings.quizRequired
        ? false
        : null

  useEffect(() => {
    if (unlock === null) return
    onPassingChange(unlock)
  }, [unlock, onPassingChange])

  useEffect(() => {
    if (!pendingFeedbackFocus.current || !questionChecked) return
    pendingFeedbackFocus.current = false
    feedbackRef.current?.focus()
  }, [questionChecked])

  function persistDraft(next: { answers: QuizAnswerSlot[]; checked: boolean[]; questionIndex: number; attempt: number }) {
    saveLessonQuizDraft(studySlug, lessonSlug, {
      attempt: next.attempt,
      questionIndex: next.questionIndex,
      answers: next.answers,
      checked: next.checked,
    })
  }

  function updateAnswer(nextAnswer: QuizAnswerSlot) {
    if (view.phase !== 'question' || questionChecked) return
    const nextAnswers = view.answers.map((item, itemIndex) => (itemIndex === view.index ? nextAnswer : item))
    persistDraft({ answers: nextAnswers, checked: view.checked, questionIndex: view.index, attempt: view.attempt })
  }

  function handleCheck() {
    if (view.phase !== 'question' || !question || questionChecked || !answered) return
    pendingFeedbackFocus.current = true
    const nextChecked = view.checked.map((item, itemIndex) => (itemIndex === view.index ? true : item))
    persistDraft({ answers: view.answers, checked: nextChecked, questionIndex: view.index, attempt: view.attempt })
  }

  function handleNext() {
    if (view.phase !== 'question' || !questionChecked || view.index >= questions.length - 1) return
    persistDraft({
      answers: view.answers,
      checked: view.checked,
      questionIndex: view.index + 1,
      attempt: view.attempt,
    })
  }

  function handleFinish() {
    if (finishLock.current || view.phase !== 'question') return
    if (!quizReadyToScore(questions, view.answers, view.checked)) return
    finishLock.current = true
    const percent = scoreQuizPercent(questions, view.answers)
    const passed = quizMeetsPassingScore(percent, settings.passingScore)
    void persistSubmittedQuizAttempt(
      studySlug,
      lessonSlug,
      {
        scorePercent: percent,
        passed,
        attempt: view.attempt,
        savedAt: new Date().toISOString(),
        status: 'submitted',
      },
      userId,
    )
  }

  function handleRetake() {
    if (view.phase !== 'results') return
    if (!settings.allowRetake || quizMeetsPassingScore(view.scorePercent, settings.passingScore)) return
    finishLock.current = false
    persistDraft({
      answers: initialQuizAnswers(questions),
      checked: questions.map(() => false),
      questionIndex: 0,
      attempt: view.attempt + 1,
    })
  }

  if (!question) return null

  if (view.phase === 'results') {
    const passed = quizMeetsPassingScore(view.scorePercent, settings.passingScore)
    return (
      <div className="rounded-xl border border-zinc-200/90 bg-stone-50/70 px-4 py-3 text-sm text-zinc-700 ring-1 ring-zinc-950/[0.03]">
        <p>
          Score: <span className="font-semibold tabular-nums text-zinc-900">{view.scorePercent}%</span>
          {passed ? (
            <span className="text-zinc-600"> (pass)</span>
          ) : (
            <span className="text-zinc-600"> (need {settings.passingScore}%)</span>
          )}
        </p>
        {settings.allowRetake && !passed ? (
          <button type="button" onClick={handleRetake} className={`mt-3 text-sm font-medium text-blue-800 hover:text-blue-900 ${READER_FOCUS_RING}`}>
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
    )
  }

  const explanation = questionChecked ? approvedQuizExplanation(question) : undefined
  const correct = questionChecked && isQuizAnswerCorrect(question, answer)
  const feedback = !questionChecked
    ? ''
    : isQuizQuestionReflection(question)
      ? 'Recorded.'
      : correct
        ? 'Correct.'
        : 'Not quite.'
  const index = view.index
  const onLast = index >= questions.length - 1

  return (
    <div className="space-y-6">
      <div>
        <p id={progressId} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {progressLabel}
        </p>
        <div
          className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-100"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={questions.length}
          aria-valuenow={index + 1}
          aria-valuetext={progressLabel}
          aria-labelledby={progressId}
        >
          <div
            className="h-full bg-blue-800 motion-reduce:transition-none"
            style={{ width: `${(index + 1) / questions.length * 100}%` }}
          />
        </div>
      </div>

      <QuestionCard
        question={question}
        answer={answer}
        checked={questionChecked}
        onAnswer={updateAnswer}
      />

      {questionChecked ? (
        <p
          ref={feedbackRef}
          tabIndex={-1}
          aria-live="polite"
          className={`rounded-xl border px-4 py-3 text-sm leading-relaxed outline-none ${READER_FOCUS_RING} ${
            correct ? 'border-emerald-700/35 bg-emerald-50/45 text-zinc-800' : 'border-red-300/70 bg-red-50/35 text-zinc-800'
          }`}
        >
          <span className="font-medium text-zinc-900">{feedback}</span>
          {explanation ? <span className="mt-2 block text-zinc-600">{explanation}</span> : null}
        </p>
      ) : null}

      <div className="flex flex-col gap-2 sm:flex-row">
        {!questionChecked ? (
          <button type="button" className={controlClass} disabled={!answered} onClick={handleCheck}>
            Check answer
          </button>
        ) : onLast ? (
          <button type="button" className={controlClass} onClick={handleFinish}>
            See results
          </button>
        ) : (
          <button type="button" className={controlClass} onClick={handleNext}>
            Next question
          </button>
        )}
      </div>
    </div>
  )
}

function quizViewFromStored(questions: LessonQuizQuestion[], stored: StoredLessonQuizAttempt | null) {
  if (stored?.status === 'submitted') {
    return { phase: 'results' as const, scorePercent: stored.scorePercent, attempt: stored.attempt }
  }
  if (stored?.status === 'in_progress' && stored.answers && quizAnswersMatchQuestions(questions, stored.answers)) {
    const answers = stored.answers
    const checked = sanitizeCheckedFlags(questions, answers, stored.checked)
    return {
      phase: 'question' as const,
      answers,
      checked,
      index: visibleQuizQuestionIndex(checked, stored.questionIndex),
      attempt: stored.attempt,
    }
  }
  return {
    phase: 'question' as const,
    answers: initialQuizAnswers(questions),
    checked: questions.map(() => false),
    index: 0,
    attempt: 1,
  }
}

function QuestionCard({
  question,
  answer,
  checked,
  onAnswer,
}: {
  question: LessonQuizQuestion
  answer: QuizAnswerSlot | undefined
  checked: boolean
  onAnswer: (next: QuizAnswerSlot) => void
}) {
  if (isQuizQuestionReflection(question)) {
    const text = answer?.t === 'reflection' ? answer.v : ''
    const inputId = `${question.id}-response`
    return (
      <div className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <label htmlFor={inputId} className="text-sm font-medium leading-snug text-zinc-900">
          {question.prompt}
        </label>
        <textarea
          id={inputId}
          value={text}
          disabled={checked}
          onChange={(event) => onAnswer({ t: 'reflection', v: event.target.value })}
          rows={5}
          className={`mt-3 w-full resize-y rounded-lg border border-zinc-300/90 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 ${READER_FOCUS_RING}`}
          placeholder="Write a few honest sentences…"
        />
      </div>
    )
  }

  if (isQuizQuestionMulti(question)) {
    const selected = answer?.t === 'multi' ? answer.v : []
    return (
      <fieldset className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <legend className="text-sm font-medium leading-snug text-zinc-900">{question.prompt}</legend>
        <p className="mt-1 text-xs text-zinc-500">Select all that apply.</p>
        <div className="mt-3 space-y-2">
          {question.options.map((option, optionIndex) => (
            <OptionRow
              key={`${question.id}-${optionIndex}`}
              kind="checkbox"
              name={question.id}
              option={option}
              optionIndex={optionIndex}
              selected={selected.includes(optionIndex)}
              checked={checked}
              correctOption={question.correctIndices.includes(optionIndex)}
              onToggle={() => {
                const next = selected.includes(optionIndex)
                  ? selected.filter((item) => item !== optionIndex)
                  : [...selected, optionIndex]
                onAnswer({ t: 'multi', v: next })
              }}
            />
          ))}
        </div>
      </fieldset>
    )
  }

  if (!isQuizQuestionSingle(question)) return null
  const picked = answer?.t === 'single' ? answer.v : null
  return (
    <fieldset className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <legend className="text-sm font-medium leading-snug text-zinc-900">{question.prompt}</legend>
      <div className="mt-3 space-y-2" role="radiogroup" aria-label={question.prompt}>
        {question.options.map((option, optionIndex) => (
          <OptionRow
            key={`${question.id}-${optionIndex}`}
            kind="radio"
            name={question.id}
            option={option}
            optionIndex={optionIndex}
            selected={picked === optionIndex}
            checked={checked}
            correctOption={optionIndex === question.correctIndex}
            onToggle={() => onAnswer({ t: 'single', v: optionIndex })}
          />
        ))}
      </div>
    </fieldset>
  )
}

function OptionRow({
  kind,
  name,
  option,
  optionIndex,
  selected,
  checked,
  correctOption,
  onToggle,
}: {
  kind: 'radio' | 'checkbox'
  name: string
  option: string
  optionIndex: number
  selected: boolean
  checked: boolean
  correctOption: boolean
  onToggle: () => void
}) {
  const showCorrect = checked && correctOption
  const showWrong = checked && selected && !correctOption
  const inputId = `${name}-${optionIndex}`
  return (
    <label
      htmlFor={inputId}
      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-sm motion-reduce:transition-none ${
        selected && !checked
          ? 'border-blue-800 bg-blue-50/90 text-zinc-900'
          : 'border-zinc-200/90 bg-stone-50/50 text-zinc-800 hover:border-zinc-300'
      } ${showCorrect ? 'border-emerald-700/35 bg-emerald-50/45' : ''} ${showWrong ? 'border-red-300/70 bg-red-50/35' : ''}`}
    >
      <input
        id={inputId}
        type={kind}
        name={kind === 'radio' ? `quiz-${name}` : undefined}
        className={`mt-1 shrink-0 accent-blue-800 ${READER_FOCUS_RING}`}
        checked={selected}
        disabled={checked}
        onChange={onToggle}
      />
      <span>
        {option}
        {showCorrect ? <span className="mt-1 block text-xs font-medium text-emerald-800">Correct answer</span> : null}
        {showWrong ? <span className="mt-1 block text-xs font-medium text-red-800">Your answer</span> : null}
      </span>
    </label>
  )
}
