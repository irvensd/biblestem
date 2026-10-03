import type { Metadata } from 'next'
import { Suspense } from 'react'
import { GetStartedPageClient } from '@/components/get-started/GetStartedPageClient'

export const metadata: Metadata = {
  title: 'Create your account · BibleStem',
  description: 'Create a free BibleStem account. You must be at least 13 years old.',
  alternates: { canonical: '/sign-up' },
  openGraph: { url: '/sign-up', images: [{ url: '/logo.png', alt: 'BibleStem' }] },
}

export default function SignUpPage() {
  return (
    <Suspense fallback={null}>
      <GetStartedPageClient title="Create your account" />
    </Suspense>
  )
}
