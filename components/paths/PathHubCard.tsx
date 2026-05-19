import Link from 'next/link'
import { formatTrackStudyMeta, type StudyTrackHubCard } from '@/lib/study-tracks'

export function PathHubCard({ card }: { card: StudyTrackHubCard }) {
  const meta = formatTrackStudyMeta(card.studyCount, card.track.level)

  return (
    <article className="flex h-full min-w-0 flex-col rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{card.track.publicLabel}</h2>
        {card.recommendedStart ? (
          <span className="shrink-0 rounded-md border border-blue-800/15 bg-blue-50/80 px-2 py-0.5 text-[10px] font-medium leading-snug text-blue-900/75">
            Recommended Start
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 text-xs text-zinc-500">{meta}</p>
      <p className="mt-3 min-h-[4.5rem] flex-1 text-sm leading-relaxed text-zinc-600">
        {card.track.hubDescription}
      </p>
      <Link
        href={card.routeHref}
        className="mt-6 inline-flex w-full min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 sm:w-auto"
      >
        {card.ctaLabel}
      </Link>
    </article>
  )
}
