'use client'

import { useCallback, useState } from 'react'
import {
  FINAL_ANSWER_TO_EVIL_COMPLETE_SUMMARY,
  GREAT_CONTROVERSY_RESOLUTION_TIMELINE_DEFAULT_CAPTION,
  GREAT_CONTROVERSY_RESOLUTION_TIMELINE_STEPS,
  type GreatControversyReflectionCardData,
  type GreatControversyResolutionTimelineStepData,
} from '@/lib/great-controversy-resolution-timeline-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface GreatControversyResolutionTimelineProps {
  steps?: readonly GreatControversyResolutionTimelineStepData[]
  reflectionCards?: readonly GreatControversyReflectionCardData[]
  completionSummary?: string
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

const GOD_REVEALS_PROMPT = 'What does this reveal about God?'

/** Great Controversy Resolution Timeline: rebellion through restoration to new creation. */
export function GreatControversyResolutionTimeline({
  steps,
  reflectionCards,
  completionSummary,
  highlightedIndices,
  title = 'Great Controversy Resolution',
  subtitle,
  caption = GREAT_CONTROVERSY_RESOLUTION_TIMELINE_DEFAULT_CAPTION,
  labelledBy,
}: GreatControversyResolutionTimelineProps) {
  const list =
    steps !== undefined && steps.length > 0 ? steps : GREAT_CONTROVERSY_RESOLUTION_TIMELINE_STEPS
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const [visited, setVisited] = useState<Set<number>>(() => new Set(presetFocus))
  const headingId = labelledBy ?? 'great-controversy-resolution-timeline-heading'
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
      aria-label="Timeline from rebellion through Christ's victory to the new creation."
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
                      ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                      : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
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
                          ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeEmph
                          : explored
                            ? 'border border-indigo-200/90 bg-indigo-50/80 text-indigo-900 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-100'
                            : WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeDefault
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
                            isLast
                              ? 'text-emerald-900/80 dark:text-emerald-200/80'
                              : WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture
                          }`}
                        >
                          {step.reference}
                        </p>
                        {step.godReveals ? (
                          <div className="mt-3 rounded-lg border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-700 dark:bg-zinc-900/50">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                              {GOD_REVEALS_PROMPT}
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                              {step.godReveals}
                            </p>
                          </div>
                        ) : null}
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
          {completionSummary ?? FINAL_ANSWER_TO_EVIL_COMPLETE_SUMMARY}
        </p>
      ) : null}

      {reflectionCards && reflectionCards.length > 0 ? (
        <div className="mt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Reflection</p>
          <ul className="mt-3 space-y-3">
            {reflectionCards.map((card, index) => (
              <li
                key={index}
                className="rounded-xl border border-zinc-200/90 bg-white px-4 py-3 shadow-sm ring-1 ring-zinc-950/[0.02] dark:border-zinc-700 dark:bg-zinc-900/40"
              >
                <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">{card.prompt}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
