import {
  formatStudyMinutes,
  getGreetingPeriod,
  greetingLabel,
} from '@/lib/dashboard-mock-data'

export type DashboardHeaderStats = {
  streakDays: number
  lessonsCompleted: number
  totalMinutesStudied: number
}

interface DashboardHeaderProps {
  userName: string
  headerStats: DashboardHeaderStats
}

export function DashboardHeader({ userName, headerStats }: DashboardHeaderProps) {
  const period = getGreetingPeriod()

  return (
    <div className="flex flex-col gap-8 border-b border-zinc-200/80 pb-10 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Overview</p>
        <h1 className="mt-4 break-words text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-[2rem] md:leading-tight">
          {greetingLabel(period)}, {userName}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-zinc-600">Continue your study with clarity.</p>
      </div>

      <dl className="flex shrink-0 flex-wrap gap-8 border-t border-zinc-200/80 pt-6 md:border-t-0 md:pt-0">
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Streak</dt>
          <dd className="mt-1 text-lg font-semibold tabular-nums text-zinc-900">{headerStats.streakDays} days</dd>
        </div>
        <div className="min-w-0">
          <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Lessons</dt>
          <dd className="mt-1 text-lg font-semibold tabular-nums text-zinc-900">{headerStats.lessonsCompleted}</dd>
        </div>
        <div className="min-w-0">
          <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Study time</dt>
          <dd className="mt-1 text-lg font-semibold tabular-nums text-zinc-900">
            {formatStudyMinutes(headerStats.totalMinutesStudied)}
          </dd>
        </div>
      </dl>
    </div>
  )
}
