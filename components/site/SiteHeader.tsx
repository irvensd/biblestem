import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/study-library', label: 'Study Library' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/90 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          BibleStem
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/sign-in" variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button href="/get-started">Get started</Button>
        </div>
      </div>
    </header>
  )
}
