import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import type { ActiveStudyState } from '@/lib/dashboard-mock-data'

const STUDY_PLAN_CHECKLIST = [
  'Continue the lesson',
  'Read the Scripture section',
  'Save a reflection',
  'Finish the quiz',
] as const

interface TodaysStudyPlanCardProps {
  active: ActiveStudyState | null
}

export function TodaysStudyPlanCard({ active }: TodaysStudyPlanCardProps) {
  if (!active) {
    return (
      <section className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Today&apos;s study plan</p>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900">Start your study plan</h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-600">
          Choose a study and BibleStem will guide your next step.
        </p>
        <div className="mt-6">
          <Button href="/study-library">Browse Study Library</Button>
        </div>
      </section>
    )
  }

  const continueLabel = active.progressPercent >= 100 ? 'Review lesson' : 'Continue lesson'

  return (
    <section className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Today&apos;s study plan</p>
      <p className="mt-3 text-sm font-medium text-zinc-500">{active.studyTitle}</p>
      <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900">{active.lessonTitle}</h2>

      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {active.progressPercent < 100 ? (
          <div>
            <dt className="text-xs font-medium text-zinc-500">Time remaining</dt>
            <dd className="mt-0.5 text-zinc-800">About {active.minutesRemaining} min (estimate)</dd>
          </div>
        ) : null}
        <div className={active.progressPercent < 100 ? '' : 'sm:col-span-2'}>
          <dt className="text-xs font-medium text-zinc-500">Current step</dt>
          <dd className="mt-0.5 text-zinc-800">{active.currentStepLine}</dd>
        </div>
      </dl>

      <div className="mt-5">
        <p className="text-xs font-medium text-zinc-500">Your plan for this lesson</p>
        <ol className="mt-2 space-y-2">
          {STUDY_PLAN_CHECKLIST.map((item, index) => (
            <li key={item} className="flex gap-2.5 text-sm text-zinc-700">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium tabular-nums text-zinc-600"
                aria-hidden
              >
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button href={active.continueHref}>{continueLabel}</Button>
        <Link
          href={`/study-library/${active.studySlug}`}
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
        >
          Study overview
        </Link>
      </div>
    </section>
  )
}
