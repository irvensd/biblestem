import type { LessonReaderContent } from '@/lib/lesson-content'
import { getLessonReaderContent } from '@/lib/lesson-content'
import type { LessonContentBlock, ScriptureChainVerse } from '@/lib/lesson-content-blocks'
import type { Lesson, LessonSection } from '@/lib/types/product'

/** Normalized recap row for completion UI — maps to {@link ScriptureChain} props. */
export type LessonScriptureChainRecap = {
  id: string
  title?: string
  references?: { reference: string }[]
  verses?: ScriptureChainVerse[]
  takeaway?: string
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

function refsFromRecap(c: LessonScriptureChainRecap): string[] {
  if (c.verses?.length) return c.verses.map((v) => v.reference.trim().toLowerCase()).filter(Boolean)
  if (c.references?.length) return c.references.map((r) => r.reference.trim().toLowerCase()).filter(Boolean)
  return []
}

/** Stable key: ordered references, lowercased — dedupes duplicate chains across lesson sources. */
export function chainReferenceSequenceKey(c: LessonScriptureChainRecap): string | null {
  const refs = refsFromRecap(c)
  if (refs.length < 2) return null
  return refs.join('|')
}

function stableId(sig: string): string {
  let h = 2166136261
  for (let i = 0; i < sig.length; i++) {
    h ^= sig.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0).toString(36)
}

function preferRicherChain(
  prev: LessonScriptureChainRecap | undefined,
  next: LessonScriptureChainRecap,
): LessonScriptureChainRecap {
  if (!prev) return next
  const verseScore = (c: LessonScriptureChainRecap) =>
    (c.verses?.filter((v) => v.shortNote?.trim()).length ?? 0) * 2 + (c.verses?.length ?? 0)
  if (verseScore(next) > verseScore(prev)) return { ...next, id: prev.id, takeaway: next.takeaway ?? prev.takeaway }
  if (verseScore(prev) > verseScore(next)) return { ...prev, takeaway: prev.takeaway ?? next.takeaway }
  const nt = next.title?.trim()?.length ?? 0
  const pt = prev.title?.trim()?.length ?? 0
  if (nt > pt) return { ...next, id: prev.id, takeaway: next.takeaway ?? prev.takeaway }
  return { ...prev, takeaway: prev.takeaway ?? next.takeaway }
}

function scriptureChainBlockToRecap(block: LessonContentBlock, index: number): LessonScriptureChainRecap | null {
  if (block.type !== 'scriptureChain') return null
  const baseId = `block-${index}`
  if ('verses' in block && Array.isArray(block.verses)) {
    const verses = block.verses
      .map((v) => ({
        reference: v.reference.trim(),
        shortNote: v.shortNote?.trim() || undefined,
      }))
      .filter((v) => v.reference.length > 0)
    if (verses.length < 2) return null
    return {
      id: baseId,
      title: block.title?.trim() || undefined,
      verses,
    }
  }
  if ('references' in block && Array.isArray(block.references)) {
    const references = block.references
      .map((r) => ({ reference: r.reference.trim() }))
      .filter((r) => r.reference.length > 0)
    if (references.length < 2) return null
    return {
      id: baseId,
      title: block.title?.trim() || undefined,
      references,
    }
  }
  return null
}

function collectChainsFromBlocks(blocks: LessonContentBlock[]): LessonScriptureChainRecap[] {
  const out: LessonScriptureChainRecap[] = []
  blocks.forEach((b, i) => {
    if (b.type === 'scriptureChain') {
      const recap = scriptureChainBlockToRecap(b, i)
      if (recap) out.push(recap)
      return
    }
    if (b.type === 'scripture' && b.chain && b.chain.length >= 2) {
      const refs = b.chain.map((r) => ({ reference: r.reference.trim() })).filter((r) => r.reference.length > 0)
      if (refs.length >= 2) {
        out.push({ id: `scripture-chain-${i}`, references: refs })
      }
    }
  })
  return out
}

function chainsFromTopLevelScriptureChain(content: LessonReaderContent): LessonScriptureChainRecap[] {
  const chain = content.scriptureChain
  if (!Array.isArray(chain) || chain.length < 2) return []
  const references = chain.map((r) => ({ reference: r.reference.trim() })).filter((r) => r.reference.length > 0)
  if (references.length < 2) return []
  return [{ id: 'reader-scripture-step', references }]
}

function chainsFromSupplementBlocks(content: LessonReaderContent): LessonScriptureChainRecap[] {
  const blocks = content.scriptureSupplementBlocks
  if (!blocks?.length) return []
  return collectChainsFromBlocks(blocks)
}

function chainsFromLessonSections(sections: LessonSection[]): LessonScriptureChainRecap[] {
  const out: LessonScriptureChainRecap[] = []
  for (let s = 0; s < sections.length; s++) {
    const parsed = tryParseStructuredBlocksBody(sections[s]!.body)
    if (!parsed?.length) continue
    out.push(...collectChainsFromBlocks(parsed).map((c, i) => ({ ...c, id: `section-${s}-${i}-${c.id}` })))
  }
  return out
}

function dedupeChains(chains: LessonScriptureChainRecap[]): LessonScriptureChainRecap[] {
  const byKey = new Map<string, LessonScriptureChainRecap>()
  for (const c of chains) {
    const key = chainReferenceSequenceKey(c)
    if (!key) continue
    const prev = byKey.get(key)
    const merged = preferRicherChain(prev, { ...c, id: c.id })
    byKey.set(key, merged)
  }
  return [...byKey.values()].map((c) => {
    const sig = chainReferenceSequenceKey(c)
    const idSuffix = sig ? stableId(sig) : stableId(c.id)
    return { ...c, id: `chain-${idSuffix}` }
  })
}

/**
 * Collects Scripture chains authored on the lesson for recap (completion screen).
 * Sources: scripture-step cross-refs, supplement blocks, nested `scripture` chains in blocks,
 * and structured `{ "blocks": [...] }` JSON in `lesson_sections.body` when `sections` is provided.
 */
export function extractScriptureChainsFromLessonContent(
  content: LessonReaderContent,
  sections?: LessonSection[],
): LessonScriptureChainRecap[] {
  const raw: LessonScriptureChainRecap[] = [
    ...chainsFromTopLevelScriptureChain(content),
    ...chainsFromSupplementBlocks(content),
    ...(sections?.length ? chainsFromLessonSections(sections) : []),
  ]
  return dedupeChains(raw)
}

/**
 * Aggregates Scripture chains across all lessons in a study, using the same content resolution
 * as the lesson reader: `lesson.readerContent ?? getLessonReaderContent(lesson.slug)`.
 * Chains are deduplicated globally by reference sequence.
 */
export function extractScriptureChainsFromStudy(study: { lessons: Lesson[] }): LessonScriptureChainRecap[] {
  const sorted = [...study.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
  const raw: LessonScriptureChainRecap[] = []
  for (const lesson of sorted) {
    const content = lesson.readerContent ?? getLessonReaderContent(lesson.slug)
    raw.push(...extractScriptureChainsFromLessonContent(content, lesson.sections))
  }
  return dedupeChains(raw)
}
