'use client'

import {
  GOD_WITH_US_TEMPLE_CUBE_DEFAULT_CAPTION,
  GOD_WITH_US_TEMPLE_CUBE_PANELS,
  type GodWithUsTempleCubePanelData,
} from '@/lib/god-with-us-temple-cube-stages'
import {
  WORLD_LOVE_RESTORES_STUDY_ACCENT,
  clampWorldLoveRestoresHighlightSet,
} from '@/lib/the-world-love-restores-study-visual-accent'

export interface GodWithUsTempleCubeProps {
  panels?: readonly GodWithUsTempleCubePanelData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

function CubeMotif() {
  return (
    <div
      className="relative mx-auto mb-4 h-10 w-10 shrink-0"
      aria-hidden
      title=""
    >
      <span className="absolute inset-0 rotate-45 rounded-sm border-2 border-rose-300/80 bg-rose-50/60 dark:border-rose-700/50 dark:bg-rose-950/40" />
      <span className="absolute inset-1 rotate-12 rounded-sm border border-rose-400/50 dark:border-rose-600/40" />
    </div>
  )
}

/** God With Us — New Jerusalem and Most Holy Place as restored intimacy. */
export function GodWithUsTempleCube({
  panels,
  highlightedIndices,
  title = 'God With Us',
  subtitle,
  caption = GOD_WITH_US_TEMPLE_CUBE_DEFAULT_CAPTION,
  labelledBy,
}: GodWithUsTempleCubeProps) {
  const list = panels !== undefined && panels.length > 0 ? panels : GOD_WITH_US_TEMPLE_CUBE_PANELS
  const focus = clampWorldLoveRestoresHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'god-with-us-temple-cube-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Explanation of the New Jerusalem and the Most Holy Place as symbols of God dwelling with His people."
    >
      <header className="mb-4 text-center lg:text-left">
        <CubeMotif />
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {list.map((panel, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${panel.label}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? WORLD_LOVE_RESTORES_STUDY_ACCENT.emphArticle : WORLD_LOVE_RESTORES_STUDY_ACCENT.defaultArticle
                }`}
              >
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{panel.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{panel.text}</p>
                <p className={`mt-2 text-xs font-medium ${WORLD_LOVE_RESTORES_STUDY_ACCENT.scripture}`}>{panel.reference}</p>
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
