'use client'

import { useCallback, useState } from 'react'
import {
  DECEPTION_PATTERN_BUILDER_DEFAULT_CAPTION,
  DECEPTION_PATTERN_BUILDER_STEPS,
  type DeceptionPatternBuilderStepData,
  type DeceptionPatternScenarioData,
} from '@/lib/deception-pattern-builder-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface DeceptionPatternBuilderProps {
  steps?: readonly DeceptionPatternBuilderStepData[]
  scenarios?: readonly DeceptionPatternScenarioData[]
  canonicalOrder?: readonly string[]
  completionSummary?: string
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

function orderMatchesCanonical(ordered: readonly DeceptionPatternBuilderStepData[], canonical: readonly string[]): boolean {
  if (ordered.length !== canonical.length) return false
  return ordered.every((step, i) => step.label === canonical[i])
}

function moveItem<T>(list: readonly T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) {
    return [...list]
  }
  const next = [...list]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item!)
  return next
}

/** Deception Pattern Builder: ordered steps with tap-to-reveal references and simple reorder controls. */
export function DeceptionPatternBuilder({
  steps: initialSteps,
  scenarios,
  canonicalOrder,
  completionSummary,
  highlightedIndices,
  title = 'Deception Pattern',
  subtitle,
  caption = DECEPTION_PATTERN_BUILDER_DEFAULT_CAPTION,
  labelledBy,
}: DeceptionPatternBuilderProps) {
  const defaults =
    initialSteps !== undefined && initialSteps.length > 0
      ? [...initialSteps]
      : [...DECEPTION_PATTERN_BUILDER_STEPS]
  const [ordered, setOrdered] = useState(defaults)
  const [sequenceChecked, setSequenceChecked] = useState(false)
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, string | null>>({})
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, ordered.length)
  const [openIndex, setOpenIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const headingId = labelledBy ?? 'deception-pattern-builder-heading'
  const sequenceCorrect =
    canonicalOrder && canonicalOrder.length > 0 ? orderMatchesCanonical(ordered, canonicalOrder) : false

  const moveUp = useCallback((index: number) => {
    if (index <= 0) return
    setOrdered((prev) => moveItem(prev, index, index - 1))
    setOpenIndex((prev) => (prev === index ? index - 1 : prev === index - 1 ? index : prev))
  }, [])

  const moveDown = useCallback((index: number) => {
    setOrdered((prev) => {
      if (index >= prev.length - 1) return prev
      return moveItem(prev, index, index + 1)
    })
    setOpenIndex((prev) => (prev === index ? index + 1 : prev === index + 1 ? index : prev))
  }, [])

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Ordered steps showing Satan's deception pattern in Eden."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="space-y-3">
        {ordered.map((step, index) => {
          const open = openIndex === index
          return (
            <li key={`${step.label}-${index}`}>
              <article
                className={`rounded-xl border px-4 py-3 shadow-sm ${
                  open ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
              >
                <div className="flex gap-2">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                      open ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeEmph : WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeDefault
                    }`}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                    >
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.label}</span>
                      <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{step.description}</p>
                      {open ? (
                        <p className={`mt-2 text-xs font-medium ${WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture}`}>
                          {step.reference}
                        </p>
                      ) : null}
                    </button>
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-zinc-200/90 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        onClick={() => moveUp(index)}
                        disabled={index === 0}
                        aria-label={`Move step ${index + 1} up`}
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-zinc-200/90 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        onClick={() => moveDown(index)}
                        disabled={index === ordered.length - 1}
                        aria-label={`Move step ${index + 1} down`}
                      >
                        Down
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ol>

      {canonicalOrder && canonicalOrder.length > 0 ? (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setSequenceChecked(true)}
            className="rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Check sequence
          </button>
          {sequenceChecked ? (
            <p
              className={`mt-2 text-sm font-medium ${
                sequenceCorrect ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-900 dark:text-amber-200'
              }`}
            >
              {sequenceCorrect
                ? completionSummary ?? 'Correct. This matches the pattern Scripture reveals in Eden.'
                : 'Not quite. Use the Up and Down controls until the steps follow Satan\u2019s pattern in Genesis 3.'}
            </p>
          ) : null}
        </div>
      ) : null}

      {scenarios && scenarios.length > 0 ? (
        <div className="mt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Modern examples</p>
          <ol className="mt-3 space-y-4">
            {scenarios.map((scenario, index) => {
              const chosen = scenarioAnswers[index] ?? null
              const correct = chosen === scenario.answer
              const answered = chosen !== null
              return (
                <li
                  key={index}
                  className="rounded-xl border border-zinc-200/90 bg-white px-4 py-3 shadow-sm ring-1 ring-zinc-950/[0.02] dark:border-zinc-700 dark:bg-zinc-900/40"
                >
                  <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                    <span className="font-medium text-zinc-500">Example {index + 1}. </span>
                    {scenario.prompt}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ordered.map((step) => (
                      <button
                        key={step.label}
                        type="button"
                        onClick={() => setScenarioAnswers((prev) => ({ ...prev, [index]: step.label }))}
                        className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                          chosen === step.label
                            ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                            : 'border-zinc-200/90 bg-zinc-50/80 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300'
                        }`}
                        aria-pressed={chosen === step.label}
                      >
                        {step.label}
                      </button>
                    ))}
                  </div>
                  {answered ? (
                    <p
                      className={`mt-2 text-xs font-medium ${
                        correct ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-900 dark:text-amber-200'
                      }`}
                    >
                      {correct ? `Yes. This reflects ${scenario.answer}.` : `Look again. This reflects ${scenario.answer}.`}
                    </p>
                  ) : null}
                </li>
              )
            })}
          </ol>
        </div>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
