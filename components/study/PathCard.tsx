import Link from 'next/link'
import type { StudyPath } from '@/lib/types/product'
import { studyPathPageHref } from '@/lib/path-routes'

interface PathCardProps {
  path: StudyPath
  seriesCount: number
}

export function PathCard({ path, seriesCount }: PathCardProps) {
  return (
    <Link
      href={studyPathPageHref(path.slug)}
      className="group block rounded-xl border border-zinc-200/90 bg-stone-50/40 p-6 transition-colors hover:border-zinc-300 hover:bg-white"
    >
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{path.name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{path.description}</p>
      <p className="mt-4 text-sm text-zinc-500">
        {seriesCount === 0 ? 'No studies yet' : `${seriesCount} ${seriesCount === 1 ? 'series' : 'series'}`}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-blue-800 opacity-0 transition-opacity group-hover:opacity-100">
        View path
      </span>
    </Link>
  )
}
