import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import type { ActiveStudyState } from '@/lib/dashboard-mock-data'

const FIRST_STUDY_HREF = '/study-library/god-is-love/lesson/the-logic-of-love?step=0'

interface ContinueStudyCardProps {
  active: ActiveStudyState | null
  /** When every catalog lesson is complete locally and there is no “next” lesson. */
  allLessonsComplete?: boolean
}

export function ContinueStudyCard({ active, allLessonsComplete }: ContinueStudyCardProps) {
  if (!active) {
    if (allLessonsComplete) {
      return (
        <section id="dashboard-continue-studying" className="scroll-mt-24 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Continue studying</p>
          <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">You&apos;re all caught up</h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-600">
            You&apos;ve completed every lesson available in the library. Check back when we add more studies.
          </p>
          <div className="mt-8">
            <Button href="/study-library">Browse library</Button>
          </div>
        </section>
      )
    }
    return (
      <section id="dashboard-continue-studying" className="scroll-mt-24 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Start your first study</p>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Begin with Scripture</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-600">
          Open a lesson to start your streak, track time, and keep going where you left off.
        </p>
        <div className="mt-8">
          <Button href={FIRST_STUDY_HREF}>Start God Is Love</Button>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          <Link className="font-medium text-blue-800 hover:text-blue-900" href="/study-library">
            Browse the Study Library
          </Link>
        </p>
      </section>
    )
  }

  const continueLabel = active.progressPercent >= 100 ? 'Review lesson' : 'Continue lesson'

  return (
    <section id="dashboard-continue-studying" className="scroll-mt-24 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Continue studying</p>
      <p className="mt-3 text-sm font-medium text-zinc-500">{active.studyTitle}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">{active.lessonTitle}</h2>
      <div className="mt-3 space-y-1.5 text-sm">
        <p>
          <span className="font-medium text-zinc-700">Primary Scripture: </span>
          <span className="text-zinc-800">{active.primaryScripture}</span>
        </p>
        {active.relatedScripture ? (
          <p className="text-zinc-500">
            <span className="font-medium text-zinc-500">Related texts: </span>
            <span className="break-words max-md:whitespace-normal md:line-clamp-1 md:inline-block md:max-w-full">
              {active.relatedScripture}
            </span>
          </p>
        ) : null}
      </div>

      <div className="mt-5 space-y-1.5 text-sm text-zinc-600">
        <p>
          <span className="text-zinc-500">Current lesson: </span>
          {active.currentStepLine}
        </p>
        <p>
          <span className="text-zinc-500">Study progress: </span>
          {active.studyLessonsProgressLine}
        </p>
      </div>

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
        {active.progressPercent >= 100 ? (
          <p className="mt-3 text-xs text-zinc-500">This lesson is complete. Open it anytime to review.</p>
        ) : (
          <p className="mt-3 text-xs text-zinc-500">About {active.minutesRemaining} min left in this lesson (estimate)</p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button href={active.continueHref}>{continueLabel}</Button>
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
