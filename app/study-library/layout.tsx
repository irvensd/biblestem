import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

export const metadata: Metadata = {
  title: 'Study Library · BibleStem',
  description: 'Browse BibleStudy series and lessons.',
}

export default function StudyLibraryLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
