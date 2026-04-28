'use client'

import { useCallback, useId, useState } from 'react'

/** Fixed Daniel 2 statue sequence — lesson-ready copy (Daniel 2:31–45). */
export type Daniel2KingdomSegment = {
  id: string
  label: string
  /** Display range for the era (approximate where historians apply diverse dating). */
  range: string
  /** Short tie to the vision’s metals / imagery. */
  explanation: string
}

export const DANIEL_2_KINGDOM_SEGMENTS: Daniel2KingdomSegment[] = [
  {
    id: 'babylon',
    label: 'Babylon',
    range: '606 BC – 539 BC',
    explanation: 'Head of gold',
  },
  {
    id: 'medo-persia',
    label: 'Medo-Persia',
    range: '539 BC – 331 BC',
    explanation: 'Chest and arms of silver',
  },
  {
    id: 'greece',
    label: 'Greece',
    range: '331 BC – 168 BC',
    explanation: 'Belly and thighs of bronze',
  },
  {
    id: 'rome',
    label: 'Rome',
    range: '168 BC – AD 476',
    explanation: 'Legs of iron',
  },
  {
    id: 'divided-rome',
    label: 'Divided Rome',
    range: 'AD 476 – Present',
    explanation: 'Feet of iron and clay',
  },
  {
    id: 'eternal-kingdom',
    label: "God’s Eternal Kingdom",
    range: '',
    explanation: 'Stone becomes a great mountain and fills the earth',
  },
]

export type Daniel2KingdomsDiagramProps = {
  className?: string
  /** Supporting line under the eternal kingdom (e.g. Advent hope). */
  secondComingLabel?: string
  /** When false, explanations stay visible on mobile (no tap). */
  enableMobileTapReveal?: boolean
}

function segmentClasses(index: number, hoverIndex: number | null, eternal: boolean) {
  const on = hoverIndex === index
  if (eternal) {
    return on
      ? 'fill-sky-50 stroke-sky-400/90'
      : 'fill-sky-50/50 stroke-sky-300/75'
  }
  return on ? 'fill-zinc-100 stroke-zinc-500' : 'fill-[#fcfcfb] stroke-zinc-400/90'
}

/**
 * Original BibleStem diagram: Daniel 2 kingdom sequence as calm line-art statue + labels.
 * Desktop: hover highlights matching statue segment and row. Mobile: optional tap to reveal explanation.
 */
export function Daniel2KingdomsDiagram({
  className = '',
  secondComingLabel = 'Second Coming of Christ',
  enableMobileTapReveal = true,
}: Daniel2KingdomsDiagramProps) {
  const baseId = useId()
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null)

  const highlight = useCallback((i: number | null) => {
    setHoverIndex(i)
  }, [])

  const onRowActivate = useCallback(
    (i: number) => {
      if (!enableMobileTapReveal) return
      setMobileOpenIndex((prev) => (prev === i ? null : i))
    },
    [enableMobileTapReveal],
  )

  return (
    <div className={`w-full ${className}`.trim()}>
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-12">
        {/* Statue — abstract stacked geometry (original artwork, not a chart reproduction). */}
        <div className="mx-auto shrink-0 md:mx-0 md:w-[148px] lg:w-[160px]">
          <svg
            viewBox="0 0 100 278"
            className="mx-auto h-auto w-full max-w-[200px] drop-shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            aria-hidden
          >
            <title>Daniel 2 — simplified prophetic silhouette</title>
            <g
              onMouseEnter={() => highlight(0)}
              onMouseLeave={() => highlight(null)}
              onClick={() => onRowActivate(0)}
              className="cursor-pointer transition-colors duration-150 md:cursor-default"
            >
              <ellipse
                cx={50}
                cy={22}
                rx={22}
                ry={17}
                className={`${segmentClasses(0, hoverIndex, false)}`}
                strokeWidth={1.35}
              />
            </g>
            <g
              onMouseEnter={() => highlight(1)}
              onMouseLeave={() => highlight(null)}
              onClick={() => onRowActivate(1)}
              className="cursor-pointer transition-colors duration-150 md:cursor-default"
            >
              <path
                d="M 22 44 Q 50 38 78 44 L 76 82 Q 50 88 24 82 Z"
                className={`${segmentClasses(1, hoverIndex, false)}`}
                strokeWidth={1.35}
              />
            </g>
            <g
              onMouseEnter={() => highlight(2)}
              onMouseLeave={() => highlight(null)}
              onClick={() => onRowActivate(2)}
              className="cursor-pointer transition-colors duration-150 md:cursor-default"
            >
              <path
                d="M 26 84 Q 50 78 74 84 L 72 124 Q 50 130 28 124 Z"
                className={`${segmentClasses(2, hoverIndex, false)}`}
                strokeWidth={1.35}
              />
            </g>
            <g
              onMouseEnter={() => highlight(3)}
              onMouseLeave={() => highlight(null)}
              onClick={() => onRowActivate(3)}
              className="cursor-pointer transition-colors duration-150 md:cursor-default"
            >
              <path
                d="M 34 126 L 66 126 L 62 198 Q 50 204 38 198 Z"
                className={`${segmentClasses(3, hoverIndex, false)}`}
                strokeWidth={1.35}
              />
            </g>
            <g
              onMouseEnter={() => highlight(4)}
              onMouseLeave={() => highlight(null)}
              onClick={() => onRowActivate(4)}
              className="cursor-pointer transition-colors duration-150 md:cursor-default"
            >
              <path
                d="M 28 198 L 48 198 L 46 232 Q 38 238 30 232 Z"
                className={`${segmentClasses(4, hoverIndex, false)}`}
                strokeWidth={1.35}
              />
              <path
                d="M 52 198 L 72 198 L 70 232 Q 62 238 54 232 Z"
                className={`${segmentClasses(4, hoverIndex, false)}`}
                strokeWidth={1.35}
              />
            </g>
            <g
              onMouseEnter={() => highlight(5)}
              onMouseLeave={() => highlight(null)}
              onClick={() => onRowActivate(5)}
              className="cursor-pointer transition-colors duration-150 md:cursor-default"
            >
              <path
                d="M 8 236 Q 50 214 92 236 L 88 268 Q 50 276 12 268 Z"
                className={`${segmentClasses(5, hoverIndex, true)}`}
                strokeWidth={1.45}
              />
              <ellipse cx={50} cy={248} rx={36} ry={8} className="pointer-events-none fill-sky-100/30 stroke-none" />
            </g>
          </svg>
        </div>

        <div className="min-w-0 flex-1 border-l border-zinc-200/90 pl-5 md:pl-6">
          {enableMobileTapReveal ? (
            <p className="mb-3 text-[11px] leading-snug text-zinc-400 md:hidden">Tap a kingdom for its brief explanation.</p>
          ) : null}
          <ul className="space-y-0">
            {DANIEL_2_KINGDOM_SEGMENTS.map((row, i) => {
              const isLast = i === DANIEL_2_KINGDOM_SEGMENTS.length - 1
              const isHighlighted = hoverIndex === i

              return (
                <li key={row.id} className="relative border-b border-zinc-100/90 last:border-b-0">
                  <span
                    className="absolute -left-5 top-[1.125rem] hidden h-px w-4 bg-zinc-300/90 md:block lg:-left-6 lg:w-5"
                    aria-hidden
                  />

                  <button
                    type="button"
                    id={`${baseId}-row-${i}`}
                    className={`w-full cursor-pointer rounded-lg px-2 py-3.5 text-left transition-colors md:cursor-default md:py-3 ${
                      isHighlighted ? 'bg-zinc-50/90 md:bg-zinc-50/70' : 'hover:bg-zinc-50/50 md:hover:bg-zinc-50/40'
                    } ${isLast ? 'ring-1 ring-sky-200/55 ring-offset-2 ring-offset-stone-50' : ''}`}
                    onMouseEnter={() => highlight(i)}
                    onMouseLeave={() => highlight(null)}
                    onClick={() => onRowActivate(i)}
                    aria-expanded={enableMobileTapReveal ? mobileOpenIndex === i : undefined}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="text-[15px] font-semibold tracking-tight text-zinc-900">{row.label}</span>
                      {row.range ? (
                        <span className="text-[12px] font-medium tabular-nums text-zinc-400">{row.range}</span>
                      ) : null}
                    </div>

                    <p
                      className={`mt-1.5 text-[13px] leading-relaxed text-zinc-600 ${
                        enableMobileTapReveal && mobileOpenIndex !== i ? 'hidden md:block' : 'block'
                      }`}
                    >
                      {row.explanation}
                    </p>

                    {isLast && secondComingLabel ? (
                      <p className="mt-3 border-t border-sky-100/85 pt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-800/80">
                        {secondComingLabel}
                      </p>
                    ) : null}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
