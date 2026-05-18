'use client'

import {
  SWEET_BITTER_PATTERN_DEFAULT_CAPTION,
  SWEET_BITTER_PATTERN_STAGES,
  type SweetBitterPatternStageData,
} from '@/lib/sweet-bitter-pattern-stages'

export interface SweetBitterPatternProps {
  stages?: readonly SweetBitterPatternStageData[]
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

function toneClasses(tone: SweetBitterPatternStageData['tone'], emphasized: boolean): string {
  if (tone === 'sweet') {
    return emphasized
      ? 'border-amber-500/40 bg-amber-50/70 ring-2 ring-amber-500/20'
      : 'border-amber-200/80 bg-amber-50/40'
  }
  if (tone === 'bitter') {
    return emphasized
      ? 'border-slate-500/40 bg-slate-100/80 ring-2 ring-slate-500/15'
      : 'border-slate-300/80 bg-slate-50/60'
  }
  return emphasized
    ? 'border-blue-700/30 bg-blue-50/50 ring-2 ring-blue-600/15'
    : 'border-zinc-200/90 bg-white/90'
}

/** Revelation 10 sweet-and-bitter experience flow. */
export function SweetBitterPattern({
  stages,
  highlightedIndices,
  title,
  subtitle,
  caption = SWEET_BITTER_PATTERN_DEFAULT_CAPTION,
  labelledBy,
}: SweetBitterPatternProps) {
  const list = stages !== undefined && stages.length > 0 ? stages : SWEET_BITTER_PATTERN_STAGES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'sweet-bitter-pattern-heading' : undefined)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Flow showing the sweet and bitter experience of Revelation 10.'}
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

      <ol className="relative grid gap-3 sm:grid-cols-2">
        {list.map((stage, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${stage.label}-${index}`} className="relative">
              <article
                className={`h-full rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${toneClasses(stage.tone, emphasized)} ring-1 ring-zinc-950/[0.03]`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Step {index + 1}</p>
                <h4 className="mt-1.5 text-sm font-semibold text-zinc-900">{stage.label}</h4>
                <p className="mt-2 text-sm leading-snug text-zinc-600">{stage.tagline}</p>
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
