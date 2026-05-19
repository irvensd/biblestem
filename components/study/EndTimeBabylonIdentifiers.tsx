'use client'

import {
  END_TIME_BABYLON_IDENTIFIERS,
  END_TIME_BABYLON_IDENTIFIERS_DEFAULT_CAPTION,
  END_TIME_BABYLON_IDENTIFIERS_NOTE,
  type EndTimeBabylonIdentifierData,
} from '@/lib/end-time-babylon-identifiers-stages'

export interface EndTimeBabylonIdentifiersProps {
  identifiers?: readonly EndTimeBabylonIdentifierData[]
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

/** Seven identifiers of end-time Babylon from Revelation 17. */
export function EndTimeBabylonIdentifiers({
  identifiers,
  highlightedIndices,
  note = END_TIME_BABYLON_IDENTIFIERS_NOTE,
  title = 'End-Time Babylon in Revelation 17',
  subtitle,
  caption = END_TIME_BABYLON_IDENTIFIERS_DEFAULT_CAPTION,
  labelledBy,
}: EndTimeBabylonIdentifiersProps) {
  const list = identifiers !== undefined && identifiers.length > 0 ? identifiers : END_TIME_BABYLON_IDENTIFIERS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'end-time-babylon-identifiers-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Seven identifiers of end-time Babylon from Revelation 17."
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
            <li key={`${item.label}-${index}`} className={index === list.length - 1 && list.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-1' : undefined}>
              <article
                className={`h-full rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? 'border-zinc-500/35 bg-stone-50/80 ring-2 ring-zinc-500/12 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold tabular-nums text-zinc-700 ring-1 ring-zinc-200/80"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-2.5 text-sm font-semibold text-zinc-900">{item.label}</h4>
                <p className="mt-1.5 text-sm leading-snug text-zinc-600">{item.text}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {note ? (
        <p className="mt-4 rounded-lg border border-teal-200/60 bg-teal-50/25 px-4 py-3 text-sm leading-relaxed text-zinc-700">
          {note}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
