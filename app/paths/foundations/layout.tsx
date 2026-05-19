import type { ReactNode } from 'react'
import { RequireAuth } from '@/components/auth/RequireAuth'

/** The guided Foundations journey starts only after sign-in. */
export default function FoundationsPathLayout({ children }: { children: ReactNode }) {
  return <RequireAuth>{children}</RequireAuth>
}
