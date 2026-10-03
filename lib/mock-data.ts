/**
 * Back-compat re-exports — prefer `@/lib/product-queries` + `@/lib/types/product`.
 * Server-only because it re-exports the full mock catalog.
 */

import 'server-only'

import { seriesCountForPathSlug } from '@/lib/catalog/mock-catalog-queries'

export type { Lesson, StudyLevel, StudySeries } from '@/lib/types/product'

export { studyPaths, studySeriesCatalog } from '@/lib/product-mock'
export {
  findLessonInCatalog,
  getAllSeries,
  getSeriesBySlug,
  getSeriesForPathSlug,
  getSeriesWithPathBySlug,
  getStudyPathBySlug,
  getStudyPaths,
  seriesCountForPathSlug,
} from '@/lib/catalog/mock-catalog-queries'
export {
  filterSeriesForLibrary,
  formatLessonDuration,
  getPathNameForSeries,
  getRecommendedSeriesSlugs,
  getNextLessonInSeries,
  groupSeriesByCollection,
  groupStudiesByLevelOrSection,
  STUDY_LIBRARY_SECTION_ORDER,
  lessonProgressLabel,
} from '@/lib/product-queries'

/** Stable reference for legacy imports (`import { studies } from '@/lib/mock-data'`). */
export { studySeriesCatalog as studies } from '@/lib/product-mock'

/** @deprecated Use `studyPaths` or `getStudyPaths()` */
export { studyPaths as categories } from '@/lib/product-mock'

/** @deprecated Map legacy category labels to path slugs */
export function seriesCountForCategory(categoryName: string): number {
  const legacy: Record<string, string> = {
    Foundations: 'foundations',
    Theology: 'theology',
    'Life Application': 'life-application',
    Prophecy: 'prophecy',
  }
  const slug = legacy[categoryName] ?? categoryName.toLowerCase().replace(/\s+/g, '-')
  return seriesCountForPathSlug(slug)
}
