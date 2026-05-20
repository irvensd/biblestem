'use client'

import {
  NO_MORE_CURSE_RESTORATION_CARDS,
  NO_MORE_CURSE_RESTORATION_DEFAULT_CAPTION,
  type NoMoreCurseRestorationCardData,
} from '@/lib/no-more-curse-restoration-stages'
import {
  WORLD_LOVE_RESTORES_STUDY_ACCENT,
  clampWorldLoveRestoresHighlightSet,
} from '@/lib/the-world-love-restores-study-visual-accent'

export interface NoMoreCurseRestorationProps {
  cards?: readonly NoMoreCurseRestorationCardData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

function CheckIcon() {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${WORLD_LOVE_RESTORES_STUDY_ACCENT.checkmark}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/** No More Curse — what will no longer exist in the New Earth. */
export function NoMoreCurseRestoration({
  cards,
  highlightedIndices,
  title = 'No More Curse',
  subtitle,
  caption = NO_MORE_CURSE_RESTORATION_DEFAULT_CAPTION,
  labelledBy,
}: NoMoreCurseRestorationProps) {
  const list = cards !== undefined && cards.length > 0 ? cards : NO_MORE_CURSE_RESTORATION_CARDS
  const focus = clampWorldLoveRestoresHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'no-more-curse-restoration-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="List of things that will no longer exist in the New Earth."
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
                className={`flex h-full items-start gap-3 rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? WORLD_LOVE_RESTORES_STUDY_ACCENT.gardenArticle : WORLD_LOVE_RESTORES_STUDY_ACCENT.defaultArticle
                }`}
              >
                <CheckIcon />
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.label}</h4>
                  <p className={`mt-1 text-xs font-medium ${WORLD_LOVE_RESTORES_STUDY_ACCENT.scripture}`}>{card.reference}</p>
                </div>
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
