import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import { DEEPER_STUDIES_DESCRIPTION, HARD_QUESTIONS_SUMMARY_DESCRIPTION } from '@/lib/deeper-lesson-workflow'
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
      'Start here if you are new to BibleStem or want a clear foundation for deeper study.',
    browseHref: '/study-library/foundations',
    browseCta: 'Browse Foundations',
    pathHref: '/paths/foundations',
    pathCta: 'Start Foundations Path',
    hubDescription:
      'Start here with beginner studies that build a clear foundation for deeper Bible study.',
    summaryCardTitle: 'Foundations',
    summaryDescription:
      'Follow the guided beginner path or browse all Foundation studies.',
    pathOpenCta: 'Open Foundations Path',
    browsePageTitle: 'Foundations',
    browsePageDescription:
      'Browse all beginner Foundation studies, or follow the guided path in the recommended order.',
    emptyMessage: 'No foundation studies available yet.',
  },
  {
    level: 'Intermediate' as const,
    publicLabel: 'Hard Questions',
    sectionTitle: 'Hard Questions',
    sectionDescription: DEEPER_STUDIES_DESCRIPTION,
    browseHref: '/study-library/hard-questions',
    browseCta: 'Browse Hard Questions',
    hubDescription: DEEPER_STUDIES_DESCRIPTION,
    summaryCardTitle: 'Hard Questions',
    summaryDescription: HARD_QUESTIONS_SUMMARY_DESCRIPTION,
    browseFeatureTitle: 'Honest questions. Scripture-first answers.',
    browseFeatureText:
      'Focused studies on God\u2019s character, suffering, judgment, evil, faith, and trust.',
    browsePageTitle: 'Hard Questions',
    browsePageDescription: DEEPER_STUDIES_DESCRIPTION,
    emptyMessage: 'No Hard Questions studies available yet.',
  },
  {
    level: 'Advanced' as const,
    publicLabel: 'Advanced Studies',
    sectionTitle: 'Advanced Studies',
    sectionDescription:
      'Go deeper into prophecy, doctrine, and Scripture-to-Scripture study.',
    browseHref: '/study-library/advanced',
    browseCta: 'Browse Advanced Studies',
    hubDescription:
      'Explore deeper studies in prophecy, doctrine, theology, and carefully connected Bible passages.',
    summaryCardTitle: 'Advanced Studies',
    summaryDescription:
      'Explore deeper studies in prophecy, doctrine, and Scripture-to-Scripture learning.',
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
  studyCount: number
  /** Shown on the Foundations hub card only. */
  recommendedStart?: boolean
}

export function formatStudyCountLabel(count: number): string {
  return count === 1 ? '1 study' : `${count} studies`
}

export function formatTrackStudyMeta(count: number, level: StudyLevel): string {
  const track = getStudyTrackForLevel(level)
  const label = track?.publicLabel ?? level
  return `${formatStudyCountLabel(count)} · ${label}`
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
    const studyCount = getBrowseStudiesForTrack(catalog, track).length
    if (studyCount === 0) continue
    if (track.level === 'Beginner') {
      cards.push({
        track,
        routeHref: track.pathHref,
        ctaLabel: track.pathCta,
        studyCount,
        recommendedStart: true,
      })
    } else {
      cards.push({
        track,
        routeHref: appendBrowseFromPaths(track.browseHref),
        ctaLabel: track.browseCta,
        studyCount,
      })
    }
  }
  return cards
}
