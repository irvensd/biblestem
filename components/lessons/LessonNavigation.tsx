import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'

export type LessonNavigationProps = {
  continueLabel: string
  onContinue: () => void
  showPrevious: boolean
  onPrevious: () => void
}

const btnBase = `inline-flex min-h-11 w-full items-center justify-center rounded-xl text-sm font-medium transition-colors duration-200 ${READER_FOCUS_RING}`

/** Global previous / continue control for the guided lesson reader. */
export function LessonNavigation({
  continueLabel,
  onContinue,
  showPrevious,
  onPrevious,
}: LessonNavigationProps) {
  return (
    <div className="mt-4 border-t border-zinc-200/90 bg-[#fbfbfa]/95 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur-sm">
      <div className="w-full max-w-[720px]">
        {showPrevious ? (
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-[38fr_62fr]">
            <button
              type="button"
              onClick={onPrevious}
              className={`${btnBase} min-w-0 border border-zinc-200/90 bg-white px-4 text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50/80`}
            >
              Previous step
            </button>
            <button
              type="button"
              onClick={onContinue}
              className={`${btnBase} min-w-0 bg-blue-800 px-5 text-white hover:bg-blue-900`}
            >
              {continueLabel}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onContinue}
            className={`${btnBase} w-full bg-blue-800 px-5 text-white hover:bg-blue-900`}
          >
            {continueLabel}
          </button>
        )}
      </div>
    </div>
  )
}

/** @deprecated Use `LessonNavigation`. */
export const LessonStepNavigation = LessonNavigation
/** @deprecated Use `LessonNavigationProps`. */
export type LessonStepNavigationProps = LessonNavigationProps
