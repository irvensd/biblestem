import Link from 'next/link'
import type { PathJourneyMeta } from '@/lib/paths-journey'
import { formatPathStudyCountLine } from '@/lib/paths-journey'
import type { StudyPath, StudySeries } from '@/lib/types/product'

type LearningPathCardProps = {
  path: StudyPath
  series: StudySeries[]
  journey: PathJourneyMeta
}

export function LearningPathCard({ path, series, journey }: LearningPathCardProps) {
  const countLine = formatPathStudyCountLine(series.length, journey.isComingSoon)
  const ctaDisabled = journey.isComingSoon
  const href = `/paths/${path.slug}`

  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{journey.audienceLabel}</p>
      <h2 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900">{path.name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{path.description}</p>

      <div className="mt-4 border-t border-zinc-200/80 pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Studies</p>
        {journey.isComingSoon ? (
          <p className="mt-2 text-sm text-zinc-500">Series for this path will be listed here as they are added.</p>
        ) : series.length > 0 ? (
          <ul className="mt-2 list-inside list-disc text-sm text-zinc-700">
            {series.map((s) => (
              <li key={s.id}>{s.title}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-zinc-500">Studies for this path are in preparation.</p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 text-xs text-zinc-500">
        <span>{countLine}</span>
        <span>Level: {journey.levelLabel}</span>
      </div>

      <div className="mt-5 flex flex-col items-start gap-1.5">
        {ctaDisabled ? (
          <span
            className="inline-block rounded-lg border border-zinc-200/90 bg-stone-50/80 px-3 py-2 text-sm font-medium text-zinc-400"
            aria-disabled
          >
            Coming soon
          </span>
        ) : (
          <Link
            href={href}
            className="inline-block text-sm font-medium text-blue-800 transition-colors hover:text-blue-900"
          >
            View path
          </Link>
        )}
      </div>
    </article>
  )
}
