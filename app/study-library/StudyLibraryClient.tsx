'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
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
import {
  completedFoundationStudyCount,
  currentFoundationStudy,
  orderFoundationStudies,
} from '@/lib/foundation-path'
import { readLocalProgress, type LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import type { StudyLevel, StudyPath, StudySeries } from '@/lib/types/product'

function FoundationalStudiesShelf({
  orderedList,
  paths,
  libraryPathSlug,
  onBrowseAllFoundations,
  onCollapseFoundationBrowse,
}: {
  orderedList: StudySeries[]
  paths: StudyPath[]
  libraryPathSlug: string
  onBrowseAllFoundations: () => void
  onCollapseFoundationBrowse: () => void
}) {
  const showFoundationStudyCards = libraryPathSlug === 'foundations'
  const [progress, setProgress] = useState<LocalDashboardProgress>(() => readLocalProgress())

  useEffect(() => {
    function refresh() {
      setProgress(readLocalProgress())
    }
    refresh()
    window.addEventListener('storage', refresh)
    window.addEventListener('biblestem-progress', refresh)
    return () => {
      window.removeEventListener('storage', refresh)
      window.removeEventListener('biblestem-progress', refresh)
    }
  }, [])

  const completed = completedFoundationStudyCount(orderedList, progress)
  const total = orderedList.length
  const current = currentFoundationStudy(orderedList, progress)
  const allDone = total > 0 && completed >= total

  const recommendedTitle =
    total === 0 ? null : allDone ? 'Every study complete' : (current?.title ?? null)

  const gridExpandedClasses =
    showFoundationStudyCards && orderedList.length === 1
      ? 'mt-6 grid grid-cols-1 gap-6 sm:max-w-2xl'
      : 'mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'

  return (
    <>
      <div className="mt-4 min-w-0 max-w-full rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
        <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight text-zinc-900">Foundations Path</h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-600">
              Follow the beginner studies in a clear guided order.
            </p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-zinc-500">
              The path keeps these studies in the recommended order.
            </p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3 sm:gap-4">
              <div className="min-w-0">
                <dt className="text-xs font-medium text-zinc-500">Studies available</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-zinc-900">{total}</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-xs font-medium text-zinc-500">Completed</dt>
                <dd className="mt-0.5 font-semibold tabular-nums text-zinc-900">
                  {completed} / {total}
                </dd>
              </div>
              <div className="min-w-0 sm:col-span-1">
                <dt className="text-xs font-medium text-zinc-500">Recommended next</dt>
                <dd className="mt-0.5 break-words font-medium leading-snug text-zinc-900">
                  {recommendedTitle ?? '—'}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex w-full min-w-0 shrink-0 flex-col gap-2 lg:w-60 lg:shrink-0">
            <Button href="/paths/foundations" className="min-h-[44px] w-full justify-center px-4 text-center text-sm lg:w-full">
              Open Foundations Path
            </Button>
            {showFoundationStudyCards ? (
              <Button
                type="button"
                variant="secondary"
                onClick={onCollapseFoundationBrowse}
                className="min-h-[44px] w-full justify-center whitespace-normal px-4 text-center text-sm lg:w-full lg:whitespace-nowrap"
              >
                Hide Foundation Studies
              </Button>
            ) : (
              <Button
                type="button"
                variant="secondary"
                onClick={onBrowseAllFoundations}
                className="min-h-[44px] w-full justify-center whitespace-normal px-4 text-center text-sm lg:w-full lg:whitespace-nowrap"
              >
                Browse Foundation Studies
              </Button>
            )}
          </div>
        </div>
      </div>

      {showFoundationStudyCards ? (
        <div className={`min-w-0 max-w-full ${gridExpandedClasses}`}>
          {orderedList.map((study) => (
            <StudyCard key={study.slug} study={study} paths={paths} variant="default" />
          ))}
        </div>
      ) : null}
    </>
  )
}

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

export function StudyLibraryClient({ paths, allSeries }: StudyLibraryClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const pathSlug = useMemo(() => {
    const raw = searchParams.get('path') ?? ''
    return raw && paths.some((p) => p.slug === raw) ? raw : ''
  }, [searchParams, paths])

  const applyLibraryPathSlug = (next: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (next) params.set('path', next)
    else params.delete('path')
    const qs = params.toString()
    router.replace(qs ? `/study-library?${qs}` : '/study-library', { scroll: false })
  }

  const [query, setQuery] = useState('')
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
      <div className="mt-10 min-w-0 rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-5">
        <div className="grid min-w-0 gap-3 [&>*]:min-w-0 md:grid-cols-2 lg:grid-cols-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, path, or description"
            className={inputClassName}
            aria-label="Search studies"
          />
          <FilterSelect value={pathSlug} options={pathOptions} ariaLabel="Filter by path" onChange={applyLibraryPathSlug} />
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
              if (list.length === 0) {
                if (collection !== 'Foundational Studies') return null
                return (
                  <section key={collection}>
                    <SectionHeading size="sm" title={collection} description={collectionDescription[collection]} />
                    <EmptyState
                      title="No Foundation studies available yet"
                      description="Foundation studies will appear here as they are added."
                      className="mt-5"
                      action={<Button href="/study-library">Browse all studies</Button>}
                    />
                  </section>
                )
              }
              const isFoundationsSection = collection === 'Foundational Studies'
              const orderedList = isFoundationsSection ? orderFoundationStudies(list) : list
              const oneCard = orderedList.length === 1

              if (isFoundationsSection) {
                return (
                  <section key={collection}>
                    <SectionHeading size="sm" title={collection} description={collectionDescription[collection]} />
                    <FoundationalStudiesShelf
                      orderedList={orderedList}
                      paths={paths}
                      libraryPathSlug={pathSlug}
                      onBrowseAllFoundations={() => applyLibraryPathSlug('foundations')}
                      onCollapseFoundationBrowse={() => applyLibraryPathSlug('')}
                    />
                  </section>
                )
              }

              const gridClasses = oneCard
                ? 'mt-5 grid grid-cols-1 gap-6 sm:max-w-2xl md:mt-6'
                : 'mt-6 grid grid-cols-1 gap-6 md:mt-7 md:grid-cols-2 lg:mt-9 lg:grid-cols-3'

              return (
                <section key={collection}>
                  <SectionHeading size="sm" title={collection} description={collectionDescription[collection]} />
                  <div className={gridClasses}>
                    {orderedList.map((study) => (
                      <StudyCard key={study.slug} study={study} paths={paths} variant="default" />
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
