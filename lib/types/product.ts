/**
 * BibleStem product model — aligned with Supabase schema in `supabase/migrations/`.
 * UI and mock data should use these types; API layer maps DB rows ↔ these shapes.
 */

import type { LessonReaderContent } from '@/lib/lesson-content'

export type StudyLevel = 'Beginner' | 'Intermediate' | 'Advanced'

/** Optional Study Library subgroup for Beginner-level series (chips when many beginners). */
export const BEGINNER_TRACK_VALUES = [
  'Start Here',
  'Core Beliefs',
  'Spiritual Life',
  'Hope and Restoration',
] as const

export type BeginnerTrack = (typeof BEGINNER_TRACK_VALUES)[number]

export type LessonCompletionState = 'not_started' | 'in_progress' | 'complete'

export type LessonSectionType = 'scripture' | 'teaching' | 'reflection' | 'word_study' | 'other'

export type WordStudyLanguage = 'hebrew' | 'greek' | 'aramaic' | 'other'

/** Auth user profile (public.profiles). */
export interface Profile {
  id: string
  displayName: string | null
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
}

/** Top-level learning track (public.study_paths). */
export interface StudyPath {
  id: string
  slug: string
  name: string
  description: string
  sortOrder: number
  createdAt?: string
}

/** A study series belongs to exactly one path (public.study_series). */
export interface StudySeries {
  id: string
  slug: string
  studyPathId: string
  title: string
  /** Overview / long copy; also fallback when optional fields below are unset. */
  description: string
  /** Card teaser; falls back to `description` in the UI. */
  shortDescription?: string
  /** Study overview “About this study” body; falls back to `description`. */
  longDescription?: string
  /** Optional shorter line under the title on overview pages. Falls back to description lead. */
  subtitle?: string
  level: StudyLevel
  /** Human-readable e.g. "6 weeks" */
  durationSummary: string
  lessonsCount: number
  featured: boolean
  /** Optional shelf grouping inside the library UI */
  collectionLabel: string | null
  sortOrder: number
  createdAt?: string
  /** Overview bullets; optional in DB (e.g. JSON array) with mock/catalog fallback. */
  whatYouWillLearn?: string[]
  /** When false, hide from library (future Supabase flag). Omitted means published. */
  isPublished?: boolean
  /** Populated in mock / API responses */
  lessons: Lesson[]
}

/** One lesson in a series (public.lessons). */
export interface Lesson {
  id: string
  slug: string
  studySeriesId: string
  title: string
  summary: string
  durationMinutes: number
  scripture: string
  sortOrder: number
  createdAt?: string
  sections: LessonSection[]
  /**
   * From `lessons.reader_content` (Supabase). When set and `sections` is empty, drives the guided reader.
   * Prefer authoring here over static `lib/lesson-content.ts` for production.
   */
  readerContent?: LessonReaderContent
  /** Optional overlay from user_lesson_progress for current user */
  progressState?: LessonCompletionState
}

/** Structured block inside a lesson (public.lesson_sections). */
export interface LessonSection {
  id: string
  lessonId: string
  sortOrder: number
  heading: string
  body: string
  sectionType: LessonSectionType
}

/** Reusable lexical entry (public.word_studies). */
export interface WordStudy {
  id: string
  lemma: string
  transliteration: string | null
  strongs: string | null
  gloss: string
  language: WordStudyLanguage
  createdAt?: string
}

/** Links word studies to lessons (and optionally a section) (public.lesson_word_links). */
export interface LessonWordLink {
  id: string
  lessonId: string
  wordStudyId: string
  lessonSectionId: string | null
  sortOrder: number
}

/** Per-user series progress (public.user_series_progress). */
export interface UserSeriesProgress {
  id: string
  userId: string
  studySeriesId: string
  startedAt: string
  completedAt: string | null
  lastLessonSlug: string | null
  percentComplete: number
}

/** Per-user lesson progress (public.user_lesson_progress). */
export interface UserLessonProgress {
  id: string
  userId: string
  lessonId: string
  state: LessonCompletionState
  updatedAt: string
}

/** User note (public.notes). */
export interface Note {
  id: string
  userId: string
  lessonId: string | null
  verseReference: string
  body: string
  updatedAt: string
}

/** Verse highlight / saved selection (public.highlights). */
export interface Highlight {
  id: string
  userId: string
  lessonId: string | null
  verseReference: string
  body: string
  updatedAt: string
}

/** Convenience: series + resolved path for breadcrumbs and cards. */
export interface StudySeriesWithPath extends StudySeries {
  studyPath: StudyPath
}
