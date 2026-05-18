import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'

/** Normalize references for loose matching (e.g. "Psalm 8:3 to 5" vs lesson "Psalm 8:3 to 5"). */
export function normalizeScriptureReferenceKey(ref: string): string {
  return ref
    .toLowerCase()
    .replace(/\s*to\s*/g, ' to ')
    .replace(/\s*–\s*/g, ' to ')
    .replace(/\s+/g, ' ')
    .trim()
}

function collectScriptureQuotes(content: LessonReaderContent): Map<string, string> {
  const map = new Map<string, string>()

  const add = (reference: string | undefined, quote: string | undefined) => {
    const ref = reference?.trim()
    const text = quote?.trim()
    if (!ref || !text) return
    map.set(ref.toLowerCase(), text)
    map.set(normalizeScriptureReferenceKey(ref), text)
  }

  add(content.scriptureRef, content.scriptureQuote)
  add(content.scriptureSecondaryRef, content.scriptureSecondaryQuote)

  const blockLists = [
    content.scriptureSupplementBlocks,
    content.studyInsightBlocks,
    content.afterTeachingBlocks,
  ]
  for (const blocks of blockLists) {
    if (!blocks?.length) continue
    for (const block of blocks) {
      if (block.type === 'scripture') {
        add(block.reference, block.quote)
      }
    }
  }

  return map
}

function lookupQuote(quotes: Map<string, string>, reference: string): string | undefined {
  const ref = reference.trim()
  if (!ref) return undefined
  return quotes.get(ref.toLowerCase()) ?? quotes.get(normalizeScriptureReferenceKey(ref))
}

function hydrateThreadBlock(
  block: Extract<LessonContentBlock, { type: 'scriptureThread' }>,
  quotes: Map<string, string>,
): Extract<LessonContentBlock, { type: 'scriptureThread' }> {
  return {
    ...block,
    references: block.references.map((r) => {
      if (r.verseText?.trim()) return r
      const verseText = lookupQuote(quotes, r.reference)
      return verseText ? { ...r, verseText } : r
    }),
  }
}

function hydrateBlocks(
  blocks: LessonContentBlock[] | undefined,
  quotes: Map<string, string>,
): LessonContentBlock[] | undefined {
  if (!blocks?.length) return blocks
  return blocks.map((block) =>
    block.type === 'scriptureThread' ? hydrateThreadBlock(block, quotes) : block,
  )
}

/** Fills `verseText` on thread references from scripture already in the lesson (primary, secondary, supplement). */
export function hydrateLessonScriptureThreadVerseText(content: LessonReaderContent): LessonReaderContent {
  const quotes = collectScriptureQuotes(content)
  if (quotes.size === 0) return content

  return {
    ...content,
    scriptureSupplementBlocks: hydrateBlocks(content.scriptureSupplementBlocks, quotes),
    studyInsightBlocks: hydrateBlocks(content.studyInsightBlocks, quotes),
    afterTeachingBlocks: hydrateBlocks(content.afterTeachingBlocks, quotes),
  }
}
