'use client'

import { useMemo, useState } from 'react'
import {
  SATANS_METHODS_MATRIX_COMPLETE_SUMMARY,
  SATANS_METHODS_MATRIX_DEFAULT_CAPTION,
  SATANS_METHODS_MATRIX_ROWS,
  type SatansMethodsMatrixRowData,
  type SatansMethodsMatrixScenarioData,
} from '@/lib/satans-methods-matrix-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface SatansMethodsMatrixProps {
  rows?: readonly SatansMethodsMatrixRowData[]
  scenarios?: readonly SatansMethodsMatrixScenarioData[]
  completionSummary?: string
  matchScriptures?: boolean
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

function allMatchesCorrect(
  list: readonly SatansMethodsMatrixRowData[],
  matches: Readonly<Record<number, string>>,
): boolean {
  return list.every((row, index) => matches[index] === row.reference)
}

function allScenariosCorrect(
  scenarios: readonly SatansMethodsMatrixScenarioData[],
  answers: Readonly<Record<number, string | null>>,
): boolean {
  return scenarios.every((scenario, index) => answers[index] === scenario.answer)
}

/** Satan's Methods Matrix: methods, Scripture matching, and scenario identification. */
export function SatansMethodsMatrix({
  rows,
  scenarios,
  completionSummary,
  matchScriptures = false,
  highlightedIndices,
  title = "Satan's Methods Matrix",
  subtitle,
  caption = SATANS_METHODS_MATRIX_DEFAULT_CAPTION,
  labelledBy,
}: SatansMethodsMatrixProps) {
  const list = rows !== undefined && rows.length > 0 ? rows : SATANS_METHODS_MATRIX_ROWS
  const referenceOptions = useMemo(() => [...new Set(list.map((row) => row.reference))], [list])
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, list.length)
  const [activeIndex, setActiveIndex] = useState<number | null>(
    presetFocus.size === 1 ? [...presetFocus][0]! : null,
  )
  const [referenceMatches, setReferenceMatches] = useState<Record<number, string>>({})
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, string | null>>({})
  const headingId = labelledBy ?? 'satans-methods-matrix-heading'

  const matchesComplete = matchScriptures && allMatchesCorrect(list, referenceMatches)
  const scenariosComplete =
    scenarios && scenarios.length > 0 ? allScenariosCorrect(scenarios, scenarioAnswers) : false
  const practiceComplete =
    (matchScriptures ? matchesComplete : true) &&
    (scenarios && scenarios.length > 0 ? scenariosComplete : true)

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Matrix matching Satan's methods with supporting Scripture."
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
        {list.map((row, index) => {
          const chosenRef = referenceMatches[index]
          const matchCorrect = chosenRef === row.reference
          const emphasized =
            activeIndex === index || (activeIndex === null && presetFocus.has(index)) || matchCorrect
          const showRefOnCard = !matchScriptures || matchCorrect

          return (
            <li key={`${row.method}-${index}`}>
              <article
                className={`rounded-xl border px-3.5 py-3 shadow-sm ${
                  emphasized
                    ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                    : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  aria-pressed={activeIndex === index}
                >
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{row.method}</span>
                  <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{row.description}</p>
                  {showRefOnCard ? (
                    <cite
                      className={`mt-2 block text-xs font-medium not-italic ${
                        emphasized ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture : 'text-zinc-500 dark:text-zinc-500'
                      }`}
                    >
                      {row.reference}
                    </cite>
                  ) : null}
                </button>

                {matchScriptures && !matchCorrect ? (
                  <div className="mt-3 border-t border-zinc-200/80 pt-3 dark:border-zinc-700">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Match passage</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {referenceOptions.map((ref) => (
                        <button
                          key={ref}
                          type="button"
                          onClick={() => setReferenceMatches((prev) => ({ ...prev, [index]: ref }))}
                          className={`rounded-lg border px-2 py-1 text-xs font-medium transition-colors ${
                            chosenRef === ref
                              ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                              : 'border-zinc-200/90 bg-zinc-50/80 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300'
                          }`}
                          aria-pressed={chosenRef === ref}
                        >
                          {ref}
                        </button>
                      ))}
                    </div>
                    {chosenRef && !matchCorrect ? (
                      <p className="mt-2 text-xs font-medium text-amber-900 dark:text-amber-200">
                        Not quite. Try another passage for {row.method}.
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            </li>
          )
        })}
      </ul>

      {matchScriptures && matchesComplete && !(scenarios && scenarios.length > 0) ? (
        <p className="mt-4 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          {completionSummary ?? SATANS_METHODS_MATRIX_COMPLETE_SUMMARY}
        </p>
      ) : null}

      {scenarios && scenarios.length > 0 ? (
        <div className="mt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Modern examples</p>
          <ol className="mt-3 space-y-4">
            {scenarios.map((scenario, index) => {
              const chosen = scenarioAnswers[index] ?? null
              const correct = chosen === scenario.answer
              const answered = chosen !== null
              return (
                <li
                  key={index}
                  className="rounded-xl border border-zinc-200/90 bg-white px-4 py-3 shadow-sm ring-1 ring-zinc-950/[0.02] dark:border-zinc-700 dark:bg-zinc-900/40"
                >
                  <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                    <span className="font-medium text-zinc-500">Example {index + 1}. </span>
                    {scenario.prompt}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {list.map((row) => (
                      <button
                        key={row.method}
                        type="button"
                        onClick={() => setScenarioAnswers((prev) => ({ ...prev, [index]: row.method }))}
                        className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                          chosen === row.method
                            ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                            : 'border-zinc-200/90 bg-zinc-50/80 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300'
                        }`}
                        aria-pressed={chosen === row.method}
                      >
                        {row.method}
                      </button>
                    ))}
                  </div>
                  {answered ? (
                    <p
                      className={`mt-2 text-xs font-medium ${
                        correct ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-900 dark:text-amber-200'
                      }`}
                    >
                      {correct ? `Yes. This reflects ${scenario.answer}.` : `Look again. This reflects ${scenario.answer}.`}
                    </p>
                  ) : null}
                </li>
              )
            })}
          </ol>
        </div>
      ) : null}

      {practiceComplete && (matchScriptures || (scenarios && scenarios.length > 0)) ? (
        <p className="mt-4 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          {completionSummary ?? SATANS_METHODS_MATRIX_COMPLETE_SUMMARY}
        </p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
