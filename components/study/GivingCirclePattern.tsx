'use client'

import {
  GIVING_CIRCLE_PATTERN_DEFAULT_CAPTION,
  GIVING_CIRCLE_PATTERN_STAGES,
  type GivingCirclePatternStageData,
} from '@/lib/giving-circle-pattern-stages'

export interface GivingCirclePatternProps {
  stages?: readonly GivingCirclePatternStageData[]
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

/** Responsive biblical generosity flow: vertical steps with arrows; numbered stages. */
export function GivingCirclePattern({
  stages,
  highlightedIndices,
  title,
  subtitle,
  caption = GIVING_CIRCLE_PATTERN_DEFAULT_CAPTION,
  labelledBy,
}: GivingCirclePatternProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : GIVING_CIRCLE_PATTERN_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'giving-circle-pattern-heading' : undefined)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Biblical generosity circle'}
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

      <ol className="list-none">
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          const isLast = index === list.length - 1
          return (
            <li key={`${stage.label}-${index}`}>
              <article
                className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? 'border-amber-700/35 bg-amber-50/45 ring-2 ring-amber-700/20 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized
                      ? 'bg-amber-800 text-white'
                      : 'bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200/90'
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <p className="text-sm font-medium leading-snug text-zinc-900 sm:text-[0.9375rem]">
                  {stage.label}
                </p>
              </article>
              {!isLast ? <StepArrow /> : null}
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

function StepArrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden>
      <span className="text-lg font-medium text-zinc-400">↓</span>
    </div>
  )
}
