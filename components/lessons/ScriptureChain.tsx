'use client'

import { ScriptureThread } from '@/components/lessons/ScriptureThread'
import type { ScriptureChainVerse } from '@/lib/lesson-content-blocks'
import type { ScriptureThreadReference } from '@/lib/scripture-thread-types'

export type { ScriptureChainVerse }

export interface ScriptureChainProps {
  title?: string
  verses?: ScriptureChainVerse[]
  references?: { reference: string; title?: string; verseText?: string; shortNote?: string }[]
  takeaway?: string
  className?: string
  completionMode?: boolean
}

function toThreadRefs(
  verses: ScriptureChainVerse[] | undefined,
  references: ScriptureChainProps['references'],
): ScriptureThreadReference[] {
  const source = verses?.length ? verses : references
  if (!source?.length) return []
  return source
    .map((item) => ({
      reference: item.reference.trim(),
      title: 'title' in item ? item.title?.trim() || undefined : undefined,
      verseText: 'verseText' in item ? item.verseText?.trim() || undefined : undefined,
      shortNote: 'shortNote' in item ? item.shortNote?.trim() || undefined : undefined,
    }))
    .filter((item) => item.reference.length > 0)
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
  if (refs.length < 1) return null

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
