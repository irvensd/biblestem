'use client'

import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import type { LessonStep } from '@/lib/lesson-steps'

function stepLabel(step: LessonStep, index: number): string {
  if (step.type === 'db_section') return step.heading || `Step ${index + 1}`
  return step.title
}

interface LessonMobileMapProps {
  steps: LessonStep[]
  currentIndex: number
  onSelectStep: (index: number) => void
}

export function LessonMobileMap({ steps, currentIndex, onSelectStep }: LessonMobileMapProps) {
  return (
    <details className="group border-t border-zinc-200/80 bg-[#fbfbfa]/90">
      <summary className="cursor-pointer list-none px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="border-b border-dotted border-zinc-300 group-open:border-transparent">Lesson map</span>
      </summary>
      <nav aria-label="Lesson steps" className="max-h-[40vh] overflow-y-auto border-t border-zinc-100 px-4 py-3">
        <ol className="space-y-1.5">
          {steps.map((s, i) => {
            const active = i === currentIndex
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => onSelectStep(i)}
                  className={`flex w-full rounded-lg px-2 py-2 text-left text-xs transition-colors ${READER_FOCUS_RING} ${
                    active ? 'bg-white font-medium text-zinc-900 ring-1 ring-zinc-200/90' : 'text-zinc-600 hover:bg-white/70'
                  }`}
                >
                  <span className="mr-2 tabular-nums text-zinc-400">{i + 1}.</span>
                  {stepLabel(s, i)}
                </button>
              </li>
            )
          })}
        </ol>
      </nav>
    </details>
  )
}
