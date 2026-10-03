import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactEmailLink } from '@/components/site/ContactEmailLink'
import { PageIntro } from '@/components/site/PageIntro'
import { BIBLESTEM_THREADS_URL } from '@/lib/site-external-links'
export const metadata: Metadata = {
  title: 'About · BibleStem',
  description:
    'BibleStem is a Scripture-first study platform. A free account is required to read lessons. There is no paid tier.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about', images: [{ url: '/logo.png', alt: 'BibleStem' }] },
}

const SECTION_GAP = 'mt-10 border-t border-zinc-200 pt-10 md:mt-11 md:pt-11'

const howItHelps = [
  {
    title: 'Guided studies',
    body: 'Move through lessons step by step with Scripture, teaching points, reflection, and review.',
  },
  {
    title: 'Scripture Threads',
    body: 'See how Bible passages connect so truth is understood in context.',
  },
  {
    title: 'Word insights',
    body: 'Slow down key biblical words and learn how they shape the meaning of a passage.',
  },
  {
    title: 'Reflection',
    body: 'Apply what you study through thoughtful prompts and saved responses.',
  },
] as const

const pillars = [
  {
    title: 'Scripture-first',
    body: 'The Bible leads. Every study aims to keep the text central and clear.',
  },
  {
    title: 'Careful study',
    body: 'BibleStem slows down important passages and connects Scripture with Scripture.',
  },
  {
    title: 'Accessible learning',
    body: 'Deep Bible study should be clear, calm, and available without cost barriers.',
  },
] as const

const ecosystem = [
  {
    title: 'BibleStem Studies',
    description:
      'Structured Bible studies designed to help people read Scripture with clarity, context, and reflection.',
    status: 'Live' as const,
    href: '/study-library' as const,
  },
  {
    title: 'BibleStem Threads',
    description:
      'Premium Scripture-inspired apparel that helps fund free Bible studies and carries faith-centered messages into everyday life.',
    status: 'Live' as const,
    href: BIBLESTEM_THREADS_URL,
    external: true,
  },
  {
    title: 'BibleStem Studios',
    description:
      'A future creative branch focused on visual storytelling, Bible teaching, and cinematic faith-based content.',
    status: 'In development' as const,
    href: null,
  },
] as const

function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{children}</h2>
}

function ecosystemStatusClass(status: string): string {
  if (status === 'Live') return 'text-blue-800/75'
  return 'text-zinc-400'
}

function CompactCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <div className="mb-2.5 h-1 w-10 rounded-full bg-blue-800/50" />
      <h3 className="text-base font-semibold tracking-tight text-zinc-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{body}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <PageIntro
            eyebrow="About"
            title="About BibleStem"
            description="BibleStem helps people study Scripture with clarity, context, and reflection through guided Bible studies, Scripture Threads, word insights, and simple learning paths."
          />
        </div>
      </section>

      <div className="overflow-x-hidden pt-8 pb-10 md:pt-10 md:pb-12">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <section>
              <SectionLabel>Mission</SectionLabel>
              <p className="mt-4 text-lg leading-[1.75] text-zinc-800">
                We help people read the Bible carefully, connect passage with passage, and grow through structured study
                that keeps Scripture at the center.
              </p>
            </section>

            <section className={SECTION_GAP}>
              <SectionLabel>Why it exists</SectionLabel>
              <p className="mt-4 text-base leading-[1.75] text-zinc-700">
                Many people want to study the Bible deeply, but they do not always know where to begin. BibleStem was
                built to make serious Bible study feel clear, guided, and accessible without making the experience noisy
                or complicated.
              </p>
            </section>
          </div>

          <section className={SECTION_GAP}>
            <div className="mx-auto max-w-3xl">
              <SectionLabel>How it helps</SectionLabel>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-[1.65rem] md:leading-tight">
                Study with structure, not confusion.
              </h3>
            </div>
            <div className="mx-auto mt-7 grid min-w-0 max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {howItHelps.map((item) => (
                <CompactCard key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
          </section>

          <section className={SECTION_GAP}>
            <div className="mx-auto max-w-3xl lg:text-left">
              <SectionLabel>Ecosystem</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-[1.65rem] md:leading-tight">
                The BibleStem ecosystem
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                BibleStem begins with free Bible studies and grows through Scripture-centered resources, creative
                projects, and apparel. A free account is required to read lessons, and there is no paid tier.
              </p>
            </div>

            <div className="mx-auto mt-8 grid min-w-0 max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ecosystem.map((item) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div className="mb-1 h-1 w-10 rounded-full bg-blue-800/50" />
                      <span
                        className={`shrink-0 text-[11px] font-medium uppercase tracking-wide ${ecosystemStatusClass(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                  </>
                )

                if (item.href) {
                  const cardClass =
                    'block rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03] transition-all duration-200 hover:border-zinc-300 hover:shadow-md'

                  if ('external' in item && item.external) {
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClass}
                      >
                        {inner}
                      </a>
                    )
                  }

                  return (
                    <Link key={item.title} href={item.href} className={cardClass}>
                      {inner}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-zinc-200/90 bg-stone-50/40 p-5 shadow-sm ring-1 ring-zinc-950/[0.03]"
                  >
                    {inner}
                  </div>
                )
              })}
            </div>
          </section>

          <div className={`mx-auto max-w-6xl ${SECTION_GAP}`}>
            <div className="mx-auto max-w-3xl">
              <SectionLabel>Guiding principles</SectionLabel>
            </div>
            <div className="mt-7 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <CompactCard key={pillar.title} title={pillar.title} body={pillar.body} />
              ))}
            </div>
          </div>

          <section className={SECTION_GAP}>
            <div className="mx-auto max-w-3xl">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-[1.65rem] md:leading-tight">
                Reach us by email
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                BibleStem communicates with clients by email only. Questions, feedback, and issue reports go to{' '}
                <ContactEmailLink
                  showAddress
                  subject="BibleStem inquiry"
                  className="font-medium text-blue-800 underline decoration-blue-800/30 underline-offset-[3px] hover:text-blue-900"
                />
                .
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                We do not offer phone, chat, or social support channels.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary" className="min-h-[44px]">
                  Contact page
                </Button>
              </div>
            </div>
          </section>

          <section className={`${SECTION_GAP} pb-2 text-center`}>
            <div className="mx-auto h-px w-16 bg-zinc-200" aria-hidden />
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl md:leading-tight">
              Start studying
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-zinc-600">
              Begin with the Foundations Path or browse the full Study Library.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/paths/foundations" variant="primary" className="min-h-[44px] w-full sm:w-auto">
                Start Foundations Path
              </Button>
              <Button href="/study-library" variant="secondary" className="min-h-[44px] w-full sm:w-auto">
                Browse Study Library
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
