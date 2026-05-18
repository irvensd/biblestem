'use client'

import {
  CREATION_REST_PATTERN_DEFAULT_CAPTION,
  CREATION_REST_PATTERN_STAGES,
  type CreationRestPatternStageData,
} from '@/lib/creation-rest-pattern-stages'

export interface CreationRestPatternProps {
  stages?: readonly CreationRestPatternStageData[]
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

const phaseLabel: Record<CreationRestPatternStageData['phase'], string> = {
  forming: 'Forming',
  filling: 'Filling',
  rest: 'Rest',
}

const phaseStyles: Record<CreationRestPatternStageData['phase'], string> = {
  forming: 'bg-zinc-100 text-zinc-700 ring-zinc-200/90',
  filling: 'bg-blue-50/80 text-blue-900 ring-blue-200/80',
  rest: 'bg-emerald-50/90 text-emerald-900 ring-emerald-200/80',
}

function StageHeader({ dayLabel, phase }: { dayLabel: string; phase: CreationRestPatternStageData['phase'] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold tracking-tight text-zinc-900">{dayLabel}</span>
      <span
        className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${phaseStyles[phase]}`}
      >
        {phaseLabel[phase]}
      </span>
    </div>
  )
}

/** Responsive creation-week forming/filling pattern (days 1–6 paired; day 7 rest). */
export function CreationRestPattern({
  stages,
  highlightedIndices,
  title,
  subtitle,
  caption = CREATION_REST_PATTERN_DEFAULT_CAPTION,
  labelledBy,
}: CreationRestPatternProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : CREATION_REST_PATTERN_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'creation-rest-pattern-heading' : undefined)
  const restIndex = list.findIndex((s) => s.phase === 'rest')
  const restStage = restIndex >= 0 ? list[restIndex] : null
  const pairedStages = list.filter((s) => s.phase !== 'rest')

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Creation week forming and filling pattern'}
    >
      {title ? (
        <header className="mb-4">
          <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
            {title}
          </h3>
          {subtitle ? <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p> : null}
        </header>
      ) : null}

      <ol className="grid list-none gap-3 sm:grid-cols-2 sm:gap-3.5">
        {pairedStages.map((stage, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${stage.dayLabel}-${stage.phase}`}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-3.5 shadow-sm transition-[box-shadow,border-color] sm:min-h-[8.5rem] ${
                  emphasized
                    ? 'border-blue-800/40 bg-blue-50/35 ring-2 ring-blue-800/25 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <StageHeader dayLabel={stage.dayLabel} phase={stage.phase} />
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">{stage.summary}</p>
              </article>
            </li>
          )
        })}
      </ol>

      {restStage ? (
        <div className="mt-3.5">
          <article
            className={`rounded-xl border px-4 py-3.5 shadow-sm sm:px-5 sm:py-4 ${
              focus.has(restIndex)
                ? 'border-emerald-700/35 bg-emerald-50/50 ring-2 ring-emerald-700/20 ring-offset-2 ring-offset-stone-50'
                : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
            }`}
          >
            <StageHeader dayLabel={restStage.dayLabel} phase={restStage.phase} />
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">{restStage.summary}</p>
          </article>
        </div>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
