import { type ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: ReactNode
  showRule?: boolean
  className?: string
  /** `lg` = primary section titles; `sm` = in-page subheads (study detail, etc.). */
  size?: 'lg' | 'sm'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  showRule = false,
  className = '',
  size = 'lg',
}: SectionHeadingProps) {
  const titleClass =
    size === 'lg'
      ? 'break-words text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-[2rem] md:leading-tight'
      : 'break-words text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl'

  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{eyebrow}</p> : null}
      {showRule && eyebrow ? <div className="mt-3 h-px w-12 bg-zinc-300" aria-hidden /> : null}
      <h2 className={`${eyebrow ? 'mt-5' : ''} ${titleClass}`}>{title}</h2>
      {description ? <div className="mt-2 text-base leading-relaxed text-zinc-600">{description}</div> : null}
    </div>
  )
}
