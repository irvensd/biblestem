'use client'

import { useEffect, useId, useRef, useState } from 'react'

export interface WordStudyData {
  lemma: string
  transliteration: string
  meaning: string
  strongs: string
  note: string
}

interface WordStudyPopoverProps {
  surface: string
  study: WordStudyData
}

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
        className="rounded-sm bg-blue-50/90 px-0.5 font-medium text-blue-900 underline decoration-blue-200/80 decoration-1 underline-offset-2 transition-colors hover:bg-blue-100/90"
      >
        {surface}
      </button>
      {open ? (
        <span
          id={panelId}
          role="dialog"
          aria-label="Word study"
          className="absolute left-0 top-full z-20 mt-2 w-[min(100vw-2rem,20rem)] rounded-xl border border-zinc-200/90 bg-white p-4 text-left shadow-sm ring-1 ring-zinc-950/[0.06]"
        >
          <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Word study</p>
          <p className="mt-2 text-sm font-semibold text-zinc-900">
            {study.lemma} · <span className="font-normal text-zinc-600">{study.transliteration}</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{study.meaning}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-500">
            <span className="rounded border border-zinc-200 px-1.5 py-0.5">Strong&apos;s {study.strongs}</span>
            <span className="rounded border border-zinc-200 px-1.5 py-0.5">Lemma</span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-zinc-500">{study.note}</p>
        </span>
      ) : null}
    </span>
  )
}
