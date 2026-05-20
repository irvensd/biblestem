'use client'

import { useCallback, useState } from 'react'
import {
  JESUS_IN_SUFFERING_PLACES_CARDS,
  JESUS_IN_SUFFERING_PLACES_COMPLETE_SUMMARY,
  JESUS_IN_SUFFERING_PLACES_DEFAULT_CAPTION,
  JESUS_IN_SUFFERING_PLACES_REFLECTION_QUESTIONS,
  type JesusInSufferingPlacesCardData,
} from '@/lib/jesus-in-suffering-places-stages'
import {
  SUFFERING_STUDY_ACCENT,
  clampSufferingStudyHighlightSet,
} from '@/lib/suffering-study-visual-accent'

export interface JesusInSufferingPlacesProps {
  cards?: readonly JesusInSufferingPlacesCardData[]
  reflectionQuestions?: readonly string[]
  completionSummary?: string
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Jesus in the Suffering Places: interactive cards for where Christ meets human pain. */
export function JesusInSufferingPlaces({
  cards,
  reflectionQuestions,
  completionSummary,
  highlightedIndices,
  title = 'Jesus in the Suffering Places',
  subtitle,
  caption = JESUS_IN_SUFFERING_PLACES_DEFAULT_CAPTION,
  labelledBy,
}: JesusInSufferingPlacesProps) {
  const list = cards !== undefined && cards.length > 0 ? cards : JESUS_IN_SUFFERING_PLACES_CARDS
  const prompts =
    reflectionQuestions !== undefined && reflectionQuestions.length > 0
      ? reflectionQuestions
      : JESUS_IN_SUFFERING_PLACES_REFLECTION_QUESTIONS
  const presetFocus = clampSufferingStudyHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const [visited, setVisited] = useState<Set<number>>(() => new Set(presetFocus))
  const headingId = labelledBy ?? 'jesus-in-suffering-places-heading'
  const allVisited = visited.size >= list.length

  const openCard = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
    setVisited((prev) => {
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }, [])

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Interactive cards showing where Jesus meets human suffering."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {list.map((card, index) => {
          const open = activeIndex === index
          const explored = visited.has(index)
          return (
            <li key={`${card.label}-${index}`}>
              <button
                type="button"
                onClick={() => openCard(index)}
                className={`flex h-full w-full flex-col rounded-xl border px-4 py-3 text-left shadow-sm transition-[box-shadow,border-color] ${
                  open
                    ? SUFFERING_STUDY_ACCENT.emphArticle
                    : explored
                      ? 'border-emerald-200/90 bg-emerald-50/30 dark:border-emerald-800/40 dark:bg-emerald-950/20'
                      : SUFFERING_STUDY_ACCENT.defaultArticle
                }`}
                aria-pressed={open}
              >
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.label}</span>
                {open ? (
                  <>
                    <p className={`mt-2 text-xs font-medium ${SUFFERING_STUDY_ACCENT.scripture}`}>{card.reference}</p>
                    <p className="mt-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{card.description}</p>
                    <ul className="mt-3 space-y-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-700 dark:bg-zinc-900/50">
                      {prompts.map((q, qi) => (
                        <li key={qi} className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                          <span className="font-medium text-zinc-500">{qi + 1}. </span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">Tap to explore</p>
                )}
              </button>
            </li>
          )
        })}
      </ul>

      {allVisited ? (
        <p className="mt-4 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          {completionSummary ?? JESUS_IN_SUFFERING_PLACES_COMPLETE_SUMMARY}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
