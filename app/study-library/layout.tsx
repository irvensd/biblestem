import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Study Library · BibleStem',
  description: 'Browse BibleStudy series and lessons.',
}

/** Study Library index and level browse pages are public; series and lessons use nested RequireAuth. */
export default function StudyLibraryLayout({ children }: { children: ReactNode }) {
  return children
}
