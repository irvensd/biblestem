import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

export const metadata: Metadata = {
  title: 'Dashboard · BibleStem',
  description: 'Your BibleStem study workspace: resume lessons, track Foundations progress, and see your next step.',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
