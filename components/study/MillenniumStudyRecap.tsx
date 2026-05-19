'use client'

import {
  MILLENNIUM_STUDY_RECAP_DEFAULT_CAPTION,
  MILLENNIUM_STUDY_RECAP_SECTIONS,
  type MillenniumStudyRecapSectionData,
} from '@/lib/millennium-study-recap-stages'

export interface MillenniumStudyRecapProps {
  sections?: readonly MillenniumStudyRecapSectionData[]
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

/** Five-part recap of The Millennium study. */
export function MillenniumStudyRecap({
  sections,
  highlightedIndices,
  title = 'The Millennium',
  subtitle,
  caption = MILLENNIUM_STUDY_RECAP_DEFAULT_CAPTION,
  labelledBy,
}: MillenniumStudyRecapProps) {
  const list = sections !== undefined && sections.length > 0 ? sections : MILLENNIUM_STUDY_RECAP_SECTIONS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'millennium-study-recap-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Summary of the BibleStem study on the Millennium."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
        {list.map((section, index) => {
          const emphasized = focus.has(index)
          const isLast = index === list.length - 1
          return (
            <li key={`${section.label}-${index}`} className="relative flex flex-1 flex-col lg:min-w-0">
              {!isLast ? (
                <span
                  className="absolute -bottom-3 left-1/2 z-10 hidden h-3 w-px -translate-x-1/2 bg-indigo-200 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:block lg:h-px lg:w-3 lg:translate-x-full lg:-translate-y-1/2"
                  aria-hidden
                />
              ) : null}
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized
                    ? 'border-indigo-700/35 bg-indigo-50/50 ring-2 ring-indigo-700/15 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized ? 'bg-indigo-800 text-white' : 'bg-indigo-50 text-indigo-900 ring-1 ring-indigo-200/80'
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-3 text-sm font-semibold text-zinc-900">{section.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600">{section.description}</p>
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
