import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  title: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  className?: string
}

export function CTASection({
  title,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className = '',
}: CTASectionProps) {
  return (
    <section className={`border-t border-zinc-200/80 bg-stone-50 py-12 md:py-14 ${className}`}>
      <div className="container-shell text-center">
        <div className="mx-auto h-px w-12 bg-zinc-200" aria-hidden />
        <h2 className="mt-5 break-words text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:leading-tight">
          {title}
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href={primaryHref} className="w-full sm:w-auto">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="secondary" className="w-full sm:w-auto">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
