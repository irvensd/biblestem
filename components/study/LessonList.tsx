import type { Lesson } from '@/lib/types/product'
import { LessonListItem } from '@/components/study/LessonListItem'

interface LessonListProps {
  studySlug: string
  lessons: Lesson[]
}

export function LessonList({ studySlug, lessons }: LessonListProps) {
  return (
    <div className="rounded-xl border border-zinc-200/90 bg-white px-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:px-6">
      <ol>
        {lessons.map((lesson, index) => (
          <LessonListItem key={lesson.slug} studySlug={studySlug} lesson={lesson} index={index} />
        ))}
      </ol>
    </div>
  )
}
