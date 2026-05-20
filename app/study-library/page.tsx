import { StudyLibraryClient } from '@/app/study-library/StudyLibraryClient'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { PageIntro } from '@/components/site/PageIntro'
import { loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'

type StudyLibraryPageProps = {
  searchParams: Promise<{ path?: string | string[] }>
}

export default async function StudyLibraryPage(_props: StudyLibraryPageProps) {
  const catalog = await loadCatalog()
  const showCatalogFallback = shouldShowCatalogFallbackNotice(catalog)
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Library"
            title="Study Library"
            description="Browse BibleStem studies by track, search by topic, or continue through a guided path."
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
