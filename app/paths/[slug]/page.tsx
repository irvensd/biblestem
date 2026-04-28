import Link from 'next/link'
import { notFound } from 'next/navigation'
import { StudyCard } from '@/components/study/StudyCard'
import { PageIntro } from '@/components/site/PageIntro'
import { PageHeader } from '@/components/site/PageHeader'
import {
  getSeriesForPathSlugFromCatalog,
  getStudyPathBySlugFromCatalog,
  loadCatalog,
  shouldShowCatalogFallbackNotice,
} from '@/lib/catalog/load-catalog'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'

export default async function PathDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const catalog = await loadCatalog()
  const path = getStudyPathBySlugFromCatalog(catalog, slug)
  if (!path) return notFound()

  const seriesList = getSeriesForPathSlugFromCatalog(catalog, slug)

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageHeader
            items={[
              { label: 'Home', href: '/' },
              { label: 'Paths', href: '/paths' },
              { label: path.name },
            ]}
          />
          <PageIntro
            className="max-w-3xl"
            eyebrow="Path"
            title={path.name}
            description={path.description}
            showRule
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
          {seriesList.length === 0 ? (
            <div className="mx-auto max-w-md rounded-xl border border-zinc-200/90 bg-stone-50/40 px-6 py-10 text-center">
              <p className="text-sm font-medium text-zinc-900">Coming soon</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Studies for this path are in preparation. Browse everything in the Study Library, or try a recommended
                study first.
              </p>
              <Link
                href="/study-library"
                className="mt-5 inline-block text-sm font-medium text-blue-800 hover:text-blue-900"
              >
                Open Study Library
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {seriesList.map((study) => (
                <StudyCard key={study.slug} study={study} paths={catalog.paths} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
