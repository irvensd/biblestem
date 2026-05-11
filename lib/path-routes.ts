/**
 * Canonical URLs for study path pages. Catalog uses stable slugs (e.g. life-application);
 * marketing URLs may differ (e.g. /paths/spiritual-life).
 */
export function studyPathPageHref(catalogPathSlug: string): string {
  if (catalogPathSlug === 'life-application') return '/paths/spiritual-life'
  return `/paths/${catalogPathSlug}`
}
