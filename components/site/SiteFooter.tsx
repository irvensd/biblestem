import Link from 'next/link'

const productLinks = [
  { href: '/study-library', label: 'Study Library' },
  { href: '/paths', label: 'Paths' },
  { href: '/sign-in', label: 'Sign In' },
]

const ministryLinks = [
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-3 md:px-8 lg:px-10">
        <div>
          <p className="text-base font-semibold text-zinc-900">BibleStem</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
            Structured studies for deep, Scripture-first learning. Always free and donation-supported.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-900">Product</p>
          <ul className="mt-3 space-y-2">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-600 hover:text-zinc-900">
                  {link.label}
                </Link>
              </li>
            ))}
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
