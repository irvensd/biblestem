'use client'

import {
  THIRD_ANGELS_MESSAGE_BREAKDOWN_DEFAULT_CAPTION,
  THIRD_ANGELS_MESSAGE_BREAKDOWN_SECTIONS,
  type ThirdAngelsMessageBreakdownSectionData,
} from '@/lib/third-angels-message-breakdown-stages'

export interface ThirdAngelsMessageBreakdownProps {
  sections?: readonly ThirdAngelsMessageBreakdownSectionData[]
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

const accentBar = [
  'bg-blue-700/80',
  'bg-blue-600/70',
  'bg-blue-700/75',
  'bg-blue-600/65',
  'bg-blue-800/70',
]

/** Five-part structure of Revelation 14:9-12 (third angel's message). */
export function ThirdAngelsMessageBreakdown({
  sections,
  highlightedIndices,
  title = 'The Third Angel\'s Message',
  subtitle = 'Revelation 14:9-12',
  caption = THIRD_ANGELS_MESSAGE_BREAKDOWN_DEFAULT_CAPTION,
  labelledBy,
}: ThirdAngelsMessageBreakdownProps) {
  const list =
    sections !== undefined && sections.length > 0 ? sections : THIRD_ANGELS_MESSAGE_BREAKDOWN_SECTIONS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'third-angels-message-breakdown-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Breakdown of the third angel's message from Revelation 14 verses 9 through 12."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="relative space-y-3 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
        {list.map((section, index) => {
          const emphasized = focus.has(index)
          const isLastOdd = list.length % 2 === 1 && index === list.length - 1
          return (
            <li
              key={`${section.label}-${index}`}
              className={isLastOdd ? 'lg:col-span-2 lg:max-w-md lg:justify-self-center lg:w-full' : undefined}
            >
              {index < list.length - 1 ? (
                <span
                  className="absolute left-[1.125rem] top-[2.75rem] bottom-[-0.75rem] w-px bg-zinc-200 lg:hidden"
                  aria-hidden
                />
              ) : null}
              <article
                className={`relative overflow-hidden rounded-xl border shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? 'border-blue-700/35 bg-blue-50/50 ring-2 ring-blue-700/15 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 ${accentBar[index % accentBar.length]}`}
                  aria-hidden
                />
                <div className="px-4 py-4 pl-5">
                  <div className="flex gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold tabular-nums ${
                        emphasized
                          ? 'bg-blue-800 text-white'
                          : 'bg-stone-100 text-zinc-700 ring-1 ring-zinc-200/80'
                      }`}
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h4 className="text-sm font-semibold text-zinc-900">{section.label}</h4>
                      <p className="mt-1.5 text-sm leading-snug text-zinc-600">{section.description}</p>
                    </div>
                  </div>
                </div>
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
