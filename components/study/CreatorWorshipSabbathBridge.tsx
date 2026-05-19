'use client'

import {
  CREATOR_WORSHIP_SABBATH_BRIDGE_DEFAULT_CAPTION,
  CREATOR_WORSHIP_SABBATH_BRIDGE_EXODUS,
  CREATOR_WORSHIP_SABBATH_BRIDGE_POINTS,
  CREATOR_WORSHIP_SABBATH_BRIDGE_REVELATION,
  type CreatorWorshipSabbathBridgePointData,
} from '@/lib/creator-worship-sabbath-bridge-stages'

export interface CreatorWorshipSabbathBridgeProps {
  revelationReference?: string
  revelationQuote?: string
  exodusReference?: string
  exodusQuote?: string
  bridgePoints?: readonly CreatorWorshipSabbathBridgePointData[]
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

/** Revelation 14:7 and Exodus 20:11 comparison with Sabbath/rest bridge points. */
export function CreatorWorshipSabbathBridge({
  revelationReference = CREATOR_WORSHIP_SABBATH_BRIDGE_REVELATION.reference,
  revelationQuote = CREATOR_WORSHIP_SABBATH_BRIDGE_REVELATION.quote,
  exodusReference = CREATOR_WORSHIP_SABBATH_BRIDGE_EXODUS.reference,
  exodusQuote = CREATOR_WORSHIP_SABBATH_BRIDGE_EXODUS.quote,
  bridgePoints,
  highlightedIndices,
  title = 'Worship the Creator',
  subtitle,
  caption = CREATOR_WORSHIP_SABBATH_BRIDGE_DEFAULT_CAPTION,
  labelledBy,
}: CreatorWorshipSabbathBridgeProps) {
  const points =
    bridgePoints !== undefined && bridgePoints.length > 0
      ? bridgePoints
      : CREATOR_WORSHIP_SABBATH_BRIDGE_POINTS
  const focus = clampHighlightSet(highlightedIndices, points.length)
  const headingId = labelledBy ?? 'creator-worship-sabbath-bridge-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Comparison showing how Revelation 14 echoes the Sabbath commandment in Exodus 20."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        <article className="rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-900/75">{revelationReference}</p>
          <blockquote className="mt-2 text-sm leading-relaxed text-zinc-700">&ldquo;{revelationQuote}&rdquo;</blockquote>
        </article>
        <article className="rounded-xl border border-emerald-200/80 bg-emerald-50/30 px-4 py-4 shadow-sm ring-1 ring-emerald-900/[0.04]">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-900/80">{exodusReference}</p>
          <blockquote className="mt-2 text-sm leading-relaxed text-zinc-700">&ldquo;{exodusQuote}&rdquo;</blockquote>
        </article>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {points.map((point, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${point.label}-${index}`}>
              <article
                className={`h-full rounded-xl border px-4 py-3.5 shadow-sm ${
                  emphasized
                    ? 'border-emerald-700/30 bg-emerald-50/45 ring-2 ring-emerald-700/12 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-stone-50/50 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <h4 className="text-sm font-semibold text-zinc-900">{point.label}</h4>
                <p className="mt-1.5 text-sm leading-snug text-zinc-600">{point.description}</p>
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
