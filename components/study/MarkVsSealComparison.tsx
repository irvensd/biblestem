'use client'

import {
  MARK_VS_SEAL_COMPARISON_DEFAULT_CAPTION,
  MARK_VS_SEAL_COMPARISON_NOTE,
  MARK_VS_SEAL_MARK,
  MARK_VS_SEAL_SEAL,
  type MarkVsSealComparisonItemData,
} from '@/lib/mark-vs-seal-comparison-stages'

export interface MarkVsSealComparisonProps {
  sealItems?: readonly MarkVsSealComparisonItemData[]
  markItems?: readonly MarkVsSealComparisonItemData[]
  sealColumnTitle?: string
  markColumnTitle?: string
  sealScriptureRef?: string
  markScriptureRef?: string
  highlightedIndices?: readonly number[]
  note?: string
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

/** Comparison between the seal of God and the mark of the beast. */
export function MarkVsSealComparison({
  sealItems,
  markItems,
  sealColumnTitle = MARK_VS_SEAL_SEAL.columnTitle,
  markColumnTitle = MARK_VS_SEAL_MARK.columnTitle,
  sealScriptureRef = MARK_VS_SEAL_SEAL.scriptureRef,
  markScriptureRef = MARK_VS_SEAL_MARK.scriptureRef,
  highlightedIndices,
  note = MARK_VS_SEAL_COMPARISON_NOTE,
  title = 'Mark of the Beast vs Seal of God',
  subtitle,
  caption = MARK_VS_SEAL_COMPARISON_DEFAULT_CAPTION,
  labelledBy,
}: MarkVsSealComparisonProps) {
  const sealList = sealItems ?? MARK_VS_SEAL_SEAL.items
  const markList = markItems ?? MARK_VS_SEAL_MARK.items
  const rowCount = Math.max(sealList.length, markList.length)
  const focus = clampHighlightSet(highlightedIndices, rowCount)
  const headingId = labelledBy ?? 'mark-vs-seal-comparison-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Comparison between the seal of God and the mark of the beast."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3">
        <div className="flex flex-col">
          <div className="mb-3 rounded-lg border border-blue-200/80 bg-blue-50/40 px-3 py-2.5">
            <h4 className="text-sm font-semibold text-zinc-900">{sealColumnTitle}</h4>
            <p className="mt-1 text-xs font-medium text-blue-900/75">{sealScriptureRef}</p>
          </div>
          <ul className="flex flex-1 flex-col gap-2">
            {sealList.map((item, index) => {
              const emphasized = focus.has(index)
              return (
                <li key={`seal-${item.label}-${index}`}>
                  <article
                    className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                      emphasized
                        ? 'border-blue-700/30 bg-blue-50/55 ring-2 ring-blue-600/12 ring-offset-2 ring-offset-stone-50'
                        : 'border-blue-200/60 bg-white/90 ring-1 ring-blue-900/[0.04]'
                    }`}
                  >
                    <p className="text-sm font-medium text-zinc-900">{item.label}</p>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="mb-3 rounded-lg border border-amber-200/70 bg-amber-50/25 px-3 py-2.5">
            <h4 className="text-sm font-semibold text-zinc-900">{markColumnTitle}</h4>
            <p className="mt-1 text-xs font-medium text-amber-900/75">{markScriptureRef}</p>
          </div>
          <ul className="flex flex-1 flex-col gap-2">
            {markList.map((item, index) => {
              const emphasized = focus.has(index)
              return (
                <li key={`mark-${item.label}-${index}`}>
                  <article
                    className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                      emphasized
                        ? 'border-amber-700/30 bg-amber-50/45 ring-2 ring-amber-600/12 ring-offset-2 ring-offset-stone-50'
                        : 'border-amber-200/60 bg-white/90 ring-1 ring-amber-900/[0.04]'
                    }`}
                  >
                    <p className="text-sm font-medium text-zinc-900">{item.label}</p>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {note ? (
        <p className="mt-4 rounded-lg border border-blue-200/60 bg-blue-50/25 px-4 py-3 text-sm leading-relaxed text-zinc-700">
          {note}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
