'use client'

import { SANCTUARY_JOURNEY_STAGES, type SanctuaryJourneyStageData } from '@/lib/sanctuary-journey-stages'

export interface SanctuaryJourneyMapProps {
  /** Defaults to the canonical Foundations sanctuary journey. */
  stages?: readonly SanctuaryJourneyStageData[]
  /** 0-based indices into `stages` to emphasize (focus ring + slight elevation). */
  highlightedIndices?: readonly number[]
  /** Optional stable id for aria-labelledby when embedded without a section heading. */
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

/** Responsive sanctuary journey overview: stacks on small screens; grid from `sm` up. */
export function SanctuaryJourneyMap({
  stages = SANCTUARY_JOURNEY_STAGES,
  highlightedIndices,
  labelledBy,
}: SanctuaryJourneyMapProps) {
  const list = stages.length > 0 ? stages : SANCTUARY_JOURNEY_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : 'Sanctuary journey stages'}
    >
      <ol className="grid list-none gap-3 sm:grid-cols-2 sm:gap-3.5">
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${stage.stageName}-${index}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-3.5 shadow-sm transition-[box-shadow,border-color] sm:min-h-[11rem] ${
                  emphasized
                    ? 'border-blue-800/40 bg-blue-50/35 ring-2 ring-blue-800/25 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="inline-flex min-h-[1.25rem] min-w-[1.25rem] items-center justify-center rounded-full bg-zinc-100 px-2 text-[11px] font-semibold tabular-nums text-zinc-700">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-zinc-900">{stage.stageName}</h3>
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{stage.location}</p>
                <p className="mt-2 text-sm font-semibold text-zinc-800">{stage.symbol}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">{stage.meaning}</p>
                <div className="mt-3 border-t border-zinc-200/80 pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Scriptures</p>
                  <ul className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1">
                    {stage.scriptures.map((ref) => (
                      <li key={ref}>
                        <span className="rounded-md bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/90">
                          {ref}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
