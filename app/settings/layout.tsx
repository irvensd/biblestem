import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

export const metadata: Metadata = {
  title: 'Settings · BibleStem',
  description: 'Manage your BibleStem profile, security, study data, and technical support reports.',
}

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
