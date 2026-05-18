'use client'

import { useMemo, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SectionHeading } from '@/components/site/SectionHeading'
import { FoundationsSummaryCard } from '@/components/study-library/FoundationsSummaryCard'
import { LevelStudiesSummaryCard } from '@/components/study-library/LevelStudiesSummaryCard'
import { StudyLibrarySidebar } from '@/components/study-library/StudyLibrarySidebar'
import {
  getAdvancedBrowseStudies,
  getFoundationBrowseStudies,
  getIntermediateBrowseStudies,
} from '@/lib/study-library-levels'
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

  const [trackFilter, setTrackFilter] = useState<string>('')

  const applyTrackFilter = (next: string) => {
    if (next === 'Beginner') {
      router.push('/study-library/foundations')
      return
    }
    if (next === 'Intermediate') {
      router.push('/study-library/intermediate')
      return
    }
    if (next === 'Advanced') {
      router.push('/study-library/advanced')
      return
    }
    setTrackFilter(next)
  }

  const showFoundationsSection = !trackFilter || trackFilter === 'Beginner'
  const showDeeperSection = !trackFilter || trackFilter === 'Intermediate'
  const showAdvancedSection = !trackFilter || trackFilter === 'Advanced'

  const trackOptions = useMemo<SelectOption[]>(
    () => [
      { value: '', label: 'All study tracks' },
      ...STUDY_TRACKS.map((t) => ({ value: t.level, label: t.publicLabel })),
    ],
    [],
  )

  return (
    <>
      <div className="mt-10 min-w-0 rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-5">
        <div className="max-w-md">
          <FilterSelect
            value={trackFilter}
            options={trackOptions}
            ariaLabel="Filter by study track"
            onChange={applyTrackFilter}
          />
        </div>
      </div>

      <div className="mt-8 pb-16 md:mt-10 md:pb-24">
        <div className="min-w-0 lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0 space-y-12 md:space-y-16">
            {showFoundationsSection ? (
              <section>
                <SectionHeading
                  size="sm"
                  title={foundationsTrack.sectionTitle}
                  description={foundationsTrack.sectionDescription}
                />
                <FoundationsSummaryCard orderedList={foundationCatalog} />
              </section>
            ) : null}

            {showDeeperSection ? (
              <section>
                <SectionHeading
                  size="sm"
                  title={deeperTrack.sectionTitle}
                  description={deeperTrack.sectionDescription}
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
            ) : null}

            {showAdvancedSection ? (
              <section>
                <SectionHeading
                  size="sm"
                  title={advancedTrack.sectionTitle}
                  description={advancedTrack.sectionDescription}
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
            ) : null}
          </div>

          <div className="mt-10 min-w-0 lg:sticky lg:top-24 lg:mt-0 lg:self-start">
            <StudyLibrarySidebar paths={paths} allSeries={allSeries} />
          </div>
        </div>
      </div>
    </>
  )
}
