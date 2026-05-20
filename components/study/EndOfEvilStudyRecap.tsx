'use client'

import {
  END_OF_EVIL_STUDY_RECAP_DEFAULT_CAPTION,
  END_OF_EVIL_STUDY_RECAP_SECTIONS,
  type EndOfEvilStudyRecapSectionData,
} from '@/lib/end-of-evil-study-recap-stages'
import {
  END_OF_EVIL_STUDY_ACCENT,
  clampEndOfEvilHighlightSet,
} from '@/lib/end-of-evil-study-visual-accent'

export interface EndOfEvilStudyRecapProps {
  sections?: readonly EndOfEvilStudyRecapSectionData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** The End of Evil study recap — five-card summary. */
export function EndOfEvilStudyRecap({
  sections,
  highlightedIndices,
  title = 'The End of Evil',
  subtitle,
  caption = END_OF_EVIL_STUDY_RECAP_DEFAULT_CAPTION,
  labelledBy,
}: EndOfEvilStudyRecapProps) {
  const list = sections !== undefined && sections.length > 0 ? sections : END_OF_EVIL_STUDY_RECAP_SECTIONS
  const focus = clampEndOfEvilHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'end-of-evil-study-recap-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Summary of the BibleStem study on the end of evil."
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
          const spanFull = index === list.length - 1 && list.length % 2 === 1
          return (
            <li
              key={`${section.label}-${index}`}
              className={spanFull ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
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
