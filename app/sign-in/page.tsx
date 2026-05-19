import { Suspense } from 'react'
import SignInPageClient from './SignInPageClient'

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
