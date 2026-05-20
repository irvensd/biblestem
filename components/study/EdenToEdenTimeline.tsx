'use client'

import {
  EDEN_TO_EDEN_TIMELINE_DEFAULT_CAPTION,
  EDEN_TO_EDEN_TIMELINE_STEPS,
  type EdenToEdenTimelineStepData,
} from '@/lib/eden-to-eden-timeline-stages'
import {
  WORLD_LOVE_RESTORES_STUDY_ACCENT,
  clampWorldLoveRestoresHighlightSet,
} from '@/lib/the-world-love-restores-study-visual-accent'

export interface EdenToEdenTimelineProps {
  steps?: readonly EdenToEdenTimelineStepData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** From Eden to Eden — biblical story from creation to restoration. */
export function EdenToEdenTimeline({
  steps,
  highlightedIndices,
  title = 'From Eden to Eden',
  subtitle,
  caption = EDEN_TO_EDEN_TIMELINE_DEFAULT_CAPTION,
  labelledBy,
}: EdenToEdenTimelineProps) {
  const list = steps !== undefined && steps.length > 0 ? steps : EDEN_TO_EDEN_TIMELINE_STEPS
  const focus = clampWorldLoveRestoresHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'eden-to-eden-timeline-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Timeline showing the biblical story from Eden lost to Eden restored."
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
          const emphasized = focus.has(index)
          const isRestored = index === list.length - 1
          const isLast = index === list.length - 1
          return (
            <li key={`${step.label}-${index}`} className="relative flex flex-1 flex-col lg:min-w-0">
              {!isLast ? (
                <span
                  className="absolute -bottom-3 left-1/2 z-10 hidden h-3 w-px -translate-x-1/2 bg-rose-200 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:block lg:h-px lg:w-3 lg:translate-x-full lg:-translate-y-1/2 dark:bg-rose-800/50"
                  aria-hidden
                />
              ) : null}
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized && isRestored
                    ? WORLD_LOVE_RESTORES_STUDY_ACCENT.gardenArticle
                    : emphasized
                      ? WORLD_LOVE_RESTORES_STUDY_ACCENT.emphArticle
                      : WORLD_LOVE_RESTORES_STUDY_ACCENT.defaultArticle
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized && isRestored
                      ? WORLD_LOVE_RESTORES_STUDY_ACCENT.badgeGarden
                      : emphasized
                        ? WORLD_LOVE_RESTORES_STUDY_ACCENT.badgeEmph
                        : WORLD_LOVE_RESTORES_STUDY_ACCENT.badgeDefault
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{step.description}</p>
                <p className={`mt-2 text-xs font-medium ${WORLD_LOVE_RESTORES_STUDY_ACCENT.scripture}`}>{step.reference}</p>
              </article>
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
