'use client'

import { useState } from 'react'
import {
  HEAVEN_TO_REBELLION_TIMELINE_DEFAULT_CAPTION,
  HEAVEN_TO_REBELLION_TIMELINE_STAGES,
  type HeavenToRebellionTimelineStageData,
} from '@/lib/heaven-to-rebellion-timeline-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface HeavenToRebellionTimelineProps {
  stages?: readonly HeavenToRebellionTimelineStageData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Heaven to Rebellion: tappable Scripture stages from creation to Lucifer's fall. */
export function HeavenToRebellionTimeline({
  stages,
  highlightedIndices,
  title = 'Heaven to Rebellion',
  subtitle,
  caption = HEAVEN_TO_REBELLION_TIMELINE_DEFAULT_CAPTION,
  labelledBy,
}: HeavenToRebellionTimelineProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : HEAVEN_TO_REBELLION_TIMELINE_STAGES
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const headingId = labelledBy ?? 'heaven-to-rebellion-timeline-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Timeline from heaven before rebellion to sin found in Lucifer."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="relative space-y-3">
        {list.map((stage, index) => {
          const emphasized = activeIndex === index || (activeIndex === null && presetFocus.has(index))
          const isLast = index === list.length - 1
          return (
            <li key={`${stage.label}-${index}`} className="relative">
              {!isLast ? (
                <span
                  className="absolute left-[1.125rem] top-[2.75rem] bottom-[-0.75rem] w-px bg-indigo-200 dark:bg-indigo-800/50"
                  aria-hidden
                />
              ) : null}
              <button
                type="button"
                className={`relative w-full rounded-xl border px-4 py-4 text-left shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                    : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-expanded={emphasized}
                aria-controls={emphasized ? `heaven-rebellion-ref-${index}` : undefined}
              >
                <div className="flex gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold tabular-nums ${
                      emphasized
                        ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeEmph
                        : WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeDefault
                    }`}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{stage.label}</span>
                    <p className="mt-1.5 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{stage.tagline}</p>
                    {emphasized ? (
                      <p
                        id={`heaven-rebellion-ref-${index}`}
                        className={`mt-2 text-xs font-medium ${WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture}`}
                      >
                        {stage.reference}
                      </p>
                    ) : null}
                  </div>
                </div>
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
