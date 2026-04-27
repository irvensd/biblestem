import type { StudyLevel } from '@/lib/types/product'

/** Lesson row on the study overview (serializable for client shell). */
export type OverviewLessonStatus = 'not_started' | 'in_progress' | 'completed'

export interface StudyOverviewLessonRow {
  id: string
  slug: string
  lessonNumber: number
  title: string
  shortDescription: string
  estimatedMinutes: number
}

/** Server-built payload for the overview page. */
export interface StudyOverviewStatic {
  seriesId: string
  seriesSlug: string
  title: string
  subtitle: string
  /** “About this study” intro (from series longDescription ?? description). */
  longDescription: string
  pathSlug: string
  pathLabel: string
  level: StudyLevel
  lessonCount: number
  estimatedMinutes: number
  durationSummary: string
  whatYouWillLearn: string[]
  lessons: StudyOverviewLessonRow[]
}
