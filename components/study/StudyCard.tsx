import Link from 'next/link'
import { getPathNameForSeries } from '@/lib/product-queries'
import { effectiveStudySeriesMinutes, formatStudyTotalDurationLabel } from '@/lib/studies/derive-overview'
import { getStudyLibrarySummaryLine } from '@/lib/study-summary-line'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudyCardProps {
  study: StudySeries
  /** When set (e.g. from Supabase catalog), path labels match the live library. */
  paths?: StudyPath[]
  variant?: 'default' | 'compact'
  stepNumber?: number
  stepTotal?: number
  progressionState?: 'completed' | 'current' | 'upcoming'
}

/** Text-led study card — matches homepage / product card system. */
export function StudyCard({
  study,
  paths,
  variant = 'default',
  stepNumber,
  stepTotal,
  progressionState,
}: StudyCardProps) {
  const pathName = getPathNameForSeries(study, paths)
  const durationLabel = formatStudyTotalDurationLabel(effectiveStudySeriesMinutes(study))
  const cardTeaser = getStudyLibrarySummaryLine(study)
  const compact = variant === 'compact'
  const stateLabel =
    progressionState === 'completed'
      ? 'Completed'
      : progressionState === 'current'
        ? 'Current'
        : progressionState === 'upcoming'
          ? 'Upcoming'
          : null

  return (
    <article
      className={`min-w-0 max-w-full rounded-xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-950/[0.03] transition-shadow duration-200 hover:shadow-md ${
        compact ? 'p-4 md:p-4' : 'p-6'
      }`}
    >
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/60" />
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{pathName}</p>
      <h3 className={`mt-2 font-semibold tracking-tight text-zinc-900 ${compact ? 'text-base' : 'text-lg'}`}>{study.title}</h3>
      <p className={`mt-2 text-sm leading-relaxed text-zinc-600 ${compact ? 'line-clamp-1' : 'line-clamp-3'}`}>{cardTeaser}</p>
      {stepNumber != null && stepTotal != null ? (
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500">
          <span>
            Step {stepNumber} of {stepTotal}
          </span>
          {stateLabel ? <span>{stateLabel}</span> : null}
        </div>
      ) : null}
      <div className={`flex flex-wrap gap-x-5 gap-y-1 text-xs text-zinc-500 ${compact ? 'mt-3' : 'mt-5'}`}>
        <span>{study.lessonsCount} lessons</span>
        <span>{durationLabel}</span>
        <span>{study.level}</span>
      </div>
      <Link
        href={`/study-library/${study.slug}`}
        className={`inline-flex min-h-[44px] items-center text-sm font-medium text-blue-800 hover:text-blue-900 sm:min-h-0 ${compact ? 'mt-3' : 'mt-5'}`}
      >
        View study
      </Link>
    </article>
  )
}
