'use client'

import {
  SANCTUARY_DIAGRAM_AREAS,
  SANCTUARY_DIAGRAM_DEFAULT_CAPTION,
  type SanctuaryDiagramAreaData,
} from '@/lib/sanctuary-diagram-stages'

export interface SanctuaryDiagramProps {
  areas?: readonly SanctuaryDiagramAreaData[]
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

const ZONE_TONES = [
  'border-amber-200/70 bg-amber-50/30',
  'border-blue-200/70 bg-blue-50/30',
  'border-indigo-300/70 bg-indigo-50/40',
] as const

/** Top-down sanctuary layout: courtyard, holy place, most holy place. */
export function SanctuaryDiagram({
  areas,
  highlightedIndices,
  title = 'The Sanctuary',
  subtitle,
  caption = SANCTUARY_DIAGRAM_DEFAULT_CAPTION,
  labelledBy,
}: SanctuaryDiagramProps) {
  const list = areas !== undefined && areas.length > 0 ? areas : SANCTUARY_DIAGRAM_AREAS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'sanctuary-diagram-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Diagram of the sanctuary showing the courtyard, holy place, and most holy place."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="space-y-3">
        {list.map((area, index) => {
          const emphasized = focus.has(index)
          const tone = ZONE_TONES[index] ?? ZONE_TONES[0]
          return (
            <article
              key={area.name}
              className={`rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${tone} ${
                emphasized
                  ? 'ring-2 ring-blue-600/20 ring-offset-2 ring-offset-stone-50'
                  : 'ring-1 ring-zinc-950/[0.03]'
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">{area.name}</h4>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">{area.phaseLabel}</p>
                </div>
                <ul className="flex flex-wrap gap-2 sm:max-w-[55%] sm:justify-end">
                  {area.furniture.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-white/80 px-2.5 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
