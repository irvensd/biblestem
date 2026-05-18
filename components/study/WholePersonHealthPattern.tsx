'use client'

import {
  WHOLE_PERSON_HEALTH_AREAS,
  WHOLE_PERSON_HEALTH_DEFAULT_CAPTION,
  type WholePersonHealthAreaData,
} from '@/lib/whole-person-health-pattern-stages'

export interface WholePersonHealthPatternProps {
  areas?: readonly WholePersonHealthAreaData[]
  /** 0-based indices into the rendered area list. */
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

const areaStyles: Record<WholePersonHealthAreaData['area'], string> = {
  Body: 'border-emerald-200/90 bg-emerald-50/40 ring-emerald-700/15',
  Mind: 'border-sky-200/90 bg-sky-50/40 ring-sky-700/15',
  Heart: 'border-rose-200/90 bg-rose-50/35 ring-rose-700/15',
  Spirit: 'border-violet-200/90 bg-violet-50/40 ring-violet-700/15',
}

const areaHighlightStyles: Record<WholePersonHealthAreaData['area'], string> = {
  Body: 'border-emerald-700/35 bg-emerald-50/55 ring-2 ring-emerald-700/20 ring-offset-2 ring-offset-stone-50',
  Mind: 'border-sky-700/35 bg-sky-50/55 ring-2 ring-sky-700/20 ring-offset-2 ring-offset-stone-50',
  Heart: 'border-rose-700/35 bg-rose-50/55 ring-2 ring-rose-700/20 ring-offset-2 ring-offset-stone-50',
  Spirit: 'border-violet-700/35 bg-violet-50/55 ring-2 ring-violet-700/20 ring-offset-2 ring-offset-stone-50',
}

/** Responsive whole-person health overview: body, mind, heart, and spirit. */
export function WholePersonHealthPattern({
  areas,
  highlightedIndices,
  title,
  subtitle,
  caption = WHOLE_PERSON_HEALTH_DEFAULT_CAPTION,
  labelledBy,
}: WholePersonHealthPatternProps) {
  const list = areas !== undefined && areas.length > 0 ? areas : WHOLE_PERSON_HEALTH_AREAS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? (title ? 'whole-person-health-pattern-heading' : undefined)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : 'Whole person health areas'}
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

      <ol className="grid list-none gap-3 sm:grid-cols-2 sm:gap-3.5">
        {list.map((entry, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={entry.area}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-3.5 shadow-sm transition-[box-shadow,border-color] sm:min-h-[9.5rem] ${
                  emphasized ? areaHighlightStyles[entry.area] : `${areaStyles[entry.area]} ring-1 ring-inset`
                }`}
              >
                <h4 className="text-sm font-semibold tracking-tight text-zinc-900">{entry.area}</h4>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {entry.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex rounded-md bg-white/80 px-2 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
