'use client'

import {
  GODS_HEART_IN_JUDGMENT_DEFAULT_CAPTION,
  GODS_HEART_IN_JUDGMENT_PANELS,
  type GodsHeartInJudgmentPanelData,
} from '@/lib/gods-heart-in-judgment-stages'
import {
  END_OF_EVIL_STUDY_ACCENT,
  clampEndOfEvilHighlightSet,
} from '@/lib/end-of-evil-study-visual-accent'

export interface GodsHeartInJudgmentProps {
  panels?: readonly GodsHeartInJudgmentPanelData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** God's Heart in Judgment — pastoral, Christ-centered panels. */
export function GodsHeartInJudgment({
  panels,
  highlightedIndices,
  title = "God's Heart in Judgment",
  subtitle,
  caption = GODS_HEART_IN_JUDGMENT_DEFAULT_CAPTION,
  labelledBy,
}: GodsHeartInJudgmentProps) {
  const list = panels !== undefined && panels.length > 0 ? panels : GODS_HEART_IN_JUDGMENT_PANELS
  const focus = clampEndOfEvilHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'gods-heart-in-judgment-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Three biblical truths showing God's heart in judgment."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {list.map((panel, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${panel.label}-${index}`}>
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized ? END_OF_EVIL_STUDY_ACCENT.emphArticle : END_OF_EVIL_STUDY_ACCENT.defaultArticle
                }`}
              >
                <span className="absolute inset-y-0 left-0 w-1 bg-amber-700/70 dark:bg-amber-600/60" aria-hidden />
                <div className="pl-2">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{panel.label}</h4>
                  <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{panel.text}</p>
                  <p className={`mt-2 text-xs font-medium ${END_OF_EVIL_STUDY_ACCENT.scripture}`}>{panel.reference}</p>
                </div>
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
