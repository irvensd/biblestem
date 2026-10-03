import { getSeriesForPathSlugFromCatalog } from '@/lib/catalog/catalog-shared'
import type { LoadedCatalog } from '@/lib/catalog/catalog-shared'
import type { StudyPath, StudySeries } from '@/lib/types/product'

/** Fixed order for the Learning Paths roadmap (no standalone “State of the Dead” path). */
export const LEARNING_PATH_SLUGS = ['foundations', 'prophecy', 'theology', 'life-application'] as const

export type PathJourneyMeta = {
  audienceLabel: string
  levelLabel: string
  /** Disables the primary CTA; count line shows “Coming soon.” */
  isComingSoon: boolean
}

const JOURNEY: Record<string, PathJourneyMeta> = {
  foundations: { audienceLabel: 'Start here', levelLabel: 'Beginner', isComingSoon: false },
  prophecy: { audienceLabel: 'End-time themes', levelLabel: 'Advanced', isComingSoon: false },
  theology: { audienceLabel: 'Deep doctrine', levelLabel: 'Advanced', isComingSoon: false },
  'life-application': {
    audienceLabel: 'Coming soon',
    levelLabel: 'Beginner to Intermediate',
    isComingSoon: true,
  },
}

export function getPathJourneyMeta(slug: string): PathJourneyMeta {
  return JOURNEY[slug] ?? { audienceLabel: '', levelLabel: '', isComingSoon: false }
}

export function formatPathStudyCountLine(seriesCount: number, isComingSoon: boolean): string {
  if (isComingSoon) return 'Coming soon'
  if (seriesCount === 0) return 'Coming soon'
  return `${seriesCount} ${seriesCount === 1 ? 'study' : 'studies'}`
}

export function getOrderedLearningPathEntries(
  catalog: LoadedCatalog,
): { path: StudyPath; series: StudySeries[]; journey: PathJourneyMeta }[] {
  return LEARNING_PATH_SLUGS.map((slug) => {
    const path = catalog.paths.find((p) => p.slug === slug)
    if (!path) return null
    const series = getSeriesForPathSlugFromCatalog(catalog, slug)
    return { path, series, journey: getPathJourneyMeta(slug) }
  }).filter((x): x is { path: StudyPath; series: StudySeries[]; journey: PathJourneyMeta } => x != null)
}

export const PATHS_PAGE_RECOMMENDED_SLUGS = [
  'god-is-love',
  'three-angels-messages',
  'death-resurrection-hope-of-life',
] as const
