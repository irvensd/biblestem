import 'server-only'

import { studyPaths, studySeriesCatalog } from '@/lib/product-mock'
import type { Lesson, StudyPath, StudySeries, StudySeriesWithPath } from '@/lib/types/product'

export function getStudyPaths(): StudyPath[] {
  return [...studyPaths].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getStudyPathBySlug(slug: string): StudyPath | undefined {
  return studyPaths.find((p) => p.slug === slug)
}

export function getStudyPathById(id: string): StudyPath | undefined {
  return studyPaths.find((p) => p.id === id)
}

export function getAllSeries(): StudySeries[] {
  return studySeriesCatalog.map((s) => ({
    ...s,
    lessons: s.lessons.map((l) => ({ ...l })),
  }))
}

export function getSeriesBySlug(slug: string): StudySeries | undefined {
  return studySeriesCatalog.find((s) => s.slug === slug)
}

export function getSeriesWithPathBySlug(slug: string): StudySeriesWithPath | undefined {
  const series = getSeriesBySlug(slug)
  if (!series) return undefined
  const path = getStudyPathById(series.studyPathId)
  if (!path) return undefined
  return { ...series, studyPath: path }
}

export function getSeriesForPathSlug(pathSlug: string): StudySeries[] {
  const path = getStudyPathBySlug(pathSlug)
  if (!path) return []
  return studySeriesCatalog
    .filter((s) => s.studyPathId === path.id)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}

export function seriesCountForPathSlug(pathSlug: string): number {
  return getSeriesForPathSlug(pathSlug).length
}

export function findLessonInCatalog(
  seriesSlug: string,
  lessonSlug: string,
): { series: StudySeries; lesson: Lesson } | undefined {
  const series = getSeriesBySlug(seriesSlug)
  if (!series) return undefined
  const lesson = series.lessons.find((l) => l.slug === lessonSlug)
  if (!lesson) return undefined
  return { series, lesson }
}
