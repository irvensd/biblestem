import Link from 'next/link'

interface CategoryCardProps {
  name: string
  description: string
  seriesCount: number
  href?: string
}

export function CategoryCard({ name, description, seriesCount, href = '/study-library' }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-zinc-200/90 bg-stone-50/40 p-6 transition-colors hover:border-zinc-300 hover:bg-white"
    >
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p>
      <p className="mt-4 text-sm text-zinc-500">
        {seriesCount} {seriesCount === 1 ? 'series' : 'series'}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-blue-800 opacity-0 transition-opacity group-hover:opacity-100">
        Browse studies
      </span>
    </Link>
  )
}
