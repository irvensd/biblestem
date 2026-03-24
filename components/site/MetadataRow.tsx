interface MetadataItem {
  label: string
  value: string
}

interface MetadataRowProps {
  items: MetadataItem[]
  className?: string
}

export function MetadataRow({ items, className = '' }: MetadataRowProps) {
  return (
    <dl className={`flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-600 ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="flex min-w-0 max-w-full items-baseline gap-2">
          <dt className="shrink-0 text-zinc-500">{item.label}</dt>
          <dd className="min-w-0 break-words font-medium text-zinc-800">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
