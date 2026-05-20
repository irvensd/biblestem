'use client'

import {
  NEW_EARTH_RELATIONAL_HOPE_CARDS,
  NEW_EARTH_RELATIONAL_HOPE_DEFAULT_CAPTION,
  type NewEarthRelationalHopeCardData,
} from '@/lib/new-earth-relational-hope-stages'
import {
  WORLD_LOVE_RESTORES_STUDY_ACCENT,
  clampWorldLoveRestoresHighlightSet,
} from '@/lib/the-world-love-restores-study-visual-accent'

export interface NewEarthRelationalHopeProps {
  cards?: readonly NewEarthRelationalHopeCardData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** More Than a Place — the New Earth is relational hope in God. */
export function NewEarthRelationalHope({
  cards,
  highlightedIndices,
  title = 'More Than a Place',
  subtitle,
  caption = NEW_EARTH_RELATIONAL_HOPE_DEFAULT_CAPTION,
  labelledBy,
}: NewEarthRelationalHopeProps) {
  const list = cards !== undefined && cards.length > 0 ? cards : NEW_EARTH_RELATIONAL_HOPE_CARDS
  const focus = clampWorldLoveRestoresHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'new-earth-relational-hope-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Visual showing that the New Earth is centered on restored relationship with God."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((card, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${card.label}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? WORLD_LOVE_RESTORES_STUDY_ACCENT.emphArticle : WORLD_LOVE_RESTORES_STUDY_ACCENT.defaultArticle
                }`}
              >
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{card.text}</p>
                <p className={`mt-2 text-xs font-medium ${WORLD_LOVE_RESTORES_STUDY_ACCENT.scripture}`}>{card.reference}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
