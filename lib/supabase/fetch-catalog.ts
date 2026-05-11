import type { Lesson, LessonSection, LessonSectionType, StudyPath, StudySeries } from '@/lib/types/product'
import { isDraftShellReaderContent, parseLessonReaderContent } from '@/lib/lesson-content'
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
  /** Present after migration `003_lessons_reader_content.sql` (or fresh `001` with column). */
  reader_content?: unknown | null
}

type SectionRow = {
  id: string
  lesson_id: string
  sort_order: number
  heading: string
  body: string
  section_type: string
}

const sectionTypes: LessonSectionType[] = ['scripture', 'teaching', 'reflection', 'word_study', 'other']

function asSectionType(raw: string): LessonSectionType {
  return (sectionTypes.includes(raw as LessonSectionType) ? raw : 'other') as LessonSectionType
}

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

function mapSection(row: SectionRow): LessonSection {
  return {
    id: row.id,
    lessonId: row.lesson_id,
    sortOrder: row.sort_order,
    heading: row.heading,
    body: row.body,
    sectionType: asSectionType(row.section_type),
  }
}

function mapLesson(row: LessonRow, sections: LessonSection[]): Lesson {
  const contentPending = isDraftShellReaderContent(row.reader_content)
  const readerContent = contentPending ? undefined : (parseLessonReaderContent(row.reader_content) ?? undefined)
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
    sections,
    readerContent,
    ...(contentPending ? { contentPending: true as const } : {}),
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

/** Load paths, series, lessons, and sections from Supabase (schema `001_initial_schema.sql`). */
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

  // Use `*` so databases that have not yet run `003_lessons_reader_content.sql` do not error
  // (explicit `reader_content` in the select list fails if the column does not exist).
  const { data: lessonRows, error: lessonErr } = await supabase
    .from('lessons')
    .select('*')
    .in('study_series_id', seriesIds)
    .order('sort_order', { ascending: true })

  if (lessonErr) {
    logSupabaseFetchIssue('lessons', lessonErr.message)
    throwIfTransient('lessons', lessonErr)
    return null
  }

  const lessonsTyped = (lessonRows ?? []) as LessonRow[]
  const lessonIds = lessonsTyped.map((l) => l.id)

  let sectionsByLesson = new Map<string, LessonSection[]>()
  if (lessonIds.length > 0) {
    const { data: sectionRows, error: secErr } = await supabase
      .from('lesson_sections')
      .select('id, lesson_id, sort_order, heading, body, section_type')
      .in('lesson_id', lessonIds)
      .order('sort_order', { ascending: true })

    if (secErr) {
      logSupabaseFetchIssue('lesson_sections', secErr.message)
      throwIfTransient('lesson_sections', secErr)
    } else if (sectionRows) {
      for (const row of sectionRows as SectionRow[]) {
        const list = sectionsByLesson.get(row.lesson_id) ?? []
        list.push(mapSection(row))
        sectionsByLesson.set(row.lesson_id, list)
      }
    }
  }

  const lessonsBySeries = new Map<string, Lesson[]>()
  for (const lr of lessonsTyped) {
    const secs = sectionsByLesson.get(lr.id) ?? []
    const lesson = mapLesson(lr, secs)
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
