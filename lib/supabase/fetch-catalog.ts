import type { SupabaseClient } from '@supabase/supabase-js'
import type { Lesson, StudyPath, StudySeries } from '@/lib/types/product'
import { createSupabaseBrowserClient } from '@/lib/supabase/client'
import { isTransientNetworkError, TransientCatalogFetchError } from '@/lib/supabase/transient-errors'

type PathRow = {
  id: string
  slug: string
  name: string
  description: string | null
  sort_order: number
  created_at?: string
}

type SeriesRow = {
  id: string
  study_path_id: string
  slug: string
  title: string
  description: string
  /** Present after migration `006_study_series_card_descriptions.sql`. */
  short_description?: string | null
  long_description?: string | null
  level: StudySeries['level']
  duration_summary: string
  lessons_count: number
  featured: boolean
  collection_label: string | null
  sort_order: number
  created_at?: string
  /** Optional: short line under title (add via migration when ready). */
  subtitle?: string | null
  /** Optional: JSON string array of overview bullets. */
  what_you_will_learn?: unknown | null
  is_published?: boolean | null
}

type LessonRow = {
  id: string
  study_series_id: string
  slug: string
  title: string
  summary: string
  duration_minutes: number
  scripture: string
  sort_order: number
  created_at?: string
  /** From `lesson_catalog.content_ready`. True when reader JSON is real, not a draft shell. */
  content_ready?: boolean | null
}

type SectionHeadingRow = {
  id: string
  lesson_id: string
  heading: string
}

const SHELL_SECTION_HEADING = 'Lesson content coming soon'

function logSupabaseFetchIssue(scope: string, message: string): void {
  const isFetchFailure = message.toLowerCase().includes('fetch failed')
  if (isFetchFailure) {
    console.warn(`[supabase] ${scope}: ${message} (will retry or use cache / mock)`)
    return
  }
  console.error(`[supabase] ${scope}:`, message)
}

function throwIfTransient(scope: string, err: { message: string } | null): void {
  if (!err) return
  if (isTransientNetworkError(err.message)) {
    throw new TransientCatalogFetchError(`${scope}: ${err.message}`)
  }
}

function mapPath(row: PathRow): StudyPath {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description ?? '',
    sortOrder: row.sort_order,
    createdAt: row.created_at,
  }
}

function mapLesson(row: LessonRow, hasRealSection: boolean): Lesson {
  const contentReady = row.content_ready === true || hasRealSection
  return {
    id: row.id,
    slug: row.slug,
    studySeriesId: row.study_series_id,
    title: row.title,
    summary: row.summary,
    durationMinutes: row.duration_minutes,
    scripture: row.scripture,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
    sections: [],
    ...(contentReady ? { contentReady: true as const } : { contentPending: true as const }),
  }
}

function parseWhatYouWillLearn(raw: unknown): string[] | undefined {
  if (!Array.isArray(raw)) return undefined
  const list = raw.filter((x): x is string => typeof x === 'string' && x.trim().length > 0).map((s) => s.trim())
  return list.length ? list : undefined
}

function mapSeries(row: SeriesRow, lessons: Lesson[]): StudySeries {
  const whatYouWillLearn = parseWhatYouWillLearn(row.what_you_will_learn)
  const short = row.short_description?.trim()
  const long = row.long_description?.trim()
  return {
    id: row.id,
    slug: row.slug,
    studyPathId: row.study_path_id,
    title: row.title,
    description: row.description,
    shortDescription: short || undefined,
    longDescription: long || undefined,
    subtitle: row.subtitle ?? undefined,
    whatYouWillLearn,
    isPublished: row.is_published === false ? false : undefined,
    level: row.level,
    durationSummary: row.duration_summary,
    lessonsCount: row.lessons_count,
    featured: row.featured,
    collectionLabel: row.collection_label,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
    lessons,
  }
}

async function fetchLessonRows(supabase: SupabaseClient, seriesIds: string[]): Promise<LessonRow[] | null> {
  const catalog = await supabase
    .from('lesson_catalog')
    .select(
      'id, study_series_id, slug, title, summary, duration_minutes, scripture, sort_order, created_at, content_ready',
    )
    .in('study_series_id', seriesIds)
    .order('sort_order', { ascending: true })

  if (!catalog.error) return (catalog.data ?? []) as LessonRow[]

  logSupabaseFetchIssue('lesson_catalog', catalog.error.message)
  throwIfTransient('lesson_catalog', catalog.error)

  const fallback = await supabase
    .from('lessons')
    .select('id, study_series_id, slug, title, summary, duration_minutes, scripture, sort_order, created_at')
    .in('study_series_id', seriesIds)
    .order('sort_order', { ascending: true })

  if (fallback.error) {
    logSupabaseFetchIssue('lessons', fallback.error.message)
    throwIfTransient('lessons', fallback.error)
    return null
  }
  return (fallback.data ?? []) as LessonRow[]
}

/** Load paths, series, and lesson metadata from Supabase. Reader text is not included. */
export async function fetchCatalogFromSupabase(): Promise<{
  paths: StudyPath[]
  allSeries: StudySeries[]
} | null> {
  const supabase = createSupabaseBrowserClient()

  const { data: pathRows, error: pathErr } = await supabase
    .from('study_paths')
    .select('id, slug, name, description, sort_order, created_at')
    .order('sort_order', { ascending: true })

  if (pathErr) {
    logSupabaseFetchIssue('study_paths', pathErr.message)
    throwIfTransient('study_paths', pathErr)
    return null
  }
  if (!pathRows?.length) {
    return null
  }

  const { data: seriesRows, error: seriesErr } = await supabase
    .from('study_series')
    .select(
      'id, study_path_id, slug, title, description, level, duration_summary, lessons_count, featured, collection_label, sort_order, created_at',
    )
    .order('sort_order', { ascending: true })

  if (seriesErr) {
    logSupabaseFetchIssue('study_series', seriesErr.message)
    throwIfTransient('study_series', seriesErr)
    return null
  }
  if (!seriesRows?.length) {
    return null
  }

  const seriesIds = (seriesRows as SeriesRow[]).map((s) => s.id)
  const lessonsTyped = await fetchLessonRows(supabase, seriesIds)
  if (!lessonsTyped) return null
  const lessonIds = lessonsTyped.map((l) => l.id)
  const lessonsWithRealSections = new Set<string>()

  if (lessonIds.length > 0) {
    const { data: headingRows, error: secErr } = await supabase
      .from('lesson_section_headings')
      .select('id, lesson_id, heading')
      .in('lesson_id', lessonIds)

    if (secErr) {
      logSupabaseFetchIssue('lesson_section_headings', secErr.message)
      throwIfTransient('lesson_section_headings', secErr)
    } else if (headingRows) {
      for (const row of headingRows as SectionHeadingRow[]) {
        if (row.heading.trim() !== SHELL_SECTION_HEADING) lessonsWithRealSections.add(row.lesson_id)
      }
    }
  }

  const lessonsBySeries = new Map<string, Lesson[]>()
  for (const lr of lessonsTyped) {
    const lesson = mapLesson(lr, lessonsWithRealSections.has(lr.id))
    const list = lessonsBySeries.get(lr.study_series_id) ?? []
    list.push(lesson)
    lessonsBySeries.set(lr.study_series_id, list)
  }

  for (const [, list] of lessonsBySeries) {
    list.sort((a, b) => a.sortOrder - b.sortOrder)
  }

  const allSeries: StudySeries[] = (seriesRows as SeriesRow[]).map((sr) => {
    const lessons = lessonsBySeries.get(sr.id) ?? []
    return mapSeries(sr, lessons)
  })

  const paths = (pathRows as PathRow[]).map(mapPath)

  return { paths, allSeries }
}
