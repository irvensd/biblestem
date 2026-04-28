import Link from 'next/link'
import { PageIntro } from '@/components/site/PageIntro'
import { SectionHeading } from '@/components/site/SectionHeading'
import { LearningPathCard } from '@/components/study/LearningPathCard'
import { getPathNameForSeries } from '@/lib/product-queries'
import { getSeriesBySlugFromCatalog, loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'
import { PATHS_PAGE_RECOMMENDED_SLUGS, getOrderedLearningPathEntries } from '@/lib/paths-journey'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'

export default async function PathsPage() {
  const catalog = await loadCatalog()
  const journeyEntries = getOrderedLearningPathEntries(catalog)
  const recommended = PATHS_PAGE_RECOMMENDED_SLUGS.map((slug) => getSeriesBySlugFromCatalog(catalog, slug)).filter(
    (s): s is NonNullable<typeof s> => s != null,
  )

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Journeys"
            title="Learning Paths"
            description={
              <>
                Pick a guided route—not the full catalog. The{' '}
                <Link className="font-medium text-blue-800 hover:text-blue-900" href="/study-library">
                  Study Library
                </Link>{' '}
                is where you browse every series; paths group those series into focused journeys. Open a path to see its
                studies, then work through lessons in order.
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {journeyEntries.map(({ path, series, journey }) => (
              <LearningPathCard key={path.id} path={path} series={series} journey={journey} />
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <SectionHeading
              size="sm"
              title="Recommended next"
              description="A few structured studies to start or deepen your journey."
            />
            <ul className="mt-6 divide-y divide-zinc-200/90 rounded-xl border border-zinc-200/90 bg-white ring-1 ring-zinc-950/[0.03]">
              {recommended.map((study) => {
                const pathName = getPathNameForSeries(study, catalog.paths)
                return (
                  <li key={study.slug} className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{pathName}</p>
                      <p className="mt-0.5 font-medium text-zinc-900">{study.title}</p>
                    </div>
                    <Link
                      href={`/study-library/${study.slug}`}
                      className="shrink-0 text-sm font-medium text-blue-800 hover:text-blue-900"
                    >
                      View study
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
