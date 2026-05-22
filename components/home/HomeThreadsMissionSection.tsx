import Link from 'next/link'
import { BIBLESTEM_THREADS_URL } from '@/lib/site-external-links'

const threadsPillars = [
  {
    title: 'Scripture first',
    body: 'Every piece begins with biblical truth.',
  },
  {
    title: 'Premium restraint',
    body: 'Clean design. No noise. No gimmicks.',
  },
  {
    title: 'Mission funded',
    body: 'Apparel helps support free Bible studies.',
  },
] as const

/** Explains how BibleStem Threads apparel supports the free study platform. */
export function HomeThreadsMissionSection() {
  return (
    <section className="border-b border-zinc-200/80 bg-stone-50 py-12 md:py-16">
      <div className="container-shell">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Why Threads exists</p>
        <div className="mt-3 h-px w-12 bg-zinc-300" aria-hidden />
        <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-[2rem] md:leading-tight">
          Every purchase helps keep Bible study free.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
          BibleStem Threads exists to support BibleStem&apos;s free Scripture-first study platform. Apparel funds the
          work, the studies, the tools, and the mission of making deep Bible study accessible without cost barriers.
        </p>

        <div className="mt-10 grid min-w-0 gap-4 sm:grid-cols-3">
          {threadsPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-6"
            >
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={BIBLESTEM_THREADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-blue-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 sm:w-auto"
          >
            Shop BibleStem Threads
          </a>
          <Link
            href="/about"
            className="inline-flex min-h-[44px] items-center justify-center text-sm font-medium text-blue-800 hover:text-blue-900"
          >
            Learn about the ecosystem
          </Link>
        </div>
      </div>
    </section>
  )
}
