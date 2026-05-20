import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import { getStudyPathBySlugFromCatalog } from '@/lib/catalog/load-catalog'
import type { Lesson, StudySeries } from '@/lib/types/product'
import { lessonKey } from '@/lib/dashboard-local-progress'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'

/** Preferred journey order when `foundationOrder` is unset (missing slugs are skipped). */
export const FOUNDATION_GUIDED_SLUG_ORDER = [
  'god-is-love',
  'the-god-who-wants-to-be-known',
  'made-for-more',
  'war-in-heaven',
  'the-fall-of-humanity',
  'the-promise-kept',
  'the-way-back-to-god',
  'what-happens-when-we-die',
  'when-death-died',
  'made-new-in-christ',
  'the-law-of-love',
  'the-rest-god-gives',
  'the-life-that-gives',
  'designed-to-thrive',
  'buried-and-raised',
  'built-to-belong',
  'power-under-love',
  'faithful-in-the-wilderness',
  'the-faithful-witness',
  'the-day-of-atonement',
  'the-first-angels-message',
  'the-second-angels-message',
  'the-third-angels-message',
  'the-second-coming',
  'the-millennium',
  'the-end-of-evil',
  'the-world-love-restores',
  'the-bible-gods-living-word',
] as const

function sortedLessons(series: StudySeries): Lesson[] {
  return [...series.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
}

function isPublishedSeries(s: StudySeries): boolean {
  return s.isPublished !== false
}

/** Foundations path slug (catalog id resolved per environment). */
export function getFoundationsPathId(catalog: LoadedCatalog): string | undefined {
  return getStudyPathBySlugFromCatalog(catalog, 'foundations')?.id
}

/**
 * Beginner-level Foundations studies that actually exist in the catalog with lessons.
 * Does not invent placeholders.
 */
export function filterFoundationBeginnerStudies(catalog: LoadedCatalog): StudySeries[] {
  const pathId = getFoundationsPathId(catalog)
  if (!pathId) return []

  return catalog.allSeries.filter((s) => {
    if (s.studyPathId !== pathId) return false
    if (s.level !== 'Beginner') return false
    if (!isPublishedSeries(s)) return false
    if (s.lessonsCount <= 0) return false
    if (!s.lessons?.length) return false
    return true
  })
}

function sortKey(series: StudySeries, slugRank: Map<string, number>): number {
  if (typeof series.foundationOrder === 'number') return series.foundationOrder
  const pr = slugRank.get(series.slug)
  if (pr !== undefined) return pr
  return 1000 + series.sortOrder
}

/**
 * Stable guided order: `foundationOrder`, then explicit slug priority, then catalog sortOrder for any remaining studies.
 */
export function orderFoundationStudies(studies: StudySeries[]): StudySeries[] {
  if (studies.length === 0) return []
  const slugRank = new Map<string, number>()
  FOUNDATION_GUIDED_SLUG_ORDER.forEach((slug, i) => slugRank.set(slug, i))
  const seen = new Set<string>()
  const ordered: StudySeries[] = []

  const pool = [...studies]
  const rest: StudySeries[] = []

  for (const slug of FOUNDATION_GUIDED_SLUG_ORDER) {
    const hit = pool.find((s) => s.slug === slug)
    if (hit) {
      ordered.push(hit)
      seen.add(hit.slug)
    }
  }

  for (const s of pool) {
    if (!seen.has(s.slug)) rest.push(s)
  }

  rest.sort((a, b) => sortKey(a, slugRank) - sortKey(b, slugRank))
  return [...ordered, ...rest]
}

/**
 * For Study Library sorting: compare two Foundations-path beginner studies using guided journey order.
 * Returns null when ordering should fall through (other paths, levels, or unknown path id).
 */
export function compareFoundationLibraryRecommendedOrder(
  a: StudySeries,
  b: StudySeries,
  foundationsPathId: string | undefined,
): number | null {
  if (!foundationsPathId) return null
  if (a.level !== 'Beginner' || b.level !== 'Beginner') return null
  if (a.studyPathId !== foundationsPathId || b.studyPathId !== foundationsPathId) return null
  const guided = orderFoundationStudies([a, b])
  return guided.findIndex((s) => s.slug === a.slug) - guided.findIndex((s) => s.slug === b.slug)
}

export function getOrderedFoundationPathStudies(catalog: LoadedCatalog): StudySeries[] {
  return orderFoundationStudies(filterFoundationBeginnerStudies(catalog))
}

export function studyEstimatedMinutes(series: StudySeries): number {
  if (!series.lessons?.length) return 0
  return series.lessons.reduce((acc, l) => acc + (l.durationMinutes ?? 0), 0)
}

export function foundationPathEstimatedMinutes(studies: StudySeries[]): number {
  return studies.reduce((acc, s) => acc + studyEstimatedMinutes(s), 0)
}

export function isStudyFullyComplete(series: StudySeries, p: LocalDashboardProgress): boolean {
  const lessons = sortedLessons(series)
  if (lessons.length === 0) return false
  return lessons.every((l) => p.completedKeys.includes(lessonKey(series.slug, l.slug)))
}

export function isStudyStarted(series: StudySeries, p: LocalDashboardProgress): boolean {
  if (series.lessons.some((l) => p.completedKeys.includes(lessonKey(series.slug, l.slug)))) return true
  return p.lastLesson?.seriesSlug === series.slug
}

export function firstIncompleteLesson(series: StudySeries, p: LocalDashboardProgress): Lesson | null {
  for (const l of sortedLessons(series)) {
    if (!p.completedKeys.includes(lessonKey(series.slug, l.slug))) return l
  }
  return null
}

/** First study in journey order that still has an incomplete lesson; otherwise null (all done). */
export function currentFoundationStudy(
  orderedStudies: StudySeries[],
  p: LocalDashboardProgress,
): StudySeries | null {
  for (const s of orderedStudies) {
    if (!isStudyFullyComplete(s, p)) return s
  }
  return null
}

export function completedFoundationStudyCount(orderedStudies: StudySeries[], p: LocalDashboardProgress): number {
  return orderedStudies.filter((s) => isStudyFullyComplete(s, p)).length
}

/** Guided journey chapters; slugs not listed here follow in catalog order under a trailing bucket. */
export const FOUNDATIONS_JOURNEY_CHAPTERS: readonly {
  chapterLabel: string
  title: string
  slugs: readonly string[]
}[] = [
  {
    chapterLabel: 'Chapter 1',
    title: 'Knowing God',
    slugs: ['god-is-love', 'the-god-who-wants-to-be-known', 'made-for-more'],
  },
  {
    chapterLabel: 'Chapter 2',
    title: 'The Conflict Begins',
    slugs: ['war-in-heaven', 'the-fall-of-humanity', 'the-promise-kept'],
  },
  {
    chapterLabel: 'Chapter 3',
    title: 'The Way Back',
    slugs: [
      'the-way-back-to-god',
      'what-happens-when-we-die',
      'when-death-died',
      'made-new-in-christ',
    ],
  },
  {
    chapterLabel: 'Chapter 4',
    title: 'Walking With God',
    slugs: ['the-law-of-love', 'the-rest-god-gives', 'the-life-that-gives'],
  },
  {
    chapterLabel: 'Chapter 5',
    title: 'New Life in Christ',
    slugs: ['designed-to-thrive', 'buried-and-raised', 'built-to-belong'],
  },
  {
    chapterLabel: 'Chapter 6',
    title: 'Truth, Love, and the Kingdom',
    slugs: ['power-under-love', 'faithful-in-the-wilderness', 'the-faithful-witness'],
  },
  {
    chapterLabel: 'Chapter 7',
    title: 'Christ Our High Priest',
    slugs: [
      'the-day-of-atonement',
      'the-first-angels-message',
      'the-second-angels-message',
      'the-third-angels-message',
    ],
  },
  {
    chapterLabel: 'Chapter 8',
    title: 'Christ Returns and Reigns',
    slugs: ['the-second-coming', 'the-millennium', 'the-end-of-evil'],
  },
  {
    chapterLabel: 'Chapter 9',
    title: 'The World Love Restores',
    slugs: ['the-world-love-restores'],
  },
]

export type FoundationJourneyChapter = {
  chapterLabel: string
  title: string
  studies: StudySeries[]
}

/**
 * Partition ordered beginner Foundations studies into named chapters plus a trailing bucket for anything not listed.
 * Skips chapters with no catalog matches.
 */
export function partitionFoundationStudiesIntoChapters(orderedStudies: StudySeries[]): FoundationJourneyChapter[] {
  if (orderedStudies.length === 0) return []

  const definedSlugs = new Set<string>()
  for (const def of FOUNDATIONS_JOURNEY_CHAPTERS) {
    for (const slug of def.slugs) definedSlugs.add(slug)
  }

  const chapters: FoundationJourneyChapter[] = []

  for (const def of FOUNDATIONS_JOURNEY_CHAPTERS) {
    const slugSet = new Set(def.slugs)
    const picks = orderedStudies.filter((s) => slugSet.has(s.slug))
    if (picks.length === 0) continue
    chapters.push({
      chapterLabel: def.chapterLabel,
      title: def.title,
      studies: picks,
    })
  }

  const remainder = orderedStudies.filter((s) => !definedSlugs.has(s.slug))

  // No catalog matches for the predefined chapters: render one cohesive list instead of labeling it "chapter 4".
  if (chapters.length === 0 && remainder.length > 0) {
    return [
      {
        chapterLabel: '',
        title: 'Foundations Journey',
        studies: remainder,
      },
    ]
  }

  if (remainder.length > 0) {
    chapters.push({
      chapterLabel: `Chapter ${chapters.length + 1}`,
      title: 'Continuing the Journey',
      studies: remainder,
    })
  }

  return chapters
}

/** First incomplete study after the current recommendation (exclusive), in journey order. */
export function nextIncompleteFoundationStudyAfterCurrent(
  orderedStudies: StudySeries[],
  p: LocalDashboardProgress,
): StudySeries | null {
  const cur = currentFoundationStudy(orderedStudies, p)
  if (!cur) return null

  let seenCurrent = false
  for (const s of orderedStudies) {
    if (!seenCurrent) {
      if (s.slug === cur.slug) seenCurrent = true
      continue
    }
    if (!isStudyFullyComplete(s, p)) return s
  }
  return null
}

/** Fully complete studies inside a subset (e.g. one chapter). */
export function chapterCompletedStudyCount(subset: StudySeries[], p: LocalDashboardProgress): number {
  return subset.filter((s) => isStudyFullyComplete(s, p)).length
}
