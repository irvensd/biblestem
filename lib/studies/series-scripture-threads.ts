import 'server-only'

import { isPlaceholderReaderContent } from '@/lib/catalog/lesson-readiness'
import {
  getLessonReaderContent,
  hasBundledLessonReaderContent,
  isDraftShellReaderContent,
  parseLessonReaderContent,
  type LessonReaderContent,
} from '@/lib/lesson-content'
import { extractScriptureThreadsFromStudy } from '@/lib/lesson-scripture-threads'
import { isSupabaseConfigured } from '@/lib/supabase/client'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import type { LessonScriptureThreadRecap } from '@/lib/scripture-thread-types'
import type { StudySeries } from '@/lib/types/product'

/** Scripture-thread recap for a signed-in study overview. Full lesson JSON stays on the server. */
export async function scriptureThreadsForSeries(series: StudySeries): Promise<LessonScriptureThreadRecap[]> {
  const fromDb = new Map<string, LessonReaderContent>()
  if (isSupabaseConfigured() && series.lessons.length > 0) {
    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase
      .from('lessons')
      .select('slug, reader_content')
      .in(
        'id',
        series.lessons.map((lesson) => lesson.id),
      )
    if (error) {
      console.error('[supabase] series scripture threads:', error.message)
    } else {
      for (const row of data ?? []) {
        const slug = row.slug as string
        const raw = row.reader_content
        if (!slug || isDraftShellReaderContent(raw)) continue
        const parsed = parseLessonReaderContent(raw)
        if (parsed && !isPlaceholderReaderContent(parsed)) fromDb.set(slug, parsed)
      }
    }
  }

  const lessons = series.lessons.map((lesson) => {
    let readerContent = fromDb.get(lesson.slug)
    if (!readerContent && hasBundledLessonReaderContent(lesson.slug)) {
      const bundled = getLessonReaderContent(lesson.slug)
      if (!isPlaceholderReaderContent(bundled)) readerContent = bundled
    }
    return { ...lesson, readerContent, sections: [] }
  })
  return extractScriptureThreadsFromStudy({ lessons })
}
