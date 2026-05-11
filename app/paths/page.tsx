import Link from 'next/link'
import { PathHubCard } from '@/components/paths/PathHubCard'
import { PageIntro } from '@/components/site/PageIntro'
import { getVisiblePathHubCards } from '@/lib/path-hub'
import { loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'

export default async function PathsHubPage() {
  const catalog = await loadCatalog()
  const visibleCards = getVisiblePathHubCards(catalog)

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="STUDY PATHS"
            title="Choose a guided path."
            description={
              <>
                Follow a structured BibleStem path, or browse every study in the{' '}
                <Link className="font-medium text-blue-800 hover:text-blue-900" href="/study-library">
                  Study Library
                </Link>
                .
              </>
            }
          />
          {shouldShowCatalogFallbackNotice(catalog) ? (
            <div className="mt-4 max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          ) : null}
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell">
          {visibleCards.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-xl border border-zinc-200/90 bg-white px-6 py-12 text-center shadow-sm ring-1 ring-zinc-950/[0.03]">
              <p className="text-sm font-medium text-zinc-900">No paths with studies yet</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                When studies are published to your catalog, guided paths will appear here.
              </p>
              <Link
                href="/study-library"
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-900"
              >
                Browse Study Library
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {visibleCards.map((card) => (
                <PathHubCard key={card.catalogSlug} card={card} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
