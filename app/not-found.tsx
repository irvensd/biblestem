import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Page not found · BibleStem',
}

export default function NotFound() {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center bg-stone-50 px-4 py-16">
      <div className="w-full max-w-md rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <div className="mb-5 h-1 w-10 rounded-full bg-blue-800/50" aria-hidden />
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          This page may have moved or does not exist.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/study-library" variant="primary">
            Back to Study Library
          </Button>
          <Button href="/" variant="secondary">
            Go home
          </Button>
        </div>
      </div>
    </div>
  )
}
