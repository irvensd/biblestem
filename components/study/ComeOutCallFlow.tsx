'use client'

import {
  COME_OUT_CALL_FLOW_DEFAULT_CAPTION,
  COME_OUT_CALL_FLOW_STAGES,
  type ComeOutCallFlowStageData,
} from '@/lib/come-out-call-flow-stages'

export interface ComeOutCallFlowProps {
  stages?: readonly ComeOutCallFlowStageData[]
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

/** God's merciful call for His people to come out of Babylon. */
export function ComeOutCallFlow({
  stages,
  highlightedIndices,
  title = 'Come Out of Her, My People',
  subtitle,
  caption = COME_OUT_CALL_FLOW_DEFAULT_CAPTION,
  labelledBy,
}: ComeOutCallFlowProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : COME_OUT_CALL_FLOW_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'come-out-call-flow-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Flow showing God's call for His people to come out of Babylon."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          const isLast = index === list.length - 1
          return (
            <li key={`${stage.label}-${index}`} className="relative flex flex-1 flex-col lg:min-w-0">
              {!isLast ? (
                <span
                  className="absolute -bottom-3 left-1/2 z-10 hidden h-3 w-px -translate-x-1/2 bg-zinc-200 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:block lg:h-px lg:w-3 lg:translate-x-full lg:-translate-y-1/2"
                  aria-hidden
                />
              ) : null}
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? 'border-teal-700/30 bg-teal-50/50 ring-2 ring-teal-600/15 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized ? 'bg-teal-800 text-white' : 'bg-stone-100 text-zinc-700 ring-1 ring-zinc-200/80'
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-3 text-sm font-semibold text-zinc-900">{stage.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600">{stage.description}</p>
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
