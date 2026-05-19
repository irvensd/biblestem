'use client'

import {
  TWO_RESURRECTIONS_COMPARISON_DEFAULT_CAPTION,
  TWO_RESURRECTIONS_FIRST,
  TWO_RESURRECTIONS_SECOND,
  type TwoResurrectionsComparisonColumnData,
  type TwoResurrectionsComparisonItemData,
} from '@/lib/two-resurrections-comparison-stages'

export interface TwoResurrectionsComparisonProps {
  firstColumn?: TwoResurrectionsComparisonColumnData
  secondColumn?: TwoResurrectionsComparisonColumnData
  highlightedIndices?: readonly number[]
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

function Column({
  data,
  tone,
  focus,
}: {
  data: TwoResurrectionsComparisonColumnData
  tone: 'hope' | 'sober'
  focus: Set<number>
}) {
  const hope = tone === 'hope'
  return (
    <div className="flex flex-col">
      <div
        className={`mb-3 rounded-lg border px-3 py-2.5 ${
          hope ? 'border-indigo-200/80 bg-indigo-50/40' : 'border-zinc-300/80 bg-zinc-50/60'
        }`}
      >
        <h4 className="text-sm font-semibold text-zinc-900">{data.columnTitle}</h4>
        <p className={`mt-1 text-xs font-medium ${hope ? 'text-indigo-900/75' : 'text-zinc-600'}`}>
          {data.scriptureRef}
        </p>
      </div>
      <ul className="flex flex-1 flex-col gap-2">
        {data.items.map((item: TwoResurrectionsComparisonItemData, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${item.label}-${index}`}>
              <article
                className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                  emphasized
                    ? hope
                      ? 'border-indigo-700/30 bg-indigo-50/55 ring-2 ring-indigo-600/12 ring-offset-2 ring-offset-stone-50'
                      : 'border-zinc-400/40 bg-zinc-100/80 ring-2 ring-zinc-500/10 ring-offset-2 ring-offset-stone-50'
                    : hope
                      ? 'border-indigo-200/60 bg-white/90 ring-1 ring-indigo-900/[0.04]'
                      : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <p className="text-sm font-medium text-zinc-900">{item.label}</p>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/** First resurrection (hope) vs second resurrection (sober) at the Millennium. */
export function TwoResurrectionsComparison({
  firstColumn = TWO_RESURRECTIONS_FIRST,
  secondColumn = TWO_RESURRECTIONS_SECOND,
  highlightedIndices,
  title = 'The Two Resurrections',
  subtitle,
  caption = TWO_RESURRECTIONS_COMPARISON_DEFAULT_CAPTION,
  labelledBy,
}: TwoResurrectionsComparisonProps) {
  const rowCount = Math.max(firstColumn.items.length, secondColumn.items.length)
  const focus = clampHighlightSet(highlightedIndices, rowCount)
  const headingId = labelledBy ?? 'two-resurrections-comparison-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Comparison of the first resurrection and second resurrection."
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
        <Column data={firstColumn} tone="hope" focus={focus} />
        <Column data={secondColumn} tone="sober" focus={focus} />
      </div>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
