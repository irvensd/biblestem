import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageIntro } from '@/components/site/PageIntro'
import { SupportRequestForm } from '@/components/support/SupportRequestForm'

export const metadata: Metadata = {
  title: 'Report an issue · BibleStem',
  description: 'Report a bug, typo, or broken lesson. You do not need an account.',
  robots: { index: false, follow: false },
}

function SupportFormFallback() {
  return <div className="h-40 animate-pulse rounded-xl bg-zinc-100" />
}

export default function SupportPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <PageIntro
            eyebrow="Support"
            title="Report an issue"
            description="Tell us about a bug, typo, broken link, or lesson problem. You do not need an account. Include your email so we can follow up."
          />
        </div>
      </section>
      <div className="overflow-x-hidden pt-8 pb-14 md:pt-10">
        <div className="container-shell">
          <div className="mx-auto max-w-xl">
            <Suspense fallback={<SupportFormFallback />}>
              <SupportRequestForm variant="standalone" />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
