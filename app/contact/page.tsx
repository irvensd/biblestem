import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactEmailLink } from '@/components/site/ContactEmailLink'
import { PageIntro } from '@/components/site/PageIntro'
import { Button } from '@/components/ui/Button'
import { BIBLESTEM_CONTACT_EMAIL } from '@/lib/site-contact'
import { supportReportHref } from '@/lib/support/report-issue-href'

export const metadata: Metadata = {
  title: 'Contact · BibleStem',
  description: `Reach the BibleStem team by email at ${BIBLESTEM_CONTACT_EMAIL}.`,
}

const contactTopics = [
  {
    title: 'Study questions',
    body: 'Ask about a lesson, passage, or how to use the Study Library.',
  },
  {
    title: 'Account help',
    body: 'Sign-in trouble, profile updates, or progress questions.',
  },
  {
    title: 'App issues',
    body: 'Use Report an issue in Settings (or links on lessons) for bugs, typos, and broken content.',
  },
  {
    title: 'Partnerships & giving',
    body: 'Ministry questions, donations, or ways to support BibleStem.',
  },
] as const

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <PageIntro
            eyebrow="Contact"
            title="Contact BibleStem"
            description="General questions and ministry inquiries go to hello@biblestem.io. To report a bug, broken link, or lesson issue, use the in-app support form."
          />
        </div>
      </section>

      <div className="overflow-x-hidden pt-8 pb-12 md:pt-10 md:pb-14">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <section className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Email</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900">hello@biblestem.io</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                BibleStem does not offer phone, chat, or social support channels. Email is how we handle general
                contact.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ContactEmailLink
                  showAddress
                  subject="BibleStem inquiry"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                />
                <Button href={supportReportHref({ type: 'bug' })} variant="secondary" className="min-h-[44px]">
                  Report an issue
                </Button>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Found a bug or content problem?{' '}
                <Link href={supportReportHref({ type: 'bug' })} className="font-medium text-blue-800 hover:text-blue-900">
                  Open the support form
                </Link>{' '}
                in Settings (prefills study and lesson context when linked from a lesson).
              </p>
            </section>

            <section className="mt-10 border-t border-zinc-200 pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">What to include</p>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Help us respond quickly by sharing the study or lesson name, what you expected, and what happened
                instead.
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactTopics.map((topic) => (
                  <li
                    key={topic.title}
                    className="rounded-xl border border-zinc-200/90 bg-stone-50/50 p-5 shadow-sm ring-1 ring-zinc-950/[0.03]"
                  >
                    <h3 className="text-base font-semibold text-zinc-900">{topic.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{topic.body}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
