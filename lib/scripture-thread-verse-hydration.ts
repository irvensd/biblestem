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

function withMatchedVerse<T extends { reference: string; verseText?: string }>(
  item: T,
  quotes: Map<string, string>,
): T {
  if (item.verseText?.trim()) return item
  const verseText = lookupQuote(quotes, item.reference)
  return verseText ? { ...item, verseText } : item
}

function hydrateChainBlock(
  block: Extract<LessonContentBlock, { type: 'scriptureChain' }>,
  quotes: Map<string, string>,
): Extract<LessonContentBlock, { type: 'scriptureChain' }> {
  if ('verses' in block && Array.isArray(block.verses)) {
    return { ...block, verses: block.verses.map((verse) => withMatchedVerse(verse, quotes)) }
  }
  if ('references' in block && Array.isArray(block.references)) {
    return { ...block, references: block.references.map((item) => withMatchedVerse(item, quotes)) }
  }
  return block
}

function hydrateBlocks(
  blocks: LessonContentBlock[] | undefined,
  quotes: Map<string, string>,
): LessonContentBlock[] | undefined {
  if (!blocks?.length) return blocks
  return blocks.map((block) => {
    if (block.type === 'scriptureThread') return hydrateThreadBlock(block, quotes)
    if (block.type === 'scriptureChain') return hydrateChainBlock(block, quotes)
    return block
  })
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
