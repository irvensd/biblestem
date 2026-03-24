import { type ReactNode } from 'react'

interface EmptyStateProps {
  title: string
  description?: ReactNode
  action?: ReactNode
  className?: string
}

export function EmptyState({ title, description, action, className = '' }: EmptyStateProps) {
  return (
    <div className={`rounded-xl border border-dashed border-zinc-200 bg-stone-50/50 px-6 py-12 text-center ${className}`}>
      <p className="text-base font-medium text-zinc-900">{title}</p>
      {description ? <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p> : null}
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  )
}
