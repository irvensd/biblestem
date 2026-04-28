import { type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

/** Non-clickable label for when online giving is not connected. Reuse on the support page footer. */
export function ComingSoonDonationControl({ label = 'Coming soon' }: { label?: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-xl border border-zinc-200/90 bg-stone-50/80 px-5 py-2.5 text-sm font-medium text-zinc-400"
      role="status"
      aria-live="polite"
    >
      {label}
    </span>
  )
}

type SupportCardProps = {
  eyebrow?: string
  title: string
  description: ReactNode
  secondaryHref?: string
  secondaryLabel?: string
  secondaryAction?: ReactNode
  variant?: 'default' | 'muted'
  ctaVariant?: 'primary' | 'secondary'
  className?: string
} & (
  | { primaryCta: 'link'; ctaHref: string; ctaLabel: string }
  | { primaryCta: 'comingSoon'; comingSoonButtonLabel?: string }
)

export function SupportCard(props: SupportCardProps) {
  const {
    eyebrow = 'Ministry',
    title,
    description,
    secondaryHref,
    secondaryLabel,
    secondaryAction,
    variant = 'default',
    ctaVariant = 'secondary',
    className = '',
  } = props

  const surface =
    variant === 'muted'
      ? 'rounded-xl border border-zinc-200/90 bg-stone-50/50 p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10'
      : 'rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-10'

  // TODO: When wiring payments, set LIVE_DONATION_URL in lib/support-donation.ts and use primaryCta: 'link'.
  const primary =
    props.primaryCta === 'comingSoon' ? (
      <ComingSoonDonationControl label={props.comingSoonButtonLabel ?? 'Coming soon'} />
    ) : (
      <Button href={props.ctaHref} variant={ctaVariant}>
        {props.ctaLabel}
      </Button>
    )

  return (
    <div className={`${surface} ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">{title}</h2>
      <div className="mt-4 max-w-2xl leading-relaxed text-zinc-600">{description}</div>
      <div className="mt-8 flex flex-wrap gap-3">
        {primary}
        {secondaryAction
          ? secondaryAction
          : secondaryHref && secondaryLabel
            ? (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              )
            : null}
      </div>
    </div>
  )
}
