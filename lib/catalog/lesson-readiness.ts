import 'server-only'

import {
  FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
  PLACEHOLDER_BODY,
  isFoundationLessonShellSections,
} from '@/lib/foundation-lesson-shell'
import { getLessonReaderContent, hasBundledLessonReaderContent } from '@/lib/lesson-content'
import type { Lesson, StudySeries } from '@/lib/types/product'

const COMING_SOON_TITLE = 'Lesson content coming soon'

export function isPlaceholderReaderContent(content: {
  openingThought?: string
  studyInsight?: { title?: string }
}): boolean {
  const opening = content.openingThought?.trim() ?? ''
  if (opening === PLACEHOLDER_BODY || opening === FOUNDATION_SHELL_PLACEHOLDER_LEGACY) return true
  if (content.studyInsight?.title?.trim() === COMING_SOON_TITLE) return true
  return false
}

/** True when a learner can open real teaching, not a draft shell. */
export function lessonHasRealContent(lesson: Lesson): boolean {
  if (hasBundledLessonReaderContent(lesson.slug)) {
    const bundled = getLessonReaderContent(lesson.slug)
    // A bundled shell stays hidden even if the database marked the row ready.
    return !isPlaceholderReaderContent(bundled)
  }
  if (lesson.contentPending) return false
  if (lesson.readerContent && !isPlaceholderReaderContent(lesson.readerContent)) return true
  if (lesson.sections.length > 0 && !isFoundationLessonShellSections(lesson.sections)) return true
  if (lesson.contentReady === true) return true
  return false
}

/** Drop unfinished lessons and series, and never keep reader bodies on catalog rows. */
export function publishCatalogSeries(allSeries: StudySeries[]): StudySeries[] {
  return allSeries
    .map((series) => {
      const lessons = series.lessons.filter(lessonHasRealContent).map((lesson) => ({
        ...lesson,
        sections: [],
        readerContent: undefined,
        contentPending: undefined,
        contentReady: true as const,
      }))
      return { ...series, lessons, lessonsCount: lessons.length }
    })
    .filter((series) => series.lessons.length > 0)
}
