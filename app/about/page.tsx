import { PageIntro } from '@/components/site/PageIntro'
import { CTASection } from '@/components/CTASection'

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
        <div className="container-shell max-w-3xl space-y-14 md:space-y-16">
          <section className="border-t border-zinc-200 pt-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Mission</h2>
            <p className="mt-5 text-lg leading-[1.75] text-zinc-800">
              We help people read the Bible with seriousness and joy—providing structured paths, language insight where it helps, and space for reflection.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Story</h2>
            <p className="mt-5 text-base leading-[1.75] text-zinc-700">
              BibleStem began as a simple conviction: the church deserves tools that feel modern without being noisy—calm interfaces, careful content, and a posture of reverence toward Scripture.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Guiding principles</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-1 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]"
                >
                  <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{pillar.body}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <CTASection title="Start studying Scripture with clarity." primaryHref="/get-started" primaryLabel="Get started" />
    </>
  )
}
