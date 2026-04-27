import Link from 'next/link'
import { formatLessonDuration } from '@/lib/product-queries'
import type { OverviewLessonStatus, StudyOverviewLessonRow } from '@/lib/studies/types'

function statusLabel(status: OverviewLessonStatus): string {
  if (status === 'completed') return 'Completed'
  if (status === 'in_progress') return 'In progress'
  return 'Not started'
}

function ctaLabel(status: OverviewLessonStatus): string {
  if (status === 'completed') return 'Review'
  if (status === 'in_progress') return 'Continue'
  return 'Start'
}

interface LessonListItemProps {
  studySlug: string
  lesson: StudyOverviewLessonRow
  status: OverviewLessonStatus
}

export function LessonListItem({ studySlug, lesson, status }: LessonListItemProps) {
  const href = `/study-library/${studySlug}/lesson/${lesson.slug}`
  const label = statusLabel(status)
  const action = ctaLabel(status)

  return (
    <li className="border-b border-zinc-200/90 last:border-b-0">
      <Link
        href={href}
        className="group flex flex-col gap-3 rounded-lg py-5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 sm:flex-row sm:items-start sm:justify-between"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-xs font-medium text-zinc-500">Lesson {lesson.lessonNumber}</span>
            <span className="text-xs text-zinc-400" aria-hidden>
              ·
            </span>
            <span className="text-xs text-zinc-600">
              <span className="sr-only">Status: </span>
              {label}
            </span>
            {status === 'completed' ? (
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-800/10 text-blue-800" aria-hidden>
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 6l3 3 5-6" />
                </svg>
              </span>
            ) : null}
          </div>
          <p className="mt-1.5 text-base font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-950">
            {lesson.title}
          </p>
          {lesson.shortDescription ? (
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">{lesson.shortDescription}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 flex-row items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
          <span className="text-xs text-zinc-500 tabular-nums">{formatLessonDuration(lesson.estimatedMinutes)}</span>
          <span className="text-sm font-medium text-blue-800 group-hover:text-blue-900">
            {action}
            <span className="sr-only"> lesson {lesson.lessonNumber}</span>
          </span>
        </div>
      </Link>
    </li>
  )
}
