'use client'

import { PathCard } from '@/components/study/PathCard'
import { StudyCard } from '@/components/study/StudyCard'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { SectionHeading } from '@/components/site/SectionHeading'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import { seriesCountForPathFromCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'

type Props = {
  catalog: LoadedCatalog
}

/** Paths + featured series — only for signed-in users. */
export function HomeCatalogSections({ catalog }: Props) {
  const { user, isReady } = useDemoAuth()

  if (!isReady || !user) {
    return null
  }

  const paths = [...catalog.paths].sort((a, b) => a.sortOrder - b.sortOrder)
  const featuredStudies = [...catalog.allSeries].filter((s) => s.featured).slice(0, 3)

  return (
    <>
      <section className="section-space bg-white">
        <div className="container-shell">
          {shouldShowCatalogFallbackNotice(catalog) ? (
            <div className="mb-8 max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          ) : null}
          <SectionHeading eyebrow="Browse" title="Learning paths" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <PathCard
                key={path.id}
                path={path}
                seriesCount={seriesCountForPathFromCatalog(catalog, path.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading title="Featured study series" description="Curated starting points for structured learning." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredStudies.map((study) => (
              <StudyCard key={study.slug} study={study} paths={catalog.paths} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
