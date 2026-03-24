import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  items: BreadcrumbItem[]
  className?: string
}

export function PageHeader({ items, className = '' }: PageHeaderProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-zinc-500 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span className="text-zinc-300" aria-hidden>/</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-zinc-800">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'font-medium text-zinc-700' : undefined}>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
