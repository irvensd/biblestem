import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Study tracks · BibleStem',
  description:
    'Choose your study track: Foundations, Deeper Studies on hard questions answered through Scripture, or Advanced Studies. The Foundations Path includes a step-by-step beginner journey when studies are available.',
}

/** Paths hub (track picker) is public; individual path journeys use nested RequireAuth layouts. */
export default function PathsLayout({ children }: { children: ReactNode }) {
  return children
}
