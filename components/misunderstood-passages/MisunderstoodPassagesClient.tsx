'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'
import { ScriptureThread } from '@/components/lessons/ScriptureThread'
import { type MisunderstoodPassage } from '@/lib/misunderstood-passages'

function passageMatchesQuery(p: MisunderstoodPassage, q: string): boolean {
  if (!q.trim()) return true
  const s = q.trim().toLowerCase()
  const hay = [p.title, p.reference, p.commonView, p.tags.join(' ')].join('\n').toLowerCase()
  return hay.includes(s)
}

export function MisunderstoodPassagesClient({ passages }: { passages: MisunderstoodPassage[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => passages.filter((p) => passageMatchesQuery(p, query)), [passages, query])

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-5">
        <label htmlFor="misunderstood-search" className="sr-only">
          Search passages
        </label>
        <input
          id="misunderstood-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, reference, tags, or common view…"
          className={inputClassName}
          autoComplete="off"
        />
        <p className="mt-2 text-xs text-zinc-500">
          {filtered.length === passages.length
            ? `${passages.length} passages`
            : `${filtered.length} of ${passages.length} passages`}
        </p>
      </div>

      <ul className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <li
            key={p.id}
            className="flex min-w-0 flex-col rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-6"
          >
            <div className="mb-3 h-1 w-10 shrink-0 rounded-full bg-blue-800/55" aria-hidden />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">{p.reference}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">{p.title}</h3>

            <div className="mt-4 space-y-3 text-sm leading-relaxed">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">Common view</p>
                <p className="mt-1 text-zinc-600">{p.commonView}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">Scripture pattern</p>
                <p className="mt-1 text-zinc-600">{p.scripturePattern}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200/90 bg-stone-50/80 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {p.scriptureThread ? (
              <div className="mt-5 min-w-0 w-full overflow-hidden">
                <ScriptureThread {...p.scriptureThread} embedded />
              </div>
            ) : null}

            <div className="mt-5 pt-1">
              <Button
                className="w-full sm:w-auto"
                href={`/study-library/${p.studySlug}/lesson/${p.lessonSlug}`}
              >
                Study this passage
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="text-center text-sm text-zinc-500">No passages match your search. Try another keyword.</p>
      ) : null}
    </div>
  )
}
