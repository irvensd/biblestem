'use client'

import {
  REMNANT_WITNESS_PATTERN_DEFAULT_CAPTION,
  REMNANT_WITNESS_PATTERN_STAGES,
  type RemnantWitnessPatternStageData,
} from '@/lib/remnant-witness-pattern-stages'

export interface RemnantWitnessPatternProps {
  stages?: readonly RemnantWitnessPatternStageData[]
  /** 0-based indices into the rendered stage list. */
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

/** Remnant identity and mission: commandments, testimony, faith, prophecy, mission. */
export function RemnantWitnessPattern({
  stages,
  highlightedIndices,
  title,
  subtitle,
  caption = REMNANT_WITNESS_PATTERN_DEFAULT_CAPTION,
  labelledBy,
}: RemnantWitnessPatternProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : REMNANT_WITNESS_PATTERN_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'remnant-witness-pattern-heading' : undefined)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Remnant witness identity flow'}
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

      <ol className="relative space-y-3">
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          const isLast = index === list.length - 1
          return (
            <li key={`${stage.label}-${index}`} className="relative pl-0">
              {!isLast ? (
                <span
                  className="absolute left-[1.125rem] top-[2.75rem] bottom-[-0.75rem] w-px bg-zinc-200"
                  aria-hidden
                />
              ) : null}
              <article
                className={`relative rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? 'border-blue-700/30 bg-blue-50/50 ring-2 ring-blue-600/15 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <div className="flex gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold tabular-nums ${
                      emphasized
                        ? 'bg-blue-800 text-white'
                        : 'bg-stone-100 text-zinc-700 ring-1 ring-zinc-200/80'
                    }`}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h4 className="text-sm font-semibold text-zinc-900">{stage.label}</h4>
                    <p className="mt-1.5 text-sm leading-snug text-zinc-600">{stage.tagline}</p>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ol>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
