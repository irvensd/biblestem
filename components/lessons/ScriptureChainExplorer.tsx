'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import {
  isPassageNavigationKey,
  passageIndexAfterKey,
  passageProgressLabel,
} from '@/lib/scripture-chain-navigation'
import type { ScriptureThreadReference } from '@/lib/scripture-thread-types'

export interface ScriptureChainExplorerProps {
  references: ScriptureThreadReference[]
}

/**
 * Moves through passages already stored on a Scripture Chain.
 * Index lives only in this component, so lesson completion is unchanged.
 */
export function ScriptureChainExplorer({ references }: ScriptureChainExplorerProps) {
  const list = references.filter((item) => item.reference.trim().length > 0)
  const [index, setIndex] = useState(0)
  const passageId = useId()
  const liveId = useId()
  const chipRefs = useRef<Array<HTMLButtonElement | null>>([])
  const current = list[Math.min(index, Math.max(list.length - 1, 0))]

  if (!current || list.length === 0) return null

  const progress = passageProgressLabel(index, list.length)
  const title = current.title?.trim()
  const verse = current.verseText?.trim()
  const note = current.shortNote?.trim()
  const atStart = index <= 0
  const atEnd = index >= list.length - 1

  function moveTo(next: number) {
    setIndex(Math.min(list.length - 1, Math.max(0, next)))
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!isPassageNavigationKey(event.key)) return
    const target = event.target
    if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) return
    event.preventDefault()
    const next = passageIndexAfterKey(index, list.length, event.key)
    setIndex(next)
    window.requestAnimationFrame(() => chipRefs.current[next]?.focus())
  }

  return (
    <div onKeyDown={onKeyDown}>
      <p id={liveId} className="sr-only" aria-live="polite">
        {progress}. {current.reference}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{progress}</p>
      </div>
      <div
        className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-100"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={list.length}
        aria-valuenow={index + 1}
        aria-valuetext={progress}
        aria-label="Scripture chain progress"
      >
        <div
          className="h-full bg-blue-800 motion-reduce:transition-none"
          style={{ width: `${((index + 1) / list.length) * 100}%` }}
        />
      </div>

      <nav aria-label="Passages in this chain" className="mt-3">
        <ul className="flex flex-wrap gap-2">
          {list.map((item, itemIndex) => {
            const active = itemIndex === index
            return (
              <li key={`${item.reference}-${itemIndex}`}>
                <button
                  ref={(node) => {
                    chipRefs.current[itemIndex] = node
                  }}
                  type="button"
                  aria-current={active ? 'true' : undefined}
                  aria-controls={passageId}
                  onClick={() => moveTo(itemIndex)}
                  className={`max-w-full rounded-md border px-2.5 py-1.5 text-left text-sm font-medium break-words ${READER_FOCUS_RING} ${
                    active
                      ? 'border-blue-800 bg-blue-800 text-white'
                      : 'border-zinc-200/90 bg-stone-50/80 text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {item.reference}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <article id={passageId} aria-labelledby={`${passageId}-ref`} className="mt-4 min-w-0">
        <p id={`${passageId}-ref`} className="text-sm font-semibold break-words text-zinc-950">
          {current.reference}
        </p>
        {title ? <p className="mt-1 text-sm font-medium break-words text-zinc-700">{title}</p> : null}
        {verse ? (
          <blockquote className="mt-3 font-scripture text-[1.05rem] leading-relaxed break-words text-zinc-900">
            {verse}
          </blockquote>
        ) : null}
        {note ? <p className="mt-3 text-sm leading-relaxed break-words text-zinc-600">{note}</p> : null}
      </article>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => moveTo(index - 1)}
          disabled={atStart}
          className={`rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 ${READER_FOCUS_RING}`}
        >
          Previous passage
        </button>
        <button
          type="button"
          onClick={() => moveTo(index + 1)}
          disabled={atEnd}
          className={`rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 ${READER_FOCUS_RING}`}
        >
          Next passage
        </button>
      </div>
    </div>
  )
}
