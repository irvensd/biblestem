import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import { lessonKey } from '@/lib/dashboard-local-progress'
import {
  currentFoundationStudy,
  firstIncompleteLesson,
  getFoundationsPathId,
  getOrderedFoundationPathStudies,
  isStudyFullyComplete,
  nextIncompleteFoundationStudyAfterCurrent,
} from '@/lib/foundation-path'
import { getAdvancedBrowseStudies, getIntermediateBrowseStudies } from '@/lib/study-library-levels'
import type { Lesson, StudySeries } from '@/lib/types/product'

export function isPublishedStudyWithLessons(series: StudySeries): boolean {
  if (series.isPublished === false) return false
  if (!series.lessons?.length) return false
  return series.lessonsCount > 0
}

export function publishedCatalogSeries(catalog: LoadedCatalog): StudySeries[] {
  return catalog.allSeries.filter(isPublishedStudyWithLessons)
}

export function hasMeaningfulProgress(p: LocalDashboardProgress): boolean {
  return p.completedKeys.length > 0 || p.lastLesson != null
}

export function isLessonCompleteInProgress(
  seriesSlug: string,
  lessonSlug: string,
  p: LocalDashboardProgress,
): boolean {
  return p.completedKeys.includes(lessonKey(seriesSlug, lessonSlug))
}

/** Study has at least one started lesson (not overview-only). */
export function isStudyStarted(series: StudySeries, p: LocalDashboardProgress): boolean {
  const hasCompleted = series.lessons.some((l) =>
    p.completedKeys.includes(lessonKey(series.slug, l.slug)),
  )
  if (hasCompleted) return true
  return p.lastLesson?.seriesSlug === series.slug
}

function sortedLessons(series: StudySeries): Lesson[] {
  return [...series.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
}

function findLesson(
  seriesList: StudySeries[],
  seriesSlug: string,
  lessonSlug: string,
): { series: StudySeries; lesson: Lesson } | undefined {
  const series = seriesList.find((x) => x.slug === seriesSlug)
  const lesson = series?.lessons.find((l) => l.slug === lessonSlug)
  if (!series || !lesson) return undefined
  return { series, lesson }
}

function nextIncompleteLessonInSeries(series: StudySeries, p: LocalDashboardProgress): Lesson | null {
  return firstIncompleteLesson(series, p)
}

function findStartedStudyWithIncomplete(
  seriesList: StudySeries[],
  p: LocalDashboardProgress,
): StudySeries | null {
  if (p.lastLesson) {
    const fromLast = seriesList.find((s) => s.slug === p.lastLesson!.seriesSlug)
    if (fromLast && !isStudyFullyComplete(fromLast, p)) return fromLast
  }
  for (const s of seriesList) {
    if (isStudyStarted(s, p) && !isStudyFullyComplete(s, p)) return s
  }
  return null
}

/** Most recent in-progress lesson, then next in study, then started study, then first Foundation lesson. */
export function resolveActiveLesson(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
): { series: StudySeries; lesson: Lesson } | null {
  const seriesList = publishedCatalogSeries(catalog)
  if (seriesList.length === 0) return null

  if (p.lastLesson) {
    const hit = findLesson(seriesList, p.lastLesson.seriesSlug, p.lastLesson.lessonSlug)
    if (hit) {
      if (!isLessonCompleteInProgress(hit.series.slug, hit.lesson.slug, p)) {
        return hit
      }
      const nextInStudy = nextIncompleteLessonInSeries(hit.series, p)
      if (nextInStudy) return { series: hit.series, lesson: nextInStudy }
    }
  }

  const started = findStartedStudyWithIncomplete(seriesList, p)
  if (started) {
    const lesson = nextIncompleteLessonInSeries(started, p)
    if (lesson) return { series: started, lesson }
  }

  return null
}

/** Consecutive calendar days with meaningful study activity ending today. */
export function streakFromMeaningfulActivityDays(days: string[]): number {
  if (days.length === 0) return 0
  const set = new Set(days)
  const today = new Date()
  let streak = 0
  for (let i = 0; i < 366; i++) {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i)
    const s = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    if (set.has(s)) streak++
    else break
  }
  return streak
}

export type DashboardProgressTotals = {
  studiesStarted: number
  studiesCompleted: number
  lessonsCompleted: number
  totalMinutes: number
  streakDays: number
}

export function computeDashboardProgressTotals(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
): DashboardProgressTotals {
  const seriesList = publishedCatalogSeries(catalog)
  let lessonsCompleted = 0
  let totalMinutes = 0

  for (const series of seriesList) {
    for (const lesson of series.lessons) {
      if (isLessonCompleteInProgress(series.slug, lesson.slug, p)) {
        lessonsCompleted++
        totalMinutes += lesson.durationMinutes ?? 0
      }
    }
  }

  const trackedSeconds = typeof p.studyTimeSeconds === 'number' && p.studyTimeSeconds > 0 ? p.studyTimeSeconds : 0
  const trackedMinutes = Math.floor(trackedSeconds / 60)
  if (trackedMinutes > totalMinutes) {
    totalMinutes = trackedMinutes
  }

  let studiesStarted = 0
  let studiesCompleted = 0
  for (const series of seriesList) {
    const lessons = sortedLessons(series)
    if (lessons.length === 0) continue
    if (isStudyStarted(series, p)) studiesStarted++
    if (isStudyFullyComplete(series, p)) studiesCompleted++
  }

  return {
    studiesStarted,
    studiesCompleted,
    lessonsCompleted,
    totalMinutes,
    streakDays: streakFromMeaningfulActivityDays(p.activityDays),
  }
}

export function isSeriesEligibleForExplore(series: StudySeries): boolean {
  return isPublishedStudyWithLessons(series)
}

function getTrackLevel(series: StudySeries): 'Beginner' | 'Intermediate' | 'Advanced' | 'Other' {
  if (series.level === 'Beginner') return 'Beginner'
  if (series.level === 'Intermediate') return 'Intermediate'
  if (series.level === 'Advanced') return 'Advanced'
  return 'Other'
}

function nextIncompleteInList(
  list: StudySeries[],
  p: LocalDashboardProgress,
  taken: Set<string>,
): StudySeries | null {
  for (const s of list) {
    if (!isSeriesEligibleForExplore(s)) continue
    if (taken.has(s.slug)) continue
    if (isStudyFullyComplete(s, p)) continue
    return s
  }
  return null
}

function nextIncompleteInSameTrack(
  catalog: LoadedCatalog,
  activeSeries: StudySeries,
  p: LocalDashboardProgress,
  taken: Set<string>,
): StudySeries | null {
  const track = getTrackLevel(activeSeries)
  if (track === 'Beginner') {
    return nextIncompleteInList(getOrderedFoundationPathStudies(catalog), p, taken)
  }
  if (track === 'Intermediate') {
    return nextIncompleteInList(getIntermediateBrowseStudies(catalog.allSeries), p, taken)
  }
  if (track === 'Advanced') {
    return nextIncompleteInList(getAdvancedBrowseStudies(catalog.allSeries), p, taken)
  }
  return null
}

function isOnFoundationsPath(catalog: LoadedCatalog, series: StudySeries | undefined): boolean {
  const pathId = getFoundationsPathId(catalog)
  return Boolean(pathId && series?.studyPathId === pathId)
}

/**
 * Up to 2 explore recommendations; never the active study or completed studies (unless catalog exhausted).
 */
export function getExploreNextRecommendations(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
  activeStudySlug: string | null,
): StudySeries[] {
  const out: StudySeries[] = []
  const taken = new Set<string>()
  if (activeStudySlug) taken.add(activeStudySlug)

  function tryAdd(s: StudySeries | null | undefined, allowComplete = false): void {
    if (out.length >= 2 || !s) return
    if (!isSeriesEligibleForExplore(s)) return
    if (taken.has(s.slug)) return
    if (!allowComplete && isStudyFullyComplete(s, p)) return
    out.push(s)
    taken.add(s.slug)
  }

  const activeSeries = activeStudySlug
    ? publishedCatalogSeries(catalog).find((s) => s.slug === activeStudySlug)
    : undefined

  if (activeSeries) {
    const sameTrack = nextIncompleteInSameTrack(catalog, activeSeries, p, taken)
    if (sameTrack && sameTrack.slug !== activeSeries.slug) tryAdd(sameTrack)

    if (isOnFoundationsPath(catalog, activeSeries)) {
      const ordered = getOrderedFoundationPathStudies(catalog)
      const upNext = nextIncompleteFoundationStudyAfterCurrent(ordered, p)
      if (upNext) tryAdd(upNext)
      if (out.length < 2) {
        const deeper = nextIncompleteInList(getIntermediateBrowseStudies(catalog.allSeries), p, taken)
        if (deeper) tryAdd(deeper)
        else {
          const adv = nextIncompleteInList(getAdvancedBrowseStudies(catalog.allSeries), p, taken)
          tryAdd(adv)
        }
      }
    } else if (activeSeries.level === 'Advanced') {
      const adv = nextIncompleteInList(getAdvancedBrowseStudies(catalog.allSeries), p, taken)
      if (adv && adv.slug !== activeSeries.slug) tryAdd(adv)
      const ordered = getOrderedFoundationPathStudies(catalog)
      const foundation = currentFoundationStudy(ordered, p)
      if (foundation) tryAdd(foundation)
    }
  }

  if (out.length < 2) {
    const foundation = nextIncompleteInList(getOrderedFoundationPathStudies(catalog), p, taken)
    tryAdd(foundation)
  }
  if (out.length < 2) {
    const deeper = nextIncompleteInList(getIntermediateBrowseStudies(catalog.allSeries), p, taken)
    tryAdd(deeper)
  }
  if (out.length < 2) {
    const adv = nextIncompleteInList(getAdvancedBrowseStudies(catalog.allSeries), p, taken)
    tryAdd(adv)
  }
  if (out.length < 2) {
    const published = [...publishedCatalogSeries(catalog)].sort((a, b) => a.sortOrder - b.sortOrder)
    for (const s of published) {
      if (out.length >= 2) break
      tryAdd(s)
    }
  }

  return out.slice(0, 2)
}
