'use client'

import {
  BAPTISM_MEANING_PATTERN_DEFAULT_CAPTION,
  BAPTISM_MEANING_PATTERN_STAGES,
  type BaptismMeaningPatternStageData,
} from '@/lib/baptism-meaning-pattern-stages'

export interface BaptismMeaningPatternProps {
  stages?: readonly BaptismMeaningPatternStageData[]
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

/** Responsive baptism-by-immersion meaning: surrender, burial, resurrection, new life. */
export function BaptismMeaningPattern({
  stages,
  highlightedIndices,
  title,
  subtitle,
  caption = BAPTISM_MEANING_PATTERN_DEFAULT_CAPTION,
  labelledBy,
}: BaptismMeaningPatternProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : BAPTISM_MEANING_PATTERN_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'baptism-meaning-pattern-heading' : undefined)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Baptism meaning by immersion'}
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
          const isImmersionStep = index === 1 || index === 2
          return (
            <li key={`${stage.label}-${index}`}>
              <article
                className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 shadow-sm transition-[box-shadow,border-color] sm:items-center ${
                  emphasized
                    ? 'border-sky-700/35 bg-sky-50/50 ring-2 ring-sky-700/20 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums sm:mt-0 ${
                    emphasized
                      ? 'bg-sky-800 text-white'
                      : isImmersionStep
                        ? 'bg-sky-100 text-sky-800 ring-1 ring-sky-200/90'
                        : 'bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200/90'
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <StageCopy label={stage.label} subtitle={stage.subtitle} />
              </article>
              {!isLast ? <StepArrow immersion={isImmersionStep} /> : null}
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

function StageCopy({ label, subtitle }: BaptismMeaningPatternStageData) {
  return (
    <div className="min-w-0 flex-1 space-y-0.5">
      <p className="text-sm font-semibold leading-snug text-zinc-900 sm:text-[0.9375rem]">{label}</p>
      <p className="text-sm leading-relaxed text-zinc-600">{subtitle}</p>
    </div>
  )
}

function StepArrow({ immersion }: { immersion: boolean }) {
  return (
    <div className="flex justify-center py-1.5" aria-hidden>
      <span className={`text-lg font-medium ${immersion ? 'text-sky-500/90' : 'text-zinc-400'}`}>↓</span>
    </div>
  )
}
