import Link from 'next/link'
import type { TodayFocus } from '@/lib/dashboard-mock-data'

interface TodaysFocusCardProps {
  focus: TodayFocus
}

export function TodaysFocusCard({ focus }: TodaysFocusCardProps) {
  return (
    <section className="rounded-xl border border-zinc-200/90 bg-stone-50/60 p-6 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{focus.eyebrow}</p>
      <blockquote className="mt-4 font-serif text-[15px] leading-relaxed text-zinc-800">{focus.verse}</blockquote>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600">{focus.reflection}</p>
      <Link
        href={focus.lessonHref}
        className="mt-6 inline-flex text-sm font-medium text-blue-800 hover:text-blue-900"
      >
        {focus.ctaLabel} →
      </Link>
    </section>
  )
}
