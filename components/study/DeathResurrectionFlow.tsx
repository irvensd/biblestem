'use client'

import {
  DEATH_RESURRECTION_FLOW_STAGES,
  type DeathResurrectionStageData,
} from '@/lib/death-resurrection-flow-stages'

export interface DeathResurrectionFlowProps {
  /** Defaults to the canonical Foundations death-and-resurrection flow. */
  stages?: readonly DeathResurrectionStageData[]
  /** 0-based indices into the rendered stage list to emphasize. */
  highlightedIndices?: readonly number[]
  /** Optional heading above the flow. */
  title?: string
  /** Optional line under `title`. */
  subtitle?: string
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

/** Responsive death-and-resurrection overview: stacks on small screens; grid from `sm` up. */
export function DeathResurrectionFlow({
  stages,
  highlightedIndices,
  title,
  subtitle,
  labelledBy,
}: DeathResurrectionFlowProps) {
  const list =
    stages !== undefined && stages.length > 0 ? stages : DEATH_RESURRECTION_FLOW_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'death-resurrection-flow-heading' : undefined)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Death and resurrection flow'}
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
      <ol className="grid list-none gap-3 sm:grid-cols-2 sm:gap-3.5">
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          const spanFullRow = list.length % 2 === 1 && index === list.length - 1
          return (
            <li
              key={`${stage.stageName}-${index}`}
              className={spanFullRow ? 'sm:col-span-2 sm:max-w-md' : undefined}
            >
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-3.5 shadow-sm transition-[box-shadow,border-color] sm:min-h-[10.5rem] ${
                  emphasized
                    ? 'border-blue-800/40 bg-blue-50/35 ring-2 ring-blue-800/25 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                      emphasized
                        ? 'bg-blue-800 text-white'
                        : 'bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200/90'
                    }`}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <h4 className="pt-0.5 text-sm font-semibold leading-snug text-zinc-900 sm:text-[0.9375rem]">
                    {stage.stageName}
                  </h4>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">{stage.description}</p>
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
