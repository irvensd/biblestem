'use client'

import { useState } from 'react'
import {
  GREAT_CONTROVERSY_RESOLUTION_TIMELINE_DEFAULT_CAPTION,
  GREAT_CONTROVERSY_RESOLUTION_TIMELINE_STEPS,
  type GreatControversyResolutionTimelineStepData,
} from '@/lib/great-controversy-resolution-timeline-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface GreatControversyResolutionTimelineProps {
  steps?: readonly GreatControversyResolutionTimelineStepData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Great Controversy Resolution Timeline: rebellion to new creation. */
export function GreatControversyResolutionTimeline({
  steps,
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
  const headingId = labelledBy ?? 'great-controversy-resolution-timeline-heading'
  const lastIndex = list.length - 1

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

      <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
        {list.map((step, index) => {
          const emphasized = activeIndex === index || (activeIndex === null && presetFocus.has(index))
          const isLast = index === lastIndex
          return (
            <li key={`${step.label}-${index}`} className="relative flex flex-1 flex-col lg:min-w-0">
              {!isLast ? (
                <span
                  className="absolute -bottom-3 left-1/2 z-10 hidden h-3 w-px -translate-x-1/2 bg-indigo-200 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:block lg:h-px lg:w-3 lg:translate-x-full lg:-translate-y-1/2 dark:bg-indigo-800/50"
                  aria-hidden
                />
              ) : null}
              <button
                type="button"
                className={`flex h-full flex-col rounded-xl border px-4 py-4 text-left shadow-sm transition-[box-shadow,border-color] ${
                  emphasized && isLast
                    ? 'border-emerald-800/30 bg-emerald-50/40 ring-1 ring-emerald-800/10 dark:border-emerald-700/35 dark:bg-emerald-950/25'
                    : emphasized
                      ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                      : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-pressed={emphasized}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized && isLast
                      ? 'bg-emerald-800 text-white dark:bg-emerald-700'
                      : emphasized
                        ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeEmph
                        : WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeDefault
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.label}</span>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{step.description}</p>
                {emphasized ? (
                  <p
                    className={`mt-2 text-xs font-medium ${
                      isLast ? 'text-emerald-900/80 dark:text-emerald-200/80' : WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture
                    }`}
                  >
                    {step.reference}
                  </p>
                ) : null}
              </button>
            </li>
          )
        })}
      </ol>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
