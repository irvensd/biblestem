import { DashboardClient } from '@/components/dashboard/DashboardClient'
import { getSeriesBySlugFromCatalog, loadCatalog } from '@/lib/catalog/load-catalog'
import { getRecommendedSeriesSlugs } from '@/lib/product-queries'

export default async function DashboardPage() {
  const catalog = await loadCatalog()
  const recommendedStudies = getRecommendedSeriesSlugs()
    .map((slug) => getSeriesBySlugFromCatalog(catalog, slug))
    .filter((s): s is NonNullable<typeof s> => s != null)

  return (
    <DashboardClient catalog={catalog} recommendedStudies={recommendedStudies} studyPaths={catalog.paths} />
  )
}
