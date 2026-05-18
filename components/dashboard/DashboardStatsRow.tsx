import { formatStudyMinutes, type ProgressTotals } from '@/lib/dashboard-mock-data'

interface DashboardStatsRowProps {
  progress: ProgressTotals
}

/**
 * Single source for headline metrics (no duplicate blocks elsewhere on the page).
 */
export function DashboardStatsRow({ progress }: DashboardStatsRowProps) {
  const cells = [
    { label: 'Current streak', value: `${progress.streakDays} days` },
    { label: 'Lessons completed', value: String(progress.lessonsCompleted) },
    { label: 'Total study time', value: formatStudyMinutes(progress.totalMinutes) },
    { label: 'Studies started', value: String(progress.studiesStarted) },
    { label: 'Studies completed', value: String(progress.studiesCompleted) },
  ] as const

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Your progress</p>
      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
        {cells.map((c) => (
          <div
            key={c.label}
            className="rounded-lg border border-zinc-200/90 bg-white px-3 py-3 ring-1 ring-zinc-950/[0.03] sm:px-4 sm:py-3.5"
          >
            <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">{c.label}</p>
            <p className="mt-1.5 text-lg font-semibold tabular-nums text-zinc-900">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
