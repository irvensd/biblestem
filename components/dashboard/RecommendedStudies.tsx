import Link from 'next/link'
import { getPathNameForSeries } from '@/lib/product-queries'
import { effectiveStudySeriesMinutes, formatStudyTotalDurationLabel } from '@/lib/studies/derive-overview'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface RecommendedStudiesProps {
  studies: StudySeries[]
  paths?: StudyPath[]
}

function CompactRec({ study, paths }: { study: StudySeries; paths?: StudyPath[] }) {
  const pathName = getPathNameForSeries(study, paths)
  const minutes = effectiveStudySeriesMinutes(study)
  const timeLabel = formatStudyTotalDurationLabel(minutes)

  return (
    <article className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{pathName}</p>
      <h3 className="mt-2 text-base font-semibold tracking-tight text-zinc-900">{study.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
        {study.shortDescription?.trim() || study.description}
      </p>
      <div className="mt-3 text-xs text-zinc-500">
        {study.lessonsCount} lessons · {timeLabel} · {study.level}
      </div>
      <Link
        href={`/study-library/${study.slug}`}
        className="mt-4 inline-block text-sm font-medium text-blue-800 hover:text-blue-900"
      >
        View study
      </Link>
    </article>
  )
}

export function RecommendedStudies({ studies, paths }: RecommendedStudiesProps) {
  const list = studies.slice(0, 2)

  if (list.length === 0) return null

  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Recommended next</p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">Based on your progress</h2>
        <p className="mt-1 text-sm text-zinc-500">Up to two studies. Your active lesson lives in “Continue studying” above.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {list.map((study) => (
          <CompactRec key={study.slug} study={study} paths={paths} />
        ))}
      </div>
    </section>
  )
}
