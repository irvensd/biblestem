'use client'

import { useMemo, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SectionHeading } from '@/components/site/SectionHeading'
import { StudyCard } from '@/components/study/StudyCard'
import { FoundationsSummaryCard } from '@/components/study-library/FoundationsSummaryCard'
import { LevelStudiesSummaryCard } from '@/components/study-library/LevelStudiesSummaryCard'
import { StudyLibrarySidebar } from '@/components/study-library/StudyLibrarySidebar'
import {
  getAdvancedBrowseStudies,
  getFoundationBrowseStudies,
  getIntermediateBrowseStudies,
} from '@/lib/study-library-levels'
import { filterSeriesForLibrary } from '@/lib/product-queries'
import { STUDY_TRACKS } from '@/lib/study-tracks'
import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type { StudyPath, StudySeries } from '@/lib/types/product'

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
  className?: string
}

function FilterSelect({ value, options, ariaLabel, onChange, className = '' }: FilterSelectProps) {
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
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((x) => !x)}
        className="inline-flex w-full min-h-[44px] items-center justify-between rounded-lg border border-zinc-300/90 bg-white px-3 py-2 text-left text-sm text-zinc-900 outline-none ring-blue-200/80 transition-[box-shadow,border-color] hover:border-zinc-400/90 focus:border-zinc-300 focus:ring-2 focus:ring-offset-0"
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

const foundationsTrack = STUDY_TRACKS[0]
const deeperTrack = STUDY_TRACKS[1]
const advancedTrack = STUDY_TRACKS[2]

export function StudyLibraryClient({ paths, allSeries }: StudyLibraryClientProps) {
  const router = useRouter()

  const catalog = useMemo<LoadedCatalog>(
    () => ({ source: 'mock', paths, allSeries }),
    [paths, allSeries],
  )

  const foundationCatalog = useMemo(() => getFoundationBrowseStudies(catalog), [catalog])
  const intermediateCatalog = useMemo(() => getIntermediateBrowseStudies(allSeries), [allSeries])
  const advancedCatalog = useMemo(() => getAdvancedBrowseStudies(allSeries), [allSeries])

  const searchableStudies = useMemo(
    () => [...foundationCatalog, ...intermediateCatalog, ...advancedCatalog],
    [foundationCatalog, intermediateCatalog, advancedCatalog],
  )

  const [searchQuery, setSearchQuery] = useState('')
  const [trackFilter, setTrackFilter] = useState('')

  const trimmedQuery = searchQuery.trim()
  const isSearching = trimmedQuery.length > 0

  const searchResults = useMemo(() => {
    if (!isSearching) return []
    return filterSeriesForLibrary(
      searchableStudies,
      {
        pathSlug: null,
        level: trackFilter || null,
        sort: 'recommended',
        query: trimmedQuery,
      },
      paths,
    )
  }, [isSearching, searchableStudies, trackFilter, trimmedQuery, paths])

  const applyTrackFilter = (next: string) => {
    if (next === 'Beginner') {
      router.push('/study-library/foundations')
      return
    }
    if (next === 'Intermediate') {
      router.push('/study-library/hard-questions')
      return
    }
    if (next === 'Advanced') {
      router.push('/study-library/advanced')
      return
    }
    setTrackFilter('')
  }

  const trackOptions = useMemo<SelectOption[]>(
    () => [
      { value: '', label: 'All study tracks' },
      ...STUDY_TRACKS.map((t) => ({ value: t.level, label: t.publicLabel })),
    ],
    [],
  )

  return (
    <>
      <div className="mt-6 min-w-0 rounded-xl border border-zinc-200/90 bg-white p-3 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-4">
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-stretch">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Search studies</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, topic, or Scripture..."
              className="min-h-[44px] w-full min-w-0 rounded-lg border border-zinc-300/90 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-[box-shadow,border-color] placeholder:text-zinc-400 hover:border-zinc-400/90 focus:border-zinc-300 focus:ring-2 focus:ring-blue-200/80 focus:ring-offset-0"
            />
          </label>
          <FilterSelect
            value={trackFilter}
            options={trackOptions}
            ariaLabel="Filter by study track"
            onChange={applyTrackFilter}
            className="w-full shrink-0 sm:w-52"
          />
        </div>
        <p className="mt-2 text-xs leading-relaxed text-zinc-500">
          Choose a track to open its browse page. All study tracks keeps you on this overview.
        </p>
      </div>

      <div className="mt-6 pb-16 md:mt-8 md:pb-24">
        <div className="min-w-0 lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0 space-y-10 md:space-y-12">
            {isSearching ? (
              <section aria-labelledby="study-library-search-results">
                <h2 id="study-library-search-results" className="text-lg font-semibold tracking-tight text-zinc-900">
                  Search results
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  {searchResults.length === 0
                    ? 'No studies match your search. Try another topic or clear the filter.'
                    : `${searchResults.length} ${searchResults.length === 1 ? 'study' : 'studies'} found`}
                </p>
                {searchResults.length > 0 ? (
                  <ul className="mt-5 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    {searchResults.map((study) => (
                      <li key={study.slug} className="min-w-0">
                        <StudyCard study={study} paths={paths} variant="compact" />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ) : (
              <>
                <section>
                  <SectionHeading
                    size="sm"
                    title={foundationsTrack.sectionTitle}
                    description={foundationsTrack.sectionDescription}
                    className="mb-5"
                  />
                  <FoundationsSummaryCard orderedList={foundationCatalog} />
                </section>

                <section>
                  <SectionHeading
                    size="sm"
                    title={deeperTrack.sectionTitle}
                    description={deeperTrack.sectionDescription}
                    className="mb-5"
                  />
                  <LevelStudiesSummaryCard
                    title={deeperTrack.summaryCardTitle}
                    description={deeperTrack.summaryDescription}
                    studies={intermediateCatalog}
                    browseHref={deeperTrack.browseHref}
                    browseLabel={deeperTrack.browseCta}
                    emptyMessage={deeperTrack.emptyMessage}
                  />
                </section>

                <section>
                  <SectionHeading
                    size="sm"
                    title={advancedTrack.sectionTitle}
                    description={advancedTrack.sectionDescription}
                    className="mb-5"
                  />
                  <LevelStudiesSummaryCard
                    title={advancedTrack.summaryCardTitle}
                    description={advancedTrack.summaryDescription}
                    studies={advancedCatalog}
                    browseHref={advancedTrack.browseHref}
                    browseLabel={advancedTrack.browseCta}
                    emptyMessage={advancedTrack.emptyMessage}
                  />
                </section>
              </>
            )}
          </div>

          <div className="mt-6 min-w-0 lg:sticky lg:top-24 lg:mt-0 lg:self-start">
            <StudyLibrarySidebar paths={paths} allSeries={allSeries} />
          </div>
        </div>
      </div>
    </>
  )
}
