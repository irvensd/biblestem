import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function StudyNotFound() {
  return (
    <div className="min-h-[50vh] border-b border-zinc-200/80 bg-stone-50">
      <div className="container-shell max-w-lg py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Study Library</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900">Study not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          That study may have moved, or the link may be incomplete. Try returning to the library and opening it from
          there.
        </p>
        <div className="mt-8">
          <Button href="/study-library">Return to Study Library</Button>
        </div>
        <p className="mt-6 text-sm text-zinc-500">
          <Link href="/" className="font-medium text-blue-800 hover:text-blue-900">
            Home
          </Link>
        </p>
      </div>
    </div>
  )
}
