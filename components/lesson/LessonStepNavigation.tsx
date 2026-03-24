interface LessonStepNavigationProps {
  continueLabel: string
  onContinue: () => void
  showPrevious: boolean
  onPrevious: () => void
}

export function LessonStepNavigation({
  continueLabel,
  onContinue,
  showPrevious,
  onPrevious,
}: LessonStepNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-zinc-200/90 bg-stone-50/95 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm md:static md:z-0 md:border-t-0 md:bg-transparent md:pb-0 md:pt-10 md:backdrop-blur-none">
      <div className="mx-auto w-full max-w-[700px] px-5 sm:px-6 md:px-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-3">
          {showPrevious ? (
            <button
              type="button"
              onClick={onPrevious}
              className="w-full rounded-xl border border-zinc-300 bg-white py-3.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 sm:order-1 sm:min-w-0 sm:flex-1"
            >
              Previous step
            </button>
          ) : null}
          <button
            type="button"
            onClick={onContinue}
            className="w-full rounded-xl bg-blue-800 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 sm:order-2 sm:min-w-0 sm:flex-[1.35]"
          >
            {continueLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
