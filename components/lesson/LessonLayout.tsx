import type { ReactNode } from 'react'
import { ProgressBar } from '@/components/lesson/ProgressBar'

interface LessonLayoutProps {
  /** 0–1 */
  progress: number
  children: ReactNode
}

export function LessonLayout({ progress, children }: LessonLayoutProps) {
  return (
    <div className="min-h-[100dvh] bg-stone-50">
      <div className="sticky top-0 z-40 border-b border-zinc-200/90 bg-stone-50/95 backdrop-blur-sm">
        <ProgressBar value={progress} />
      </div>
      <div className="mx-auto w-full max-w-[700px] px-5 sm:px-6 md:px-8">{children}</div>
    </div>
  )
}
