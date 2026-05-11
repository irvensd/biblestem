import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import { getStudyPathBySlugFromCatalog } from '@/lib/catalog/load-catalog'
import type { StudySeries } from '@/lib/types/product'

export type PathHubCardDefinition = {
  /** Catalog `study_paths.slug` */
  catalogSlug: string
  /** Destination route */
  routeHref: string
  hubTitle: string
  hubDescription: string
}

/** Fixed hub card copy and routing (visibility decided per catalog below). */
export const PATH_HUB_CARDS: PathHubCardDefinition[] = [
  {
    catalogSlug: 'foundations',
    routeHref: '/paths/foundations',
    hubTitle: 'Foundations',
    hubDescription:
      'Start here with beginner studies that build a clear foundation for deeper Bible study.',
  },
  {
    catalogSlug: 'prophecy',
    routeHref: '/paths/prophecy',
    hubTitle: 'Prophecy',
    hubDescription: 'Study prophecy carefully with Scripture-first lessons and context.',
  },
  {
    catalogSlug: 'theology',
    routeHref: '/paths/theology',
    hubTitle: 'Theology',
    hubDescription: 'Explore doctrine with clarity, humility, and Scripture as the guide.',
  },
  {
    catalogSlug: 'life-application',
    routeHref: '/paths/spiritual-life',
    hubTitle: 'Spiritual Life',
    hubDescription: 'Build habits of prayer, trust, obedience, and daily walking with God.',
  },
]

function isPublishedSeriesOnPath(series: StudySeries, pathId: string): boolean {
  if (series.studyPathId !== pathId) return false
  if (series.isPublished === false) return false
  if (series.lessonsCount <= 0) return false
  return Boolean(series.lessons?.length)
}

/** Count of series on this path that are publishable and have lessons. */
export function publishedStudiesCountOnPath(catalog: LoadedCatalog, pathSlug: string): number {
  const path = getStudyPathBySlugFromCatalog(catalog, pathSlug)
  if (!path) return 0
  return catalog.allSeries.filter((s) => isPublishedSeriesOnPath(s, path.id)).length
}

/** Hub cards only when the path exists and has at least one published study with lessons. */
export function getVisiblePathHubCards(catalog: LoadedCatalog): PathHubCardDefinition[] {
  return PATH_HUB_CARDS.filter((card) => publishedStudiesCountOnPath(catalog, card.catalogSlug) > 0)
}
