import {
  studyPaths,
  studySeriesCatalog,
} from '@/lib/product-mock'
import type { Lesson, LessonCompletionState, StudyPath, StudySeries, StudySeriesWithPath } from '@/lib/types/product'

export function formatLessonDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (m === 0) return `${h} hr`
  return `${h} hr ${m} min`
}

export function lessonProgressLabel(state: LessonCompletionState | undefined): string {
  if (state === 'in_progress') return 'In progress'
  if (state === 'complete') return 'Complete'
  return 'Not started'
}

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

export function getPathNameForSeries(series: StudySeries): string {
  return getStudyPathById(series.studyPathId)?.name ?? 'Path'
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

export function getNextLessonInSeries(series: StudySeries, lessonSlug: string): Lesson | null {
  const idx = series.lessons.findIndex((l) => l.slug === lessonSlug)
  if (idx < 0 || idx >= series.lessons.length - 1) return null
  return series.lessons[idx + 1] ?? null
}

/** Filters for Study Library client (URL/state can mirror these later). */
export type LibraryFilters = {
  pathSlug: string | null
  level: string | null
  sort: 'recommended' | 'newest' | 'lessons'
  query: string
}

export function filterSeriesForLibrary(
  seriesList: StudySeries[],
  filters: LibraryFilters,
): StudySeries[] {
  let list = [...seriesList]

  if (filters.pathSlug) {
    const path = getStudyPathBySlug(filters.pathSlug)
    if (path) {
      list = list.filter((s) => s.studyPathId === path.id)
    }
  }

  if (filters.level) {
    list = list.filter((s) => s.level === filters.level)
  }

  const q = filters.query.trim().toLowerCase()
  if (q) {
    list = list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        getPathNameForSeries(s).toLowerCase().includes(q),
    )
  }

  if (filters.sort === 'lessons') {
    list.sort((a, b) => b.lessonsCount - a.lessonsCount)
  } else if (filters.sort === 'newest') {
    list.sort((a, b) => b.sortOrder - a.sortOrder)
  } else {
    list.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1
      return a.title.localeCompare(b.title)
    })
  }

  return list
}

const collectionOrder = ['Foundational Studies', 'Growth Studies', 'Advanced Studies'] as const

export function groupSeriesByCollection(seriesList: StudySeries[]): Map<string, StudySeries[]> {
  const map = new Map<string, StudySeries[]>()
  for (const label of collectionOrder) {
    map.set(label, [])
  }
  for (const s of seriesList) {
    const key = s.collectionLabel ?? 'Other'
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(s)
  }
  return map
}

/** Recommended series slugs for dashboard (mock progression). */
export function getRecommendedSeriesSlugs(): string[] {
  return ['romans-foundations', 'sermon-on-the-mount', 'daniel-and-hope']
}
