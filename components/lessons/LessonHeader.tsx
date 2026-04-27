import Link from 'next/link'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'

interface LessonHeaderProps {
  backHref: string
  seriesTitle: string
  lessonTitle: string
  stepLabel: string
  /** When true, hide step count (completion screen carries the message). */
  showCompleteLabel?: boolean
}

export function LessonHeader({
  backHref,
  seriesTitle,
  lessonTitle,
  stepLabel,
  showCompleteLabel,
}: LessonHeaderProps) {
  return (
    <header className="pt-6 md:pt-8">
      <Link
        href={backHref}
        className={`inline-flex items-center gap-2 rounded-sm text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 ${READER_FOCUS_RING}`}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to series
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{seriesTitle}</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 md:text-[1.65rem] md:leading-snug lg:text-[1.78rem] lg:leading-[1.2]">
        {lessonTitle}
      </h1>
      {showCompleteLabel ? null : (
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          <span>{stepLabel}</span>
        </p>
      )}
    </header>
  )
}
