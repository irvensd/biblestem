'use client'

import { useCallback, useState } from 'react'
import {
  REFINERS_FIRE_COMPLETE_SUMMARY,
  REFINERS_FIRE_DEFAULT_CAPTION,
  REFINERS_FIRE_REFLECTION_QUESTIONS,
  REFINERS_FIRE_STAGES,
  type RefinersFireStageData,
} from '@/lib/refiners-fire-stages'
import {
  SUFFERING_STUDY_ACCENT,
  clampSufferingStudyHighlightSet,
} from '@/lib/suffering-study-visual-accent'

export interface RefinersFireProps {
  stages?: readonly RefinersFireStageData[]
  reflectionQuestions?: readonly string[]
  completionSummary?: string
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** The Refiner's Fire: five-stage process showing how God refines through trials. */
export function RefinersFire({
  stages,
  reflectionQuestions,
  completionSummary,
  highlightedIndices,
  title = "The Refiner's Fire",
  subtitle,
  caption = REFINERS_FIRE_DEFAULT_CAPTION,
  labelledBy,
}: RefinersFireProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : REFINERS_FIRE_STAGES
  const prompts =
    reflectionQuestions !== undefined && reflectionQuestions.length > 0
      ? reflectionQuestions
      : REFINERS_FIRE_REFLECTION_QUESTIONS
  const presetFocus = clampSufferingStudyHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const [visited, setVisited] = useState<Set<number>>(() => new Set(presetFocus))
  const headingId = labelledBy ?? 'refiners-fire-heading'
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
      aria-label="Process visual showing how God refines faith through trials."
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
                    ? 'border-amber-800/30 bg-amber-50/40 ring-1 ring-amber-800/10 dark:border-amber-700/35 dark:bg-amber-950/25'
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
                        ? 'bg-amber-800 text-white dark:bg-amber-700'
                        : emphasized
                          ? SUFFERING_STUDY_ACCENT.badgeEmph
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
                        <p
                          className={`mt-2 text-xs font-medium ${
                            isLast ? 'text-amber-900/80 dark:text-amber-200/80' : SUFFERING_STUDY_ACCENT.scripture
                          }`}
                        >
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
          {completionSummary ?? REFINERS_FIRE_COMPLETE_SUMMARY}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
