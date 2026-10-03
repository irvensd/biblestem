import 'server-only'

import { isDraftShellReaderContent, parseLessonReaderContent, type LessonReaderContent } from '@/lib/lesson-content'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { isSupabaseConfigured } from '@/lib/supabase/client'
import type { LessonSection, LessonSectionType } from '@/lib/types/product'

const sectionTypes: LessonSectionType[] = ['scripture', 'teaching', 'reflection', 'word_study', 'other']

function asSectionType(raw: string): LessonSectionType {
  return (sectionTypes.includes(raw as LessonSectionType) ? raw : 'other') as LessonSectionType
}

export type AuthorizedLessonBody = {
  readerContent?: LessonReaderContent
  sections: LessonSection[]
}

/** One lesson's teaching text, for a signed-in server render. */
export async function fetchAuthorizedLessonBody(lessonId: string): Promise<AuthorizedLessonBody> {
  if (!isSupabaseConfigured()) return { sections: [] }
  const supabase = await createSupabaseServerClient()

  const { data: lessonRow, error: lessonErr } = await supabase
    .from('lessons')
    .select('reader_content')
    .eq('id', lessonId)
    .maybeSingle()

  if (lessonErr) {
    console.error('[supabase] authorized lesson:', lessonErr.message)
  }

  const raw = lessonRow?.reader_content
  const readerContent =
    raw && !isDraftShellReaderContent(raw) ? (parseLessonReaderContent(raw) ?? undefined) : undefined

  const { data: sectionRows, error: sectionErr } = await supabase
    .from('lesson_sections')
    .select('id, lesson_id, sort_order, heading, body, section_type')
    .eq('lesson_id', lessonId)
    .order('sort_order', { ascending: true })

  if (sectionErr) {
    console.error('[supabase] authorized lesson sections:', sectionErr.message)
  }

  const sections: LessonSection[] = (sectionRows ?? []).map((row) => ({
    id: row.id as string,
    lessonId: row.lesson_id as string,
    sortOrder: row.sort_order as number,
    heading: row.heading as string,
    body: row.body as string,
    sectionType: asSectionType(String(row.section_type ?? 'other')),
  }))

  return { readerContent, sections }
}
