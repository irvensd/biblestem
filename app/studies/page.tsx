import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/site/PageIntro'
import { StudiesPreviewLibraryLink } from '@/components/studies/StudiesPreviewLibraryLink'
import { StudiesPreviewTrackCard } from '@/components/studies/StudiesPreviewTrackCard'
import { loadCatalog } from '@/lib/catalog/load-catalog'
import {
  getAdvancedBrowseStudies,
  getFoundationBrowseStudies,
  getIntermediateBrowseStudies,
} from '@/lib/study-library-levels'
import { STUDY_TRACKS } from '@/lib/study-tracks'

export const metadata: Metadata = {
  title: 'BibleStem Studies · Preview',
  description:
    'Explore the study tracks available on BibleStem. Create a free account to save progress, take quizzes, and continue lessons.',
}

export default async function StudiesPreviewPage() {
  const catalog = await loadCatalog()
  const trackCounts = {
    foundations: getFoundationBrowseStudies(catalog).length,
    hardQuestions: getIntermediateBrowseStudies(catalog.allSeries).length,
    advanced: getAdvancedBrowseStudies(catalog.allSeries).length,
  }

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Preview"
            title="BibleStem Studies"
            description="Explore the study tracks available on BibleStem. Create a free account to save progress, take quizzes, and continue lessons."
          />
          <StudiesPreviewLibraryLink />
        </div>
      </section>

      <div className="section-space container-shell">
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <StudiesPreviewTrackCard track={STUDY_TRACKS[0]} studyCount={trackCounts.foundations} />
          <StudiesPreviewTrackCard track={STUDY_TRACKS[1]} studyCount={trackCounts.hardQuestions} />
          <StudiesPreviewTrackCard track={STUDY_TRACKS[2]} studyCount={trackCounts.advanced} />
        </div>

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
