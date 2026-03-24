import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  title: string
  primaryHref: string
  primaryLabel: string
  className?: string
}

export function CTASection({ title, primaryHref, primaryLabel, className = '' }: CTASectionProps) {
  return (
    <section className={`section-space pb-24 md:pb-28 ${className}`}>
      <div className="container-shell text-center">
        <div className="mx-auto h-px w-16 bg-zinc-200" aria-hidden />
        <h2 className="mt-8 break-words text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl md:leading-tight">
          {title}
        </h2>
        <div className="mt-10">
          <Button href={primaryHref}>{primaryLabel}</Button>
        </div>
      </div>
    </section>
  )
}
