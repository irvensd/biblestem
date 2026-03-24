import { type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

interface SupportCardProps {
  eyebrow?: string
  title: string
  description: ReactNode
  ctaHref: string
  ctaLabel: string
  variant?: 'default' | 'muted'
  /** Primary blue CTA (e.g. dedicated support page); homepage ministry block uses secondary. */
  ctaVariant?: 'primary' | 'secondary'
  className?: string
}

export function SupportCard({
  eyebrow = 'Ministry',
  title,
  description,
  ctaHref,
  ctaLabel,
  variant = 'default',
  ctaVariant = 'secondary',
  className = '',
}: SupportCardProps) {
  const surface =
    variant === 'muted'
      ? 'rounded-2xl border border-zinc-200/90 bg-stone-50/50 p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-12'
      : 'rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-12'

  return (
    <div className={`${surface} ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">{title}</h2>
      <div className="mt-4 max-w-2xl leading-relaxed text-zinc-600">{description}</div>
      <div className="mt-8">
        <Button href={ctaHref} variant={ctaVariant}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  )
}
