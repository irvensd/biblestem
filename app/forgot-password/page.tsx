import type { Metadata } from 'next'
import { ForgotPasswordForm } from '@/app/forgot-password/ForgotPasswordForm'

export const metadata: Metadata = {
  title: 'Reset password · BibleStem',
  description: 'Send a BibleStem password reset link to your email.',
  robots: { index: false, follow: false },
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />
}
