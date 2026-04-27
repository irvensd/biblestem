import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type { StudySeries } from '@/lib/types/product'

export function getRelatedStudies(
  catalog: LoadedCatalog,
  currentSlug: string,
  limit = 3,
): StudySeries[] {
  const current = catalog.allSeries.find((s) => s.slug === currentSlug)
  if (!current) return []
  const others = catalog.allSeries.filter((s) => s.slug !== currentSlug && s.isPublished !== false)
  const samePath = others.filter((s) => s.studyPathId === current.studyPathId)
  const rest = others.filter((s) => s.studyPathId !== current.studyPathId)
  const byFeaturedThenTitle = (a: StudySeries, b: StudySeries) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return a.title.localeCompare(b.title)
  }
  samePath.sort(byFeaturedThenTitle)
  rest.sort(byFeaturedThenTitle)
  return [...samePath, ...rest].slice(0, limit)
}
