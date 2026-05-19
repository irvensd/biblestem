import { cache } from 'react'
import { FOUNDATION_GUIDED_SLUG_ORDER } from '@/lib/foundation-path'
import { studyPaths, studySeriesCatalog } from '@/lib/product-mock'
import { isSupabaseConfigured } from '@/lib/supabase/client'
import { fetchCatalogFromSupabase } from '@/lib/supabase/fetch-catalog'
import { TransientCatalogFetchError } from '@/lib/supabase/transient-errors'
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

function cloneStudySeries(s: StudySeries): StudySeries {
  return {
    ...s,
    lessons: s.lessons.map((l) => ({ ...l, sections: l.sections.map((x) => ({ ...x })) })),
  }
}

function mockCatalog(): LoadedCatalog {
  return {
    source: 'mock',
    paths: [...studyPaths].sort((a, b) => a.sortOrder - b.sortOrder),
    allSeries: studySeriesCatalog.map((s) => cloneStudySeries(s)),
  }
}

/** Only supplement real Foundations journey studies, not legacy mock placeholders. */
function isMockCatalogSupplementCandidate(series: StudySeries): boolean {
  if (typeof series.foundationOrder === 'number') return true
  return (FOUNDATION_GUIDED_SLUG_ORDER as readonly string[]).includes(series.slug)
}

/**
 * When Supabase is configured but new studies exist only in the bundled mock catalog
 * (or remote rows have no lesson rows yet), merge mock entries so browse pages stay complete.
 */
function supplementRemoteCatalogWithMock(remote: LoadedCatalog): LoadedCatalog {
  const mock = mockCatalog()
  const bySlug = new Map(remote.allSeries.map((s) => [s.slug, s]))

  for (const mockSeries of mock.allSeries) {
    if (!isMockCatalogSupplementCandidate(mockSeries)) continue
    const existing = bySlug.get(mockSeries.slug)
    if (!existing) {
      bySlug.set(mockSeries.slug, cloneStudySeries(mockSeries))
      continue
    }
    const remoteLessons = existing.lessons?.length ?? 0
    const mockLessons = mockSeries.lessons.length
    if (remoteLessons === 0 && mockLessons > 0) {
      const merged = cloneStudySeries(mockSeries)
      bySlug.set(mockSeries.slug, {
        ...merged,
        id: existing.id,
        studyPathId: existing.studyPathId,
        lessons: merged.lessons.map((l) => ({ ...l, studySeriesId: existing.id })),
      })
    }
  }

  const allSeries = [...bySlug.values()].sort((a, b) => a.sortOrder - b.sortOrder)
  return { ...remote, allSeries }
}

/** Reuse a successful Supabase response for this long without refetching (per server instance). */
const CATALOG_FRESH_TTL_MS = 60_000
/** After that, still serve the last good Supabase snapshot on transient failures for up to this long. */
const CATALOG_STALE_MAX_MS = 60 * 60_000

type CatalogMemoryEntry = { value: LoadedCatalog; fetchedAt: number }

let catalogMemoryCache: CatalogMemoryEntry | null = null

function isSupabaseCatalog(c: LoadedCatalog): boolean {
  return c.source === 'supabase'
}

async function fetchCatalogWithRetries(): Promise<{ paths: StudyPath[]; allSeries: StudySeries[] } | null> {
  const maxAttempts = 3
  const baseDelayMs = 200
  let last: unknown
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await fetchCatalogFromSupabase()
    } catch (e) {
      last = e
      const retry = e instanceof TransientCatalogFetchError && attempt < maxAttempts - 1
      if (retry) {
        await new Promise((r) => setTimeout(r, baseDelayMs * 2 ** attempt))
        continue
      }
      throw e
    }
  }
  console.error('[catalog] Unexpected retry loop exit', last)
  return null
}

/**
 * Cached catalog per request (React `cache`) plus in-memory stale-while-revalidate across requests
 * on the same Node instance: retries transient Supabase errors, then serves last good snapshot
 * before falling back to mock + notice.
 */
export const loadCatalog = cache(async (): Promise<LoadedCatalog> => {
  if (!isSupabaseConfigured()) {
    return mockCatalog()
  }

  const now = Date.now()

  if (
    catalogMemoryCache &&
    isSupabaseCatalog(catalogMemoryCache.value) &&
    now - catalogMemoryCache.fetchedAt < CATALOG_FRESH_TTL_MS
  ) {
    return supplementRemoteCatalogWithMock(catalogMemoryCache.value)
  }

  try {
    const remote = await fetchCatalogWithRetries()
    if (remote && remote.paths.length > 0 && remote.allSeries.length > 0) {
      const loaded = supplementRemoteCatalogWithMock({ source: 'supabase', ...remote })
      catalogMemoryCache = { value: loaded, fetchedAt: now }
      return loaded
    }
  } catch (e) {
    if (e instanceof TransientCatalogFetchError) {
      console.warn('[catalog] Supabase catalog fetch failed after retries:', e.message)
    } else {
      console.error('[catalog] Supabase catalog load failed, using cache or mock:', e)
    }
  }

  if (
    catalogMemoryCache &&
    isSupabaseCatalog(catalogMemoryCache.value) &&
    now - catalogMemoryCache.fetchedAt < CATALOG_STALE_MAX_MS
  ) {
    console.warn(
      `[catalog] Serving stale Supabase catalog snapshot (age ${Math.round((now - catalogMemoryCache.fetchedAt) / 1000)}s) after fetch failure`,
    )
    return supplementRemoteCatalogWithMock(catalogMemoryCache.value)
  }

  return mockCatalog()
})

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

export function getSeriesForPathSlugFromCatalog(
  catalog: LoadedCatalog,
  pathSlug: string,
): StudySeries[] {
  const path = getStudyPathBySlugFromCatalog(catalog, pathSlug)
  if (!path) return []
  return catalog.allSeries
    .filter((s) => s.studyPathId === path.id)
    .sort((a, b) => a.sortOrder - b.sortOrder)
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
