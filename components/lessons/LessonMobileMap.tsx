'use client'

import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import { DEEPER_SIDEBAR_MAP_LABEL, FOUNDATION_SIDEBAR_MAP_LABEL } from '@/lib/deeper-lesson-workflow'
import type { LessonStep } from '@/lib/lesson-steps'
import { useEffect, useRef, useState } from 'react'

function stepLabel(step: LessonStep, index: number): string {
  if (step.type === 'db_section') return step.heading || `Step ${index + 1}`
  return step.title
}

interface LessonMobileMapProps {
  steps: LessonStep[]
  currentIndex: number
  onSelectStep: (index: number) => void
  deeperWorkflow?: boolean
  notesStepIndex?: number | null
  crossReferenceStepIndex?: number | null
}

export function LessonMobileMap({
  steps,
  currentIndex,
  onSelectStep,
  deeperWorkflow = false,
  notesStepIndex = null,
  crossReferenceStepIndex = null,
}: LessonMobileMapProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const mapPanelId = 'lesson-mobile-map-panel'

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return
      setOpen(false)
      e.preventDefault()
    }
    document.addEventListener('pointerdown', onPointerDown, { capture: true })
    return () => document.removeEventListener('pointerdown', onPointerDown, { capture: true })
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div ref={rootRef} className="border-t border-zinc-200/80 bg-[#fbfbfa]/90">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={mapPanelId}
        onClick={() => setOpen((v) => !v)}
        className="w-full cursor-pointer px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
      >
        <span className={`border-b border-dotted border-zinc-300 ${open ? 'border-transparent' : ''}`}>
          {deeperWorkflow ? DEEPER_SIDEBAR_MAP_LABEL : FOUNDATION_SIDEBAR_MAP_LABEL}
        </span>
      </button>
      {open ? (
        <nav
          id={mapPanelId}
          aria-label="Lesson steps"
          className="max-h-[40vh] overflow-y-auto border-t border-zinc-100 px-4 py-3"
        >
          {notesStepIndex != null || crossReferenceStepIndex != null ? (
            <div className="mb-3 flex flex-wrap gap-2">
              {notesStepIndex != null ? (
                <button
                  type="button"
                  onClick={() => {
                    onSelectStep(notesStepIndex)
                    setOpen(false)
                  }}
                  className={`rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-800 ${READER_FOCUS_RING}`}
                >
                  Notes
                </button>
              ) : null}
              {crossReferenceStepIndex != null ? (
                <button
                  type="button"
                  onClick={() => {
                    onSelectStep(crossReferenceStepIndex)
                    setOpen(false)
                  }}
                  className={`rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-800 ${READER_FOCUS_RING}`}
                >
                  Cross-references
                </button>
              ) : null}
            </div>
          ) : null}
          <ol className="space-y-1.5">
            {steps.map((s, i) => {
              const active = i === currentIndex
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectStep(i)
                      setOpen(false)
                    }}
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
      ) : null}
    </div>
  )
}
