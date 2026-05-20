import Link from 'next/link'
import { getStudyLibrarySummaryLine } from '@/lib/study-summary-line'
import { getPublicTrackLabelForLevel } from '@/lib/study-tracks'
import { effectiveStudySeriesMinutes, formatStudyTotalDurationLabel } from '@/lib/studies/derive-overview'
import type { StudySeries } from '@/lib/types/product'

interface ExploreNextProps {
  studies: StudySeries[]
  /** When true, user has progress but no valid explore picks. */
  showNoSuggestionsEmpty?: boolean
}

function ExploreStudyCard({ study }: { study: StudySeries }) {
  const trackLabel = getPublicTrackLabelForLevel(study.level)
  const minutes = effectiveStudySeriesMinutes(study)
  const timeLabel = formatStudyTotalDurationLabel(minutes)
  const description = getStudyLibrarySummaryLine(study)

  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{trackLabel}</p>
      <h3 className="mt-1.5 text-base font-semibold tracking-tight text-zinc-900">{study.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm leading-snug text-zinc-600">{description}</p>
      <p className="mt-2 text-xs text-zinc-500">
        {study.lessonsCount} lessons · {timeLabel} · {study.level}
      </p>
      <Link
        href={`/study-library/${study.slug}`}
        className="mt-3 inline-block text-sm font-medium text-blue-800 hover:text-blue-900"
      >
        View study
      </Link>
    </article>
  )
}

export function ExploreNext({ studies, showNoSuggestionsEmpty }: ExploreNextProps) {
  const list = studies.slice(0, 2)

  return (
    <section id="dashboard-explore-next" className="scroll-mt-24">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Explore next</p>
        <h2 className="mt-1 text-base font-semibold tracking-tight text-zinc-900">Suggested next studies</h2>
      </div>
      {list.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-200/90 bg-stone-50/50 px-4 py-6 text-center">
          {showNoSuggestionsEmpty ? (
            <>
              <p className="text-sm font-medium text-zinc-800">Nothing else to suggest yet</p>
              <p className="mt-2 text-sm text-zinc-600">
                Complete your current lesson and BibleStem will suggest what to study next.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-zinc-600">Browse the library to find your next study.</p>
              <Link href="/study-library" className="mt-3 inline-block text-sm font-medium text-blue-800 hover:text-blue-900">
                Study library
              </Link>
            </>
          )}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {list.map((study) => (
            <ExploreStudyCard key={study.slug} study={study} />
          ))}
        </div>
      )}
    </section>
  )
}
