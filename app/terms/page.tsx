import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/site/PageIntro'
import { BIBLESTEM_CONTACT_EMAIL } from '@/lib/site-contact'

export const metadata: Metadata = {
  title: 'Terms of Use · BibleStem',
  description:
    'Terms for using BibleStem. A free account is required to read lessons. You must be at least 13 years old.',
  alternates: { canonical: '/terms' },
  openGraph: { url: '/terms', images: [{ url: '/logo.png', alt: 'BibleStem' }] },
}

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <PageIntro
            eyebrow="Terms"
            title="Terms of Use"
            description="These terms cover use of the BibleStem study site. Creating an account means you agree to them and confirm that you are at least 13 years old."
          />
        </div>
      </section>

      <div className="overflow-x-hidden pt-8 pb-14 md:pt-10 md:pb-16">
        <div className="container-shell">
          <article className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-zinc-700">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">The service</h2>
              <p className="mt-3">
                BibleStem provides structured Bible studies. A free account is required to read lessons. There is no
                paid tier and no separate locked subscription. Online donations are not available yet. Public pages
                such as study previews, About, and Contact can be read without an account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Age requirement</h2>
              <p className="mt-3">
                You must be at least 13 years old to create an account or submit a support request. By checking the box
                on the sign-up form, you confirm that you meet this age and that you agree to these terms and the{' '}
                <Link href="/privacy" className="font-medium text-blue-800 hover:text-blue-900">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Your account</h2>
              <p className="mt-3">
                You are responsible for the accuracy of the name and email you provide and for keeping your password
                private. Do not share your account or try to access lessons by bypassing sign-in. We may suspend an
                account that is used to disrupt the service or to collect other people&apos;s information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Study content</h2>
              <p className="mt-3">
                Lesson text, quizzes, and notes in the reader are for personal study. Do not copy the lesson library
                to republish it as your own course or product. Scripture quotations remain the text of the translation
                shown in the lesson.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Availability</h2>
              <p className="mt-3">
                We may change, remove, or add studies, and we may pause the site for maintenance. Some series stay
                hidden until the lesson text is written. BibleStem does not promise that every study listed in older
                materials is available.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Contact</h2>
              <p className="mt-3">
                Questions about these terms:{' '}
                <a className="font-medium text-blue-800 hover:text-blue-900" href={`mailto:${BIBLESTEM_CONTACT_EMAIL}`}>
                  {BIBLESTEM_CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  )
}
