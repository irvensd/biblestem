'use client'

import {
  END_OF_EVIL_CORE_CONTRAST_BIBLICAL,
  END_OF_EVIL_CORE_CONTRAST_DEFAULT_CAPTION,
  END_OF_EVIL_CORE_CONTRAST_ETERNAL_TORMENT,
  END_OF_EVIL_CORE_CONTRAST_SCRIPTURE_ANCHORS,
  type EndOfEvilCoreContrastColumnData,
  type EndOfEvilCoreContrastItemData,
} from '@/lib/end-of-evil-core-contrast-stages'
import {
  END_OF_EVIL_STUDY_ACCENT,
  clampEndOfEvilHighlightSet,
} from '@/lib/end-of-evil-study-visual-accent'

export interface EndOfEvilCoreContrastProps {
  eternalTormentColumn?: EndOfEvilCoreContrastColumnData
  biblicalColumn?: EndOfEvilCoreContrastColumnData
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  scriptureAnchors?: readonly string[]
  labelledBy?: string
}

function Column({
  data,
  tone,
  focus,
}: {
  data: EndOfEvilCoreContrastColumnData
  tone: 'muted' | 'accent'
  focus: Set<number>
}) {
  const accent = tone === 'accent'
  return (
    <div className="flex min-w-0 flex-col">
      <div
        className={`mb-3 rounded-lg border px-3 py-2.5 ${
          accent ? END_OF_EVIL_STUDY_ACCENT.columnHeader : END_OF_EVIL_STUDY_ACCENT.columnHeaderMuted
        }`}
      >
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{data.columnTitle}</h4>
      </div>
      <ul className="flex flex-1 flex-col gap-2">
        {data.items.map((item: EndOfEvilCoreContrastItemData, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${item.label}-${index}`}>
              <article
                className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                  emphasized && accent
                    ? END_OF_EVIL_STUDY_ACCENT.emphArticle
                    : END_OF_EVIL_STUDY_ACCENT.defaultArticle
                }`}
              >
                <p className="text-sm leading-snug text-zinc-700 dark:text-zinc-300">{item.label}</p>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/** Two Pictures of Final Judgment — eternal torment vs biblical end of evil. */
export function EndOfEvilCoreContrast({
  eternalTormentColumn = END_OF_EVIL_CORE_CONTRAST_ETERNAL_TORMENT,
  biblicalColumn = END_OF_EVIL_CORE_CONTRAST_BIBLICAL,
  highlightedIndices,
  title = 'Two Pictures of Final Judgment',
  subtitle,
  caption = END_OF_EVIL_CORE_CONTRAST_DEFAULT_CAPTION,
  scriptureAnchors = END_OF_EVIL_CORE_CONTRAST_SCRIPTURE_ANCHORS,
  labelledBy,
}: EndOfEvilCoreContrastProps) {
  const rowCount = Math.max(eternalTormentColumn.items.length, biblicalColumn.items.length)
  const focus = clampEndOfEvilHighlightSet(highlightedIndices, rowCount)
  const headingId = labelledBy ?? 'end-of-evil-core-contrast-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Comparison between eternal torment and the biblical teaching that evil is finally ended."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
        <Column data={eternalTormentColumn} tone="muted" focus={focus} />
        <Column data={biblicalColumn} tone="accent" focus={focus} />
      </div>

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
