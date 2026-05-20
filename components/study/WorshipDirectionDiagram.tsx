'use client'

import { useState } from 'react'
import {
  WORSHIP_DIRECTION_DIAGRAM_DEFAULT_CAPTION,
  WORSHIP_DIRECTION_DIAGRAM_PILLARS,
  type WorshipDirectionDiagramPillarData,
} from '@/lib/worship-direction-diagram-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface WorshipDirectionDiagramProps {
  pillars?: readonly WorshipDirectionDiagramPillarData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Worship Direction Diagram: God, self, and control over others. */
export function WorshipDirectionDiagram({
  pillars,
  highlightedIndices,
  title = 'Worship Direction',
  subtitle,
  caption = WORSHIP_DIRECTION_DIAGRAM_DEFAULT_CAPTION,
  labelledBy,
}: WorshipDirectionDiagramProps) {
  const list = pillars !== undefined && pillars.length > 0 ? pillars : WORSHIP_DIRECTION_DIAGRAM_PILLARS
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const headingId = labelledBy ?? 'worship-direction-diagram-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Diagram showing worship directed toward God, self, or control over others."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {list.map((pillar, index) => {
          const emphasized = activeIndex === index || (activeIndex === null && presetFocus.has(index))
          return (
            <li key={`${pillar.label}-${index}`}>
              <button
                type="button"
                className={`h-full w-full rounded-xl border px-4 py-4 text-left shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                    : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-pressed={emphasized}
              >
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{pillar.label}</h4>
                <p className="mt-1.5 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{pillar.tagline}</p>
                {emphasized ? (
                  <p className={`mt-2 text-xs font-medium ${WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture}`}>
                    {pillar.reference}
                  </p>
                ) : null}
              </button>
            </li>
          )
        })}
      </ul>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
