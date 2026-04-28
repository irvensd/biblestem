import Link from 'next/link'
import { SiteFooterProductLinks } from '@/components/site/SiteFooterProductLinks'
import { REPORT_ISSUE_LINK_CLASSNAME, supportReportHref } from '@/lib/support/report-issue-href'

const ministryLinks = [
  { href: '/about', label: 'About' },
  { href: '/donate', label: 'Donate' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-3 md:px-8 lg:px-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-blue-800"
          >
            <img
              src="/logo.png"
              alt=""
              width={96}
              height={96}
              className="biblestem-logo-img h-11 w-11 shrink-0"
              decoding="async"
            />
            <span className="text-base font-semibold text-zinc-900">BibleStem</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
            Structured studies for deep, Scripture-first learning. Always free and donation-supported.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-900">Product</p>
          <SiteFooterProductLinks />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Help</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href={supportReportHref({ type: 'bug' })} className={REPORT_ISSUE_LINK_CLASSNAME}>
                Report an issue
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-900">Ministry</p>
          <ul className="mt-3 space-y-2">
            {ministryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-600 hover:text-zinc-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-zinc-500 md:px-8 lg:px-10">
          © {new Date().getFullYear()} BibleStem. Deep Bible study made simple.
        </div>
      </div>
    </footer>
  )
}
