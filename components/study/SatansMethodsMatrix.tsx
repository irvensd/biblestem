'use client'

import { useState } from 'react'
import {
  SATANS_METHODS_MATRIX_DEFAULT_CAPTION,
  SATANS_METHODS_MATRIX_ROWS,
  type SatansMethodsMatrixRowData,
} from '@/lib/satans-methods-matrix-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface SatansMethodsMatrixProps {
  rows?: readonly SatansMethodsMatrixRowData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Satan's Methods Matrix: match methods with Bible passages. */
export function SatansMethodsMatrix({
  rows,
  highlightedIndices,
  title = "Satan's Methods",
  subtitle,
  caption = SATANS_METHODS_MATRIX_DEFAULT_CAPTION,
  labelledBy,
}: SatansMethodsMatrixProps) {
  const list = rows !== undefined && rows.length > 0 ? rows : SATANS_METHODS_MATRIX_ROWS
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const headingId = labelledBy ?? 'satans-methods-matrix-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Matrix matching Satan's methods with supporting Scripture."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {list.map((row, index) => {
          const emphasized = activeIndex === index || (activeIndex === null && presetFocus.has(index))
          return (
            <li key={`${row.method}-${index}`}>
              <button
                type="button"
                className={`w-full rounded-xl border px-3.5 py-3 text-left shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                    : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-pressed={emphasized}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div className="min-w-0">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{row.method}</span>
                    <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{row.description}</p>
                  </div>
                  <cite
                    className={`shrink-0 text-xs font-medium not-italic ${
                      emphasized ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture : 'text-zinc-500 dark:text-zinc-500'
                    }`}
                  >
                    {row.reference}
                  </cite>
                </div>
              </button>
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
