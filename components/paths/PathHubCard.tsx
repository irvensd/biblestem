import Link from 'next/link'
import type { StudyTrackHubCard } from '@/lib/study-tracks'

export function PathHubCard({ card }: { card: StudyTrackHubCard }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{card.track.publicLabel}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{card.track.hubDescription}</p>
      <Link
        href={card.routeHref}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900"
      >
        {card.ctaLabel}
      </Link>
    </article>
  )
}
