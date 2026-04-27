import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/CTASection'
import { SectionHeading } from '@/components/site/SectionHeading'
import { SupportCard } from '@/components/SupportCard'
import { HomeCatalogSections } from '@/components/home/HomeCatalogSections'
import { HomeExploreStudiesButton } from '@/components/home/HomeExploreStudiesButton'
import type { LoadedCatalog } from '@/lib/catalog/load-catalog'

const trustItems = [
  {
    label: 'Scripture-first',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
  {
    label: 'Structured studies',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
  {
    label: 'Original language insights',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: 'Always free',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
        <path d="M4 12h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5L12 2 7.5 6H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2Z" />
        <path d="M12 12v8" />
      </svg>
    ),
  },
] as const

const features = [
  {
    title: 'Structured study paths',
    body: 'Follow clear lesson sequences that build understanding without rushing.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    title: 'Hebrew & Greek insights',
    body: 'See key terms in context with careful, readable word-study detail.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 19h12" />
      </svg>
    ),
  },
  {
    title: 'Notes & reflection',
    body: 'Capture thoughts beside the text in a calm, distraction-free space.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    title: 'Track your learning',
    body: 'Resume where you left off and keep progress visible at a glance.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 5-7" />
      </svg>
    ),
  },
] as const

function HeroProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="pointer-events-none absolute -right-4 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full bg-blue-800/[0.04] blur-3xl md:block"
        aria-hidden
      />
      <div className="relative space-y-4">
        <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/5">
          <div className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Lesson</p>
              <p className="text-sm font-semibold text-zinc-900">A Book Unlike Any Other</p>
              <p className="mt-0.5 text-xs text-zinc-500">John 1:1 · Luke 24:27 · 22 min</p>
            </div>
            <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-600">
              In progress
            </span>
          </div>
          <p className="mt-4 font-serif text-[15px] leading-relaxed text-zinc-700">
            In the beginning was the{' '}
            <span className="rounded-sm bg-blue-50 px-0.5 font-medium text-blue-900 underline decoration-blue-200/80 decoration-1 underline-offset-2">
              Word
            </span>
            , and the Word was with God, and the Word was God.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
            <span className="h-1 w-12 rounded-full bg-zinc-200" />
            <span>Reading</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm ring-1 ring-zinc-950/5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Word study</p>
            <p className="mt-2 text-sm font-semibold text-zinc-900">λόγος · logos</p>
            <p className="mt-1 text-xs leading-5 text-zinc-600">Speech, message, divine expression—embodied in Christ.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-500">
              <span className="rounded border border-zinc-200 px-1.5 py-0.5">Strong&apos;s G3056</span>
              <span className="rounded border border-zinc-200 px-1.5 py-0.5">Lemma</span>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 shadow-sm ring-1 ring-zinc-950/5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Featured</p>
            <p className="mt-2 text-sm font-semibold text-zinc-900">The Bible — God’s Living Word</p>
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-600">Two lessons · Foundations · Beginner</p>
            <div className="mt-3 h-1 w-full rounded-full bg-zinc-200">
              <div className="h-1 w-[38%] rounded-full bg-blue-800/80" />
            </div>
            <p className="mt-2 text-[11px] text-zinc-500">Progress across series</p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface HomePageContentProps {
  catalog: LoadedCatalog
}

export function HomePageContent({ catalog }: HomePageContentProps) {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-20 pt-20 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28">
        <div className="container-shell">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-semibold tracking-[0.22em] text-zinc-500 uppercase">BibleStem</span>
                <span className="hidden h-px flex-1 max-w-[4rem] bg-zinc-200 sm:block" aria-hidden />
              </div>
              <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-zinc-600">
                A modern Bible study platform for deep, structured, Scripture-first learning.
              </p>

              <h1 className="mt-8 max-w-[17ch] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-zinc-950 sm:text-5xl sm:leading-[1.06] md:text-6xl lg:text-[3.5rem] xl:text-[3.75rem]">
                Deep Bible study made simple.
              </h1>

              <p className="mt-6 max-w-md text-base leading-[1.65] text-zinc-700 md:text-[17px]">
                Structured studies with Hebrew and Greek insights, guided paths, and room for reflection—always free.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/get-started">Get started free</Button>
                <HomeExploreStudiesButton />
              </div>
              <p className="mt-5 text-sm font-medium text-zinc-600">100% free. Donation-supported.</p>
            </div>

            <HeroProductVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-6 md:py-7">
        <div className="container-shell">
          <div className="overflow-hidden rounded-xl border border-zinc-200/90 bg-zinc-200/80">
            <div className="grid grid-cols-2 gap-px md:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 bg-white px-4 py-3.5 sm:justify-center sm:px-5 md:py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200/90 bg-stone-50 text-blue-800">
                    {item.icon}
                  </span>
                  <span className="text-left text-[13px] font-medium leading-snug tracking-tight text-zinc-700 sm:text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-b border-transparent">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why BibleStem"
            title="Built for careful readers"
            description="Tools and structure that respect the text—so study stays focused, calm, and clear."
            showRule
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200/90 bg-stone-50 text-blue-800">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCatalogSections catalog={catalog} />

      <section className="section-space bg-white">
        <div className="container-shell">
          <SupportCard
            title="Always free, supported by generosity."
            description="BibleStem is donation-supported so serious Bible study remains accessible to everyone."
            ctaHref="/support"
            ctaLabel="Support the ministry"
            variant="muted"
          />
        </div>
      </section>

      <CTASection title="Start studying Scripture with clarity." primaryHref="/get-started" primaryLabel="Get started" />
    </>
  )
}
