import { LessonListItem } from '@/components/studies/LessonListItem'
import type { OverviewLessonStatus, StudyOverviewLessonRow } from '@/lib/studies/types'

interface LessonListProps {
  studySlug: string
  lessons: StudyOverviewLessonRow[]
  getStatus: (lessonSlug: string) => OverviewLessonStatus
}

export function LessonList({ studySlug, lessons, getStatus }: LessonListProps) {
  return (
    <div className="rounded-xl border border-zinc-200/90 bg-white ring-1 ring-zinc-950/[0.03]">
      <ol className="px-4 sm:px-6">
        {lessons.map((lesson) => (
          <LessonListItem
            key={lesson.slug}
            studySlug={studySlug}
            lesson={lesson}
            status={getStatus(lesson.slug)}
          />
        ))}
      </ol>
    </div>
  )
}
