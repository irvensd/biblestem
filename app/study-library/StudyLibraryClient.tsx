'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { StudyCard } from '@/components/study/StudyCard'
import { SectionHeading } from '@/components/site/SectionHeading'
import { EmptyState } from '@/components/EmptyState'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'
import {
  filterSeriesForLibrary,
  groupStudiesByLevelOrSection,
  STUDY_LIBRARY_SECTION_ORDER,
  type LibraryFilters,
} from '@/lib/product-queries'
import type { StudyLevel, StudyPath, StudySeries } from '@/lib/types/product'

const levels: StudyLevel[] = ['Beginner', 'Intermediate', 'Advanced']

const collectionDescription: Record<(typeof STUDY_LIBRARY_SECTION_ORDER)[number], string> = {
  'Foundational Studies': 'Start here if you are new to BibleStem or want to build a clear foundation for deeper study.',
  'Intermediate Studies': 'Build on the basics with studies that go further in application, narrative, and skill.',
  'Advanced Studies': 'Go deeper into prophecy, doctrine, and passages that require careful Scripture-to-Scripture study.',
  Other: 'Series grouped here when the level label is unexpected.',
}

interface StudyLibraryClientProps {
  paths: StudyPath[]
  allSeries: StudySeries[]
  /** When opening `/study-library?path=…` from a path, pre-select that filter. */
  initialPathSlug?: string
}

type SelectOption = {
  value: string
  label: string
}

interface FilterSelectProps {
  value: string
  options: SelectOption[]
  ariaLabel: string
  onChange: (value: string) => void
}

function FilterSelect({ value, options, ariaLabel, onChange }: FilterSelectProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const active = options.find((o) => o.value === value) ?? options[0]

  useEffect(() => {
    function onPointerDown(ev: PointerEvent) {
      const target = ev.target as Node | null
      if (!rootRef.current || !target) return
      if (!rootRef.current.contains(target)) setOpen(false)
    }
    function onKeyDown(ev: KeyboardEvent) {
      if (ev.key === 'Escape') setOpen(false)
    }
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((x) => !x)}
        className="inline-flex w-full items-center justify-between rounded-lg border border-zinc-300/90 bg-white px-3 py-2.5 text-left text-sm text-zinc-900 outline-none ring-blue-200/80 transition-[box-shadow,border-color] hover:border-zinc-400/90 focus:border-zinc-300 focus:ring-2 focus:ring-offset-0"
      >
        <span className="truncate">{active?.label}</span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className={`ml-2 h-4 w-4 shrink-0 text-zinc-500 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={ariaLabel}
          className="absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-zinc-200/90 bg-white p-1 shadow-lg ring-1 ring-zinc-950/[0.06]"
        >
          {options.map((option) => {
            const selected = option.value === value
            return (
              <li key={option.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm transition-colors ${
                    selected ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900'
                  }`}
                >
                  <span>{option.label}</span>
                  {selected ? (
                    <span className="ml-2 text-xs font-medium text-zinc-500" aria-hidden>
                      Selected
                    </span>
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export function StudyLibraryClient({ paths, allSeries, initialPathSlug = '' }: StudyLibraryClientProps) {
  const validInitial =
    initialPathSlug && paths.some((p) => p.slug === initialPathSlug) ? initialPathSlug : ''
  const [query, setQuery] = useState('')
  const [pathSlug, setPathSlug] = useState<string>(validInitial)
  const [level, setLevel] = useState<string>('')
  const [sort, setSort] = useState<LibraryFilters['sort']>('recommended')

  const filtered = useMemo(() => {
    return filterSeriesForLibrary(
      allSeries,
      {
        pathSlug: pathSlug || null,
        level: level || null,
        sort,
        query,
      },
      paths,
    )
  }, [allSeries, pathSlug, level, sort, query, paths])

  const grouped = useMemo(() => groupStudiesByLevelOrSection(filtered), [filtered])
  const pathOptions = useMemo<SelectOption[]>(
    () => [{ value: '', label: 'All paths' }, ...paths.map((p) => ({ value: p.slug, label: p.name }))],
    [paths],
  )
  const levelOptions = useMemo<SelectOption[]>(
    () => [{ value: '', label: 'All levels' }, ...levels.map((l) => ({ value: l, label: l }))],
    [],
  )
  const sortOptions = useMemo<SelectOption[]>(
    () => [
      { value: 'recommended', label: 'Sort: Recommended' },
      { value: 'newest', label: 'Newest' },
      { value: 'lessons', label: 'Most lessons' },
    ],
    [],
  )

  return (
    <>
      <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-5">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, path, or description"
            className={inputClassName}
            aria-label="Search studies"
          />
          <FilterSelect value={pathSlug} options={pathOptions} ariaLabel="Filter by path" onChange={setPathSlug} />
          <FilterSelect value={level} options={levelOptions} ariaLabel="Filter by level" onChange={setLevel} />
          <FilterSelect
            value={sort}
            options={sortOptions}
            ariaLabel="Sort studies"
            onChange={(next) => setSort(next as LibraryFilters['sort'])}
          />
        </div>
      </div>

      <div className="section-space">
        <aside
          aria-label="Featured collection"
          className="mb-10 rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] md:mb-12 md:flex md:items-center md:justify-between md:gap-8 md:p-5"
        >
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">Featured collection</p>
            <h2 className="mt-2 text-base font-semibold tracking-tight text-zinc-900 md:text-[1.05rem]">
              Misunderstood Passages
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Slow down commonly quoted Bible texts and study them in context with Scripture chains, word insights, and
              guided lessons.
            </p>
          </div>
          <div className="mt-4 shrink-0 md:mt-0">
            <Button href="/misunderstood-passages" className="px-4 py-2 text-sm">
              Browse passages
            </Button>
          </div>
        </aside>

        <div className="space-y-12 md:space-y-16">
          {filtered.length === 0 ? (
            <EmptyState
              title="No studies match your filters"
              description="Try clearing search or choosing a different path or level."
              className="mt-4"
            />
          ) : (
            STUDY_LIBRARY_SECTION_ORDER.map((collection) => {
              const list = grouped.get(collection) ?? []
              if (list.length === 0) return null
              const oneCard = list.length === 1
              return (
                <section key={collection}>
                  <SectionHeading
                    size="sm"
                    title={collection}
                    description={collectionDescription[collection]}
                  />
                  <div
                    className={`grid gap-6 ${
                      oneCard
                        ? 'mt-5 grid-cols-1 sm:max-w-2xl md:mt-6'
                        : 'mt-6 grid-cols-1 md:mt-7 md:grid-cols-2 lg:mt-9 lg:grid-cols-3'
                    }`}
                  >
                    {list.map((study) => (
                      <StudyCard key={study.slug} study={study} paths={paths} />
                    ))}
                  </div>
                </section>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}
