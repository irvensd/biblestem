'use client'

import { useState } from 'react'
import {
  WORSHIP_SHIFT_ANSWER_LABELS,
  WORSHIP_SHIFT_DEFAULT_CAPTION,
  WORSHIP_SHIFT_PANELS,
  WORSHIP_SHIFT_SCENARIOS,
  type WorshipShiftPanelData,
  type WorshipShiftPanelId,
  type WorshipShiftScenarioData,
} from '@/lib/worship-shift-stages'
import {
  WHEN_HEAVEN_BROKE_STUDY_ACCENT,
  clampWhenHeavenBrokeHighlightSet,
} from '@/lib/when-heaven-broke-study-visual-accent'

export interface WorshipShiftProps {
  panels?: readonly WorshipShiftPanelData[]
  scenarios?: readonly WorshipShiftScenarioData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

export function WorshipShift({
  panels,
  scenarios,
  highlightedIndices,
  title = 'The Worship Shift',
  subtitle,
  caption = WORSHIP_SHIFT_DEFAULT_CAPTION,
  labelledBy,
}: WorshipShiftProps) {
  const panelList = panels !== undefined && panels.length > 0 ? panels : WORSHIP_SHIFT_PANELS
  const scenarioList =
    scenarios !== undefined && scenarios.length > 0 ? scenarios : WORSHIP_SHIFT_SCENARIOS
  const presetFocus = clampWhenHeavenBrokeHighlightSet(highlightedIndices, panelList.length)
  const [activePanel, setActivePanel] = useState<WorshipShiftPanelId | null>(
    presetFocus.size === 1 ? panelList[[...presetFocus][0]!]?.id ?? null : null,
  )
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, WorshipShiftPanelId | null>>({})
  const headingId = labelledBy ?? 'worship-shift-heading'

  function selectScenario(index: number, choice: WorshipShiftPanelId) {
    setScenarioAnswers((prev) => ({ ...prev, [index]: choice }))
  }

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Three worship directions with scenario practice."
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
        {panelList.map((panel, index) => {
          const emphasized = activePanel === panel.id
          return (
            <li key={panel.id}>
              <button
                type="button"
                className={`h-full w-full rounded-xl border px-4 py-4 text-left shadow-sm transition-[box-shadow,border-color] ${
                  emphasized
                    ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                    : WHEN_HEAVEN_BROKE_STUDY_ACCENT.defaultArticle
                }`}
                onClick={() => setActivePanel(emphasized ? null : panel.id)}
                aria-pressed={emphasized}
              >
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{panel.label}</h4>
                <p className="mt-1.5 text-xs leading-snug text-zinc-500 dark:text-zinc-400">{panel.direction}</p>
                {emphasized ? (
                  <>
                    <p className={`mt-2 text-xs font-medium ${WHEN_HEAVEN_BROKE_STUDY_ACCENT.scripture}`}>
                      {panel.reference}
                    </p>
                    <p className="mt-1.5 text-sm leading-snug text-zinc-700 dark:text-zinc-300">{panel.meaning}</p>
                  </>
                ) : null}
              </button>
            </li>
          )
        })}
      </ul>

      <div className="mt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Identify the direction</p>
        <ol className="mt-3 space-y-4">
          {scenarioList.map((scenario, index) => {
            const chosen = scenarioAnswers[index] ?? null
            const correct = chosen === scenario.answer
            const answered = chosen !== null
            return (
              <li
                key={index}
                className="rounded-xl border border-zinc-200/90 bg-white px-4 py-3 shadow-sm ring-1 ring-zinc-950/[0.02] dark:border-zinc-700 dark:bg-zinc-900/40"
              >
                <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                  <span className="font-medium text-zinc-500">Scenario {index + 1}. </span>
                  {scenario.prompt}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {panelList.map((panel) => {
                    const selected = chosen === panel.id
                    return (
                      <button
                        key={panel.id}
                        type="button"
                        onClick={() => selectScenario(index, panel.id)}
                        className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors ${
                          selected
                            ? WHEN_HEAVEN_BROKE_STUDY_ACCENT.emphArticle
                            : 'border-zinc-200/90 bg-zinc-50/80 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300'
                        }`}
                        aria-pressed={selected}
                      >
                        {panel.label}
                      </button>
                    )
                  })}
                </div>
                {answered ? (
                  <p
                    className={`mt-2 text-xs font-medium ${
                      correct ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-900 dark:text-amber-200'
                    }`}
                  >
                    {correct
                      ? `Yes. This reflects ${WORSHIP_SHIFT_ANSWER_LABELS[scenario.answer]}.`
                      : `Scripture points to ${WORSHIP_SHIFT_ANSWER_LABELS[scenario.answer]} here.`}
                  </p>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
