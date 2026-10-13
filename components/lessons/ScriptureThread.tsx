'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import type { ScriptureThreadData, ScriptureThreadReference } from '@/lib/scripture-thread-types'
import { ScriptureChainExplorer } from '@/components/lessons/ScriptureChainExplorer'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'

export type { ScriptureThreadReference, ScriptureThreadData }

export interface ScriptureThreadProps extends ScriptureThreadData {
  className?: string
  /** Completion screen: “Scripture Thread completed” header. */
  completionMode?: boolean
  /** Nested inside another card (e.g. Misunderstood Passages); lighter chrome, tighter padding. */
  embedded?: boolean
}

function buildPlainText(data: ScriptureThreadData): string {
  const lines: string[] = ['BibleStem Scripture Thread']
  lines.push(data.title.trim())
  if (data.question?.trim()) lines.push(`Question: ${data.question.trim()}`)
  lines.push(data.references.map((r) => r.reference).join(' → '))
  for (const r of data.references) {
    if (r.verseText?.trim()) {
      lines.push(`${r.reference}: ${r.verseText.trim()}`)
    } else if (r.shortNote?.trim()) {
      lines.push(`${r.reference}: ${r.shortNote.trim()}`)
    }
  }
  if (data.takeaway?.trim()) lines.push(`Takeaway: ${data.takeaway.trim()}`)
  return lines.join('\n')
}

function ReferenceRow({ item: r, index }: { item: ScriptureThreadReference; index: number }) {
  const hasVerse = Boolean(r.verseText?.trim())
  const note = r.shortNote?.trim()

  if (hasVerse) {
    return (
      <li className="relative pl-0">
        {index > 0 ? (
          <span
            className="absolute -top-2 left-4 hidden h-2 w-px bg-zinc-200 md:block"
            aria-hidden
          />
        ) : null}
        <details className="group rounded-lg border border-zinc-200/80 bg-[#fbfbfa]/60">
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-sm font-medium text-zinc-900 marker:content-none ${READER_FOCUS_RING}`}
          >
            <span className="min-w-0 break-words">{r.reference}</span>
            <span className="shrink-0 text-[11px] font-medium text-blue-800 group-open:hidden">Show verse</span>
            <span className="hidden shrink-0 text-[11px] font-medium text-zinc-500 group-open:inline">Hide</span>
          </summary>
          <p className="border-t border-zinc-200/70 px-3 py-2.5 text-sm leading-relaxed break-words text-zinc-700">
            {r.verseText}
          </p>
          {note ? (
            <p className="border-t border-zinc-100 px-3 py-2 text-xs leading-relaxed break-words text-zinc-500">
              {note}
            </p>
          ) : null}
        </details>
      </li>
    )
  }

  return (
    <li className="rounded-lg border border-zinc-200/80 bg-[#fbfbfa]/60 px-3 py-2.5">
      <p className="text-sm font-medium break-words text-zinc-900">{r.reference}</p>
      {note ? <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{note}</p> : null}
    </li>
  )
}

export function ScriptureThread({
  title,
  question,
  references,
  takeaway,
  relatedHref,
  relatedLabel,
  className = '',
  completionMode = false,
  embedded = false,
}: ScriptureThreadProps) {
  const list = references.filter((r) => r.reference.trim().length > 0)
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(
        buildPlainText({ title, question, references: list, takeaway, relatedHref, relatedLabel }),
      )
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }, [title, question, list, takeaway, relatedHref, relatedLabel])

  if (list.length === 0) return null

  const heading = title.trim() || 'Scripture Thread'
  const eyebrow = completionMode ? 'Scripture Thread completed' : 'Scripture Thread'
  const shellClass = embedded
    ? 'border-zinc-200/80 bg-stone-50/60 shadow-none ring-0'
    : 'border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-950/[0.03]'
  const headerPad = embedded ? 'px-3 py-2.5 sm:px-4' : 'px-4 py-3 md:px-5'
  const bodyPad = embedded ? 'px-3 py-3 sm:px-4' : 'px-4 py-3.5 md:px-5 md:py-4'

  return (
    <div
      className={`min-w-0 max-w-full overflow-x-hidden rounded-xl border ${shellClass} ${className}`.trim()}
    >
      <div className={`border-b border-zinc-100/90 ${headerPad}`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{eyebrow}</p>
            <h3
              className={`mt-1.5 font-semibold tracking-tight break-words text-zinc-900 ${embedded ? 'text-base' : 'text-base md:text-lg'}`}
            >
              {heading}
            </h3>
            {question?.trim() ? (
              <p className="mt-2 text-sm leading-relaxed break-words text-zinc-600">{question.trim()}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => void handleCopy()}
            className={`w-full shrink-0 rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-[11px] font-medium text-zinc-600 transition-colors hover:bg-zinc-50 sm:w-auto sm:px-2.5 sm:py-1 ${READER_FOCUS_RING}`}
          >
            {copied ? 'Copied' : 'Copy thread'}
          </button>
        </div>
      </div>

      <div className={bodyPad}>
        {completionMode ? <CompletionPassageList list={list} /> : <ScriptureChainExplorer references={list} />}

        {takeaway?.trim() ? (
          <p className="mt-4 border-l-2 border-blue-800/40 pl-3 text-sm leading-relaxed break-words text-zinc-700">
            {takeaway.trim()}
          </p>
        ) : null}

        {relatedHref?.trim() ? (
          <Link
            href={relatedHref}
            className="mt-4 inline-flex max-w-full text-sm font-medium break-words text-blue-800 hover:text-blue-900"
          >
            {relatedLabel?.trim() || 'Related study'} →
          </Link>
        ) : null}
      </div>
    </div>
  )
}

/** Static recap used on the lesson completion screen. */
function CompletionPassageList({ list }: { list: ScriptureThreadReference[] }) {
  return (
    <>
      <div className="hidden min-w-0 md:block">
        <div className="flex flex-wrap items-stretch gap-x-2 gap-y-2">
          {list.map((r, i) => (
            <div key={`${r.reference}-d-${i}`} className="flex min-w-0 max-w-full items-center gap-2">
              {i > 0 ? (
                <span className="shrink-0 text-zinc-300" aria-hidden>
                  →
                </span>
              ) : null}
              <span className="inline-flex min-w-0 max-w-full break-words rounded-md border border-zinc-200/90 bg-stone-50/80 px-2.5 py-1.5 text-sm font-medium text-zinc-900 sm:max-w-[14rem]">
                {r.reference}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ul className="mt-0 flex flex-col gap-2 md:mt-3 md:hidden">
        {list.map((r, i) => (
          <ReferenceRow key={`${r.reference}-m-${i}`} item={r} index={i} />
        ))}
      </ul>
      {list.some((r) => r.verseText?.trim()) ? (
        <ul className="mt-4 hidden flex-col gap-2 md:flex">
          {list.map((r, i) => (
            <ReferenceRow key={`${r.reference}-v-${i}`} item={r} index={i} />
          ))}
        </ul>
      ) : null}
    </>
  )
}
