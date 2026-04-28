import Link from 'next/link'
import { getPathNameForSeries } from '@/lib/product-queries'
import { effectiveStudySeriesMinutes, formatStudyTotalDurationLabel } from '@/lib/studies/derive-overview'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudyCardProps {
  study: StudySeries
  /** When set (e.g. from Supabase catalog), path labels match the live library. */
  paths?: StudyPath[]
}

/** Text-led study card — matches homepage / product card system. */
export function StudyCard({ study, paths }: StudyCardProps) {
  const pathName = getPathNameForSeries(study, paths)
  const durationLabel = formatStudyTotalDurationLabel(effectiveStudySeriesMinutes(study))
  const cardTeaser =
    study.shortDescription?.trim() ||
    study.subtitle?.trim() ||
    'Open the study for lessons, an overview, and study tools.'

  return (
    <article className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] transition-shadow duration-200 hover:shadow-md">
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/60" />
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{pathName}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">{study.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">{cardTeaser}</p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-zinc-500">
        <span>{study.lessonsCount} lessons</span>
        <span>{durationLabel}</span>
        <span>{study.level}</span>
      </div>
      <Link href={`/study-library/${study.slug}`} className="mt-5 inline-block text-sm font-medium text-blue-800 hover:text-blue-900">
        View study
      </Link>
    </article>
  )
}
