import type { StudySeries } from '@/lib/types/product'
import { FOUNDATION_STUDY_TEASER_BY_SLUG } from '@/lib/foundation-study-teasers'

const GENERIC_SUMMARY = 'Guided study with lessons built on Scripture.'

/**
 * Short line for cards and path rows: prefer catalog `shortDescription`, then known
 * Foundations teasers, then subtitle, then a brief generic line (not the old library placeholder).
 */
export function getStudyLibrarySummaryLine(study: StudySeries): string {
  const sd = study.shortDescription?.trim()
  if (sd) return sd
  const teaser = FOUNDATION_STUDY_TEASER_BY_SLUG[study.slug]
  if (teaser) return teaser
  const sub = study.subtitle?.trim()
  if (sub) return sub
  return GENERIC_SUMMARY
}
