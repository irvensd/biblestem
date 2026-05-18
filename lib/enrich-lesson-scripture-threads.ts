import {
  scriptureThreadBlock,
  upgradeScriptureChainsInBlocks,
} from '@/lib/scripture-thread-blocks'
import { extractScriptureThreadsFromLessonContent } from '@/lib/lesson-scripture-threads'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import { SCRIPTURE_THREAD_PRESETS } from '@/lib/scripture-thread-presets'
import { hydrateLessonScriptureThreadVerseText } from '@/lib/scripture-thread-verse-hydration'

function enrichBlocks(blocks: LessonContentBlock[] | undefined): LessonContentBlock[] | undefined {
  if (!blocks?.length) return blocks
  return upgradeScriptureChainsInBlocks(blocks)
}

/**
 * Upgrades legacy chains to Scripture Threads and appends presets where a lesson has none.
 */
export function enrichLessonReaderContent(slug: string, content: LessonReaderContent): LessonReaderContent {
  let next: LessonReaderContent = {
    ...content,
    scriptureSupplementBlocks: enrichBlocks(content.scriptureSupplementBlocks),
    studyInsightBlocks: enrichBlocks(content.studyInsightBlocks),
    afterTeachingBlocks: enrichBlocks(content.afterTeachingBlocks),
    scriptureChain: content.scriptureChain,
  }

  if (extractScriptureThreadsFromLessonContent(next).length === 0) {
    const preset = SCRIPTURE_THREAD_PRESETS[slug]
    if (preset) {
      next = {
        ...next,
        scriptureSupplementBlocks: [
          ...(next.scriptureSupplementBlocks ?? []),
          scriptureThreadBlock(preset),
        ],
      }
    }
  }

  return hydrateLessonScriptureThreadVerseText(next)
}

/** Applies {@link enrichLessonReaderContent} to every slug in a lesson library. */
export function enrichLessonLibrary(
  lib: Record<string, LessonReaderContent>,
): Record<string, LessonReaderContent> {
  return Object.fromEntries(
    Object.entries(lib).map(([slug, content]) => [slug, enrichLessonReaderContent(slug, content)]),
  )
}
