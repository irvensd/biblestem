'use client'

import { useCallback, useState } from 'react'
import {
  DECEPTION_PATTERN_BUILDER_DEFAULT_CAPTION,
  DECEPTION_PATTERN_BUILDER_STEPS,
  type DeceptionPatternBuilderStepData,
} from '@/lib/deception-pattern-builder-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface DeceptionPatternBuilderProps {
  steps?: readonly DeceptionPatternBuilderStepData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

function moveItem<T>(list: readonly T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) {
    return [...list]
  }
  const next = [...list]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item!)
  return next
}

/** Deception Pattern Builder: ordered steps with tap-to-reveal references and simple reorder controls. */
export function DeceptionPatternBuilder({
  steps: initialSteps,
  highlightedIndices,
  title = 'Deception Pattern',
  subtitle,
  caption = DECEPTION_PATTERN_BUILDER_DEFAULT_CAPTION,
  labelledBy,
}: DeceptionPatternBuilderProps) {
  const defaults =
    initialSteps !== undefined && initialSteps.length > 0
      ? [...initialSteps]
      : [...DECEPTION_PATTERN_BUILDER_STEPS]
  const [ordered, setOrdered] = useState(defaults)
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, ordered.length)
  const [openIndex, setOpenIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const headingId = labelledBy ?? 'deception-pattern-builder-heading'

  const moveUp = useCallback((index: number) => {
    if (index <= 0) return
    setOrdered((prev) => moveItem(prev, index, index - 1))
    setOpenIndex((prev) => (prev === index ? index - 1 : prev === index - 1 ? index : prev))
  }, [])

  const moveDown = useCallback((index: number) => {
    setOrdered((prev) => {
      if (index >= prev.length - 1) return prev
      return moveItem(prev, index, index + 1)
    })
    setOpenIndex((prev) => (prev === index ? index + 1 : prev === index + 1 ? index : prev))
  }, [])

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Ordered steps showing Satan's deception pattern in Eden."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="space-y-3">
        {ordered.map((step, index) => {
          const open = openIndex === index
          return (
            <li key={`${step.label}-${index}`}>
              <article
                className={`rounded-xl border px-4 py-3 shadow-sm ${
                  open ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
              >
                <div className="flex gap-2">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                      open ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeEmph : WHEN_HEAVEN_BROKE_STUDY_ACCENT.badgeDefault
                    }`}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                    >
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.label}</span>
                      <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{step.description}</p>
                      {open ? (
                        <p className={`mt-2 text-xs font-medium ${WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture}`}>
                          {step.reference}
                        </p>
                      ) : null}
                    </button>
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-zinc-200/90 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        onClick={() => moveUp(index)}
                        disabled={index === 0}
                        aria-label={`Move step ${index + 1} up`}
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-zinc-200/90 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        onClick={() => moveDown(index)}
                        disabled={index === ordered.length - 1}
                        aria-label={`Move step ${index + 1} down`}
                      >
                        Down
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ol>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
