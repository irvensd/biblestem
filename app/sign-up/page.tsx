import { Suspense } from 'react'
import { GetStartedPageClient } from '@/components/get-started/GetStartedPageClient'

export default function SignUpPage() {
  return (
    <Suspense fallback={null}>
      <GetStartedPageClient title="Create your account" />
    </Suspense>
  )
}
