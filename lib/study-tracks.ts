import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import {
  getAdvancedBrowseStudies,
  getFoundationBrowseStudies,
  getIntermediateBrowseStudies,
} from '@/lib/study-library-levels'
import type { StudyLevel, StudyPath, StudySeries } from '@/lib/types/product'

/** Public study tracks (maps internal `StudyLevel` to user-facing labels). */
export const STUDY_TRACKS = [
  {
    level: 'Beginner' as const,
    publicLabel: 'Foundations',
    sectionTitle: 'Foundations',
    sectionDescription:
      'Start here if you are new to BibleStem or want to build a clear foundation for deeper study.',
    browseHref: '/study-library/foundations',
    browseCta: 'Browse Foundation Studies',
    pathHref: '/paths/foundations',
    pathCta: 'View Foundations Path',
    hubDescription:
      'Start here with beginner studies that build a clear foundation for deeper Bible study.',
    summaryCardTitle: 'Foundations Path',
    summaryDescription: 'Follow the beginner studies in a clear guided order.',
    summaryHelper: 'The path keeps these studies in the recommended order.',
    browsePageTitle: 'Foundations',
    browsePageDescription:
      'Browse all beginner Foundation studies, or follow the guided path in the recommended order.',
    emptyMessage: 'No foundation studies available yet.',
  },
  {
    level: 'Intermediate' as const,
    publicLabel: 'Deeper Studies',
    sectionTitle: 'Deeper Studies',
    sectionDescription:
      'Build on the basics with studies that go further in application, biblical narrative, and spiritual growth.',
    browseHref: '/study-library/intermediate',
    browseCta: 'Browse Deeper Studies',
    hubDescription:
      'Build on the basics with studies that go further in application, biblical narrative, and spiritual growth.',
    summaryCardTitle: 'Deeper Studies',
    summaryDescription:
      'Go deeper with studies that build on the foundations and strengthen biblical understanding.',
    browseFeatureTitle: 'Build on the basics',
    browseFeatureText:
      'Browse studies that help you go further in application, narrative, and biblical skill.',
    browsePageTitle: 'Deeper Studies',
    browsePageDescription:
      'Browse studies that build on the foundations and strengthen biblical understanding.',
    emptyMessage: 'No deeper studies available yet.',
  },
  {
    level: 'Advanced' as const,
    publicLabel: 'Advanced Studies',
    sectionTitle: 'Advanced Studies',
    sectionDescription:
      'Go deeper into prophecy, doctrine, and passages that require careful Scripture-to-Scripture study.',
    browseHref: '/study-library/advanced',
    browseCta: 'Browse Advanced Studies',
    hubDescription:
      'Explore deeper studies in prophecy, doctrine, theology, and carefully connected Bible passages.',
    summaryCardTitle: 'Advanced Studies',
    summaryDescription:
      'Explore deeper studies in prophecy, doctrine, theology, and carefully connected Bible passages.',
    browseFeatureTitle: 'Go deeper carefully',
    browseFeatureText:
      'Browse studies that connect Scripture with Scripture through deeper prophecy, doctrine, and theology.',
    browsePageTitle: 'Advanced Studies',
    browsePageDescription:
      'Browse studies that connect Scripture with Scripture through deeper prophecy, doctrine, and theology.',
    emptyMessage: 'No advanced studies available yet.',
  },
] as const

export type StudyTrackDefinition = (typeof STUDY_TRACKS)[number]

export type StudyTrackHubCard = {
  track: StudyTrackDefinition
  routeHref: string
  ctaLabel: string
}

/** Query value when a browse page was opened from `/paths`. */
export const STUDY_BROWSE_FROM_PATHS_QUERY = 'paths'

export function appendBrowseFromPaths(href: string): string {
  const [path, query] = href.split('?')
  const params = new URLSearchParams(query ?? '')
  params.set('from', STUDY_BROWSE_FROM_PATHS_QUERY)
  const q = params.toString()
  return q ? `${path}?${q}` : `${path}?from=${STUDY_BROWSE_FROM_PATHS_QUERY}`
}

export function getBrowseBreadcrumbParent(from?: string | null): { label: string; href: string } {
  if (from === STUDY_BROWSE_FROM_PATHS_QUERY) {
    return { label: 'Paths', href: '/paths' }
  }
  return { label: 'Study Library', href: '/study-library' }
}

const THEMATIC_PATH_SLUGS = new Set(['prophecy', 'theology', 'life-application'])

export function getStudyTrackForLevel(level: StudyLevel | string | undefined): StudyTrackDefinition | undefined {
  return STUDY_TRACKS.find((t) => t.level === level)
}

export function getPublicTrackLabelForLevel(level: StudyLevel | string | undefined): string {
  return getStudyTrackForLevel(level)?.publicLabel ?? 'Study'
}

export function getPublicTrackLabelForSeries(series: StudySeries): string {
  return getPublicTrackLabelForLevel(series.level)
}

/** Thematic path or collection label for study cards (secondary to the public track). */
export function getStudyCategoryLabel(series: StudySeries, paths?: StudyPath[]): string | null {
  const path = paths?.find((p) => p.id === series.studyPathId)
  if (path && THEMATIC_PATH_SLUGS.has(path.slug)) {
    return path.slug === 'life-application' ? 'Spiritual Life' : path.name
  }
  const collection = series.collectionLabel?.trim()
  if (!collection) return null
  const track = getPublicTrackLabelForLevel(series.level)
  if (collection === track || collection === 'Foundational Studies') return null
  return collection
}

export function getBrowseStudiesForTrack(catalog: LoadedCatalog, track: StudyTrackDefinition): StudySeries[] {
  if (track.level === 'Beginner') return getFoundationBrowseStudies(catalog)
  if (track.level === 'Intermediate') return getIntermediateBrowseStudies(catalog.allSeries)
  return getAdvancedBrowseStudies(catalog.allSeries)
}

export function getVisibleStudyTrackHubCards(catalog: LoadedCatalog): StudyTrackHubCard[] {
  const cards: StudyTrackHubCard[] = []
  for (const track of STUDY_TRACKS) {
    if (getBrowseStudiesForTrack(catalog, track).length === 0) continue
    if (track.level === 'Beginner') {
      cards.push({ track, routeHref: track.pathHref, ctaLabel: track.pathCta })
    } else {
      cards.push({
        track,
        routeHref: appendBrowseFromPaths(track.browseHref),
        ctaLabel: track.browseCta,
      })
    }
  }
  return cards
}
