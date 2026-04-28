import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import { getSeriesBySlugFromCatalog } from '@/lib/catalog/load-catalog'
import type { ActiveStudyState } from '@/lib/dashboard-mock-data'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import { lessonKey } from '@/lib/dashboard-local-progress'
import type { StudySeries } from '@/lib/types/product'

const GOD_IS_LOVE = 'god-is-love'
const THREE_ANGELS = 'three-angels-messages'
const DEATH = 'death-resurrection-hope-of-life'
const FAITH = 'faith-that-shows-up'
const KNOWING = 'knowing-christ-in-scripture'

function isSeriesFullyComplete(series: StudySeries, p: LocalDashboardProgress): boolean {
  if (series.lessons.length === 0) return false
  return series.lessons.every((l) => p.completedKeys.includes(lessonKey(series.slug, l.slug)))
}

function hasNoMeaningfulProgress(p: LocalDashboardProgress): boolean {
  return p.completedKeys.length === 0 && p.lastLesson == null
}

function pathId(catalog: LoadedCatalog, pathSlug: string): string | undefined {
  return catalog.paths.find((x) => x.slug === pathSlug)?.id
}

/**
 * At most 2 series; never the active study. Skips fully completed work unless
 * the catalog has nothing else left to suggest.
 */
export function getDashboardRecommendations(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
  active: ActiveStudyState | null,
): StudySeries[] {
  const out: StudySeries[] = []
  const taken = new Set<string>()
  if (active?.studySlug) taken.add(active.studySlug)

  const bySlug = (slug: string) => getSeriesBySlugFromCatalog(catalog, slug)

  function tryAddIncomplete(s: StudySeries | null | undefined): void {
    if (out.length >= 2 || !s) return
    if (taken.has(s.slug)) return
    if (isSeriesFullyComplete(s, p)) return
    out.push(s)
    taken.add(s.slug)
  }

  function tryAddAny(s: StudySeries | null | undefined): void {
    if (out.length >= 2 || !s) return
    if (taken.has(s.slug)) return
    out.push(s)
    taken.add(s.slug)
  }

  if (hasNoMeaningfulProgress(p)) {
    // God Is Love first, then a second if available
    tryAddIncomplete(bySlug(GOD_IS_LOVE))
    for (const slug of [THREE_ANGELS, DEATH, FAITH, KNOWING]) {
      if (out.length >= 2) break
      tryAddIncomplete(bySlug(slug))
    }
  } else {
    const activePath = active
      ? catalog.allSeries.find((s) => s.slug === active.studySlug)?.studyPathId
      : undefined
    const theology = pathId(catalog, 'theology')
    const foundations = pathId(catalog, 'foundations')
    const prophecy = pathId(catalog, 'prophecy')

    if (activePath && theology && activePath === theology) {
      tryAddIncomplete(bySlug(THREE_ANGELS))
      tryAddIncomplete(bySlug(GOD_IS_LOVE))
    } else if (activePath && foundations && activePath === foundations) {
      for (const slug of [FAITH, THREE_ANGELS, KNOWING, DEATH, GOD_IS_LOVE]) {
        if (out.length >= 2) break
        tryAddIncomplete(bySlug(slug))
      }
    } else if (activePath && prophecy && activePath === prophecy) {
      for (const slug of [DEATH, GOD_IS_LOVE, THREE_ANGELS, FAITH, KNOWING]) {
        if (out.length >= 2) break
        tryAddIncomplete(bySlug(slug))
      }
    } else {
      for (const slug of [THREE_ANGELS, DEATH, GOD_IS_LOVE, FAITH, KNOWING]) {
        if (out.length >= 2) break
        tryAddIncomplete(bySlug(slug))
      }
    }
  }

  if (out.length < 2) {
    for (const s of [...catalog.allSeries].sort((a, b) => a.sortOrder - b.sortOrder)) {
      if (out.length >= 2) break
      tryAddIncomplete(s)
    }
  }

  if (out.length < 2) {
    for (const s of [...catalog.allSeries].sort((a, b) => a.sortOrder - b.sortOrder)) {
      if (out.length >= 2) break
      if (taken.has(s.slug)) continue
      tryAddAny(s)
    }
  }

  return out.slice(0, 2)
}
