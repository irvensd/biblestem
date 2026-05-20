import Link from 'next/link'
import { PathHubCard } from '@/components/paths/PathHubCard'
import { PageIntro } from '@/components/site/PageIntro'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'
import { getVisibleStudyTrackHubCards } from '@/lib/study-tracks'

export default async function PathsHubPage() {
  const catalog = await loadCatalog()
  const visibleCards = getVisibleStudyTrackHubCards(catalog)

  return (
    <div className="flex flex-col overflow-x-hidden min-h-[calc(100dvh-4rem)] md:min-h-0">
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <PageIntro
            eyebrow="STUDY TRACKS"
            title="Choose your study track."
            description="Start with Foundations, take Deeper Studies on hard questions about God answered through Scripture, or explore Advanced Scripture-to-Scripture lessons."
          />
          {shouldShowCatalogFallbackNotice(catalog) ? (
            <div className="mt-4 max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          ) : null}
        </div>
      </section>

      <div className="pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="container-shell min-w-0">
          {visibleCards.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-xl border border-zinc-200/90 bg-white px-6 py-12 text-center shadow-sm ring-1 ring-zinc-950/[0.03]">
              <p className="text-sm font-medium text-zinc-900">No studies available yet</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                When studies are published to your catalog, study tracks will appear here.
              </p>
              <Link
                href="/study-library"
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-900"
              >
                Browse Study Library
              </Link>
            </div>
          ) : (
            <>
              <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {visibleCards.map((card) => (
                  <PathHubCard key={card.track.level} card={card} />
                ))}
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-zinc-600">
                Not sure where to begin?{' '}
                <Link
                  href="/paths/foundations"
                  className="font-medium text-blue-800 underline-offset-2 hover:text-blue-900 hover:underline"
                >
                  Start with Foundations
                </Link>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
