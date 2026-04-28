import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type { ActiveStudyState, CurrentPathInfo, ProgressTotals, TodayFocus } from '@/lib/dashboard-mock-data'
import type { Lesson, StudySeries } from '@/lib/types/product'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import { lessonKey } from '@/lib/dashboard-local-progress'

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

/** Consecutive calendar days with activity ending today (strict). */
function streakFromActivityDays(days: string[]): number {
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

function sortedSeries(seriesList: StudySeries[]): StudySeries[] {
  return [...seriesList].sort((a, b) => a.sortOrder - b.sortOrder)
}

function sortedLessons(series: StudySeries): Lesson[] {
  return [...series.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
}

/** First lesson in catalog order that is not completed. */
function findNextIncomplete(
  seriesList: StudySeries[],
  p: LocalDashboardProgress,
): { series: StudySeries; lesson: Lesson } | null {
  for (const series of sortedSeries(seriesList)) {
    for (const lesson of sortedLessons(series)) {
      if (!p.completedKeys.includes(lessonKey(series.slug, lesson.slug))) {
        return { series, lesson }
      }
    }
  }
  return null
}

/** Prefer the most recent incomplete lesson if it still matches local “last lesson,” else first incomplete. */
function resolveActiveLesson(
  seriesList: StudySeries[],
  p: LocalDashboardProgress,
): { series: StudySeries; lesson: Lesson } | null {
  if (p.lastLesson) {
    const hit = findLesson(seriesList, p.lastLesson.seriesSlug, p.lastLesson.lessonSlug)
    if (hit) {
      const k = lessonKey(hit.series.slug, hit.lesson.slug)
      if (!p.completedKeys.includes(k)) {
        return hit
      }
    }
  }
  return findNextIncomplete(seriesList, p)
}

function primaryScriptureLine(lesson: Lesson): string {
  const first = lesson.scripture
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)[0]
  return first ?? lesson.scripture
}

/** Primary = first ·-segment; related = rest, comma-separated for display. */
function splitScriptureParts(lesson: Lesson): { primary: string; related: string } {
  const parts = lesson.scripture
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
  const primary = parts[0] ?? lesson.scripture.trim()
  const related = parts.length > 1 ? parts.slice(1).join(', ') : ''
  return { primary, related }
}

function focusSentenceForLesson(lesson: Lesson, lessonTitle: string): string {
  const s = lesson.summary?.trim()
  if (s) return s.length > 160 ? `${s.slice(0, 157)}…` : s
  return `Stay in “${lessonTitle}”: one clear step today is enough.`
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
    viewPathHref: `/paths/${path.slug}`,
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
    // Incomplete lesson, no in-reader position yet: still default to first step in URL.
    currentStepLine = 'Step 1'
    // TODO(lesson-progress): when reader never opened, show total from lesson model once steps are estimable.
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

export function computeProgressTotals(seriesList: StudySeries[], p: LocalDashboardProgress): ProgressTotals {
  let lessonsCompleted = 0
  let totalMinutes = 0

  for (const series of seriesList) {
    for (const lesson of series.lessons) {
      if (p.completedKeys.includes(lessonKey(series.slug, lesson.slug))) {
        lessonsCompleted++
        totalMinutes += lesson.durationMinutes
      }
    }
  }

  if (p.lastLesson && p.lastLesson.totalSteps > 0) {
    const k = lessonKey(p.lastLesson.seriesSlug, p.lastLesson.lessonSlug)
    if (!p.completedKeys.includes(k)) {
      const hit = findLesson(seriesList, p.lastLesson.seriesSlug, p.lastLesson.lessonSlug)
      if (hit) {
        const frac = (p.lastLesson.stepIndex + 1) / p.lastLesson.totalSteps
        totalMinutes += Math.round(hit.lesson.durationMinutes * frac)
      }
    }
  }

  let studiesStarted = 0
  let studiesCompleted = 0
  for (const series of seriesList) {
    const lessons = sortedLessons(series)
    if (lessons.length === 0) continue
    const any =
      lessons.some((l) => p.completedKeys.includes(lessonKey(series.slug, l.slug))) ||
      p.lastLesson?.seriesSlug === series.slug
    if (any) studiesStarted++
    const allDone = lessons.every((l) => p.completedKeys.includes(lessonKey(series.slug, l.slug)))
    if (allDone) studiesCompleted++
  }

  return {
    studiesStarted,
    studiesCompleted,
    lessonsCompleted,
    totalMinutes,
    streakDays: streakFromActivityDays(p.activityDays),
  }
}

export function computeActiveStudy(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
): ActiveStudyState | null {
  const seriesList = catalog.allSeries
  if (seriesList.length === 0) return null

  const next = resolveActiveLesson(seriesList, p)
  if (!next) return null

  return buildActiveState(next.series, next.lesson, p)
}

export function computeTodayFocus(seriesList: StudySeries[], active: ActiveStudyState | null): TodayFocus {
  if (active) {
    const hit = findLesson(seriesList, active.studySlug, active.lessonSlug)
    const ref = hit ? primaryScriptureLine(hit.lesson) : active.primaryScripture
    const line = hit
      ? focusSentenceForLesson(hit.lesson, active.lessonTitle)
      : `Stay in “${active.lessonTitle}”: one clear step today is enough.`
    return {
      eyebrow: 'Today’s focus',
      reference: ref,
      line,
      ctaLabel: active.progressPercent >= 100 ? 'Review lesson' : 'Open lesson',
      lessonHref: active.continueHref,
    }
  }

  const starter = findLesson(seriesList, 'god-is-love', 'the-logic-of-love')
  if (starter) {
    const ref = primaryScriptureLine(starter.lesson)
    return {
      eyebrow: 'Today’s focus',
      reference: ref,
      line: focusSentenceForLesson(starter.lesson, starter.lesson.title),
      ctaLabel: 'Open first lesson',
      lessonHref: `/study-library/${starter.series.slug}/lesson/${starter.lesson.slug}?step=0`,
    }
  }

  const ordered = sortedSeries(seriesList)
  const s = ordered[0]
  const l = s ? sortedLessons(s)[0] : undefined
  if (s && l) {
    return {
      eyebrow: 'Today’s focus',
      reference: primaryScriptureLine(l),
      line: focusSentenceForLesson(l, l.title),
      ctaLabel: 'Open first lesson',
      lessonHref: `/study-library/${s.slug}/lesson/${l.slug}?step=0`,
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

export type DashboardBundle = {
  progress: ProgressTotals
  activeStudy: ActiveStudyState | null
  todayFocus: TodayFocus
  currentPath: CurrentPathInfo | null
  /** Total lesson rows across all series in the catalog (for “caught up” detection). */
  totalLessonsInCatalog: number
  /** True when every catalog lesson is marked complete locally. */
  allLessonsComplete: boolean
}

function totalLessonsInCatalog(seriesList: StudySeries[]): number {
  return seriesList.reduce((n, s) => n + s.lessons.length, 0)
}

export function buildDashboardBundle(catalog: LoadedCatalog, local: LocalDashboardProgress): DashboardBundle {
  const seriesList = catalog.allSeries
  const progress = computeProgressTotals(seriesList, local)
  const activeStudy = computeActiveStudy(catalog, local)
  const todayFocus = computeTodayFocus(seriesList, activeStudy)
  const currentPath = computeCurrentPath(catalog, local, activeStudy)
  const totalLessons = totalLessonsInCatalog(seriesList)
  const allLessonsComplete = totalLessons > 0 && progress.lessonsCompleted === totalLessons

  return {
    progress,
    activeStudy,
    todayFocus,
    currentPath,
    totalLessonsInCatalog: totalLessons,
    allLessonsComplete,
  }
}
