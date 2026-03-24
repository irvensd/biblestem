import Link from 'next/link'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { PageIntro } from '@/components/site/PageIntro'

const pillars = [
  {
    title: 'Scripture-first',
    body: 'The text leads. We aim for clarity, context, and humility before conclusions.',
  },
  {
    title: 'Careful study',
    body: 'Structure and language tools exist to serve understanding—not to replace slow reading.',
  },
  {
    title: 'Accessible learning',
    body: 'Deep study should not be gated by cost. BibleStem is free and donation-supported.',
  },
] as const

const ecosystem = [
  {
    title: 'BibleStem Studies',
    description: 'Our Bible study platform for structured, Scripture-first learning.',
    status: null as string | null,
    href: '/study-library',
  },
  {
    title: 'BibleStem Threads',
    description: 'A faith-inspired apparel brand.',
    status: 'Coming soon',
    href: null,
  },
  {
    title: 'BibleStem Studios',
    description: 'A video production and storytelling studio for thoughtful biblical media.',
    status: 'Coming soon',
    href: null,
  },
] as const

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{children}</p>
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="About"
            title="About BibleStem"
            description="BibleStem exists to make deep, structured Bible study accessible—Scripture-first, thoughtfully designed, and calm to use."
          />
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <section className="border-t border-zinc-200 pt-12 md:pt-14">
              <SectionEyebrow>Mission</SectionEyebrow>
              <p className="mt-5 text-lg leading-[1.75] text-zinc-800">
                We help people read the Bible with seriousness and joy—providing structured paths, language insight where it helps, and space for reflection.
              </p>
            </section>

            <section className="mt-14 border-t border-zinc-200 pt-12 md:mt-16 md:pt-14">
              <SectionEyebrow>Story</SectionEyebrow>
              <p className="mt-5 text-base leading-[1.75] text-zinc-700">
                BibleStem began as a simple conviction: the church deserves tools that feel modern without being noisy—calm interfaces, careful content, and a posture of reverence toward Scripture.
              </p>
            </section>

            <section className="mt-14 border-t border-zinc-200 pt-12 md:mt-16 md:pt-14">
              <SectionEyebrow>Guiding principles</SectionEyebrow>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-16">
            <div className="mx-auto max-w-3xl text-center lg:text-left">
              <SectionEyebrow>Ecosystem</SectionEyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2rem] md:leading-tight">
                The BibleStem ecosystem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                BibleStem is growing into a small ecosystem of products built around thoughtful, faith-centered work.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mx-auto lg:mt-12 lg:grid-cols-3">
              {ecosystem.map((item) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/90 bg-stone-50 text-blue-800">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                        </svg>
                      </div>
                      {item.status ? (
                        <span className="shrink-0 text-[11px] font-medium uppercase tracking-wide text-zinc-400">{item.status}</span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                  </>
                )

                if (item.href) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] transition-all duration-200 hover:border-zinc-300 hover:shadow-md"
                    >
                      {inner}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-zinc-200/90 bg-stone-50/40 p-6 shadow-sm ring-1 ring-zinc-950/[0.03]"
                  >
                    {inner}
                  </div>
                )
              })}
            </div>
          </section>

          <section className="mt-16 border-t border-zinc-200 pb-8 pt-14 text-center md:mt-20 md:pt-16">
            <div className="mx-auto h-px w-16 bg-zinc-200" aria-hidden />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl md:leading-tight">Explore the work</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
              Start with BibleStem Studies and follow along as the rest of the ecosystem develops.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/study-library">Explore studies</Button>
              <Button href="/support" variant="secondary">
                Support the ministry
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
