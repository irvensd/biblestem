import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

/** Study series overview and lessons require a signed-in account. */
export default function StudySeriesLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
