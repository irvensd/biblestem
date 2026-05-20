'use client'

import {
  RESTORED_BODY_HOPE_DEFAULT_CAPTION,
  RESTORED_BODY_HOPE_STAGES,
  type RestoredBodyHopeStageData,
} from '@/lib/restored-body-hope-stages'
import {
  WORLD_LOVE_RESTORES_STUDY_ACCENT,
  clampWorldLoveRestoresHighlightSet,
} from '@/lib/the-world-love-restores-study-visual-accent'

export interface RestoredBodyHopeProps {
  stages?: readonly RestoredBodyHopeStageData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Bodies Made Whole — embodied resurrection and restoration. */
export function RestoredBodyHope({
  stages,
  highlightedIndices,
  title = 'Bodies Made Whole',
  subtitle,
  caption = RESTORED_BODY_HOPE_DEFAULT_CAPTION,
  labelledBy,
}: RestoredBodyHopeProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : RESTORED_BODY_HOPE_STAGES
  const focus = clampWorldLoveRestoresHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'restored-body-hope-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Flow explaining the biblical hope of bodily restoration."
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
                  className="absolute -bottom-3 left-1/2 z-10 hidden h-3 w-px -translate-x-1/2 bg-rose-200 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:block lg:h-px lg:w-3 lg:translate-x-full lg:-translate-y-1/2 dark:bg-rose-800/50"
                  aria-hidden
                />
              ) : null}
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? WORLD_LOVE_RESTORES_STUDY_ACCENT.emphArticle : WORLD_LOVE_RESTORES_STUDY_ACCENT.defaultArticle
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized ? WORLD_LOVE_RESTORES_STUDY_ACCENT.badgeEmph : WORLD_LOVE_RESTORES_STUDY_ACCENT.badgeDefault
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{stage.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{stage.description}</p>
                <p className={`mt-2 text-xs font-medium ${WORLD_LOVE_RESTORES_STUDY_ACCENT.scripture}`}>{stage.reference}</p>
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
