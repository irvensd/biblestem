import 'server-only'

import { cache } from 'react'
import type { LoadedCatalog } from '@/lib/catalog/catalog-shared'
import { publishCatalogSeries } from '@/lib/catalog/lesson-readiness'
import { FOUNDATION_GUIDED_SLUG_ORDER } from '@/lib/foundation-path'
import { DEEPER_MOCK_FIRST_SERIES_SLUGS } from '@/lib/deeper-lesson-shell'

export type { CatalogSource, LoadedCatalog } from '@/lib/catalog/catalog-shared'
export {
  findLessonInCatalogFromCatalog,
  getSeriesBySlugFromCatalog,
  getSeriesForPathSlugFromCatalog,
  getSeriesWithPathBySlugFromCatalog,
  getStudyPathBySlugFromCatalog,
  seriesCountForPathFromCatalog,
  shouldShowCatalogFallbackNotice,
} from '@/lib/catalog/catalog-shared'

/** Deprecated catalog slugs replaced in mock (hide from Supabase when still present remotely). */
const DEPRECATED_STUDY_SLUGS = new Set(['origin-of-evil'])
import { studyPaths, studySeriesCatalog } from '@/lib/product-mock'
import { isSupabaseConfigured } from '@/lib/supabase/client'
import { fetchCatalogFromSupabase } from '@/lib/supabase/fetch-catalog'
import { TransientCatalogFetchError } from '@/lib/supabase/transient-errors'
import type { StudyPath, StudySeries } from '@/lib/types/product'

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
  if (DEEPER_MOCK_FIRST_SERIES_SLUGS.has(series.slug)) return true
  return (FOUNDATION_GUIDED_SLUG_ORDER as readonly string[]).includes(series.slug)
}

/**
 * When Supabase is configured but new studies exist only in the bundled mock catalog
 * (or remote rows have no lesson rows yet), merge mock entries so browse pages stay complete.
 */
function supplementRemoteCatalogWithMock(remote: LoadedCatalog): LoadedCatalog {
  const mock = mockCatalog()
  const bySlug = new Map(
    remote.allSeries.filter((s) => !DEPRECATED_STUDY_SLUGS.has(s.slug)).map((s) => [s.slug, s]),
  )

  for (const mockSeries of mock.allSeries) {
    if (!isMockCatalogSupplementCandidate(mockSeries)) continue
    const existing = bySlug.get(mockSeries.slug)
    if (!existing) {
      bySlug.set(mockSeries.slug, cloneStudySeries(mockSeries))
      continue
    }
    const remoteLessons = existing.lessons?.length ?? 0
    const mockLessons = mockSeries.lessons.length
    if (DEEPER_MOCK_FIRST_SERIES_SLUGS.has(mockSeries.slug)) {
      const merged = cloneStudySeries(mockSeries)
      bySlug.set(mockSeries.slug, {
        ...merged,
        id: existing.id,
        studyPathId: existing.studyPathId,
        lessons:
          remoteLessons > 0
            ? existing.lessons.map((l) => ({ ...l, studySeriesId: existing.id }))
            : merged.lessons.map((l) => ({ ...l, studySeriesId: existing.id })),
      })
      continue
    }
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
function finalizeCatalog(catalog: LoadedCatalog): LoadedCatalog {
  const merged = catalog.source === 'supabase' ? supplementRemoteCatalogWithMock(catalog) : catalog
  return { ...merged, allSeries: publishCatalogSeries(merged.allSeries) }
}

export const loadCatalog = cache(async (): Promise<LoadedCatalog> => {
  if (!isSupabaseConfigured()) {
    return finalizeCatalog(mockCatalog())
  }

  const now = Date.now()

  if (
    catalogMemoryCache &&
    isSupabaseCatalog(catalogMemoryCache.value) &&
    now - catalogMemoryCache.fetchedAt < CATALOG_FRESH_TTL_MS
  ) {
    return catalogMemoryCache.value
  }

  try {
    const remote = await fetchCatalogWithRetries()
    if (remote && remote.paths.length > 0 && remote.allSeries.length > 0) {
      const loaded = finalizeCatalog({ source: 'supabase', ...remote })
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
    return catalogMemoryCache.value
  }

  return finalizeCatalog(mockCatalog())
})
