import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { PageIntro } from '@/components/site/PageIntro'
import { SupportCard } from '@/components/SupportCard'
import { supportReportHref } from '@/lib/support/report-issue-href'

export const metadata: Metadata = {
  title: 'Support BibleStem · BibleStem',
  description:
    'BibleStem is free and donation-supported. Learn how you can support careful Bible study while online giving is being prepared.',
}

const SECTION_GAP = 'mt-10 border-t border-zinc-200 pt-10 md:mt-11 md:pt-11'

const supportNowCards = [
  {
    title: 'Study and share',
    body: 'Use the studies, send them to someone who needs them, and help more people discover careful Bible study.',
    ctaLabel: 'Browse Study Library',
    href: '/study-library' as const,
  },
  {
    title: 'Report issues',
    body: 'If you notice a typo, broken link, unclear lesson, or content issue, let us know so BibleStem can improve.',
    ctaLabel: 'Report an issue',
    href: supportReportHref({ type: 'bug' }),
  },
  {
    title: 'Pray for the work',
    body: 'Pray that BibleStem stays faithful to Scripture, useful for learners, and accessible to people who want to study deeply.',
    href: null,
  },
] as const

const impactCards = [
  {
    title: 'Keep BibleStem free',
    description: 'The core study experience remains open without paywalls or locked content.',
  },
  {
    title: 'Develop new studies',
    description: 'Support helps fund lesson writing, review, design, and future study series.',
  },
  {
    title: 'Improve study tools',
    description: 'Notes, Scripture Threads, word insights, quizzes, and reading tools can continue improving.',
  },
  {
    title: 'Build the wider vision',
    description: 'Support helps prepare future BibleStem projects, resources, and creative work.',
  },
] as const

const faq = [
  {
    q: 'Are donations required?',
    a: 'No. BibleStem is free to use whether or not someone gives.',
  },
  {
    q: 'Is BibleStem free?',
    a: 'Yes. The full study experience is free. Donations will be optional once giving is available.',
  },
  {
    q: 'What will support fund?',
    a: 'Support will help fund study writing, design, development, hosting, language tools, and future BibleStem resources.',
  },
  {
    q: 'Is BibleStem a ministry or a business?',
    a: 'BibleStem is ministry-driven. The goal is to keep the core study platform free while building thoughtful tools, resources, and projects around Bible learning.',
  },
] as const

function SectionLabel({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p id={id} className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {children}
    </p>
  )
}

function CompactCard({
  title,
  body,
  ctaLabel,
  href,
}: {
  title: string
  body: string
  ctaLabel?: string
  href?: string | null
}) {
  return (
    <div className="flex h-full min-w-0 flex-col rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <div className="mb-2.5 h-1 w-10 rounded-full bg-blue-800/50" />
      <h3 className="text-base font-semibold tracking-tight text-zinc-900">{title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600">{body}</p>
      {ctaLabel && href ? (
        <Link
          href={href}
          className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-blue-800 hover:text-blue-900"
        >
          {ctaLabel}
        </Link>
      ) : null}
    </div>
  )
}

export default function DonatePage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <PageIntro
            eyebrow="Support"
            title="Help keep deep Bible study free."
            description="BibleStem is built to make structured, Scripture-first study accessible to everyone. Giving options are coming soon, but you can still support the work by studying, sharing, and helping improve the platform."
          />
        </div>
      </section>

      <div className="overflow-x-hidden pt-8 pb-10 md:pt-10 md:pb-12">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <SupportCard
              eyebrow="Giving status"
              title="Online giving is coming soon."
              description="Secure donation options are not active yet. BibleStem remains free to use while giving support is being prepared."
              primaryCta="link"
              ctaHref="/study-library"
              ctaLabel="Start studying"
              secondaryHref="/paths/foundations"
              secondaryLabel="Open Foundations Path"
              ctaVariant="primary"
            />

            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              When giving becomes available, this page will be updated with secure donation options.
            </p>

            <section className={SECTION_GAP}>
              <SectionLabel>Support now</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-[1.65rem] md:leading-tight">
                Ways to support BibleStem today
              </h2>
              <div className="mt-7 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {supportNowCards.map((card) => (
                  <CompactCard
                    key={card.title}
                    title={card.title}
                    body={card.body}
                    ctaLabel={'ctaLabel' in card ? card.ctaLabel : undefined}
                    href={card.href}
                  />
                ))}
              </div>
            </section>

            <section className={SECTION_GAP}>
              <SectionLabel>Impact</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-[1.65rem] md:leading-tight">
                What support makes possible
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Support helps BibleStem stay accessible while funding careful content, better tools, and future
                resources.
              </p>

              <div className="mt-7 grid min-w-0 gap-4 sm:grid-cols-2">
                {impactCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03]"
                  >
                    <div className="mb-2.5 h-1 w-10 rounded-full bg-blue-800/50" />
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900">{card.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={`${SECTION_GAP} pb-2`} aria-labelledby="donate-faq-label">
              <SectionLabel id="donate-faq-label">Questions</SectionLabel>
              <dl className="mt-7 space-y-0">
                {faq.map((item, index) => (
                  <div
                    key={item.q}
                    className={`border-t border-zinc-200/90 py-6 first:border-t-0 first:pt-0 ${index === faq.length - 1 ? 'pb-0' : ''}`}
                  >
                    <dt className="text-base font-semibold text-zinc-900">{item.q}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-zinc-600">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
