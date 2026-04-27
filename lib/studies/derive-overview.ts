import type { StudySeries, StudySeriesWithPath } from '@/lib/types/product'
import type { StudyOverviewLessonRow, StudyOverviewStatic } from './types'

export function sumLessonMinutes(series: Pick<StudySeries, 'lessons'>): number {
  return series.lessons.reduce((a, l) => a + l.durationMinutes, 0)
}

/** Same total as the study overview “At a glance” block (sum of lessons, else count × 10). */
export function effectiveStudySeriesMinutes(series: Pick<StudySeries, 'lessons' | 'lessonsCount'>): number {
  const summed = sumLessonMinutes(series)
  if (summed > 0) return summed
  if (series.lessonsCount > 0) return series.lessonsCount * 10
  return 0
}

/** Single source of truth for the overview hero: always from lesson rows, never stale `duration_summary`. */
export function formatStudyTotalDurationLabel(totalMinutes: number): string {
  if (totalMinutes <= 0) return '—'
  return `${totalMinutes} min total`
}

function leadFromDescription(description: string): string {
  const idx = description.indexOf('.')
  if (idx === -1) return description.trim()
  return description.slice(0, idx + 1).trim()
}

export function defaultWhatYouWillLearn(series: StudySeriesWithPath): string[] {
  return [
    `Work through ${series.title} at a steady, sustainable pace.`,
    'Practice observation, interpretation, and application with humility.',
    'Keep Scripture central before leaning on secondary voices.',
    'Let the Word shape prayer, gratitude, and obedience in ordinary life.',
  ]
}

export function buildStudyOverviewStatic(series: StudySeriesWithPath): StudyOverviewStatic {
  const estimatedMinutes = effectiveStudySeriesMinutes(series)
  const bullets = series.whatYouWillLearn?.filter((s) => s.trim())
  const whatYouWillLearn =
    bullets && bullets.length >= 4 ? bullets.slice(0, 6) : defaultWhatYouWillLearn(series)

  const overviewIntro = series.longDescription?.trim() || series.description

  const lessons: StudyOverviewLessonRow[] = [...series.lessons]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((l, i) => ({
      id: l.id,
      slug: l.slug,
      lessonNumber: i + 1,
      title: l.title,
      shortDescription: l.summary,
      estimatedMinutes: l.durationMinutes,
    }))

  return {
    seriesId: series.id,
    seriesSlug: series.slug,
    title: series.title,
    subtitle: series.subtitle?.trim() || leadFromDescription(overviewIntro),
    longDescription: overviewIntro,
    pathSlug: series.studyPath.slug,
    pathLabel: series.studyPath.name,
    level: series.level,
    lessonCount: lessons.length,
    estimatedMinutes,
    durationSummary: formatStudyTotalDurationLabel(estimatedMinutes),
    whatYouWillLearn,
    lessons,
  }
}
