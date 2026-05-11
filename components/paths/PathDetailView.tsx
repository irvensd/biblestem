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

export interface PathDetailViewProps {
  /** Catalog `study_paths.slug` */
  pathSlug: string
  /** Override displayed title (e.g. Spiritual Life vs catalog “Life Application”). */
  displayTitle?: string
}

export async function PathDetailView({ pathSlug, displayTitle }: PathDetailViewProps) {
  const catalog = await loadCatalog()
  const path = getStudyPathBySlugFromCatalog(catalog, pathSlug)
  if (!path) return notFound()

  const title = displayTitle?.trim() || path.name
  const seriesList = getSeriesForPathSlugFromCatalog(catalog, pathSlug)

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageHeader
            items={[
              { label: 'Home', href: '/' },
              { label: 'Paths', href: '/paths' },
              { label: title },
            ]}
          />
          <PageIntro className="max-w-3xl" eyebrow="Path" title={title} description={path.description} showRule />
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
              <p className="text-sm font-medium text-zinc-900">No studies available yet</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                This path will appear when studies are added.
              </p>
              <Link
                href="/study-library"
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900"
              >
                Browse Study Library
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
