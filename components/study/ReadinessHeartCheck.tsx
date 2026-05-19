'use client'

import {
  READINESS_HEART_CHECK_CARDS,
  READINESS_HEART_CHECK_DEFAULT_CAPTION,
  READINESS_HEART_CHECK_DEFAULT_REFLECTION,
  type ReadinessHeartCheckCardData,
} from '@/lib/readiness-heart-check-stages'

export interface ReadinessHeartCheckProps {
  cards?: readonly ReadinessHeartCheckCardData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  reflectionPrompt?: string
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

/** Matthew 25 readiness: watchful, faithful, loving, Spirit-filled, hopeful. */
export function ReadinessHeartCheck({
  cards,
  highlightedIndices,
  title = 'Ready for the Bridegroom',
  subtitle,
  caption = READINESS_HEART_CHECK_DEFAULT_CAPTION,
  reflectionPrompt = READINESS_HEART_CHECK_DEFAULT_REFLECTION,
  labelledBy,
}: ReadinessHeartCheckProps) {
  const list = cards !== undefined && cards.length > 0 ? cards : READINESS_HEART_CHECK_CARDS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'readiness-heart-check-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Five marks of readiness for Christ's return: watchful, faithful, loving, Spirit-filled, and hopeful."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((card, index) => {
          const emphasized = focus.has(index)
          const isCenter = index === 2
          return (
            <li
              key={`${card.label}-${index}`}
              className={isCenter ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized || isCenter
                    ? 'border-rose-700/30 bg-rose-50/45 ring-2 ring-rose-600/12 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized || isCenter
                      ? 'bg-rose-800 text-white'
                      : 'bg-stone-100 text-zinc-700 ring-1 ring-zinc-200/80'
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-3 text-sm font-semibold text-zinc-900">{card.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600">{card.description}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {reflectionPrompt ? (
        <p className="mt-5 rounded-lg border border-rose-200/70 bg-rose-50/35 px-4 py-3 text-sm font-medium leading-relaxed text-rose-950/90">
          {reflectionPrompt}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
