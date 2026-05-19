'use client'

import {
  BEAST_POWER_IDENTIFIERS,
  BEAST_POWER_IDENTIFIERS_DEFAULT_CAPTION,
  type BeastPowerIdentifierData,
} from '@/lib/beast-power-identifiers-stages'

export interface BeastPowerIdentifiersProps {
  identifiers?: readonly BeastPowerIdentifierData[]
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

/** Seven identifiers of the beast power from Revelation 13. */
export function BeastPowerIdentifiers({
  identifiers,
  highlightedIndices,
  title = 'The Beast Power in Revelation 13',
  subtitle,
  caption = BEAST_POWER_IDENTIFIERS_DEFAULT_CAPTION,
  labelledBy,
}: BeastPowerIdentifiersProps) {
  const list = identifiers !== undefined && identifiers.length > 0 ? identifiers : BEAST_POWER_IDENTIFIERS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'beast-power-identifiers-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Seven identifiers of the beast power from Revelation 13."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${item.label}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? 'border-blue-700/30 bg-blue-50/50 ring-2 ring-blue-600/12 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold tabular-nums text-zinc-700 ring-1 ring-zinc-200/80"
                  aria-hidden
                >
                  {index + 1}
                </span>
                {item.reference ? (
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-blue-900/70">
                    {item.reference}
                  </p>
                ) : null}
                <h4 className={`text-sm font-semibold text-zinc-900 ${item.reference ? 'mt-1' : 'mt-2.5'}`}>
                  {item.label}
                </h4>
                <p className="mt-1.5 flex-1 text-sm leading-snug text-zinc-600">{item.text}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
