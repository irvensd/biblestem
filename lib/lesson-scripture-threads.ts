import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { Lesson, LessonSection } from '@/lib/types/product'
import type { LessonScriptureChainRecap } from '@/lib/lesson-scripture-chains'
import { chainReferenceSequenceKey, extractScriptureChainsFromLessonContent } from '@/lib/lesson-scripture-chains'
import type { LessonScriptureThreadRecap, ScriptureThreadData, ScriptureThreadReference } from '@/lib/scripture-thread-types'

function normalizeRefs(
  refs: { reference: string; verseText?: string; shortNote?: string }[],
): ScriptureThreadReference[] {
  return refs
    .map((r) => ({
      reference: r.reference.trim(),
      verseText: r.verseText?.trim() || undefined,
      shortNote: r.shortNote?.trim() || undefined,
    }))
    .filter((r) => r.reference.length > 0)
}

function threadFromBlock(block: LessonContentBlock, index: number): LessonScriptureThreadRecap | null {
  if (block.type === 'scriptureThread') {
    const references = normalizeRefs(block.references ?? [])
    if (references.length === 0) return null
    const title = block.title?.trim() || 'Scripture Thread'
    return {
      id: `thread-block-${index}`,
      title,
      question: block.question?.trim() || undefined,
      references,
      takeaway: block.takeaway?.trim() || undefined,
      relatedHref: block.relatedHref?.trim() || undefined,
      relatedLabel: block.relatedLabel?.trim() || undefined,
    }
  }

  if (block.type === 'scriptureChain') {
    const title = block.title?.trim() || 'Scripture Thread'
    if ('verses' in block && Array.isArray(block.verses)) {
      const references = normalizeRefs(
        block.verses.map((v) => ({
          reference: v.reference,
          shortNote: v.shortNote,
        })),
      )
      if (references.length < 2) return null
      return { id: `chain-block-${index}`, title, references }
    }
    if ('references' in block && Array.isArray(block.references)) {
      const references = normalizeRefs(block.references)
      if (references.length < 2) return null
      return { id: `chain-block-${index}`, title, references }
    }
  }

  if (block.type === 'scripture' && block.chain && block.chain.length >= 2) {
    const references = normalizeRefs(block.chain)
    if (references.length < 2) return null
    return {
      id: `scripture-chain-${index}`,
      title: block.reference.trim() || 'Scripture Thread',
      references,
    }
  }

  return null
}

function collectThreadsFromBlocks(blocks: LessonContentBlock[]): LessonScriptureThreadRecap[] {
  const out: LessonScriptureThreadRecap[] = []
  blocks.forEach((b, i) => {
    const thread = threadFromBlock(b, i)
    if (thread) out.push(thread)
  })
  return out
}

function tryParseStructuredBlocksBody(raw: string): LessonContentBlock[] | undefined {
  const t = raw.trim()
  if (!/^\s*\{\s*"blocks"\s*:\s*\[/.test(t)) return undefined
  try {
    const v = JSON.parse(t) as unknown
    if (!v || typeof v !== 'object') return undefined
    const o = v as Record<string, unknown>
    if (!Array.isArray(o.blocks)) return undefined
    return o.blocks as LessonContentBlock[]
  } catch {
    return undefined
  }
}

function threadsFromTopLevelChain(content: LessonReaderContent): LessonScriptureThreadRecap[] {
  const chain = content.scriptureChain
  if (!Array.isArray(chain) || chain.length < 2) return []
  const references = normalizeRefs(chain)
  if (references.length < 2) return []
  return [{ id: 'reader-scripture-step', title: 'Scripture Thread', references }]
}

function threadsFromSupplementBlocks(content: LessonReaderContent): LessonScriptureThreadRecap[] {
  const blocks = content.scriptureSupplementBlocks
  if (!blocks?.length) return []
  return collectThreadsFromBlocks(blocks)
}

function threadsFromStudyInsightBlocks(content: LessonReaderContent): LessonScriptureThreadRecap[] {
  const blocks = content.studyInsightBlocks
  if (!blocks?.length) return []
  return collectThreadsFromBlocks(blocks)
}

function threadsFromLessonSections(sections: LessonSection[]): LessonScriptureThreadRecap[] {
  const out: LessonScriptureThreadRecap[] = []
  for (let s = 0; s < sections.length; s++) {
    const parsed = tryParseStructuredBlocksBody(sections[s]!.body)
    if (!parsed?.length) continue
    out.push(...collectThreadsFromBlocks(parsed).map((t, i) => ({ ...t, id: `section-${s}-${i}-${t.id}` })))
  }
  return out
}

function threadScore(t: LessonScriptureThreadRecap): number {
  let score = t.references.length
  if (t.question?.trim()) score += 4
  if (t.takeaway?.trim()) score += 3
  if (t.references.some((r) => r.verseText?.trim())) score += 5
  if (t.references.some((r) => r.shortNote?.trim())) score += 2
  return score
}

function dedupeThreads(threads: LessonScriptureThreadRecap[]): LessonScriptureThreadRecap[] {
  const byKey = new Map<string, LessonScriptureThreadRecap>()
  for (const t of threads) {
    const refs = t.references.map((r) => r.reference.toLowerCase()).join('|')
    const key = refs || t.id
    const prev = byKey.get(key)
    if (!prev || threadScore(t) > threadScore(prev)) {
      byKey.set(key, t)
    }
  }
  return [...byKey.values()]
}

export function chainRecapToThread(recap: LessonScriptureChainRecap): LessonScriptureThreadRecap | null {
  const refs: ScriptureThreadReference[] = recap.verses?.length
    ? recap.verses.map((v) => ({
        reference: v.reference,
        shortNote: v.shortNote,
      }))
    : (recap.references ?? []).map((r) => ({ reference: r.reference }))
  const references = normalizeRefs(refs)
  if (references.length < 2) return null
  return {
    id: recap.id,
    title: recap.title?.trim() || 'Scripture Thread',
    references,
    takeaway: recap.takeaway,
  }
}

/**
 * Collects Scripture Threads from lesson reader content (explicit `scriptureThread` blocks and legacy chains).
 */
export function extractScriptureThreadsFromLessonContent(
  content: LessonReaderContent,
  sections?: LessonSection[],
): LessonScriptureThreadRecap[] {
  const raw: LessonScriptureThreadRecap[] = [
    ...threadsFromTopLevelChain(content),
    ...threadsFromSupplementBlocks(content),
    ...threadsFromStudyInsightBlocks(content),
    ...(sections?.length ? threadsFromLessonSections(sections) : []),
  ]

  const chains = extractScriptureChainsFromLessonContent(content, sections)
  for (const c of chains) {
    const asThread = chainRecapToThread(c)
    if (asThread) raw.push(asThread)
  }

  return dedupeThreads(raw)
}

/** Primary thread for completion recap (richest authored thread in the lesson). */
export function extractPrimaryScriptureThreadForCompletion(
  content: LessonReaderContent,
  sections?: LessonSection[],
): LessonScriptureThreadRecap | null {
  const threads = extractScriptureThreadsFromLessonContent(content, sections)
  if (threads.length === 0) return null
  return [...threads].sort((a, b) => threadScore(b) - threadScore(a))[0]!
}

export function extractScriptureThreadsFromStudy(study: { lessons: Lesson[] }): LessonScriptureThreadRecap[] {
  const sorted = [...study.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
  const raw: LessonScriptureThreadRecap[] = []
  for (const lesson of sorted) {
    if (!lesson.readerContent) continue
    raw.push(...extractScriptureThreadsFromLessonContent(lesson.readerContent, lesson.sections))
  }
  return dedupeThreads(raw)
}

export function threadReferenceSequenceKey(t: ScriptureThreadData): string | null {
  const refs = t.references.map((r) => r.reference.trim().toLowerCase()).filter(Boolean)
  if (refs.length === 0) return null
  return refs.join('|')
}

/** Re-export for callers that still key chains. */
export { chainReferenceSequenceKey }
