import 'server-only'

import { getLessonReaderContent, hasBundledLessonReaderContent } from '@/lib/lesson-content'
import { extractPrimaryScriptureThreadForCompletion } from '@/lib/lesson-scripture-threads'
import {
  MISUNDERSTOOD_PASSAGES,
  type MisunderstoodPassage,
} from '@/lib/misunderstood-passages'

/** Attach Scripture Thread previews from bundled lesson copy. Server only. */
export function getMisunderstoodPassagesWithThreads(): MisunderstoodPassage[] {
  return MISUNDERSTOOD_PASSAGES.map((passage) => {
    if (!hasBundledLessonReaderContent(passage.lessonSlug)) {
      return { ...passage, scriptureThread: null }
    }
    try {
      const content = getLessonReaderContent(passage.lessonSlug)
      const thread = extractPrimaryScriptureThreadForCompletion(content)
      return { ...passage, scriptureThread: thread }
    } catch {
      return { ...passage, scriptureThread: null }
    }
  })
}
