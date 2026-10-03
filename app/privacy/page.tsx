import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/site/PageIntro'
import { BIBLESTEM_CONTACT_EMAIL } from '@/lib/site-contact'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'Privacy Policy · BibleStem',
  description:
    'How BibleStem collects and uses account information, study progress, notes, and support requests. BibleStem is for people 13 and older.',
  alternates: { canonical: '/privacy' },
  openGraph: { url: '/privacy', images: [{ url: '/logo.png', alt: 'BibleStem' }] },
}

export default function PrivacyPage() {
  const site = getSiteUrl()
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <PageIntro
            eyebrow="Privacy"
            title="Privacy Policy"
            description="BibleStem is a free Bible study platform. This page explains what we collect, why we collect it, and how to reach us. You must be at least 13 years old to create an account."
          />
        </div>
      </section>

      <div className="overflow-x-hidden pt-8 pb-14 md:pt-10 md:pb-16">
        <div className="container-shell">
          <article className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-zinc-700">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Who we are</h2>
              <p className="mt-3">
                BibleStem operates the study site at {site}. Questions about this policy go to{' '}
                <a className="font-medium text-blue-800 hover:text-blue-900" href={`mailto:${BIBLESTEM_CONTACT_EMAIL}`}>
                  {BIBLESTEM_CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Age</h2>
              <p className="mt-3">
                BibleStem is not directed at children under 13. You may create an account only if you are at least 13
                years old. We do not ask for a date of birth. If we learn an account belongs to someone under 13, we
                will delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">What we collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Name and email address, when you create an account or send a support request.</li>
                <li>
                  Password, which is handled by our authentication provider (Supabase). BibleStem does not store your
                  password in plain text.
                </li>
                <li>Study progress, lesson notes, and the name shown in your dashboard greeting.</li>
                <li>
                  Support reports: the message you write, the page you were on, optional study and lesson names, and
                  basic browser details (user agent, language, and window size) so we can reproduce a bug.
                </li>
                <li>A sign-in cookie that keeps you logged in on this device.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Why we use it</h2>
              <p className="mt-3">
                We use this information to create your account, save progress and notes, show your name in the app,
                reply to support requests, and keep the site secure. Reading lessons requires a free account. There is
                no paid tier. We do not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Who processes it</h2>
              <p className="mt-3">
                Account data and study records are stored with Supabase. The site may be hosted on Vercel. Those
                providers process data only so BibleStem can run. We do not use your study notes for advertising.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">How long we keep it</h2>
              <p className="mt-3">
                We keep account, progress, and note data while your account is open. Support messages are kept so we
                can fix the issue and see patterns in reports. You can ask us to delete your account and associated
                progress and notes by emailing {BIBLESTEM_CONTACT_EMAIL}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Your choices</h2>
              <p className="mt-3">
                You can update your display name in Settings, sign out on this device, and email us to request access
                or deletion. You can also read the <Link href="/terms" className="font-medium text-blue-800 hover:text-blue-900">Terms of Use</Link>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  )
}
