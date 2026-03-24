import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { formatLessonDuration } from '@/lib/product-queries'
import type { Lesson } from '@/lib/types/product'

interface CompletionScreenProps {
  seriesSlug: string
  seriesTitle: string
  lessonTitle: string
  nextLesson: Lesson | null
}

export function CompletionScreen({ seriesSlug, seriesTitle, lessonTitle, nextLesson }: CompletionScreenProps) {
  return (
    <div className="space-y-8 pb-4 pt-2">
      <div className="rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Finished</p>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">Lesson complete</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          You’ve walked through <span className="font-medium text-zinc-800">{lessonTitle}</span> in {seriesTitle}. Take a
          breath—consistency in study matters more than speed.
        </p>
      </div>

      {nextLesson ? (
        <div className="rounded-xl border border-zinc-200/90 bg-stone-50/80 p-6 ring-1 ring-zinc-950/[0.03] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Next lesson</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">{nextLesson.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{nextLesson.summary}</p>
          <p className="mt-3 text-xs text-zinc-500">
            {formatLessonDuration(nextLesson.durationMinutes)} · {nextLesson.scripture}
          </p>
          <div className="mt-6">
            <Button href={`/study-library/${seriesSlug}/lesson/${nextLesson.slug}`}>Continue to next lesson</Button>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-200/90 bg-white/60 px-6 py-8 text-center">
          <p className="text-sm text-zinc-600">You’ve reached the last lesson in this series.</p>
          <Link href={`/study-library/${seriesSlug}`} className="mt-4 inline-block text-sm font-medium text-blue-800 hover:text-blue-900">
            Return to series overview →
          </Link>
        </div>
      )}
    </div>
  )
}
