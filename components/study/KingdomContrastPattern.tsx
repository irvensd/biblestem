'use client'

import {
  KINGDOM_CONTRAST_PATTERN_DEFAULT_CAPTION,
  KINGDOM_CONTRAST_PATTERN_PILLARS,
  type KingdomContrastPatternPillarData,
} from '@/lib/kingdom-contrast-pattern-stages'

export interface KingdomContrastPatternProps {
  pillars?: readonly KingdomContrastPatternPillarData[]
  /** 0-based indices into the rendered pillar list. */
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

/** Contrast between worldly power, Christ's kingdom, counterfeit religion, and true worship. */
export function KingdomContrastPattern({
  pillars,
  highlightedIndices,
  title,
  subtitle,
  caption = KINGDOM_CONTRAST_PATTERN_DEFAULT_CAPTION,
  labelledBy,
}: KingdomContrastPatternProps) {
  const list =
    pillars !== undefined && pillars.length > 0 ? pillars : KINGDOM_CONTRAST_PATTERN_PILLARS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'kingdom-contrast-pattern-heading' : undefined)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Kingdom contrast'}
    >
      {title ? (
        <header className="mb-4">
          <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
          ) : null}
        </header>
      ) : null}

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {list.map((pillar, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${pillar.label}-${index}`}>
              <article
                className={`rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] sm:min-h-[5.5rem] ${
                  emphasized
                    ? 'border-blue-700/30 bg-blue-50/50 ring-2 ring-blue-600/15 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <h4 className="text-sm font-semibold text-zinc-900">{pillar.label}</h4>
                <p className="mt-1.5 text-sm leading-snug text-zinc-600">{pillar.tagline}</p>
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
