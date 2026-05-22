'use client'

import { CTASection } from '@/components/CTASection'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { signUpRedirectUrl } from '@/lib/auth/auth-redirect'

/** Bottom landing CTA with auth-aware Foundations link and public preview secondary. */
export function HomeClosingCtaSection() {
  const { user, isReady } = useDemoAuth()
  const foundationsHref =
    isReady && user ? '/paths/foundations' : signUpRedirectUrl('/paths/foundations')

  return (
    <CTASection
      title="Start studying Scripture with clarity."
      primaryHref={foundationsHref}
      primaryLabel="Start Foundations Path"
      secondaryHref="/studies"
      secondaryLabel="Preview studies"
    />
  )
}
