import Link from 'next/link'
import { FoundationsPathSection } from '@/components/paths/FoundationsPathSection'
import { PageHeader } from '@/components/site/PageHeader'
import { PageIntro } from '@/components/site/PageIntro'
import { getOrderedFoundationPathStudies } from '@/lib/foundation-path'
import { loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'

export default async function FoundationsPathPage() {
  const catalog = await loadCatalog()
  const foundationStudies = getOrderedFoundationPathStudies(catalog)

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageHeader
            items={[
              { label: 'Home', href: '/' },
              { label: 'Paths', href: '/paths' },
              { label: 'Foundations' },
            ]}
          />
          <PageIntro
            eyebrow="FOUNDATIONS PATH"
            title="Start here. Walk through the foundations."
            description={
              <>
                A guided path through the BibleStem foundational studies already available. Browse everything anytime in
                the{' '}
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
        <div className="container-shell max-w-4xl">
          {foundationStudies.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-xl border border-zinc-200/90 bg-white px-6 py-12 text-center shadow-sm ring-1 ring-zinc-950/[0.03]">
              <p className="text-sm font-medium text-zinc-900">No foundation studies are available yet.</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                When beginner Foundations studies are published to your catalog, they will appear here as a guided path.
              </p>
              <Link
                href="/study-library"
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-900"
              >
                Open Study Library
              </Link>
            </div>
          ) : (
            <FoundationsPathSection studies={foundationStudies} />
          )}

          <div className="mx-auto mt-14 max-w-4xl border-t border-zinc-200/80 pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Available studies</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
              This Path focuses on beginner Foundations content already in the catalog. Explore every series,
              difficulty level, and path filter anytime.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/study-library"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-900"
              >
                Study Library
              </Link>
              <Link
                href="/study-library?path=foundations"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Foundations in Study Library
              </Link>
              <Link
                href="/paths"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                All study paths
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
