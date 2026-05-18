import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type { ActiveStudyState } from '@/lib/dashboard-mock-data'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import { getExploreNextRecommendations } from '@/lib/dashboard-progress-metrics'
import type { StudySeries } from '@/lib/types/product'

/** At most 2 series for Explore Next; never the active study. */
export function getDashboardRecommendations(
  catalog: LoadedCatalog,
  p: LocalDashboardProgress,
  active: ActiveStudyState | null,
): StudySeries[] {
  return getExploreNextRecommendations(catalog, p, active?.studySlug ?? null)
}
