import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

export const metadata: Metadata = {
  title: 'Study paths · BibleStem',
  description: 'Explore BibleStem learning tracks—Foundations, Theology, Life Application, and Prophecy.',
}

export default function PathsLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
