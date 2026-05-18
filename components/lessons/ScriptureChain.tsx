'use client'

import { ScriptureThread } from '@/components/lessons/ScriptureThread'
import type { ScriptureChainVerse } from '@/lib/lesson-content-blocks'
import type { ScriptureThreadReference } from '@/lib/scripture-thread-types'

export type { ScriptureChainVerse }

export interface ScriptureChainProps {
  title?: string
  verses?: ScriptureChainVerse[]
  references?: { reference: string }[]
  takeaway?: string
  className?: string
  completionMode?: boolean
}

function toThreadRefs(
  verses: ScriptureChainVerse[] | undefined,
  references: { reference: string }[] | undefined,
): ScriptureThreadReference[] {
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
      .map((r) => ({ reference: r.reference.trim() }))
      .filter((v) => v.reference.length > 0)
  }
  return []
}

/** @deprecated Prefer {@link ScriptureThread}. Kept for legacy lesson blocks and imports. */
export function buildScriptureChainPlainText(
  list: ScriptureChainVerse[],
  opts: { title?: string; takeaway?: string },
): string {
  const lines: string[] = ['BibleStem Scripture Thread']
  const title = opts.title?.trim()
  if (title) lines.push(title)
  lines.push(list.map((v) => v.reference).join(' → '))
  for (const v of list) {
    if (v.shortNote?.trim()) lines.push(`${v.reference}: ${v.shortNote.trim()}`)
  }
  const takeaway = opts.takeaway?.trim()
  if (takeaway) lines.push(`Takeaway: ${takeaway}`)
  return lines.join('\n')
}

/**
 * Legacy Scripture Chain API — renders as {@link ScriptureThread} with the public “Scripture Thread” label.
 */
export function ScriptureChain({
  title,
  verses,
  references,
  takeaway,
  className = '',
  completionMode,
}: ScriptureChainProps) {
  const refs = toThreadRefs(verses, references)
  if (refs.length < 2) return null

  return (
    <ScriptureThread
      title={title?.trim() || 'Scripture Thread'}
      references={refs}
      takeaway={takeaway}
      className={className}
      completionMode={completionMode}
    />
  )
}
