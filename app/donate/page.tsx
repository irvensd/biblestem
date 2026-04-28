import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { HomeExploreStudiesButton } from '@/components/home/HomeExploreStudiesButton'
import { PageIntro } from '@/components/site/PageIntro'
import { ComingSoonDonationControl, SupportCard } from '@/components/SupportCard'

export const metadata: Metadata = {
  title: 'Donate · BibleStem',
  description:
    'BibleStem is free and donation-supported. Learn how giving helps keep studies accessible and funds future work.',
}

const impactCards = [
  {
    title: 'Keep BibleStem free',
    description: 'BibleStem remains open and accessible without paywalls or locked content.',
  },
  {
    title: 'Develop new studies',
    description: 'Support helps fund new structured study series, lesson writing, and design improvements.',
  },
  {
    title: 'Sustain thoughtful tools',
    description: 'Notes, language insights, reading tools, and product improvements are developed with care.',
  },
  {
    title: 'Build the wider vision',
    description: 'Support helps lay the groundwork for BibleStem Studies, Threads, and Studios.',
  },
] as const

const faq = [
  {
    q: 'Why donations?',
    a: 'Donations help keep BibleStem free for everyone, support ongoing development, and make new study series possible.',
  },
  {
    q: 'Is BibleStem free?',
    a: 'Yes. The full study experience is free to use. Donations are optional and support the ministry behind the platform.',
  },
  {
    q: 'What does support fund?',
    a: 'Support helps fund study writing, design, development, language tools, and future BibleStem projects.',
  },
  {
    q: 'Are donations required?',
    a: 'No. BibleStem is free to use whether or not someone gives.',
  },
  {
    q: 'Is BibleStem a ministry or a business?',
    a: 'BibleStem is ministry-driven. We are building thoughtful tools, resources, and products around Bible learning while keeping the core study platform free.',
  },
] as const

function SectionEyebrow({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p id={id} className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {children}
    </p>
  )
}

export default function DonatePage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Ministry"
            title="Always free, supported by generosity."
            description="BibleStem is sustained by people who believe serious Bible study should remain accessible to everyone—free to use, thoughtfully built, and supported by voluntary generosity."
          />
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <SupportCard
              eyebrow="Give"
              title="Support coming soon"
              description="BibleStem is free and donation-supported. Giving options will be available soon."
              primaryCta="comingSoon"
              secondaryAction={<HomeExploreStudiesButton variant="secondary" />}
              variant="default"
              ctaVariant="primary"
            />

            <section className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-16">
              <SectionEyebrow>Impact</SectionEyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2rem] md:leading-tight">
                What your support makes possible
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
                Support helps keep BibleStem accessible while funding careful development and future work.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {impactCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-16">
              <SectionEyebrow>Access</SectionEyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2rem] md:leading-tight">
                Why BibleStem stays free
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-zinc-700">
                We believe deep Bible study should not be limited by cost. BibleStem is built as a donation-supported ministry so the platform can remain accessible while still being developed with care.
              </p>
            </section>

            <section className="mt-16 border-t border-zinc-200 pt-14 md:mt-20 md:pt-16" aria-labelledby="donate-faq-label">
              <SectionEyebrow id="donate-faq-label">Questions</SectionEyebrow>
              <dl className="mt-8 space-y-0">
                {faq.map((item, index) => (
                  <div
                    key={item.q}
                    className={`border-t border-zinc-200/90 py-8 first:border-t-0 first:pt-0 ${index === faq.length - 1 ? 'pb-0' : ''}`}
                  >
                    <dt className="text-base font-semibold text-zinc-900">{item.q}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-zinc-600">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <section className="mx-auto mt-16 max-w-3xl border-t border-zinc-200 pt-14 text-center md:mt-20 md:pt-16">
            <div className="mx-auto h-px w-16 bg-zinc-200" aria-hidden />
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl md:leading-tight">
              Help keep Bible study accessible.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-600">
              The full study experience stays free. Secure online giving is not set up yet. You can explore studies
              anytime. Donations are optional and will be available when we add a payment provider.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ComingSoonDonationControl />
              <HomeExploreStudiesButton variant="secondary">Return to study library</HomeExploreStudiesButton>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
