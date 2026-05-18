import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import type { ActiveStudyState } from '@/lib/dashboard-mock-data'

const LESSON_CHECKLIST = [
  'Continue lesson',
  'Read Scripture',
  'Save reflection',
  'Finish quiz',
] as const

interface TodaysStudyCardProps {
  active: ActiveStudyState | null
  allLessonsComplete?: boolean
}

export function TodaysStudyCard({ active, allLessonsComplete }: TodaysStudyCardProps) {
  if (!active) {
    const title = allLessonsComplete ? "You're all caught up" : 'Start your study'
    const text = allLessonsComplete
      ? "You've completed every lesson in the library. Browse for review or follow the Foundations path."
      : 'Choose a study and BibleStem will guide your next step.'

    return (
      <section
        id="dashboard-continue-studying"
        className="scroll-mt-24 rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.04] md:p-6"
      >
        <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Today&apos;s study</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-600">{text}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button href="/study-library">Browse Study Library</Button>
          <Button href="/paths/foundations" variant="secondary">
            Open Foundations Path
          </Button>
        </div>
      </section>
    )
  }

  const continueLabel = active.progressPercent >= 100 ? 'Review lesson' : 'Continue lesson'

  return (
    <section
      id="dashboard-continue-studying"
      className="scroll-mt-24 rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.04] md:p-6"
    >
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" aria-hidden />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Today&apos;s study</p>
      <p className="mt-2 text-sm font-medium text-zinc-500">{active.studyTitle}</p>
      <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-zinc-900">{active.lessonTitle}</h2>

      {active.primaryScripture ? (
        <p className="mt-2 text-sm break-words text-zinc-700">
          <span className="font-medium text-zinc-500">Scripture: </span>
          {active.primaryScripture}
        </p>
      ) : null}

      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
        <div>
          <p className="text-xs font-medium text-zinc-500">Current step</p>
          <p className="mt-0.5 text-zinc-800">{active.currentStepLine}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-zinc-500">Lesson progress</p>
          <p className="mt-0.5 font-semibold tabular-nums text-zinc-900">{active.progressPercent}%</p>
        </div>
        <div>
          <p className="text-xs font-medium text-zinc-500">Time remaining</p>
          <p className="mt-0.5 text-zinc-800">
            {active.progressPercent >= 100 ? 'Complete' : `~${active.minutesRemaining} min`}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
          <div
            className="h-full rounded-full bg-blue-800/85 transition-[width] duration-300"
            style={{ width: `${Math.min(100, Math.max(0, active.progressPercent))}%` }}
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-medium text-zinc-500">Lesson checklist</p>
        <ol className="mt-2 grid gap-1.5 sm:grid-cols-2">
          {LESSON_CHECKLIST.map((item, index) => (
            <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-medium tabular-nums text-zinc-600"
                aria-hidden
              >
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button href={active.continueHref}>{continueLabel}</Button>
        <Link
          href={`/study-library/${active.studySlug}`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Study overview
        </Link>
      </div>
    </section>
  )
}
