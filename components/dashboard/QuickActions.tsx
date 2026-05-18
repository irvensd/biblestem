import Link from 'next/link'

interface QuickActionsProps {
  resumeHref: string
}

const links: { label: string; href: string }[] = [
  { label: 'Resume study', href: '' },
  { label: 'Browse library', href: '/study-library' },
  { label: 'Open Foundations Path', href: '/paths/foundations' },
  { label: 'Settings', href: '/settings' },
]

export function QuickActions({ resumeHref }: QuickActionsProps) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Quick links</p>
      <nav className="mt-3" aria-label="Quick links">
        <ul className="divide-y divide-zinc-200/90 overflow-hidden rounded-xl border border-zinc-200/90 bg-white ring-1 ring-zinc-950/[0.03]">
          {links.map((a) => {
            const href = a.label === 'Resume study' ? resumeHref : a.href
            if (!href) return null
            return (
              <li key={a.label}>
                <Link
                  href={href}
                  className="block px-3.5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-stone-50 hover:text-zinc-900"
                >
                  {a.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}
