import { isSupabaseConfigured } from '@/lib/supabase/client'
import type { Lesson, StudyPath, StudySeries, StudySeriesWithPath } from '@/lib/types/product'

export type CatalogSource = 'supabase' | 'mock'

export type LoadedCatalog = {
  source: CatalogSource
  paths: StudyPath[]
  allSeries: StudySeries[]
}

/** True when Supabase is configured but the app is using the bundled mock catalog (offline / outage). */
export function shouldShowCatalogFallbackNotice(catalog: LoadedCatalog): boolean {
  return isSupabaseConfigured() && catalog.source === 'mock'
}

export function getSeriesBySlugFromCatalog(catalog: LoadedCatalog, slug: string): StudySeries | undefined {
  return catalog.allSeries.find((s) => s.slug === slug)
}

export function getStudyPathBySlugFromCatalog(catalog: LoadedCatalog, slug: string): StudyPath | undefined {
  return catalog.paths.find((p) => p.slug === slug)
}

export function getSeriesWithPathBySlugFromCatalog(
  catalog: LoadedCatalog,
  slug: string,
): StudySeriesWithPath | undefined {
  const series = getSeriesBySlugFromCatalog(catalog, slug)
  if (!series) return undefined
  const studyPath = catalog.paths.find((p) => p.id === series.studyPathId)
  if (!studyPath) return undefined
  return { ...series, studyPath }
}

export function getSeriesForPathSlugFromCatalog(catalog: LoadedCatalog, pathSlug: string): StudySeries[] {
  const path = getStudyPathBySlugFromCatalog(catalog, pathSlug)
  if (!path) return []
  return catalog.allSeries.filter((s) => s.studyPathId === path.id).sort((a, b) => a.sortOrder - b.sortOrder)
}

export function seriesCountForPathFromCatalog(catalog: LoadedCatalog, pathSlug: string): number {
  return getSeriesForPathSlugFromCatalog(catalog, pathSlug).length
}

export function findLessonInCatalogFromCatalog(
  catalog: LoadedCatalog,
  seriesSlug: string,
  lessonSlug: string,
): { series: StudySeries; lesson: Lesson } | undefined {
  const series = getSeriesBySlugFromCatalog(catalog, seriesSlug)
  if (!series) return undefined
  const lesson = series.lessons.find((l) => l.slug === lessonSlug)
  if (!lesson) return undefined
  return { series, lesson }
}
