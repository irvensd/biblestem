import { compareFoundationLibraryRecommendedOrder, orderFoundationStudies } from '@/lib/foundation-path'
import { getPublicTrackLabelForSeries } from '@/lib/study-tracks'
import type { Lesson, LessonCompletionState, StudyPath, StudySeries } from '@/lib/types/product'

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

export function getPathNameForSeries(series: StudySeries, _pathsOverride?: StudyPath[]): string {
  return getPublicTrackLabelForSeries(series)
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
  pathsOverride?: StudyPath[],
): StudySeries[] {
  const paths = pathsOverride ?? []
  let list = [...seriesList]
  const foundationsPathId = paths.find((p) => p.slug === 'foundations')?.id
  const foundationRank = new Map(
    orderFoundationStudies(
      list.filter((s) => s.level === 'Beginner' && s.studyPathId === foundationsPathId),
    ).map((s, i) => [s.slug, i]),
  )
  const compareFoundationRank = (a: StudySeries, b: StudySeries): number | null => {
    const aRank = foundationRank.get(a.slug)
    const bRank = foundationRank.get(b.slug)
    if (aRank !== undefined && bRank !== undefined) return aRank - bRank
    if (aRank !== undefined) return -1
    if (bRank !== undefined) return 1
    return null
  }

  if (filters.pathSlug) {
    const path = paths.find((p) => p.slug === filters.pathSlug)
    if (path) {
      list = list.filter((s) => s.studyPathId === path.id)
    }
  }

  if (filters.level) {
    list = list.filter((s) => s.level === filters.level)
  }

  list = list.filter((s) => s.isPublished !== false)

  const q = filters.query.trim().toLowerCase()
  if (q) {
    list = list.filter((s) => {
      const pathName = getPathNameForSeries(s, paths).toLowerCase()
      const short = s.shortDescription?.toLowerCase() ?? ''
      return (
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        short.includes(q) ||
        pathName.includes(q)
      )
    })
  }

  if (filters.sort === 'lessons') {
    list.sort((a, b) => {
      const rank = compareFoundationRank(a, b)
      if (rank !== null) return rank
      return b.lessonsCount - a.lessonsCount
    })
  } else if (filters.sort === 'newest') {
    list.sort((a, b) => {
      const rank = compareFoundationRank(a, b)
      if (rank !== null) return rank
      return b.sortOrder - a.sortOrder
    })
  } else {
    list.sort((a, b) => {
      const rank = compareFoundationRank(a, b)
      if (rank !== null) return rank
      if (a.featured !== b.featured) return a.featured ? -1 : 1
      const guided = compareFoundationLibraryRecommendedOrder(a, b, foundationsPathId)
      if (guided !== 0 && guided !== null) return guided
      return a.title.localeCompare(b.title)
    })
  }

  return list
}

/** Legacy: buckets by `collectionLabel` only (can mix levels under one shelf). Prefer `groupStudiesByLevelOrSection`. */
const LIBRARY_COLLECTION_BUCKETS = ['Foundational Studies', 'Hard Questions', 'Advanced Studies'] as const

export function groupSeriesByCollection(seriesList: StudySeries[]): Map<string, StudySeries[]> {
  const map = new Map<string, StudySeries[]>()
  for (const label of LIBRARY_COLLECTION_BUCKETS) {
    map.set(label, [])
  }
  map.set('Other', [])
  for (const s of seriesList) {
    const raw = s.collectionLabel?.trim() || 'Other'
    const normalized = raw === 'Growth Studies' ? 'Hard Questions' : raw
    const key = (LIBRARY_COLLECTION_BUCKETS as readonly string[]).includes(normalized) ? normalized : 'Other'
    map.get(key)!.push(s)
  }
  return map
}

/** Study Library shelf headings — ordered display; each shelf matches `StudySeries.level` so Beginner/Intermediate/Advanced are never mixed. */
export const STUDY_LIBRARY_SECTION_ORDER = [
  'Foundational Studies',
  'Hard Questions',
  'Advanced Studies',
  'Other',
] as const

export type StudyLibrarySectionKey = (typeof STUDY_LIBRARY_SECTION_ORDER)[number]

/**
 * Groups series into library shelves by difficulty level (not `collectionLabel`).
 * Beginner → Foundational Studies; Intermediate → Hard Questions; Advanced → Advanced Studies.
 */
export function groupStudiesByLevelOrSection(seriesList: StudySeries[]): Map<string, StudySeries[]> {
  const map = new Map<string, StudySeries[]>()
  for (const label of STUDY_LIBRARY_SECTION_ORDER) {
    map.set(label, [])
  }
  for (const s of seriesList) {
    let key: StudyLibrarySectionKey
    if (s.level === 'Beginner') key = 'Foundational Studies'
    else if (s.level === 'Intermediate') key = 'Hard Questions'
    else if (s.level === 'Advanced') key = 'Advanced Studies'
    else key = 'Other'
    map.get(key)!.push(s)
  }
  return map
}

/** Recommended series slugs for dashboard (mock progression). */
export function getRecommendedSeriesSlugs(): string[] {
  return [
    'god-is-love',
    'three-angels-messages',
    'death-resurrection-hope-of-life',
  ]
}
