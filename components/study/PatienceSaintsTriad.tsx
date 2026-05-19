'use client'

import {
  PATIENCE_SAINTS_TRIAD_DEFAULT_CAPTION,
  PATIENCE_SAINTS_TRIAD_ELEMENTS,
  type PatienceSaintsTriadElementData,
} from '@/lib/patience-saints-triad-stages'

export interface PatienceSaintsTriadProps {
  elements?: readonly PatienceSaintsTriadElementData[]
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

/** Revelation 14:12: endurance, commandments of God, and faith of Jesus. */
export function PatienceSaintsTriad({
  elements,
  highlightedIndices,
  title = 'The Patience of the Saints',
  subtitle,
  caption = PATIENCE_SAINTS_TRIAD_DEFAULT_CAPTION,
  labelledBy,
}: PatienceSaintsTriadProps) {
  const list = elements !== undefined && elements.length > 0 ? elements : PATIENCE_SAINTS_TRIAD_ELEMENTS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'patience-saints-triad-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Three elements of Revelation 14 verse 12: endurance, commandments of God, and faith of Jesus."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="relative grid grid-cols-1 gap-3 md:grid-cols-3">
        {list.map((element, index) => {
          const emphasized = focus.has(index)
          const isCenter = index === 1
          return (
            <li key={`${element.label}-${index}`} className={isCenter ? 'md:mt-0' : undefined}>
              <article
                className={`flex h-full flex-col rounded-xl border px-4 py-4 shadow-sm transition-[box-shadow,border-color] ${
                  emphasized || isCenter
                    ? 'border-blue-700/35 bg-blue-50/50 ring-2 ring-blue-600/12 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    emphasized || isCenter
                      ? 'bg-blue-800 text-white'
                      : 'bg-stone-100 text-zinc-700 ring-1 ring-zinc-200/80'
                  }`}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h4 className="mt-3 text-sm font-semibold text-zinc-900">{element.label}</h4>
                <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600">{element.description}</p>
              </article>
            </li>
          )
        })}
      </ul>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
