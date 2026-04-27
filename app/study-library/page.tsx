import { StudyLibraryClient } from '@/app/study-library/StudyLibraryClient'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { PageIntro } from '@/components/site/PageIntro'
import { loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'

export default async function StudyLibraryPage() {
  const catalog = await loadCatalog()
  const showCatalogFallback = shouldShowCatalogFallbackNotice(catalog)
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Library"
            title="Study Library"
            description="Browse every series—filter by path and level, search by title, then open a study to see lessons."
          />
          {showCatalogFallback ? (
            <div className="mt-4 max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          ) : null}
        </div>
      </section>

      <div className="container-shell">
        <StudyLibraryClient paths={catalog.paths} allSeries={catalog.allSeries} />
      </div>
    </>
  )
}
