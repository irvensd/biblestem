'use client'

import {
  FOREVER_LANGUAGE_EXPLAINER_CARDS,
  FOREVER_LANGUAGE_EXPLAINER_DEFAULT_CAPTION,
  FOREVER_LANGUAGE_EXPLAINER_NOTE,
  type ForeverLanguageCardData,
} from '@/lib/forever-language-explainer-stages'
import {
  END_OF_EVIL_STUDY_ACCENT,
  clampEndOfEvilHighlightSet,
} from '@/lib/end-of-evil-study-visual-accent'

export interface ForeverLanguageExplainerProps {
  cards?: readonly ForeverLanguageCardData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  note?: string
  labelledBy?: string
}

/** How Scripture Uses Forever Language. */
export function ForeverLanguageExplainer({
  cards,
  highlightedIndices,
  title = 'How Scripture Uses Forever Language',
  subtitle,
  caption = FOREVER_LANGUAGE_EXPLAINER_DEFAULT_CAPTION,
  note = FOREVER_LANGUAGE_EXPLAINER_NOTE,
  labelledBy,
}: ForeverLanguageExplainerProps) {
  const list = cards !== undefined && cards.length > 0 ? cards : FOREVER_LANGUAGE_EXPLAINER_CARDS
  const focus = clampEndOfEvilHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'forever-language-explainer-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Explanation of biblical forever, eternal, and unquenchable fire language."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {list.map((card, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${card.label}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? END_OF_EVIL_STUDY_ACCENT.emphArticle : END_OF_EVIL_STUDY_ACCENT.defaultArticle
                }`}
              >
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{card.text}</p>
                <p className={`mt-2 text-xs font-medium ${END_OF_EVIL_STUDY_ACCENT.scripture}`}>{card.reference}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {note ? <p className={`mt-3 ${END_OF_EVIL_STUDY_ACCENT.note}`}>{note}</p> : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
