interface StudyProgressBarProps {
  percent: number
  label?: string
}

export function StudyProgressBar({ percent, label }: StudyProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent))
  const text = label ?? `${clamped}%`

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-xs text-zinc-500">
        <span className="font-medium text-zinc-600">Your progress</span>
        <span className="tabular-nums text-zinc-700">{text}</span>
      </div>
      <div
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/90"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Study progress ${clamped} percent`}
      >
        <div
          className="h-full rounded-full bg-blue-800 transition-[width] duration-300 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
