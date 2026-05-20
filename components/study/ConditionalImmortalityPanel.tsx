'use client'

import {
  CONDITIONAL_IMMORTALITY_DEFAULT_CAPTION,
  CONDITIONAL_IMMORTALITY_PANELS,
  type ConditionalImmortalityPanelData,
} from '@/lib/conditional-immortality-panel-stages'
import {
  END_OF_EVIL_STUDY_ACCENT,
  clampEndOfEvilHighlightSet,
} from '@/lib/end-of-evil-study-visual-accent'

export interface ConditionalImmortalityPanelProps {
  panels?: readonly ConditionalImmortalityPanelData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Immortality Is a Gift — conditional immortality in Scripture. */
export function ConditionalImmortalityPanel({
  panels,
  highlightedIndices,
  title = 'Immortality Is a Gift',
  subtitle,
  caption = CONDITIONAL_IMMORTALITY_DEFAULT_CAPTION,
  labelledBy,
}: ConditionalImmortalityPanelProps) {
  const list = panels !== undefined && panels.length > 0 ? panels : CONDITIONAL_IMMORTALITY_PANELS
  const focus = clampEndOfEvilHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'conditional-immortality-panel-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Explanation that immortality is a gift from God, not an inherent human possession."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {list.map((panel, index) => {
          const emphasized = focus.has(index)
          const isLie = panel.variant === 'lie'
          return (
            <li key={`${panel.label}-${index}`} className={index === 0 ? 'sm:col-span-2' : undefined}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized
                    ? END_OF_EVIL_STUDY_ACCENT.emphArticle
                    : isLie
                      ? 'border-zinc-300/90 bg-zinc-50/80 ring-1 ring-zinc-950/[0.04] dark:border-zinc-600/80 dark:bg-zinc-800/50'
                      : END_OF_EVIL_STUDY_ACCENT.defaultArticle
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {panel.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-100">{panel.text}</p>
                <p className={`mt-2 text-xs font-medium ${END_OF_EVIL_STUDY_ACCENT.scripture}`}>{panel.reference}</p>
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
