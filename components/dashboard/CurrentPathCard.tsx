import Link from 'next/link'
import type { CurrentPathInfo } from '@/lib/dashboard-mock-data'

interface CurrentPathCardProps {
  current: CurrentPathInfo | null
}

export function CurrentPathCard({ current }: CurrentPathCardProps) {
  if (!current) {
    return (
      <section className="rounded-xl border border-zinc-200/90 bg-stone-50/60 p-6 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Current path</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          When you start a study, the path you are in will show here.
        </p>
        <Link className="mt-4 inline-block text-sm font-medium text-blue-800 hover:text-blue-900" href="/paths">
          Explore learning paths
        </Link>
      </section>
    )
  }

  const n = current.activeStudyCount
  const countLabel = n === 1 ? '1 active study' : `${n} active studies`

  return (
    <section className="rounded-xl border border-zinc-200/90 bg-stone-50/60 p-6 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Current path</p>
      <h2 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900">{current.pathName}</h2>
      <p className="mt-1 text-xs text-zinc-500">{countLabel}</p>
      <p className="mt-2 text-sm font-medium text-zinc-800">{current.currentStudyTitle}</p>
      <p className="mt-1 text-sm text-zinc-600">{current.studyProgressLine}</p>
      <Link className="mt-5 inline-block text-sm font-medium text-blue-800 hover:text-blue-900" href={current.viewPathHref}>
        View path
      </Link>
    </section>
  )
}
