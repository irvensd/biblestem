import Link from 'next/link'
import type { StudyPathItem } from '@/lib/dashboard-mock-data'

interface StudyPathsProps {
  paths: StudyPathItem[]
}

export function StudyPaths({ paths }: StudyPathsProps) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Study paths</p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">Learning tracks</h2>
      <ul className="mt-5 space-y-2">
        {paths.map((path) => (
          <li key={path.id}>
            <Link
              href={path.href}
              className={`block rounded-xl border px-4 py-3.5 transition-colors ${
                path.isCurrent
                  ? 'border-blue-800/25 bg-white ring-1 ring-blue-800/10'
                  : path.isRecommended
                    ? 'border-zinc-200/90 bg-white hover:border-zinc-300'
                    : 'border-zinc-200/90 bg-white/80 hover:border-zinc-300 hover:bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-zinc-900">{path.label}</span>
                {path.isCurrent ? (
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-blue-800/90">
                    Current
                  </span>
                ) : path.isRecommended ? (
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                    Next
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600">{path.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
