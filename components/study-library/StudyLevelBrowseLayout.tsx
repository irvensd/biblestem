import { StudyCard } from '@/components/study/StudyCard'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { PageHeader } from '@/components/site/PageHeader'
import { PageIntro } from '@/components/site/PageIntro'
import { Button } from '@/components/ui/Button'
import type { CatalogSource } from '@/lib/catalog/load-catalog'
import type { StudyPath, StudySeries } from '@/lib/types/product'

export type StudyLevelBrowseFeature = {
  title: string
  text: string
  buttonHref?: string
  buttonLabel?: string
}

interface StudyLevelBrowseLayoutProps {
  breadcrumbParent?: { label: string; href: string }
  breadcrumbLabel: string
  eyebrow: string
  title: string
  description: string
  catalogSource: CatalogSource
  showCatalogFallback: boolean
  studies: StudySeries[]
  paths: StudyPath[]
  feature?: StudyLevelBrowseFeature
  emptyMessage: string
}

export function StudyLevelBrowseLayout({
  breadcrumbParent = { label: 'Study Library', href: '/study-library' },
  breadcrumbLabel,
  eyebrow,
  title,
  description,
  catalogSource,
  showCatalogFallback,
  studies,
  paths,
  feature,
  emptyMessage,
}: StudyLevelBrowseLayoutProps) {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageHeader
            items={[
              { label: breadcrumbParent.label, href: breadcrumbParent.href },
              { label: breadcrumbLabel },
            ]}
          />
          <PageIntro eyebrow={eyebrow} title={title} description={description} />
          {showCatalogFallback ? (
            <div className="mt-4 max-w-xl">
              <CatalogSourceNotice source={catalogSource} />
            </div>
          ) : null}
        </div>
      </section>

      <div className="section-space container-shell">
        {feature ? (
          <div className="mx-auto max-w-3xl rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-6">
            <h2 className="text-base font-semibold tracking-tight text-zinc-900">{feature.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{feature.text}</p>
            {feature.buttonHref && feature.buttonLabel ? (
                                          <div className="mt-5">
                <Button href={feature.buttonHref}>{feature.buttonLabel}</Button>
              </div>

            ) : null}
          </div>
        ) : null}

        {studies.length === 0 ? (
          <p className={`text-sm text-zinc-600 ${feature ? 'mt-10' : ''}`}>{emptyMessage}</p>
        ) : (
          <div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${feature ? 'mt-10 md:mt-12' : ''}`}
          >
            {studies.map((study) => (
              <StudyCard key={study.slug} study={study} paths={paths} variant="default" />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
