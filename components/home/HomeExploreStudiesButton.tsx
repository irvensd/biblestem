'use client'

import { Button } from '@/components/ui/Button'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import type { ReactNode } from 'react'

type Props = {
  variant?: 'primary' | 'secondary' | 'ghost'
  children?: ReactNode
}

/** Links to Study Library when signed in; otherwise sign-in. */
export function HomeExploreStudiesButton({ variant = 'secondary', children = 'Explore studies' }: Props) {
  const { user, isReady } = useDemoAuth()
  const href = isReady && user ? '/study-library' : '/sign-in'

  return (
    <Button href={href} variant={variant}>
      {children}
    </Button>
  )
}
