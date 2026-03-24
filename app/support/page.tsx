import { PageIntro } from '@/components/site/PageIntro'
import { SupportCard } from '@/components/SupportCard'

const faq = [
  {
    q: 'Why donations?',
    a: 'Donations keep BibleStem free for everyone, fund ongoing development, and help us create more structured studies with care.',
  },
  {
    q: 'Is BibleStem free?',
    a: 'Yes. The full study experience is free to use. Donations are optional and support the ministry behind the platform.',
  },
  {
    q: 'What does support fund?',
    a: 'Content creation, platform reliability, accessibility improvements, and long-term stewardship of the ministry.',
  },
] as const

export default function SupportPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Ministry"
            title="Always free, supported by generosity."
            description="BibleStem is sustained by people who believe serious Bible study should stay accessible—free to use, funded by voluntary support."
          />
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell max-w-3xl space-y-14 md:space-y-16">
          <SupportCard
            eyebrow="Give"
            title="Partner with BibleStem"
            description="If BibleStem has served your study, you can help keep it free for others. Gifts are voluntary, and they directly sustain the ministry."
            ctaHref="#"
            ctaLabel="Support the ministry"
            variant="muted"
            ctaVariant="primary"
          />

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Questions</h2>
            <dl className="mt-8 space-y-8">
              {faq.map((item) => (
                <div key={item.q} className="border-b border-zinc-200/90 pb-8 last:border-b-0 last:pb-0">
                  <dt className="text-base font-semibold text-zinc-900">{item.q}</dt>
                  <dd className="mt-2 text-base leading-relaxed text-zinc-600">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </>
  )
}
