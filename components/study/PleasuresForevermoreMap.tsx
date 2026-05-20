'use client'

import {
  PLEASURES_FOREVERMORE_JOY_AREAS,
  PLEASURES_FOREVERMORE_MAP_DEFAULT_CAPTION,
  type PleasuresForevermoreJoyAreaData,
} from '@/lib/pleasures-forevermore-map-stages'
import {
  WORLD_LOVE_RESTORES_STUDY_ACCENT,
  clampWorldLoveRestoresHighlightSet,
} from '@/lib/the-world-love-restores-study-visual-accent'

export interface PleasuresForevermoreMapProps {
  joyAreas?: readonly PleasuresForevermoreJoyAreaData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Pleasures Forevermore — joys of the New Earth. */
export function PleasuresForevermoreMap({
  joyAreas,
  highlightedIndices,
  title = 'Pleasures Forevermore',
  subtitle,
  caption = PLEASURES_FOREVERMORE_MAP_DEFAULT_CAPTION,
  labelledBy,
}: PleasuresForevermoreMapProps) {
  const list = joyAreas !== undefined && joyAreas.length > 0 ? joyAreas : PLEASURES_FOREVERMORE_JOY_AREAS
  const focus = clampWorldLoveRestoresHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'pleasures-forevermore-map-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Map of the joys and pleasures of the New Earth."
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
        {list.map((area, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${area.label}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? WORLD_LOVE_RESTORES_STUDY_ACCENT.emphArticle : WORLD_LOVE_RESTORES_STUDY_ACCENT.defaultArticle
                }`}
              >
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{area.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{area.description}</p>
                <p className={`mt-2 text-xs font-medium ${WORLD_LOVE_RESTORES_STUDY_ACCENT.scripture}`}>{area.reference}</p>
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
