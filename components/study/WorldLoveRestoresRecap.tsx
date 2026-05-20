'use client'

import {
  WORLD_LOVE_RESTORES_RECAP_DEFAULT_CAPTION,
  WORLD_LOVE_RESTORES_RECAP_SECTIONS,
  type WorldLoveRestoresRecapSectionData,
} from '@/lib/world-love-restores-recap-stages'
import {
  WORLD_LOVE_RESTORES_STUDY_ACCENT,
  clampWorldLoveRestoresHighlightSet,
} from '@/lib/the-world-love-restores-study-visual-accent'

export interface WorldLoveRestoresRecapProps {
  sections?: readonly WorldLoveRestoresRecapSectionData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** The World Love Restores — six-section study recap. */
export function WorldLoveRestoresRecap({
  sections,
  highlightedIndices,
  title = 'The World Love Restores',
  subtitle,
  caption = WORLD_LOVE_RESTORES_RECAP_DEFAULT_CAPTION,
  labelledBy,
}: WorldLoveRestoresRecapProps) {
  const list = sections !== undefined && sections.length > 0 ? sections : WORLD_LOVE_RESTORES_RECAP_SECTIONS
  const focus = clampWorldLoveRestoresHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'world-love-restores-recap-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Summary of the BibleStem study The World Love Restores."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((section, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${section.label}-${index}`}>
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
                <h4 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{section.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{section.description}</p>
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
