import { Button } from '@/components/ui/Button'
import type { ReactNode } from 'react'

type Props = {
  variant?: 'primary' | 'secondary' | 'ghost'
  children?: ReactNode
  className?: string
}

/** Secondary hero CTA — opens the public studies preview. */
export function HomeExploreStudiesButton({
  variant = 'secondary',
  children = 'Preview studies',
  className = '',
}: Props) {
  return (
    <Button href="/studies" variant={variant} className={`w-full sm:w-auto ${className}`}>
      {children}
    </Button>
  )
}
