'use client'

import {
  CHRIST_VS_BABYLON_BABYLON,
  CHRIST_VS_BABYLON_CHRIST,
  CHRIST_VS_BABYLON_CONTRAST_DEFAULT_CAPTION,
  type ChristVsBabylonContrastStepData,
} from '@/lib/christ-vs-babylon-contrast-stages'

export interface ChristVsBabylonContrastProps {
  christSteps?: readonly ChristVsBabylonContrastStepData[]
  babylonSteps?: readonly ChristVsBabylonContrastStepData[]
  christColumnTitle?: string
  babylonColumnTitle?: string
  christScriptureRef?: string
  babylonScriptureRef?: string
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

/** Contrast between Christ's downward humility and Babylon's upward self-exaltation. */
export function ChristVsBabylonContrast({
  christSteps,
  babylonSteps,
  christColumnTitle = CHRIST_VS_BABYLON_CHRIST.columnTitle,
  babylonColumnTitle = CHRIST_VS_BABYLON_BABYLON.columnTitle,
  christScriptureRef = CHRIST_VS_BABYLON_CHRIST.scriptureRef,
  babylonScriptureRef = CHRIST_VS_BABYLON_BABYLON.scriptureRef,
  highlightedIndices,
  title = 'Two Opposite Ways',
  subtitle,
  caption = CHRIST_VS_BABYLON_CONTRAST_DEFAULT_CAPTION,
  labelledBy,
}: ChristVsBabylonContrastProps) {
  const christList = christSteps ?? CHRIST_VS_BABYLON_CHRIST.steps
  const babylonList = babylonSteps ?? CHRIST_VS_BABYLON_BABYLON.steps
  const rowCount = Math.max(christList.length, babylonList.length)
  const focus = clampHighlightSet(highlightedIndices, rowCount)
  const headingId = labelledBy ?? 'christ-vs-babylon-contrast-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Contrast between the way of Christ and the way of Babylon."
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
          <div className="mb-3 rounded-lg border border-sky-200/80 bg-sky-50/40 px-3 py-2.5">
            <h4 className="text-sm font-semibold text-zinc-900">{christColumnTitle}</h4>
            <p className="mt-1 text-xs font-medium text-sky-900/75">{christScriptureRef}</p>
          </div>
          <ol className="flex flex-1 flex-col gap-2">
            {christList.map((step, index) => {
              const emphasized = focus.has(index)
              return (
                <li key={`christ-${step.label}-${index}`}>
                  <article
                    className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                      emphasized
                        ? 'border-sky-700/30 bg-sky-50/55 ring-2 ring-sky-600/12 ring-offset-2 ring-offset-stone-50'
                        : 'border-sky-200/60 bg-white/90 ring-1 ring-sky-900/[0.04]'
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
            <h4 className="text-sm font-semibold text-zinc-900">{babylonColumnTitle}</h4>
            <p className="mt-1 text-xs font-medium text-amber-900/75">{babylonScriptureRef}</p>
          </div>
          <ol className="flex flex-1 flex-col gap-2">
            {babylonList.map((step, index) => {
              const emphasized = focus.has(index)
              return (
                <li key={`babylon-${step.label}-${index}`}>
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
