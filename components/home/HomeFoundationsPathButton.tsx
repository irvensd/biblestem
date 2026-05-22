'use client'

import type { ReactNode } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { Button } from '@/components/ui/Button'
import { signUpRedirectUrl } from '@/lib/auth/auth-redirect'

const FOUNDATIONS_PATH_HREF = '/paths/foundations'

type Props = {
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  children?: ReactNode
}

/** Primary hero CTA — signed-out users go to sign-up with return to Foundations Path. */
export function HomeFoundationsPathButton({
  variant = 'primary',
  className = '',
  children = 'Start Foundations Path',
}: Props) {
  const { user, isReady } = useDemoAuth()
  const href = isReady && user ? FOUNDATIONS_PATH_HREF : signUpRedirectUrl(FOUNDATIONS_PATH_HREF)

  return (
    <Button href={href} variant={variant} className={`w-full sm:w-auto ${className}`}>
      {children}
    </Button>
  )
}
