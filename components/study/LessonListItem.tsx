import Link from 'next/link'
import { formatLessonDuration, lessonProgressLabel } from '@/lib/product-queries'
import type { Lesson } from '@/lib/types/product'

interface LessonListItemProps {
  studySlug: string
  lesson: Lesson
  index: number
}

export function LessonListItem({ studySlug, lesson, index }: LessonListItemProps) {
  const stateLabel = lessonProgressLabel(lesson.progressState)

  return (
    <li className="border-b border-zinc-200/90 last:border-b-0">
      <Link
        href={`/study-library/${studySlug}/lesson/${lesson.slug}`}
        className="group flex flex-col gap-3 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-zinc-500">
            Lesson {index + 1}
            {lesson.progressState && lesson.progressState !== 'not_started' ? (
              <span className="text-zinc-400"> · {stateLabel}</span>
            ) : null}
          </p>
          <p className="mt-1 text-base font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-950">{lesson.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600">{lesson.summary}</p>
        </div>
        <div className="flex shrink-0 items-center gap-4 text-sm text-zinc-500">
          <span>{formatLessonDuration(lesson.durationMinutes)}</span>
          <span className="flex items-center gap-1 font-medium text-blue-800 group-hover:text-blue-900">
            Open
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </li>
  )
}
