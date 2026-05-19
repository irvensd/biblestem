'use client'

import {
  SATAN_BOUND_EXPLAINER_CARDS,
  SATAN_BOUND_EXPLAINER_DEFAULT_CAPTION,
  SATAN_BOUND_EXPLAINER_SCRIPTURE_ANCHORS,
  type SatanBoundExplainerCardData,
} from '@/lib/satan-bound-explainer-stages'

export interface SatanBoundExplainerProps {
  cards?: readonly SatanBoundExplainerCardData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  scriptureAnchors?: readonly string[]
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

/** Satan bound by circumstances during the Millennium (no sensational imagery). */
export function SatanBoundExplainer({
  cards,
  highlightedIndices,
  title = 'Satan Bound During the Millennium',
  subtitle,
  caption = SATAN_BOUND_EXPLAINER_DEFAULT_CAPTION,
  scriptureAnchors = SATAN_BOUND_EXPLAINER_SCRIPTURE_ANCHORS,
  labelledBy,
}: SatanBoundExplainerProps) {
  const list = cards !== undefined && cards.length > 0 ? cards : SATAN_BOUND_EXPLAINER_CARDS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'satan-bound-explainer-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Explanation of Satan being bound during the Millennium."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {list.map((card, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${card.label}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized
                    ? 'border-indigo-700/35 bg-indigo-50/50 ring-2 ring-indigo-700/15 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <h4 className="text-sm font-semibold text-zinc-900">{card.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600">{card.text}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {scriptureAnchors.length > 0 ? (
        <p className="mt-3 text-xs font-medium text-indigo-900/75">{scriptureAnchors.join(' · ')}</p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
