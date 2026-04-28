'use client'

import { useCallback, useState } from 'react'
import type { ScriptureChainVerse } from '@/lib/lesson-content-blocks'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'

export type { ScriptureChainVerse }

export interface ScriptureChainProps {
  /** Optional heading above the chain. */
  title?: string
  /** Verses with optional notes (preferred). */
  verses?: ScriptureChainVerse[]
  /** Legacy: references only, simple chain. */
  references?: { reference: string }[]
  /** Optional one-line summary included only in “Copy chain” output (not shown in the card UI). */
  takeaway?: string
  className?: string
}

function normalizeVerses(
  verses: ScriptureChainVerse[] | undefined,
  references: { reference: string }[] | undefined,
): ScriptureChainVerse[] {
  if (verses?.length) {
    return verses
      .map((v) => ({
        reference: v.reference.trim(),
        shortNote: v.shortNote?.trim() || undefined,
      }))
      .filter((v) => v.reference.length > 0)
  }
  if (references?.length) {
    return references
      .map((r) => ({ reference: r.reference.trim(), shortNote: undefined as string | undefined }))
      .filter((v) => v.reference.length > 0)
  }
  return []
}

/** Plain text for clipboard — matches product copy spec (title / takeaway lines omitted when unset). */
export function buildScriptureChainPlainText(
  list: ScriptureChainVerse[],
  opts: { title?: string; takeaway?: string },
): string {
  const lines: string[] = ['BibleStem Scripture Chain']
  const title = opts.title?.trim()
  if (title) lines.push(title)

  lines.push(list.map((v) => v.reference).join(' → '))

  for (const v of list) {
    if (v.shortNote?.trim()) {
      lines.push(`${v.reference}: ${v.shortNote.trim()}`)
    }
  }

  const takeaway = opts.takeaway?.trim()
  if (takeaway) lines.push(`Takeaway: ${takeaway}`)

  return lines.join('\n')
}

/** Connected passages — horizontal on desktop, stacked on small screens. */
export function ScriptureChain({ title, verses, references, takeaway, className = '' }: ScriptureChainProps) {
  const list = normalizeVerses(verses, references)
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const text = buildScriptureChainPlainText(list, { title: title?.trim(), takeaway })
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }, [list, title, takeaway])

  if (list.length < 2) return null

  const heading = title?.trim() || 'Scripture chain'

  return (
    <div
      className={`rounded-xl border border-zinc-200/80 bg-white/80 px-4 py-3.5 md:px-5 md:py-4 ${className}`.trim()}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="min-w-0 flex-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{heading}</p>
        <button
          type="button"
          onClick={() => void handleCopy()}
          className={`shrink-0 rounded-lg border border-zinc-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors hover:bg-zinc-50 ${READER_FOCUS_RING}`}
        >
          {copied ? 'Copied' : 'Copy chain'}
        </button>
      </div>

      {/* Mobile: stacked cards */}
      <div className="mt-3 flex flex-col gap-2 md:hidden">
        {list.map((v, i) => (
          <div key={`${v.reference}-${i}`}>
            <div className="rounded-lg border border-zinc-200/70 bg-[#fbfbfa]/50 px-3 py-2.5">
              <p className="text-sm font-medium tabular-nums text-zinc-900">{v.reference}</p>
              {v.shortNote ? (
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{v.shortNote}</p>
              ) : null}
            </div>
            {i < list.length - 1 ? (
              <p className="py-1 text-center text-xs text-zinc-300" aria-hidden>
                →
              </p>
            ) : null}
          </div>
        ))}
      </div>

      {/* Desktop: single row */}
      <div className="mt-3 hidden flex-wrap items-start gap-x-2 gap-y-2 md:flex">
        {list.map((v, i) => (
          <div key={`${v.reference}-d-${i}`} className="flex max-w-full flex-wrap items-center gap-2">
            {i > 0 ? (
              <span className="text-zinc-300" aria-hidden>
                →
              </span>
            ) : null}
            <div className="rounded-md border border-zinc-200/90 bg-white px-2.5 py-1.5">
              <span className="text-sm font-medium tabular-nums text-zinc-900">{v.reference}</span>
              {v.shortNote ? (
                <span className="mt-1 block text-[11px] leading-snug text-zinc-500">{v.shortNote}</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
