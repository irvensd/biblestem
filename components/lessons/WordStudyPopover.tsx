'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import { WordInsightCard } from '@/components/lessons/WordInsightCard'
import type { WordInsight } from '@/lib/lesson-content'

interface WordStudyPopoverProps {
  surface: string
  study: WordInsight
}

/** Subtle popover for Greek/Hebrew “word insight” taps in scripture or teaching. */
export function WordStudyPopover({ surface, study }: WordStudyPopoverProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLSpanElement>(null)
  const panelId = useId()

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [])

  return (
    <span ref={rootRef} className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`rounded-sm bg-blue-100/90 px-1 font-semibold text-blue-950 underline decoration-blue-600/80 decoration-2 underline-offset-[3px] ring-1 ring-blue-200/70 transition-colors hover:bg-blue-200/80 ${READER_FOCUS_RING}`}
      >
        {surface}
      </button>
      {open ? (
        <span
          id={panelId}
          role="dialog"
          aria-label="Word insight"
          className="fixed inset-x-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[60] max-h-[42vh] overflow-y-auto rounded-xl border border-zinc-200/90 bg-white p-3 text-left shadow-sm ring-1 ring-zinc-950/[0.04] md:absolute md:inset-x-auto md:bottom-auto md:left-0 md:right-auto md:top-full md:z-50 md:mt-2 md:max-h-[min(70vh,26rem)] md:w-[min(100vw-2rem,22rem)]"
        >
          <WordInsightCard insight={study} showProductLabel />
        </span>
      ) : null}
    </span>
  )
}
