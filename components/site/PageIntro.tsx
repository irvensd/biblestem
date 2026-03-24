import { type ReactNode } from 'react'

interface PageIntroProps {
  eyebrow: string
  title: string
  description?: ReactNode
  /** When true, shows the short editorial rule under the eyebrow (homepage pattern). */
  showRule?: boolean
  /** Override width; defaults to `max-w-2xl`. */
  className?: string
}

export function PageIntro({ eyebrow, title, description, showRule = true, className }: PageIntroProps) {
  return (
    <div className={className ?? 'max-w-2xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{eyebrow}</p>
      {showRule ? <div className="mt-3 h-px w-12 bg-zinc-300" aria-hidden /> : null}
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2rem] md:leading-tight">{title}</h1>
      {description ? <div className="mt-3 text-base leading-relaxed text-zinc-600">{description}</div> : null}
    </div>
  )
}
