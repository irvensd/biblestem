'use client'

import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import {
  DEEPER_SIDEBAR_MAP_LABEL,
  FOUNDATION_SIDEBAR_MAP_LABEL,
  lessonProgressLabel,
} from '@/lib/deeper-lesson-workflow'
import type { LessonStep } from '@/lib/lesson-steps'

function stepLabel(step: LessonStep, index: number): string {
  if (step.type === 'db_section') return step.heading || `Step ${index + 1}`
  return step.title
}

export interface LessonSidebarProps {
  lessonTitle: string
  steps: LessonStep[]
  currentIndex: number
  wordInsightCount: number
  notesCount: number
  estimatedMinutes: number
  studyTitle: string
  /** Deeper Studies workflow (Part / Study flow / key tension). */
  deeperWorkflow?: boolean
  keyTension?: string
  onGoToNextStep?: () => void
  onSelectStep?: (index: number) => void
  notesStepIndex?: number | null
  crossReferenceStepIndex?: number | null
}

/** Desktop lesson map + metadata rail for the global lesson reader. */
export function LessonSidebar({
  lessonTitle,
  steps,
  currentIndex,
  wordInsightCount,
  notesCount,
  estimatedMinutes,
  studyTitle,
  deeperWorkflow = false,
  keyTension,
  onGoToNextStep,
  onSelectStep,
  notesStepIndex = null,
  crossReferenceStepIndex = null,
}: LessonSidebarProps) {
  const total = steps.length
  const done = Math.min(currentIndex, total - 1)
  const pct = total > 0 ? Math.round(((done + 1) / total) * 100) : 0
  const next = currentIndex < total - 1 ? steps[currentIndex + 1] : null
  const mapLabel = deeperWorkflow ? DEEPER_SIDEBAR_MAP_LABEL : FOUNDATION_SIDEBAR_MAP_LABEL

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">This lesson</p>
        <p className="mt-2 text-sm font-semibold leading-snug text-zinc-900">{lessonTitle}</p>
        <p className="mt-4 text-xs text-zinc-500">
          {lessonProgressLabel(currentIndex, total, deeperWorkflow, { pct })}
        </p>
        <div className="mt-4 h-px w-full bg-zinc-200/50" />
      </div>

      {deeperWorkflow && keyTension?.trim() ? (
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3.5 py-3 ring-1 ring-zinc-950/[0.02]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">The tension</p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-700">{keyTension.trim()}</p>
        </div>
      ) : null}

      {onSelectStep && (notesStepIndex != null || crossReferenceStepIndex != null) ? (
        <div className="flex flex-col gap-2">
          {notesStepIndex != null ? (
            <button
              type="button"
              onClick={() => onSelectStep(notesStepIndex)}
              className={`rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-left text-xs font-medium text-zinc-800 hover:bg-zinc-50 ${READER_FOCUS_RING}`}
            >
              Notes
              {notesCount > 0 ? <span className="ml-1 font-normal text-zinc-500">({notesCount})</span> : null}
            </button>
          ) : null}
          {crossReferenceStepIndex != null ? (
            <button
              type="button"
              onClick={() => onSelectStep(crossReferenceStepIndex)}
              className={`rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-left text-xs font-medium text-zinc-800 hover:bg-zinc-50 ${READER_FOCUS_RING}`}
            >
              Cross-references
            </button>
          ) : null}
        </div>
      ) : null}

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{mapLabel}</p>
        <ol className="mt-3 space-y-2">
          {steps.map((s, i) => {
            const label = stepLabel(s, i)
            const isCurrent = i === currentIndex
            const isComplete = i < currentIndex
            const marker = (
              <span
                className={`mt-0.5 flex shrink-0 items-center justify-center rounded-full border text-[9px] font-semibold leading-none ${
                  isCurrent
                    ? 'h-[18px] min-w-[18px] border-blue-800 bg-blue-800 text-white'
                    : isComplete
                      ? 'h-4 min-w-4 border-zinc-200/90 bg-zinc-50 text-zinc-500'
                      : 'h-4 min-w-4 border-zinc-200 bg-white text-zinc-400'
                }`}
                aria-hidden
              >
                {isComplete ? '✓' : String(i + 1)}
              </span>
            )
            const text = (
              <span
                className={`leading-snug ${
                  isCurrent ? 'font-semibold text-zinc-950' : 'font-normal text-zinc-500'
                }`}
              >
                {label}
              </span>
            )
            return (
              <li key={i} className="text-xs">
                {onSelectStep ? (
                  <button
                    type="button"
                    onClick={() => onSelectStep(i)}
                    aria-current={isCurrent ? 'step' : undefined}
                    className={`flex w-full gap-2 rounded-md px-1 py-0.5 text-left hover:bg-zinc-50 ${READER_FOCUS_RING}`}
                  >
                    {marker}
                    {text}
                  </button>
                ) : (
                  <div className="flex gap-2">
                    {marker}
                    {text}
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>

      <div className="space-y-1.5 text-[10px] leading-snug text-zinc-500">
        <p>
          <span className="text-zinc-400">Estimated time:</span> {estimatedMinutes} min
        </p>
        <p className="line-clamp-2" title={studyTitle}>
          <span className="text-zinc-400">Study:</span> {studyTitle}
        </p>
        {wordInsightCount > 0 ? (
          <p>
            <span className="text-zinc-400">Word insights:</span> {wordInsightCount}
          </p>
        ) : null}
        {notesCount > 0 && notesStepIndex == null ? (
          <p>
            <span className="text-zinc-400">Notes:</span> {notesCount}
          </p>
        ) : null}
      </div>

      {next ? (
        <button
          type="button"
          onClick={onGoToNextStep}
          disabled={!onGoToNextStep}
          className={`w-full cursor-pointer rounded-xl border border-zinc-200/80 bg-white px-3 py-3 text-left transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50/80 disabled:cursor-default disabled:opacity-60 disabled:hover:border-zinc-200/80 disabled:hover:bg-white ${READER_FOCUS_RING}`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Next</p>
          <p className="mt-1.5 flex items-start justify-between gap-2 text-xs font-medium text-zinc-800">
            <span className="min-w-0 flex-1 leading-snug">{stepLabel(next, currentIndex + 1)}</span>
            <span className="shrink-0 pt-0.5 text-[11px] font-medium text-zinc-400" aria-hidden>
              →
            </span>
          </p>
        </button>
      ) : null}
    </div>
  )
}

/** @deprecated Use `LessonSidebar`. */
export const LessonSideRail = LessonSidebar
/** @deprecated Use `LessonSidebarProps`. */
export type LessonSideRailProps = LessonSidebarProps
