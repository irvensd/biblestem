import type { ReactNode } from 'react'
import { ProgressBar } from '@/components/lessons/ProgressBar'

interface LessonLayoutProps {
  /** 0–1 */
  progress: number
  /** Current step index (0-based); shows subtle dots when both set. */
  stepIndex?: number
  totalSteps?: number
  children: ReactNode
  /** Sticky desktop rail (large screens only). */
  sideRail?: ReactNode
  /** Collapsible map below the bar on small screens. */
  mobileLessonMap?: ReactNode
}

export function LessonLayout({
  progress,
  stepIndex,
  totalSteps,
  children,
  sideRail,
  mobileLessonMap,
}: LessonLayoutProps) {
  const showDots =
    typeof stepIndex === 'number' && typeof totalSteps === 'number' && totalSteps > 0 && totalSteps <= 24

  return (
    <div className="min-h-[100dvh] bg-[#fbfbfa]" data-renderer="global-lesson-reader">
      <div className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#fbfbfa]/95 backdrop-blur-sm">
        <ProgressBar value={progress} />
        {showDots ? (
          <div
            className="flex justify-center gap-1.5 px-4 pb-3.5 pt-2"
            role="status"
            aria-label={`Step ${stepIndex + 1} of ${totalSteps}`}
          >
            {Array.from({ length: totalSteps }, (_, i) => (
              <span
                key={i}
                className={`h-[3px] w-[3px] rounded-full transition-colors ${
                  i <= stepIndex ? 'bg-blue-800/75' : 'bg-zinc-300/80'
                }`}
              />
            ))}
          </div>
        ) : null}
        {mobileLessonMap ? <div className="lg:hidden">{mobileLessonMap}</div> : null}
      </div>

      {/* Unified reader shell: main + sidebar grouped, centered */}
      <div className="mx-auto w-full max-w-[1180px] px-6 lg:px-8">
        {sideRail ? (
          <div className="grid pb-10 pt-6 lg:grid-cols-[minmax(0,700px)_260px] lg:gap-16 lg:pt-12 xl:grid-cols-[minmax(0,720px)_280px] xl:gap-20">
            <div className="min-w-0 w-full max-w-[720px] leading-relaxed text-zinc-800">
              {children}
            </div>
            <aside className="hidden min-w-0 w-full max-w-[280px] justify-self-end lg:block">
              <div className="sticky top-24 max-h-[calc(100dvh-6rem)] overflow-y-auto overflow-x-hidden pb-10 pt-6 lg:pt-12">
                {sideRail}
              </div>
            </aside>
          </div>
        ) : (
          <div className="pb-10 pt-6 lg:pt-12">
            <div className="mx-auto w-full max-w-[720px] leading-relaxed text-zinc-800">{children}</div>
          </div>
        )}
      </div>
    </div>
  )
}
