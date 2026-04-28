import { DashboardClient } from '@/components/dashboard/DashboardClient'
import { loadCatalog } from '@/lib/catalog/load-catalog'

export default async function DashboardPage() {
  const catalog = await loadCatalog()
  return <DashboardClient catalog={catalog} studyPaths={catalog.paths} />
}
