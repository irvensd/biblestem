import { type ReactNode } from 'react'

interface SiteContainerProps {
  children: ReactNode
  className?: string
}

/** Matches `container-shell` from `app/globals.css` — max width + horizontal padding. */
export function SiteContainer({ children, className = '' }: SiteContainerProps) {
  return <div className={`container-shell ${className}`}>{children}</div>
}
