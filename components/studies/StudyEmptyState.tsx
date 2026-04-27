import { Button } from '@/components/ui/Button'

interface StudyEmptyStateProps {
  studyTitle: string
}

export function StudyEmptyState({ studyTitle }: StudyEmptyStateProps) {
  return (
    <div className="container-shell max-w-lg py-16">
      <h1 className="text-xl font-semibold tracking-tight text-zinc-900">{studyTitle}</h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
        Lessons are being prepared for this study. Check back soon, or explore another series in the library.
      </p>
      <div className="mt-8">
        <Button href="/study-library" variant="secondary">
          Back to library
        </Button>
      </div>
    </div>
  )
}
