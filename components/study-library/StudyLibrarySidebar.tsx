import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { StudyLibraryContinueCard } from '@/components/study-library/StudyLibraryContinueCard'
import { STUDY_TRACKS } from '@/lib/study-tracks'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudyLibrarySidebarProps {
  paths: StudyPath[]
  allSeries: StudySeries[]
}

export function StudyLibrarySidebar({ paths, allSeries }: StudyLibrarySidebarProps) {
  return (
    <aside aria-label="Study Library sidebar" className="flex min-w-0 flex-col gap-6 lg:gap-8">
      <section className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">Featured collection</p>
        <h2 className="mt-2 text-base font-semibold tracking-tight text-zinc-900">Misunderstood Passages</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          Study commonly quoted Bible texts in context with Scripture chains, word insights, and guided lessons.
        </p>
        <div className="mt-4">
          <Button href="/misunderstood-passages" className="w-full justify-center text-sm">
            Browse passages
          </Button>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
        <h2 className="text-sm font-semibold tracking-tight text-zinc-900">Browse by level</h2>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500">Jump to studies by depth.</p>
        <ul className="mt-4 space-y-1">
          {STUDY_TRACKS.map((track) => (
            <li key={track.level}>
              <Link
                href={track.browseHref}
                className="flex min-h-[40px] items-center rounded-lg px-2.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
              >
                {track.publicLabel}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <StudyLibraryContinueCard allSeries={allSeries} paths={paths} />
    </aside>
  )
}
