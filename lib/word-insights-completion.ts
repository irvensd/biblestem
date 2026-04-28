import type { LessonContentBlock, StudyToolWordInsightFields } from '@/lib/lesson-content-blocks'
import { wordStudyToInsight, type LessonReaderContent, type WordInsight } from '@/lib/lesson-content'

/** Compact recap lines for the lesson completion screen (no learner-authored notes). */
export interface WordInsightCompletionLine {
  id: string
  headline: string
  meaning: string
  subtitle?: string
  reference?: string
}

function insightKey(w: WordInsight): string {
  return `${w.surface.trim().toLowerCase()}|${w.meaning.trim().toLowerCase()}`
}

function studyToolKey(s: StudyToolWordInsightFields): string {
  return `${s.originalWord.trim().toLowerCase()}|${s.meaning.trim().toLowerCase()}`
}

function pushWordInsight(seen: Set<string>, out: WordInsightCompletionLine[], w: WordInsight, id: string) {
  const k = insightKey(w)
  if (seen.has(k)) return
  seen.add(k)
  const subtitle = [w.language?.trim(), w.lemma?.trim(), w.transliteration?.trim()].filter(Boolean).join(' · ')
  out.push({
    id,
    headline: w.surface,
    meaning: w.meaning,
    ...(subtitle ? { subtitle } : {}),
    ...(w.reference?.trim() ? { reference: w.reference.trim() } : {}),
  })
}

function pushStudyTool(seen: Set<string>, out: WordInsightCompletionLine[], s: StudyToolWordInsightFields, id: string) {
  const k = studyToolKey(s)
  if (seen.has(k)) return
  seen.add(k)
  out.push({
    id,
    headline: s.originalWord,
    meaning: s.meaning,
    subtitle: `${s.language} · ${s.transliteration}`,
    reference: s.reference.trim(),
  })
}

function walkBlocks(seen: Set<string>, out: WordInsightCompletionLine[], blocks: LessonContentBlock[]) {
  let idx = 0
  const nextLocalId = () => {
    idx += 1
    return `sup-${idx}`
  }
  for (const b of blocks) {
    if (b.type === 'wordInsight') {
      const id = nextLocalId()
      if (b.insight) pushWordInsight(seen, out, b.insight, id)
      else if (b.study) pushStudyTool(seen, out, b.study, id)
    }
    if (b.type === 'scripture' && b.insights?.length) {
      for (const ins of b.insights) {
        pushWordInsight(seen, out, ins, nextLocalId())
      }
    }
    if (b.type === 'teachingPoints' && b.teachingInsights?.length) {
      for (const row of b.teachingInsights) {
        for (const ins of row.insights) {
          pushWordInsight(seen, out, ins, nextLocalId())
        }
      }
    }
  }
}

const MAX_WORD_INSIGHT_RECAP = 12

/** Collects word-study content from reader JSON for a concise completion recap. */
export function extractWordInsightsForCompletion(content: LessonReaderContent): WordInsightCompletionLine[] {
  const seen = new Set<string>()
  const out: WordInsightCompletionLine[] = []
  let n = 0

  const nextId = () => {
    n += 1
    return `wi-${n}`
  }

  for (const w of content.scriptureWordInsights ?? []) {
    pushWordInsight(seen, out, w, nextId())
  }

  if (content.wordStudyInsights?.length) {
    for (const w of content.wordStudyInsights) {
      pushWordInsight(seen, out, w, nextId())
    }
  } else if (content.wordStudy) {
    pushWordInsight(seen, out, wordStudyToInsight(content.wordStudy), nextId())
  }

  for (const row of content.teachingWordInsights ?? []) {
    for (const w of row.insights) {
      pushWordInsight(seen, out, w, nextId())
    }
  }

  const blocks = content.scriptureSupplementBlocks
  if (blocks?.length) walkBlocks(seen, out, blocks)
  const afterTeaching = content.afterTeachingBlocks
  if (afterTeaching?.length) walkBlocks(seen, out, afterTeaching)
  const insightBlocks = content.studyInsightBlocks
  if (insightBlocks?.length) walkBlocks(seen, out, insightBlocks)

  return out.slice(0, MAX_WORD_INSIGHT_RECAP)
}
