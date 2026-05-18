import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import {
  completedFoundationStudyCount,
  currentFoundationStudy,
  getFoundationsPathId,
  orderFoundationStudies,
} from '@/lib/foundation-path'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import type { StudySeries } from '@/lib/types/product'

export type StudyLibraryLevelSlug = 'foundations' | 'intermediate' | 'advanced'

function isPublishedWithLessons(s: StudySeries): boolean {
  return s.isPublished !== false && s.lessonsCount > 0
}

function sortByTitle(a: StudySeries, b: StudySeries): number {
  return a.title.localeCompare(b.title)
}

/** Beginner studies on the Foundations path, in guided order (browse page). */
export function getFoundationBrowseStudies(catalog: LoadedCatalog): StudySeries[] {
  const pathId = getFoundationsPathId(catalog)
  if (!pathId) return []
  return orderFoundationStudies(
    catalog.allSeries.filter(
      (s) => s.studyPathId === pathId && s.level === 'Beginner' && isPublishedWithLessons(s),
    ),
  )
}

/** All published Intermediate studies for the browse page. */
export function getIntermediateBrowseStudies(allSeries: StudySeries[]): StudySeries[] {
  return allSeries.filter((s) => s.level === 'Intermediate' && isPublishedWithLessons(s)).sort(sortByTitle)
}

/** All published Advanced studies for the browse page. */
export function getAdvancedBrowseStudies(allSeries: StudySeries[]): StudySeries[] {
  return allSeries.filter((s) => s.level === 'Advanced' && isPublishedWithLessons(s)).sort(sortByTitle)
}

export function getBrowseStudiesForLevel(
  catalog: LoadedCatalog,
  level: StudyLibraryLevelSlug,
): StudySeries[] {
  if (level === 'foundations') return getFoundationBrowseStudies(catalog)
  if (level === 'intermediate') return getIntermediateBrowseStudies(catalog.allSeries)
  return getAdvancedBrowseStudies(catalog.allSeries)
}

export function completedStudyCount(studies: StudySeries[], progress: LocalDashboardProgress): number {
  return completedFoundationStudyCount(studies, progress)
}

export function currentStudyInList(
  studies: StudySeries[],
  progress: LocalDashboardProgress,
): StudySeries | null {
  return currentFoundationStudy(studies, progress)
}

export function recommendedNextLabel(
  studies: StudySeries[],
  progress: LocalDashboardProgress,
): string | null {
  const total = studies.length
  if (total === 0) return null
  const completed = completedStudyCount(studies, progress)
  if (completed >= total) return 'Every study complete'
  return currentStudyInList(studies, progress)?.title ?? null
}
