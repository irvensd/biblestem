import type { LessonContentBlock } from '@/lib/lesson-content-blocks'

export type ScriptureThreadPresetReference = {
  reference: string
  verseText?: string
  shortNote?: string
}

export type ScriptureThreadPreset = {
  title: string
  question: string
  references: string[] | ScriptureThreadPresetReference[]
  takeaway: string
}

/** Builds a `scriptureThread` block for `scriptureSupplementBlocks` (and other block lists). */
export function scriptureThreadBlock(preset: ScriptureThreadPreset): Extract<LessonContentBlock, { type: 'scriptureThread' }> {
  return {
    type: 'scriptureThread',
    title: preset.title,
    question: preset.question,
    references: preset.references.map((item) =>
      typeof item === 'string' ? { reference: item } : { ...item },
    ),
    takeaway: preset.takeaway,
  }
}

function defaultQuestionForTitle(title: string): string {
  const t = title.trim()
  if (!t) return 'What pattern do these Scriptures reveal together?'
  return `What does Scripture reveal about ${t.charAt(0).toLowerCase()}${t.slice(1)}?`
}

function takeawayFromParagraph(text: string): string | undefined {
  const trimmed = text.trim()
  if (!trimmed.startsWith('Takeaway:')) return undefined
  return trimmed.slice('Takeaway:'.length).trim() || undefined
}

/** Upgrades legacy `scriptureChain` blocks to `scriptureThread` when a following takeaway paragraph exists. */
export function upgradeScriptureChainsInBlocks(blocks: LessonContentBlock[]): LessonContentBlock[] {
  const out: LessonContentBlock[] = []
  let i = 0
  while (i < blocks.length) {
    const block = blocks[i]!
    if (block.type === 'scriptureChain') {
      const next = blocks[i + 1]
      const takeaway =
        next?.type === 'paragraph' ? takeawayFromParagraph(next.text) : undefined
      const title = block.title?.trim() || 'Scripture Thread'
      const references =
        'verses' in block && Array.isArray(block.verses)
          ? block.verses.map((v) => ({
              reference: v.reference,
              shortNote: v.shortNote,
            }))
          : 'references' in block && Array.isArray(block.references)
            ? block.references.map((r) => ({ reference: r.reference }))
            : []
      if (references.length >= 2) {
        out.push({
          type: 'scriptureThread',
          title,
          question: defaultQuestionForTitle(title),
          references,
          takeaway,
        })
        i += takeaway && next?.type === 'paragraph' ? 2 : 1
        continue
      }
    }
    out.push(block)
    i += 1
  }
  return out
}

function mapOptionalBlocks(
  blocks: LessonContentBlock[] | undefined,
): LessonContentBlock[] | undefined {
  if (!blocks?.length) return blocks
  return upgradeScriptureChainsInBlocks(blocks)
}
