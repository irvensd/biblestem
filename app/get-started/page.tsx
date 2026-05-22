import { Suspense } from 'react'
import { GetStartedPageClient } from '@/components/get-started/GetStartedPageClient'

export default function GetStartedPage() {
  return (
    <Suspense fallback={null}>
      <GetStartedPageClient />
    </Suspense>
  )
}
