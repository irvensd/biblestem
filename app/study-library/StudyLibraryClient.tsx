'use client'

import { useMemo, useState } from 'react'
import { StudyCard } from '@/components/study/StudyCard'
import { SectionHeading } from '@/components/site/SectionHeading'
import { EmptyState } from '@/components/EmptyState'
import { inputClassName, selectClassName } from '@/components/ui/form-styles'
import {
  filterSeriesForLibrary,
  getAllSeries,
  getStudyPaths,
  groupSeriesByCollection,
  type LibraryFilters,
} from '@/lib/product-queries'
import type { StudyLevel } from '@/lib/types/product'

const levels: StudyLevel[] = ['Beginner', 'Intermediate', 'Advanced']

const collectionOrder = ['Foundational Studies', 'Growth Studies', 'Advanced Studies', 'Other'] as const

export function StudyLibraryClient() {
  const paths = getStudyPaths()
  const allSeries = getAllSeries()

  const [query, setQuery] = useState('')
  const [pathSlug, setPathSlug] = useState<string>('')
  const [level, setLevel] = useState<string>('')
  const [sort, setSort] = useState<LibraryFilters['sort']>('recommended')

  const filtered = useMemo(() => {
    return filterSeriesForLibrary(allSeries, {
      pathSlug: pathSlug || null,
      level: level || null,
      sort,
      query,
    })
  }, [allSeries, pathSlug, level, sort, query])

  const grouped = useMemo(() => groupSeriesByCollection(filtered), [filtered])

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
          <select
            className={selectClassName}
            aria-label="Filter by path"
            value={pathSlug}
            onChange={(e) => setPathSlug(e.target.value)}
          >
            <option value="">All paths</option>
            {paths.map((p) => (
              <option key={p.id} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
          <select
            className={selectClassName}
            aria-label="Filter by level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">All levels</option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <select
            className={selectClassName}
            aria-label="Sort studies"
            value={sort}
            onChange={(e) => setSort(e.target.value as LibraryFilters['sort'])}
          >
            <option value="recommended">Sort: Recommended</option>
            <option value="newest">Newest</option>
            <option value="lessons">Most lessons</option>
          </select>
        </div>
      </div>

      <div className="section-space">
        <div className="space-y-16 md:space-y-20">
          {filtered.length === 0 ? (
            <EmptyState
              title="No studies match your filters"
              description="Try clearing search or choosing a different path or level."
              className="mt-4"
            />
          ) : (
            collectionOrder.map((collection) => {
              const list = grouped.get(collection) ?? []
              if (list.length === 0) return null
              return (
                <section key={collection}>
                  <SectionHeading
                    size="sm"
                    title={collection}
                    description="Thoughtful learning paths with clear structure."
                  />
                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
                    {list.map((study) => (
                      <StudyCard key={study.slug} study={study} />
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
