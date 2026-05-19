import { Button } from '@/components/ui/Button'
import type { ReactNode } from 'react'

type Props = {
  variant?: 'primary' | 'secondary' | 'ghost'
  children?: ReactNode
  className?: string
}

/** Secondary hero CTA — always opens the public study library. */
export function HomeExploreStudiesButton({
  variant = 'secondary',
  children = 'Browse studies',
  className = '',
}: Props) {
  return (
    <Button href="/study-library" variant={variant} className={`w-full sm:w-auto ${className}`}>
      {children}
    </Button>
  )
}
