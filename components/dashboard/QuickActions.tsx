import Link from 'next/link'

const staticActions = [
  { label: 'Browse library', href: '/study-library' },
  { label: 'View notes', href: '/study-library' },
  { label: 'Browse paths', href: '/paths' },
  { label: 'Support BibleStem', href: '/support' },
] as const

interface QuickActionsProps {
  resumeHref: string
}

export function QuickActions({ resumeHref }: QuickActionsProps) {
  const actions = [{ label: 'Resume study', href: resumeHref }, ...staticActions] as const
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Quick actions</p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">Shortcuts</h2>
      <nav className="mt-5" aria-label="Quick actions">
        <ul className="space-y-0 divide-y divide-zinc-200/90 rounded-xl border border-zinc-200/90 bg-white ring-1 ring-zinc-950/[0.03]">
          {actions.map((a) => (
            <li key={a.label}>
              <Link
                href={a.href}
                className="block px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-stone-50 hover:text-zinc-900"
              >
                {a.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
