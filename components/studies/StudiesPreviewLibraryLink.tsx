'use client'

import Link from 'next/link'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'

/** Shown to signed-in users on public preview pages. */
export function StudiesPreviewLibraryLink() {
  const { user, isReady } = useDemoAuth()

  if (!isReady || !user) return null

  return (
    <p className="mt-4 text-sm text-zinc-600">
      Signed in?{' '}
      <Link
        href="/study-library"
        className="font-medium text-blue-800 underline-offset-2 hover:text-blue-900 hover:underline"
      >
        Go to full Study Library
      </Link>
    </p>
  )
}
