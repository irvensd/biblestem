'use client'

import {
  TRUE_WORSHIP_COERCED,
  TRUE_WORSHIP_TRUE,
  TRUE_WORSHIP_VS_COERCION_DEFAULT_CAPTION,
  type TrueWorshipVsCoercionStepData,
} from '@/lib/true-worship-vs-coercion-stages'

export interface TrueWorshipVsCoercionProps {
  trueWorshipSteps?: readonly TrueWorshipVsCoercionStepData[]
  coercedSteps?: readonly TrueWorshipVsCoercionStepData[]
  trueWorshipColumnTitle?: string
  coercedColumnTitle?: string
  trueWorshipScriptureRef?: string
  coercedScriptureRef?: string
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

/** Contrast between true worship motivated by love and coerced worship driven by fear. */
export function TrueWorshipVsCoercion({
  trueWorshipSteps,
  coercedSteps,
  trueWorshipColumnTitle = TRUE_WORSHIP_TRUE.columnTitle,
  coercedColumnTitle = TRUE_WORSHIP_COERCED.columnTitle,
  trueWorshipScriptureRef = TRUE_WORSHIP_TRUE.scriptureRef,
  coercedScriptureRef = TRUE_WORSHIP_COERCED.scriptureRef,
  highlightedIndices,
  title = 'True Worship Cannot Be Forced',
  subtitle,
  caption = TRUE_WORSHIP_VS_COERCION_DEFAULT_CAPTION,
  labelledBy,
}: TrueWorshipVsCoercionProps) {
  const trueList = trueWorshipSteps ?? TRUE_WORSHIP_TRUE.steps
  const coercedList = coercedSteps ?? TRUE_WORSHIP_COERCED.steps
  const rowCount = Math.max(trueList.length, coercedList.length)
  const focus = clampHighlightSet(highlightedIndices, rowCount)
  const headingId = labelledBy ?? 'true-worship-vs-coercion-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Contrast between true worship motivated by love and coerced worship driven by fear."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3">
        <div className="flex flex-col">
          <div className="mb-3 rounded-lg border border-blue-200/80 bg-blue-50/40 px-3 py-2.5">
            <h4 className="text-sm font-semibold text-zinc-900">{trueWorshipColumnTitle}</h4>
            <p className="mt-1 text-xs font-medium text-blue-900/75">{trueWorshipScriptureRef}</p>
          </div>
          <ol className="flex flex-1 flex-col gap-2">
            {trueList.map((step, index) => {
              const emphasized = focus.has(index)
              return (
                <li key={`true-${step.label}-${index}`}>
                  <article
                    className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                      emphasized
                        ? 'border-blue-700/30 bg-blue-50/55 ring-2 ring-blue-600/12 ring-offset-2 ring-offset-stone-50'
                        : 'border-blue-200/60 bg-white/90 ring-1 ring-blue-900/[0.04]'
                    }`}
                  >
                    <p className="text-sm font-medium text-zinc-900">{step.label}</p>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="flex flex-col">
          <div className="mb-3 rounded-lg border border-amber-200/70 bg-amber-50/25 px-3 py-2.5">
            <h4 className="text-sm font-semibold text-zinc-900">{coercedColumnTitle}</h4>
            <p className="mt-1 text-xs font-medium text-amber-900/75">{coercedScriptureRef}</p>
          </div>
          <ol className="flex flex-1 flex-col gap-2">
            {coercedList.map((step, index) => {
              const emphasized = focus.has(index)
              return (
                <li key={`coerced-${step.label}-${index}`}>
                  <article
                    className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                      emphasized
                        ? 'border-amber-700/30 bg-amber-50/45 ring-2 ring-amber-600/12 ring-offset-2 ring-offset-stone-50'
                        : 'border-amber-200/60 bg-white/90 ring-1 ring-amber-900/[0.04]'
                    }`}
                  >
                    <p className="text-sm font-medium text-zinc-900">{step.label}</p>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
