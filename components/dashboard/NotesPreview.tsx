import Link from 'next/link'
import type { DashboardNote } from '@/lib/dashboard-mock-data'

interface NotesPreviewProps {
  notes: DashboardNote[]
}

export function NotesPreview({ notes }: NotesPreviewProps) {
  return (
    <section>
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Notes & highlights</p>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">Recent</h2>
        </div>
        <Link href="/study-library" className="text-sm font-medium text-blue-800 hover:text-blue-900">
          Browse studies
        </Link>
      </div>

      {notes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-200/90 bg-stone-50/50 px-6 py-10 text-center">
          <p className="text-sm font-medium text-zinc-800">No saved content yet</p>
          <p className="mt-2 text-sm text-zinc-600">
            Notes, highlights, and reflections will appear here as you study in the lesson reader.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {notes.map((note) => (
            <li
              key={note.id}
              className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03]"
            >
              <p className="text-sm font-medium text-zinc-900">{note.reference}</p>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600">{note.snippet}</p>
              <p className="mt-3 text-xs text-zinc-400">Updated {note.updatedLabel}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
