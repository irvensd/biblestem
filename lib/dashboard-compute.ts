import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type {
  ActiveStudyState,
  DashboardNote,
  ProgressTotals,
  StudyPathItem,
  TodayFocus,
} from '@/lib/dashboard-mock-data'
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

function buildActiveState(series: StudySeries, lesson: Lesson, p: LocalDashboardProgress): ActiveStudyState {
  const k = lessonKey(series.slug, lesson.slug)
  const done = p.completedKeys.includes(k)
  const last = p.lastLesson
  const isCurrentLast =
    last?.seriesSlug === series.slug && last.lessonSlug === lesson.slug && last.totalSteps > 0

  let progressPercent = 0
  let minutesRemaining = lesson.durationMinutes

  if (done) {
    progressPercent = 100
    minutesRemaining = 0
  } else if (isCurrentLast) {
    const total = last!.totalSteps
    const step = Math.min(last!.stepIndex, total - 1)
    progressPercent = Math.min(99, Math.round(((step + 1) / total) * 100))
    minutesRemaining = Math.max(1, Math.round(lesson.durationMinutes * (1 - (step + 1) / total)))
  }

  return {
    studySlug: series.slug,
    studyTitle: series.title,
    lessonSlug: lesson.slug,
    lessonTitle: lesson.title,
    scripture: lesson.scripture,
    progressPercent,
    minutesRemaining,
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
  seriesList: StudySeries[],
  p: LocalDashboardProgress,
): ActiveStudyState | null {
  if (seriesList.length === 0) return null

  const next = findNextIncomplete(seriesList, p)
  if (!next) return null

  return buildActiveState(next.series, next.lesson, p)
}

export function computeHeaderStats(progress: ProgressTotals): {
  streakDays: number
  lessonsCompleted: number
  totalMinutesStudied: number
} {
  return {
    streakDays: progress.streakDays,
    lessonsCompleted: progress.lessonsCompleted,
    totalMinutesStudied: progress.totalMinutes,
  }
}

export function buildStudyPathNavItems(paths: import('@/lib/types/product').StudyPath[]): StudyPathItem[] {
  if (paths.length === 0) return []
  const firstSlug = [...paths].sort((a, b) => a.sortOrder - b.sortOrder)[0]!.slug
  return paths.map((p) => ({
    id: p.slug,
    label: p.name,
    description: p.description,
    href: `/paths/${p.slug}`,
    isCurrent: p.slug === firstSlug,
    isRecommended: false,
  }))
}

const REFLECTION_PREFIX = 'biblestem-reflection-'

export function computeReflectionNotesPreview(seriesList: StudySeries[], limit: number): DashboardNote[] {
  if (typeof window === 'undefined') return []
  const out: DashboardNote[] = []
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key?.startsWith(REFLECTION_PREFIX)) continue
      const raw = localStorage.getItem(key)
      if (!raw?.trim()) continue

      const rest = key.slice(REFLECTION_PREFIX.length)
      let matched: { series: StudySeries; lesson: Lesson } | null = null
      for (const series of sortedSeries(seriesList)) {
        const prefix = `${series.slug}-`
        if (rest.startsWith(prefix)) {
          const lessonSlug = rest.slice(prefix.length)
          const lesson = series.lessons.find((l) => l.slug === lessonSlug)
          if (lesson) {
            matched = { series, lesson }
            break
          }
        }
      }

      const refLabel = matched
        ? `${matched.lesson.scripture.split('·')[0]?.trim() ?? matched.lesson.title} · ${matched.lesson.title}`
        : 'Reflection'
      const snippet = raw.trim().slice(0, 200) + (raw.length > 200 ? '…' : '')
      out.push({
        id: key,
        reference: refLabel,
        snippet,
        updatedLabel: 'Saved on this device',
      })
      if (out.length >= limit) break
    }
  } catch {
    return []
  }
  return out
}

export function computeTodayFocus(seriesList: StudySeries[], active: ActiveStudyState | null): TodayFocus {
  if (active) {
    const hit = findLesson(seriesList, active.studySlug, active.lessonSlug)
    const verse = hit
      ? `“${hit.lesson.scripture.split('·')[0]?.trim() ?? hit.lesson.scripture}”`
      : '“Your word is a lamp to my feet and a light to my path.”'
    return {
      eyebrow: 'Today’s focus',
      verse,
      reflection: `Continue “${active.lessonTitle}” when you have a quiet moment—consistency matters more than length.`,
      ctaLabel: active.progressPercent >= 100 ? 'Review lesson' : 'Open lesson',
      lessonHref: `/study-library/${active.studySlug}/lesson/${active.lessonSlug}`,
    }
  }

  const ordered = sortedSeries(seriesList)
  const s = ordered[0]
  const l = s ? sortedLessons(s)[0] : undefined
  if (s && l) {
    return {
      eyebrow: 'Today’s focus',
      verse: '“Your word is a lamp to my feet and a light to my path.”',
      reflection: `Start with “${l.title}” in ${s.title}—one step is enough for today.`,
      ctaLabel: 'Open first lesson',
      lessonHref: `/study-library/${s.slug}/lesson/${l.slug}`,
    }
  }

  return {
    eyebrow: 'Today’s focus',
    verse: '“Man shall not live by bread alone, but by every word that comes from the mouth of God.”',
    reflection: 'Pick a study in the library and open the first lesson when you are ready.',
    ctaLabel: 'Browse library',
    lessonHref: '/study-library',
  }
}

export type DashboardBundle = {
  progress: ProgressTotals
  activeStudy: ActiveStudyState | null
  headerStats: ReturnType<typeof computeHeaderStats>
  todayFocus: TodayFocus
  studyPathsNav: StudyPathItem[]
  notes: DashboardNote[]
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
  const activeStudy = computeActiveStudy(seriesList, local)
  const headerStats = computeHeaderStats(progress)
  const todayFocus = computeTodayFocus(seriesList, activeStudy)
  const studyPathsNav = buildStudyPathNavItems(catalog.paths)
  const reflectionNotes = computeReflectionNotesPreview(seriesList, 5)
  const totalLessons = totalLessonsInCatalog(seriesList)
  const allLessonsComplete = totalLessons > 0 && progress.lessonsCompleted === totalLessons

  return {
    progress,
    activeStudy,
    headerStats,
    todayFocus,
    studyPathsNav,
    notes: reflectionNotes,
    totalLessonsInCatalog: totalLessons,
    allLessonsComplete,
  }
}
