import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Dashboard · BibleStem',
  description: 'Your BibleStem study workspace—resume lessons, track progress, and keep notes.',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return children
}
