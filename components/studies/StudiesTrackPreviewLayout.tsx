import Link from 'next/link'
import { PageHeader } from '@/components/site/PageHeader'
import { PageIntro } from '@/components/site/PageIntro'
import { StudiesPreviewLibraryLink } from '@/components/studies/StudiesPreviewLibraryLink'
import { StudyPreviewCard } from '@/components/studies/StudyPreviewCard'
import type { StudyTrackDefinition } from '@/lib/study-tracks'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudiesTrackPreviewLayoutProps {
  track: StudyTrackDefinition
  studies: StudySeries[]
  paths: StudyPath[]
  emptyMessage: string
}

export function StudiesTrackPreviewLayout({
  track,
  studies,
  paths,
  emptyMessage,
}: StudiesTrackPreviewLayoutProps) {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageHeader
            items={[
              { label: 'Studies', href: '/studies' },
              { label: track.publicLabel },
            ]}
          />
          <PageIntro
            eyebrow="Preview"
            title={track.publicLabel}
            description={track.browsePageDescription}
          />
          <StudiesPreviewLibraryLink />
        </div>
      </section>

      <div className="section-space container-shell">
        {studies.length === 0 ? (
          <p className="text-sm text-zinc-600">{emptyMessage}</p>
        ) : (
          <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
              <StudyPreviewCard key={study.slug} study={study} paths={paths} />
            ))}
          </div>
        )}

        <div className="mt-12 rounded-xl border border-zinc-200/90 bg-stone-50 p-6 text-center shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Ready to begin?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
            Create a free account to save progress and continue where you left off.
          </p>
          <Link
            href="/sign-up"
            className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-blue-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 sm:w-auto"
          >
            Get started free
          </Link>
        </div>
      </div>
    </>
  )
}
