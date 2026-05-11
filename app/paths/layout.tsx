import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

export const metadata: Metadata = {
  title: 'Study paths · BibleStem',
  description:
    'Choose a guided BibleStem path or open the Study Library. Foundations includes a step-by-step beginner map when studies are available.',
}

export default function PathsLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
