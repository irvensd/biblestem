import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type {
  ActiveStudyState,
  CurrentPathInfo,
  FoundationsProgressInfo,
  ProgressTotals,
  TodayFocus,
} from '@/lib/dashboard-mock-data'
import {
  completedFoundationStudyCount,
  currentFoundationStudy,
  getOrderedFoundationPathStudies,
  isStudyFullyComplete,
  nextIncompleteFoundationStudyAfterCurrent,
} from '@/lib/foundation-path'
import type { Lesson, StudySeries } from '@/lib/types/product'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import { lessonKey } from '@/lib/dashboard-local-progress'
import {
  computeDashboardProgressTotals,
  publishedCatalogSeries,
  resolveActiveLesson,
} from '@/lib/dashboard-progress-metrics'
import { studyPathPageHref } from '@/lib/path-routes'

function sortedLessons(series: StudySeries): Lesson[] {
  return [...series.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
}

function splitScriptureParts(lesson: Lesson): { primary: string; related: string } {
  const parts = lesson.scripture
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
  const primary = parts[0] ?? lesson.scripture.trim()
  const related = parts.length > 1 ? parts.slice(1).join(', ') : ''
  return { primary, related }
}

function studyLessonsProgressLine(series: StudySeries, p: LocalDashboardProgress): string {
  const lessons = sortedLessons(series)
  const done = lessons.filter((l) => p.completedKeys.includes(lessonKey(series.slug, l.slug))).length
  return `${done} of ${lessons.length} lessons completed`
}

function startedSeriesInPath(
  pathId: string,
  seriesList: StudySeries[],
  p: LocalDashboardProgress,
): number {
  const inPath = seriesList.filter((s) => s.studyPathId === pathId)
  let n = 0
  for (const s of inPath) {
    const has =
      s.lessons.some((l) => p.completedKeys.includes(lessonKey(s.slug, l.slug))) ||
      p.lastLesson?.seriesSlug === s.slug
    if (has) n++
  }
  return n
}

function findPathIdForSeriesSlug(catalog: LoadedCatalog, seriesSlug: string): string | null {
  const s = catalog.allSeries.find((x) => x.slug === seriesSlug)
  if (!s) return null
  return s.studyPathId
}

function computeCurrentPath(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
  active: ActiveStudyState | null,
): CurrentPathInfo | null {
  const seriesSlug = p.lastLesson?.seriesSlug ?? active?.studySlug
  if (!seriesSlug) return null
  const pathId = findPathIdForSeriesSlug(catalog, seriesSlug)
  if (!pathId) return null
  const path = catalog.paths.find((x) => x.id === pathId)
  if (!path) return null
  const series = catalog.allSeries.find((s) => s.slug === seriesSlug)
  if (!series) return null

  return {
    pathSlug: path.slug,
    pathName: path.name,
    viewPathHref: studyPathPageHref(path.slug),
    activeStudyCount: startedSeriesInPath(pathId, catalog.allSeries, p),
    currentStudyTitle: series.title,
    studyProgressLine: studyLessonsProgressLine(series, p),
  }
}

function buildActiveState(series: StudySeries, lesson: Lesson, p: LocalDashboardProgress): ActiveStudyState {
  const k = lessonKey(series.slug, lesson.slug)
  const done = p.completedKeys.includes(k)
  const last = p.lastLesson
  const isCurrentLast =
    last?.seriesSlug === series.slug && last.lessonSlug === lesson.slug && last.totalSteps > 0

  let progressPercent = 0
  let minutesRemaining = lesson.durationMinutes
  let currentStepLine = 'Not started'
  let stepIndex = 0
  let totalStepsKnown = 0

  if (done) {
    progressPercent = 100
    minutesRemaining = 0
    currentStepLine = 'Lesson complete'
    if (isCurrentLast && last) {
      stepIndex = Math.min(last.stepIndex, last.totalSteps - 1)
      totalStepsKnown = last.totalSteps
    }
  } else if (isCurrentLast) {
    const total = last!.totalSteps
    const step = Math.min(last!.stepIndex, total - 1)
    totalStepsKnown = total
    stepIndex = step
    progressPercent = Math.min(99, Math.round(((step + 1) / total) * 100))
    minutesRemaining = Math.max(1, Math.round(lesson.durationMinutes * (1 - (step + 1) / total)))
    currentStepLine = `Step ${step + 1} of ${total}`
  } else {
    currentStepLine = 'Step 1'
  }

  const stepQuery =
    !done && totalStepsKnown > 0
      ? `?step=${stepIndex}`
      : !done
        ? `?step=0`
        : ''
  const continueHref = `/study-library/${series.slug}/lesson/${lesson.slug}${stepQuery}`
  const { primary: scripturePrimary, related: scriptureRelated } = splitScriptureParts(lesson)

  return {
    studySlug: series.slug,
    studyTitle: series.title,
    lessonSlug: lesson.slug,
    lessonTitle: lesson.title,
    scripture: lesson.scripture,
    primaryScripture: scripturePrimary,
    relatedScripture: scriptureRelated,
    progressPercent,
    minutesRemaining,
    currentStepLine,
    stepIndex,
    totalStepsKnown,
    studyLessonsProgressLine: studyLessonsProgressLine(series, p),
    continueHref,
  }
}

export function computeProgressTotals(catalog: LoadedCatalog, p: LocalDashboardProgress): ProgressTotals {
  return computeDashboardProgressTotals(catalog, p)
}

export function computeActiveStudy(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
): ActiveStudyState | null {
  const next = resolveActiveLesson(catalog, p)
  if (!next) return null
  return buildActiveState(next.series, next.lesson, p)
}

export function computeTodayFocus(seriesList: StudySeries[], active: ActiveStudyState | null): TodayFocus {
  if (active) {
    return {
      eyebrow: 'Today’s focus',
      reference: active.primaryScripture,
      line: `Stay in “${active.lessonTitle}”: one clear step today is enough.`,
      ctaLabel: active.progressPercent >= 100 ? 'Review lesson' : 'Open lesson',
      lessonHref: active.continueHref,
    }
  }

  return {
    eyebrow: 'Today’s focus',
    reference: 'Study',
    line: 'Pick a study in the library and open the first lesson when you are ready.',
    ctaLabel: 'Browse library',
    lessonHref: '/study-library',
  }
}

export function computeFoundationsProgress(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
): FoundationsProgressInfo {
  const ordered = getOrderedFoundationPathStudies(catalog)
  const totalCount = ordered.length
  const completedCount = completedFoundationStudyCount(ordered, p)
  const current = currentFoundationStudy(ordered, p)
  const next = nextIncompleteFoundationStudyAfterCurrent(ordered, p)
  const allComplete = totalCount > 0 && completedCount >= totalCount
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return {
    completedCount,
    totalCount,
    recommendedStudyTitle:
      totalCount === 0 ? null : allComplete ? 'Foundations complete' : (current?.title ?? null),
    nextStudyTitle: allComplete ? null : (next?.title ?? null),
    progressPercent,
    allComplete,
  }
}

export type DashboardBundle = {
  progress: ProgressTotals
  activeStudy: ActiveStudyState | null
  todayFocus: TodayFocus
  currentPath: CurrentPathInfo | null
  foundationsProgress: FoundationsProgressInfo
  totalLessonsInCatalog: number
  allLessonsComplete: boolean
}

function totalLessonsInCatalog(catalog: LoadedCatalog): number {
  return publishedCatalogSeries(catalog).reduce((n, s) => n + s.lessons.length, 0)
}

export function buildDashboardBundle(catalog: LoadedCatalog, local: LocalDashboardProgress): DashboardBundle {
  const progress = computeProgressTotals(catalog, local)
  const activeStudy = computeActiveStudy(catalog, local)
  const todayFocus = computeTodayFocus(catalog.allSeries, activeStudy)
  const currentPath = computeCurrentPath(catalog, local, activeStudy)
  const foundationsProgress = computeFoundationsProgress(catalog, local)
  const totalLessons = totalLessonsInCatalog(catalog)
  const allLessonsComplete = totalLessons > 0 && progress.lessonsCompleted >= totalLessons

  return {
    progress,
    activeStudy,
    todayFocus,
    currentPath,
    foundationsProgress,
    totalLessonsInCatalog: totalLessons,
    allLessonsComplete,
  }
}
