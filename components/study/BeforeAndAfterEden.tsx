'use client'

import { useCallback, useState } from 'react'
import {
  BEFORE_AND_AFTER_EDEN_AFTER_COLUMN,
  BEFORE_AND_AFTER_EDEN_BEFORE_COLUMN,
  BEFORE_AND_AFTER_EDEN_COMPLETE_SUMMARY,
  BEFORE_AND_AFTER_EDEN_DEFAULT_CAPTION,
  BEFORE_AND_AFTER_EDEN_PAIR_EXPLANATION,
  BEFORE_AND_AFTER_EDEN_PAIRS,
  type BeforeAndAfterEdenPairData,
} from '@/lib/before-and-after-eden-stages'
import {
  SUFFERING_STUDY_ACCENT,
  clampSufferingStudyHighlightSet,
} from '@/lib/suffering-study-visual-accent'

export interface BeforeAndAfterEdenProps {
  pairs?: readonly BeforeAndAfterEdenPairData[]
  completionSummary?: string
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Before and After Eden: two-column contrast with tap-to-reveal pairs. */
export function BeforeAndAfterEden({
  pairs,
  completionSummary,
  highlightedIndices,
  title = 'Before and After Eden',
  subtitle,
  caption = BEFORE_AND_AFTER_EDEN_DEFAULT_CAPTION,
  labelledBy,
}: BeforeAndAfterEdenProps) {
  const list = pairs !== undefined && pairs.length > 0 ? pairs : BEFORE_AND_AFTER_EDEN_PAIRS
  const presetFocus = clampSufferingStudyHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const [visited, setVisited] = useState<Set<number>>(() => new Set(presetFocus))
  const headingId = labelledBy ?? 'before-and-after-eden-heading'
  const allVisited = visited.size >= list.length

  const openPair = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
    setVisited((prev) => {
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }, [])

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Contrast between God's original design and life after sin entered."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className={`mb-3 rounded-lg border px-3 py-2.5 ${SUFFERING_STUDY_ACCENT.columnBefore}`}>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {BEFORE_AND_AFTER_EDEN_BEFORE_COLUMN.title}
            </h4>
            <p className={`mt-1 text-xs font-medium ${SUFFERING_STUDY_ACCENT.scripture}`}>
              {BEFORE_AND_AFTER_EDEN_BEFORE_COLUMN.scripture}
            </p>
          </div>
          <ul className="space-y-1.5">
            {BEFORE_AND_AFTER_EDEN_BEFORE_COLUMN.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-zinc-200/90 bg-white/90 px-3 py-2 text-sm text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={`mb-3 rounded-lg border px-3 py-2.5 ${SUFFERING_STUDY_ACCENT.columnAfter}`}>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {BEFORE_AND_AFTER_EDEN_AFTER_COLUMN.title}
            </h4>
            <p className="mt-1 text-xs font-medium text-amber-900/80 dark:text-amber-200/80">
              {BEFORE_AND_AFTER_EDEN_AFTER_COLUMN.scripture}
            </p>
          </div>
          <ul className="space-y-1.5">
            {BEFORE_AND_AFTER_EDEN_AFTER_COLUMN.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-zinc-200/90 bg-white/90 px-3 py-2 text-sm text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Contrast pairs</p>
        <ul className="mt-3 space-y-2.5">
          {list.map((pair, index) => {
            const open = activeIndex === index
            const explored = visited.has(index)
            return (
              <li key={`${pair.before}-${pair.after}`}>
                <button
                  type="button"
                  onClick={() => openPair(index)}
                  className={`w-full rounded-xl border px-4 py-3 text-left shadow-sm transition-[box-shadow,border-color] ${
                    open
                      ? SUFFERING_STUDY_ACCENT.emphArticle
                      : explored
                        ? 'border-emerald-200/90 bg-emerald-50/30 dark:border-emerald-800/40 dark:bg-emerald-950/20'
                        : SUFFERING_STUDY_ACCENT.defaultArticle
                  }`}
                  aria-pressed={open}
                >
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold text-emerald-900 dark:text-emerald-100">{pair.before}</span>
                    <span className="text-zinc-400" aria-hidden>
                      versus
                    </span>
                    <span className="font-semibold text-amber-900 dark:text-amber-100">{pair.after}</span>
                  </div>
                  {open ? (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {pair.explanation}
                    </p>
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {allVisited ? (
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
            {BEFORE_AND_AFTER_EDEN_PAIR_EXPLANATION}
          </p>
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
            {completionSummary ?? BEFORE_AND_AFTER_EDEN_COMPLETE_SUMMARY}
          </p>
        </div>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
