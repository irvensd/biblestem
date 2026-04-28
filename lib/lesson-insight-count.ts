import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { LessonReaderContent } from '@/lib/lesson-content'

function countWordInsightBlocks(blocks: LessonContentBlock[] | undefined): number {
  if (!blocks?.length) return 0
  let c = 0
  for (const b of blocks) {
    if (b.type === 'wordInsight' && (b.study || b.insight)) c += 1
  }
  return c
}

/** Word-study surfaces counted for side rail (approximate engagement hints). */
export function countWordInsightsInContent(content: LessonReaderContent): number {
  let n = content.scriptureWordInsights?.length ?? 0
  if (content.wordStudyInsights?.length) n += content.wordStudyInsights.length
  else if (content.wordStudy) n += 1
  for (const row of content.teachingWordInsights ?? []) {
    n += row.insights.length
  }
  n += countWordInsightBlocks(content.scriptureSupplementBlocks)
  return n
}
