'use client'

import {
  FEAR_GLORY_JUDGMENT_CREATOR_MAP_CENTER,
  FEAR_GLORY_JUDGMENT_CREATOR_MAP_DEFAULT_CAPTION,
  FEAR_GLORY_JUDGMENT_CREATOR_MAP_RESPONSES,
  type FearGloryJudgmentCreatorResponseData,
} from '@/lib/fear-glory-judgment-creator-map-stages'

export interface FearGloryJudgmentCreatorMapProps {
  centerLabel?: string
  centerDescription?: string
  responses?: readonly FearGloryJudgmentCreatorResponseData[]
  /** 0-based indices into the four response cards. */
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

/** Hub map: four gospel responses around the everlasting gospel. */
export function FearGloryJudgmentCreatorMap({
  centerLabel = FEAR_GLORY_JUDGMENT_CREATOR_MAP_CENTER.label,
  centerDescription = FEAR_GLORY_JUDGMENT_CREATOR_MAP_CENTER.description,
  responses,
  highlightedIndices,
  title = 'Our Response to the Good News',
  subtitle,
  caption = FEAR_GLORY_JUDGMENT_CREATOR_MAP_DEFAULT_CAPTION,
  labelledBy,
}: FearGloryJudgmentCreatorMapProps) {
  const list =
    responses !== undefined && responses.length > 0 ? responses : FEAR_GLORY_JUDGMENT_CREATOR_MAP_RESPONSES
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'fear-glory-judgment-creator-map-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Map showing four responses to the everlasting gospel in the first angel's message."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="flex flex-col gap-4">
        <article className="relative mx-auto w-full max-w-md rounded-xl border border-rose-700/30 bg-rose-50/40 px-5 py-5 text-center shadow-sm ring-1 ring-rose-700/10">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-900/80">Center</p>
          <h4 className="mt-1 text-base font-semibold text-zinc-900">{centerLabel}</h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{centerDescription}</p>
        </article>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-3.5">
          {list.map((item, index) => {
            const emphasized = focus.has(index)
            return (
              <li key={`${item.label}-${index}`} className="relative">
                <span
                  className="absolute -top-3 left-1/2 hidden h-3 w-px -translate-x-1/2 bg-zinc-200 sm:block lg:hidden"
                  aria-hidden
                />
                <article
                  className={`h-full rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                    emphasized
                      ? 'border-rose-700/35 bg-rose-50/50 ring-2 ring-rose-700/15 ring-offset-2 ring-offset-stone-50'
                      : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                  }`}
                >
                  <h4 className="text-sm font-semibold text-zinc-900">{item.label}</h4>
                  <p className="mt-1.5 text-sm leading-snug text-zinc-600">{item.description}</p>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
