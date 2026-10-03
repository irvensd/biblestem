import type { Metadata } from 'next'
import { Suspense } from 'react'
import SignInPageClient from './SignInPageClient'

export const metadata: Metadata = {
  title: 'Sign in · BibleStem',
  description: 'Sign in to BibleStem to read lessons and save progress.',
  alternates: { canonical: '/sign-in' },
  openGraph: { url: '/sign-in', images: [{ url: '/logo.png', alt: 'BibleStem' }] },
}

function SignInFallback() {
  return (
    <div className="section-space">
      <div className="container-shell flex justify-center">
        <div className="w-full max-w-md">
          <div className="mt-10 h-10 animate-pulse rounded-lg bg-zinc-100" />
          <div className="mt-4 h-6 max-w-xs animate-pulse rounded-lg bg-zinc-100" />
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={<SignInFallback />}>
      <SignInPageClient />
    </Suspense>
  )
}
