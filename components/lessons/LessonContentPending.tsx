import { Button } from '@/components/ui/Button'

interface LessonContentPendingProps {
  studySlug: string
  lessonTitle: string
}

/** Draft lesson shell: metadata exists but guided reader JSON is not authored yet. */
export function LessonContentPending({ studySlug, lessonTitle }: LessonContentPendingProps) {
  const overviewHref = `/study-library/${studySlug}`

  return (
    <div className="min-h-[60vh] border-b border-zinc-200/80 bg-stone-50">
      <div className="container-shell py-16 md:py-20">
        <div className="mx-auto max-w-lg rounded-2xl border border-amber-200/70 bg-amber-50/40 px-6 py-8 shadow-sm md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-900/80">Draft lesson</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Lesson content coming soon
          </h1>
          <p className="mt-2 text-sm font-medium text-zinc-700">{lessonTitle}</p>
          <p className="mt-5 text-sm leading-relaxed text-zinc-600">
            This lesson has been created, but the study content has not been added yet.
          </p>
          <div className="mt-8">
            <Button href={overviewHref} variant="primary">
              Back to study overview
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
