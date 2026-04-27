import { lessonKey, type LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import type { StudyOverviewLessonRow } from './types'

export function lessonOverviewStatus(
  seriesSlug: string,
  lessonSlug: string,
  p: LocalDashboardProgress,
): 'not_started' | 'in_progress' | 'completed' {
  const k = lessonKey(seriesSlug, lessonSlug)
  if (p.completedKeys.includes(k)) return 'completed'
  const last = p.lastLesson
  if (last?.seriesSlug === seriesSlug && last.lessonSlug === lessonSlug) return 'in_progress'
  return 'not_started'
}

export function computeSeriesProgressPercent(
  seriesSlug: string,
  lessons: StudyOverviewLessonRow[],
  p: LocalDashboardProgress,
): number {
  if (lessons.length === 0) return 0
  const n = lessons.length
  let frac = 0
  for (const l of lessons) {
    const k = lessonKey(seriesSlug, l.slug)
    if (p.completedKeys.includes(k)) {
      frac += 1 / n
      continue
    }
    if (
      p.lastLesson?.seriesSlug === seriesSlug &&
      p.lastLesson.lessonSlug === l.slug &&
      p.lastLesson.totalSteps > 0
    ) {
      const t = p.lastLesson.totalSteps
      const step = Math.min(Math.max(0, p.lastLesson.stepIndex), t - 1)
      frac += ((step + 1) / t) * (1 / n)
    }
  }
  return Math.min(100, Math.round(frac * 100))
}

export function allLessonsCompleted(
  seriesSlug: string,
  lessons: StudyOverviewLessonRow[],
  p: LocalDashboardProgress,
): boolean {
  if (lessons.length === 0) return false
  return lessons.every((l) => p.completedKeys.includes(lessonKey(seriesSlug, l.slug)))
}

export function getContinueLessonSlug(
  seriesSlug: string,
  lessons: StudyOverviewLessonRow[],
  p: LocalDashboardProgress,
): string {
  const ordered = [...lessons].sort((a, b) => a.lessonNumber - b.lessonNumber)
  if (p.lastLesson?.seriesSlug === seriesSlug) {
    const match = ordered.find((l) => l.slug === p.lastLesson!.lessonSlug)
    if (match && !p.completedKeys.includes(lessonKey(seriesSlug, match.slug))) return match.slug
  }
  const firstIncomplete = ordered.find((l) => !p.completedKeys.includes(lessonKey(seriesSlug, l.slug)))
  return firstIncomplete?.slug ?? ordered[0]!.slug
}

export type PrimaryAction = 'start' | 'continue' | 'review'

export function getPrimaryAction(
  seriesSlug: string,
  lessons: StudyOverviewLessonRow[],
  p: LocalDashboardProgress,
): PrimaryAction {
  if (lessons.length === 0) return 'start'
  if (allLessonsCompleted(seriesSlug, lessons, p)) return 'review'
  const anyProgress = lessons.some((l) => {
    const k = lessonKey(seriesSlug, l.slug)
    return (
      p.completedKeys.includes(k) ||
      (p.lastLesson?.seriesSlug === seriesSlug && p.lastLesson.lessonSlug === l.slug)
    )
  })
  return anyProgress ? 'continue' : 'start'
}

export function primaryCtaHref(
  action: PrimaryAction,
  seriesSlug: string,
  lessons: StudyOverviewLessonRow[],
  p: LocalDashboardProgress,
): string {
  const ordered = [...lessons].sort((a, b) => a.lessonNumber - b.lessonNumber)
  if (ordered.length === 0) return `/study-library/${seriesSlug}`
  if (action === 'start') return `/study-library/${seriesSlug}/lesson/${ordered[0]!.slug}`
  if (action === 'continue')
    return `/study-library/${seriesSlug}/lesson/${getContinueLessonSlug(seriesSlug, lessons, p)}`
  return `/study-library/${seriesSlug}/lesson/${ordered[0]!.slug}`
}

export function primaryCtaLabel(action: PrimaryAction): string {
  if (action === 'start') return 'Start study'
  if (action === 'continue') return 'Continue study'
  return 'Review study'
}
