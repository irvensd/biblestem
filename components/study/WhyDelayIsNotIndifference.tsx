'use client'

import { useCallback, useState } from 'react'
import {
  WHY_DELAY_IS_NOT_INDIFFERENCE_COMPLETE_SUMMARY,
  WHY_DELAY_IS_NOT_INDIFFERENCE_DEFAULT_CAPTION,
  WHY_DELAY_IS_NOT_INDIFFERENCE_STAGES,
  WHY_DELAY_REFLECTION_QUESTIONS,
  type WhyDelayIsNotIndifferenceStageData,
} from '@/lib/why-delay-is-not-indifference-stages'
import {
  SUFFERING_STUDY_ACCENT,
  clampSufferingStudyHighlightSet,
} from '@/lib/suffering-study-visual-accent'

export interface WhyDelayIsNotIndifferenceProps {
  steps?: readonly WhyDelayIsNotIndifferenceStageData[]
  reflectionQuestions?: readonly string[]
  completionSummary?: string
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Why Delay Is Not Indifference: five-stage reasoning path with reflection prompts. */
export function WhyDelayIsNotIndifference({
  steps,
  reflectionQuestions,
  completionSummary,
  highlightedIndices,
  title = 'Why Delay Is Not Indifference',
  subtitle,
  caption = WHY_DELAY_IS_NOT_INDIFFERENCE_DEFAULT_CAPTION,
  labelledBy,
}: WhyDelayIsNotIndifferenceProps) {
  const list =
    steps !== undefined && steps.length > 0 ? steps : WHY_DELAY_IS_NOT_INDIFFERENCE_STAGES
  const prompts =
    reflectionQuestions !== undefined && reflectionQuestions.length > 0
      ? reflectionQuestions
      : WHY_DELAY_REFLECTION_QUESTIONS
  const presetFocus = clampSufferingStudyHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const [visited, setVisited] = useState<Set<number>>(() => new Set(presetFocus))
  const headingId = labelledBy ?? 'why-delay-is-not-indifference-heading'
  const lastIndex = list.length - 1
  const allVisited = visited.size >= list.length

  const openStage = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
    setVisited((prev) => {
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }, [])

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Reasoning path showing why God's delay is not indifference."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="flex flex-col gap-3">
        {list.map((step, index) => {
          const emphasized = activeIndex === index || (activeIndex === null && presetFocus.has(index))
          const isLast = index === lastIndex
          const explored = visited.has(index)
          return (
            <li key={`${step.label}-${index}`}>
              <button
                type="button"
                className={`flex w-full flex-col rounded-xl border px-4 py-4 text-left shadow-sm transition-[box-shadow,border-color] ${
                  emphasized && isLast
                    ? 'border-emerald-800/30 bg-emerald-50/40 ring-1 ring-emerald-800/10 dark:border-emerald-700/35 dark:bg-emerald-950/25'
                    : emphasized
                      ? SUFFERING_STUDY_ACCENT.emphArticle
                      : explored
                        ? 'border-emerald-200/90 bg-emerald-50/30 dark:border-emerald-800/40 dark:bg-emerald-950/20'
                        : SUFFERING_STUDY_ACCENT.defaultArticle
                }`}
                onClick={() => openStage(index)}
                aria-pressed={emphasized}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                      emphasized && isLast
                        ? 'bg-emerald-800 text-white dark:bg-emerald-700'
                        : emphasized
                          ? SUFFERING_STUDY_ACCENT.badgeEmph
                          : explored
                            ? SUFFERING_STUDY_ACCENT.badgeDefault
                            : SUFFERING_STUDY_ACCENT.badgeDefault
                    }`}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.label}</span>
                    <p className="mt-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{step.description}</p>
                    {emphasized ? (
                      <>
                        <p className={`mt-2 text-xs font-medium ${SUFFERING_STUDY_ACCENT.scripture}`}>
                          {step.reference}
                        </p>
                        <ul className="mt-3 space-y-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-700 dark:bg-zinc-900/50">
                          {prompts.map((q, qi) => (
                            <li key={qi} className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                              <span className="font-medium text-zinc-500">{qi + 1}. </span>
                              {q}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </div>
              </button>
            </li>
          )
        })}
      </ol>

      {allVisited ? (
        <p className="mt-4 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          {completionSummary ?? WHY_DELAY_IS_NOT_INDIFFERENCE_COMPLETE_SUMMARY}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
