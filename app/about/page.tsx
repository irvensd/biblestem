import Link from 'next/link'
import type { ReactNode } from 'react'
import { HomeExploreStudiesButton } from '@/components/home/HomeExploreStudiesButton'
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
    description:
      'Structured Bible studies designed to help people read Scripture with clarity, context, and reflection.',
    status: null as string | null,
    href: '/study-library' as const,
  },
  {
    title: 'BibleStem Threads',
    description:
      'A faith-inspired clothing brand being developed to help support free Bible studies and carry Scripture-centered messages into everyday life.',
    status: 'Coming soon' as const,
    href: null,
  },
  {
    title: 'BibleStem Studios',
    description:
      'A future video production branch focused on visual storytelling, Bible teaching, and cinematic faith-based content.',
    status: 'In development' as const,
    href: null,
  },
] as const

function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{children}</h2>
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
              <SectionLabel>Mission</SectionLabel>
              <p className="mt-5 text-lg leading-[1.75] text-zinc-800">
                We help people read the Bible with seriousness and joy—providing structured paths, language insight where it helps, and space for reflection.
              </p>
            </section>

            <section className="mt-14 border-t border-zinc-200 pt-12 md:mt-16 md:pt-14">
              <SectionLabel>Story</SectionLabel>
              <p className="mt-5 text-base leading-[1.75] text-zinc-700">
                BibleStem began as a simple conviction: the church deserves tools that feel modern without being noisy—calm interfaces, careful content, and a posture of reverence toward Scripture.
              </p>
            </section>
          </div>

          <section className="mt-14 border-t border-zinc-200 pt-12 md:mt-16 md:pt-14">
            <div className="mx-auto max-w-3xl lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Ecosystem</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2rem] md:leading-tight">
                More than a study app
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                BibleStem is being built as a Scripture-first ecosystem for learning, creating, and supporting free Bible study.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mx-auto lg:mt-12 lg:grid-cols-3">
              {ecosystem.map((item) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div className="mb-1 h-1 w-10 rounded-full bg-blue-800/50" />
                      {item.status ? (
                        <span className="shrink-0 text-[11px] font-medium uppercase tracking-wide text-zinc-400">{item.status}</span>
                      ) : null}
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{item.title}</h3>
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

          <div className="mx-auto mt-14 max-w-3xl border-t border-zinc-200 pt-12 md:mt-16 md:pt-14">
            <SectionLabel>Guiding principles</SectionLabel>
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
          </div>

          <section className="mt-16 border-t border-zinc-200 pb-8 pt-14 text-center md:mt-20 md:pt-16">
            <div className="mx-auto h-px w-16 bg-zinc-200" aria-hidden />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl md:leading-tight">Explore the work</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
              Start with BibleStem Studies and follow along as the rest of the ecosystem develops.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <HomeExploreStudiesButton variant="primary" />
              <Button href="/donate" variant="secondary">
                Support the ministry
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
