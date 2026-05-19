'use client'

import {
  SEAL_ELEMENTS_SABBATH_DEFAULT_CAPTION,
  SEAL_ELEMENTS_SABBATH_ELEMENTS,
  SEAL_ELEMENTS_SABBATH_EXPLANATION,
  SEAL_ELEMENTS_SABBATH_SOURCE,
  type SealElementsSabbathElementData,
} from '@/lib/seal-elements-sabbath-stages'

export interface SealElementsSabbathProps {
  elements?: readonly SealElementsSabbathElementData[]
  highlightedIndices?: readonly number[]
  sourceReference?: string
  explanation?: string
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

function clampHighlightSet(indices: readonly number[] | undefined, len: number): Set<number> {
  const out = new Set<number>()
  if (!indices?.length || len <= 0) return out
  for (const i of indices) {
    if (Number.isInteger(i) && i >= 0 && i < len) out.add(i)
  }
  return out
}

/** Three seal elements in the Sabbath commandment (Exodus 20:8-11). */
export function SealElementsSabbath({
  elements,
  highlightedIndices,
  sourceReference = SEAL_ELEMENTS_SABBATH_SOURCE,
  explanation = SEAL_ELEMENTS_SABBATH_EXPLANATION,
  title = 'The Seal in the Sabbath Commandment',
  subtitle,
  caption = SEAL_ELEMENTS_SABBATH_DEFAULT_CAPTION,
  labelledBy,
}: SealElementsSabbathProps) {
  const list = elements !== undefined && elements.length > 0 ? elements : SEAL_ELEMENTS_SABBATH_ELEMENTS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'seal-elements-sabbath-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Three seal elements found in the Sabbath commandment."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : (
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-900/75">{sourceReference}</p>
        )}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {list.map((element, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${element.label}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? 'border-blue-700/35 bg-blue-50/50 ring-2 ring-blue-600/12 ring-offset-2 ring-offset-stone-50'
                    : 'border-blue-200/70 bg-white/90 ring-1 ring-blue-900/[0.04]'
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-800/80">
                  {element.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-zinc-900">{element.text}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {explanation ? (
        <p className="mt-4 rounded-lg border border-zinc-200/90 bg-stone-50/60 px-4 py-3 text-sm leading-relaxed text-zinc-700">
          {explanation}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
