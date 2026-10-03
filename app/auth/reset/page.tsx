import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ResetPasswordForm } from '@/app/auth/reset/ResetPasswordForm'

export const metadata: Metadata = {
  title: 'New password · BibleStem',
  description: 'Set a new BibleStem password.',
  robots: { index: false, follow: false },
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm />
    </Suspense>
  )
}
