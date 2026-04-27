import { HomeGate } from '@/components/home/HomeGate'
import { HomePageContent } from '@/components/home/HomePageContent'
import { loadCatalog } from '@/lib/catalog/load-catalog'

export default async function HomePage() {
  const catalog = await loadCatalog()
  return (
    <HomeGate>
      <HomePageContent catalog={catalog} />
    </HomeGate>
  )
}
