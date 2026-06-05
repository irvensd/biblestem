'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { supportReportHref } from '@/lib/support/report-issue-href'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('[BibleStem error boundary]', error)
    }
  }, [error])

  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center bg-stone-50 px-4 py-16">
      <div className="w-full max-w-md rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <div className="mb-5 h-1 w-10 rounded-full bg-blue-800/50" aria-hidden />
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900">Something went wrong.</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Please refresh the page or report the issue if it continues.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" variant="primary" onClick={() => reset()}>
            Try again
          </Button>
          <Button href={supportReportHref({ type: 'bug' })} variant="secondary">
            Report issue
          </Button>
        </div>
      </div>
    </div>
  )
}
