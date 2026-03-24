import { EmptyState } from '@/components/EmptyState'
import { formatStudyMinutes, type ProgressTotals } from '@/lib/dashboard-mock-data'

interface ProgressSummaryProps {
  progress: ProgressTotals
}

export function ProgressSummary({ progress }: ProgressSummaryProps) {
  const rows = [
    { label: 'Studies started', value: String(progress.studiesStarted) },
    { label: 'Studies completed', value: String(progress.studiesCompleted) },
    { label: 'Lessons completed', value: String(progress.lessonsCompleted) },
    { label: 'Total time', value: formatStudyMinutes(progress.totalMinutes) },
    { label: 'Current streak', value: `${progress.streakDays} days` },
  ] as const

  const isEmpty =
    progress.studiesStarted === 0 &&
    progress.studiesCompleted === 0 &&
    progress.lessonsCompleted === 0 &&
    progress.totalMinutes === 0 &&
    progress.streakDays === 0

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Progress</p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">At a glance</h2>

      {isEmpty ? (
        <EmptyState
          className="mt-6"
          title="No progress yet"
          description="When you start a study and complete lessons, your streak and totals will show here."
        />
      ) : (
        <div className="mt-6 rounded-xl border border-zinc-200/90 bg-white p-1 shadow-sm ring-1 ring-zinc-950/[0.03]">
          <ul className="divide-y divide-zinc-100">
            {rows.map((row) => (
              <li key={row.label} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                <span className="text-zinc-600">{row.label}</span>
                <span className="tabular-nums font-medium text-zinc-900">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
