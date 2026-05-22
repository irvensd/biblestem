import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

export const metadata: Metadata = {
  title: 'Study tracks · BibleStem',
  description:
    'Choose your study track: Foundations, Hard Questions answered through Scripture, or Advanced Studies. The Foundations Path includes a step-by-step beginner journey when studies are available.',
}

/** Study tracks hub and guided paths — requires sign-in. */
export default function PathsLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
