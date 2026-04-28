import { getGreetingPeriod, greetingLabel } from '@/lib/dashboard-mock-data'

interface DashboardHeaderProps {
  userName: string
  /** Short line about what the dashboard is for */
  subtitle?: string
}

export function DashboardHeader({
  userName,
  subtitle = 'What to continue, where you are in your studies, and what to try next.',
}: DashboardHeaderProps) {
  const period = getGreetingPeriod()

  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Overview</p>
      <h1 className="mt-4 break-words text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-[2rem] md:leading-tight">
        {greetingLabel(period)}, {userName}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-zinc-600">{subtitle}</p>
    </div>
  )
}
