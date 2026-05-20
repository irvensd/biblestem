'use client'

import {
  WAGES_OF_SIN_FLOW_DEFAULT_CAPTION,
  WAGES_OF_SIN_FLOW_SCRIPTURE_ANCHORS,
  WAGES_OF_SIN_FLOW_STAGES,
  type WagesOfSinFlowStageData,
} from '@/lib/wages-of-sin-flow-stages'
import {
  END_OF_EVIL_STUDY_ACCENT,
  clampEndOfEvilHighlightSet,
} from '@/lib/end-of-evil-study-visual-accent'

export interface WagesOfSinFlowProps {
  stages?: readonly WagesOfSinFlowStageData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  scriptureAnchors?: readonly string[]
  labelledBy?: string
}

/** The Wages of Sin — sin to death, perish, consumed, ashes. */
export function WagesOfSinFlow({
  stages,
  highlightedIndices,
  title = 'The Wages of Sin',
  subtitle,
  caption = WAGES_OF_SIN_FLOW_DEFAULT_CAPTION,
  scriptureAnchors = WAGES_OF_SIN_FLOW_SCRIPTURE_ANCHORS,
  labelledBy,
}: WagesOfSinFlowProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : WAGES_OF_SIN_FLOW_STAGES
  const focus = clampEndOfEvilHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'wages-of-sin-flow-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Flow showing the biblical result of sin as death and final destruction."
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
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          const isLast = index === list.length - 1
          return (
            <li key={`${stage.label}-${index}`} className="relative flex flex-1 flex-col lg:min-w-0">
              {!isLast ? (
                <span
                  className="absolute -bottom-3 left-1/2 z-10 hidden h-3 w-px -translate-x-1/2 bg-amber-200 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:block lg:h-px lg:w-3 lg:translate-x-full lg:-translate-y-1/2 dark:bg-amber-800/50"
                  aria-hidden
                />
              ) : null}
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? END_OF_EVIL_STUDY_ACCENT.emphArticle : END_OF_EVIL_STUDY_ACCENT.defaultArticle
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized ? END_OF_EVIL_STUDY_ACCENT.badgeEmph : END_OF_EVIL_STUDY_ACCENT.badgeDefault
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{stage.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{stage.description}</p>
              </article>
            </li>
          )
        })}
      </ol>

      {scriptureAnchors.length > 0 ? (
        <p className={`mt-3 text-xs font-medium ${END_OF_EVIL_STUDY_ACCENT.scripture}`}>
          {scriptureAnchors.join(' · ')}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
