import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import type { ActiveStudyState } from '@/lib/dashboard-mock-data'

interface ContinueStudyCardProps {
  active: ActiveStudyState | null
}

export function ContinueStudyCard({ active }: ContinueStudyCardProps) {
  if (!active) {
    return (
      <section className="rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Continue studying</p>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">No active study yet</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-600">
          Pick a series from the library and open your first lesson—progress will appear here when you return.
        </p>
        <div className="mt-8">
          <Button href="/study-library">Start your first study</Button>
        </div>
      </section>
    )
  }

  const lessonHref = `/study-library/${active.studySlug}/lesson/${active.lessonSlug}`

  return (
    <section className="rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Continue studying</p>
      <p className="mt-3 text-sm font-medium text-zinc-500">{active.studyTitle}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">{active.lessonTitle}</h2>
      <p className="mt-1 text-sm text-zinc-500">{active.scripture}</p>

      <div className="mt-6">
        <div className="flex items-center justify-between gap-3 text-xs text-zinc-500">
          <span>Lesson progress</span>
          <span className="tabular-nums font-medium text-zinc-700">{active.progressPercent}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
          <div
            className="h-full rounded-full bg-blue-800/85 transition-[width] duration-300"
            style={{ width: `${Math.min(100, Math.max(0, active.progressPercent))}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-zinc-500">About {active.minutesRemaining} min remaining in this lesson</p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button href={lessonHref}>Continue lesson</Button>
        <Link
          href={`/study-library/${active.studySlug}`}
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
        >
          Series overview
        </Link>
      </div>
    </section>
  )
}
