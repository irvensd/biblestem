import type { StudyLevel } from '@/lib/types/product'
import { StudyProgressBar } from '@/components/studies/StudyProgressBar'

function formatTotalTime(estimatedMinutes: number): string {
  if (estimatedMinutes < 60) return `${estimatedMinutes} min`
  const h = Math.floor(estimatedMinutes / 60)
  const m = estimatedMinutes % 60
  if (m === 0) return `${h} hr`
  return `${h} hr ${m} min`
}

interface StudySummaryCardProps {
  lessonCount: number
  estimatedMinutes: number
  level: StudyLevel
  pathLabel: string
  progressPercent: number
  currentLessonTitle: string | null
  seriesComplete: boolean
}

export function StudySummaryCard({
  lessonCount,
  estimatedMinutes,
  level,
  pathLabel,
  progressPercent,
  currentLessonTitle,
  seriesComplete,
}: StudySummaryCardProps) {
  return (
    <aside className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-7">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">At a glance</p>
      <dl className="mt-5 space-y-4 text-sm">
        <div className="flex justify-between gap-4 border-b border-zinc-100 pb-4">
          <dt className="text-zinc-500">Lessons</dt>
          <dd className="font-medium tabular-nums text-zinc-900">{lessonCount}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-zinc-100 pb-4">
          <dt className="text-zinc-500">Estimated time</dt>
          <dd className="text-right font-medium text-zinc-900">{formatTotalTime(estimatedMinutes)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-zinc-100 pb-4">
          <dt className="text-zinc-500">Level</dt>
          <dd className="font-medium text-zinc-900">{level}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-zinc-100 pb-4">
          <dt className="text-zinc-500">Path</dt>
          <dd className="text-right font-medium text-zinc-900">{pathLabel}</dd>
        </div>
      </dl>
      <div className="mt-6">
        <StudyProgressBar percent={progressPercent} />
      </div>
      {seriesComplete ? (
        <p className="mt-4 text-sm text-zinc-600">
          <span className="font-medium text-zinc-800">Status:</span> Completed
        </p>
      ) : currentLessonTitle ? (
        <p className="mt-4 text-sm text-zinc-600">
          <span className="font-medium text-zinc-800">Current lesson:</span> {currentLessonTitle}
        </p>
      ) : (
        <p className="mt-4 text-sm text-zinc-600">
          <span className="font-medium text-zinc-800">Status:</span> Not started
        </p>
      )}
    </aside>
  )
}
