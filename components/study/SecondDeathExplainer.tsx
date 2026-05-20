'use client'

import {
  SECOND_DEATH_EXPLAINER_DEFAULT_CAPTION,
  SECOND_DEATH_EXPLAINER_SCRIPTURE_ANCHORS,
  SECOND_DEATH_EXPLAINER_STAGES,
  type SecondDeathExplainerStageData,
} from '@/lib/second-death-explainer-stages'
import {
  END_OF_EVIL_STUDY_ACCENT,
  clampEndOfEvilHighlightSet,
} from '@/lib/end-of-evil-study-visual-accent'

export interface SecondDeathExplainerProps {
  stages?: readonly SecondDeathExplainerStageData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  scriptureAnchors?: readonly string[]
  labelledBy?: string
}

/** The Second Death — lake of fire and final end of evil. */
export function SecondDeathExplainer({
  stages,
  highlightedIndices,
  title = 'The Second Death',
  subtitle,
  caption = SECOND_DEATH_EXPLAINER_DEFAULT_CAPTION,
  scriptureAnchors = SECOND_DEATH_EXPLAINER_SCRIPTURE_ANCHORS,
  labelledBy,
}: SecondDeathExplainerProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : SECOND_DEATH_EXPLAINER_STAGES
  const focus = clampEndOfEvilHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'second-death-explainer-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Flow explaining the second death and the final end of evil."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-stretch lg:gap-2">
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          const isLast = index === list.length - 1
          return (
            <li
              key={`${stage.label}-${index}`}
              className={`relative flex flex-col lg:min-w-0 ${isLast ? 'lg:flex-[1.2]' : 'lg:flex-1'}`}
            >
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
