import { lessonABookUnlikeAnyOther, type LessonReaderContent } from '@/lib/lesson-content'

/** Route and catalog identifiers for the foundational “Bible as living Word” journey. */
export const bibleGodsLivingWordMeta = {
  seriesSlug: 'bible-gods-living-word',
  seriesTitle: 'The Bible — God’s Living Word',
  lesson1Slug: 'a-book-unlike-any-other',
  lesson1Title: 'A Book Unlike Any Other',
  lesson2Slug: 'how-the-bible-came-to-us',
  lesson2Title: 'How the Bible Came to Us',
} as const

/** Full reader payload for Lesson 1 (same source as `getLessonReaderContent`). */
export const bibleLivingWordLesson1Content: LessonReaderContent = lessonABookUnlikeAnyOther
