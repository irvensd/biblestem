import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client'

function isMissingTableOrRlsError(err: { message?: string; code?: string } | null): boolean {
  if (!err) return false
  const msg = (err.message ?? '').toLowerCase()
  if (err.code === '42P01') return true
  if (msg.includes('relation') && msg.includes('does not exist')) return true
  if (msg.includes('permission denied')) return true
  return false
}

export async function fetchLessonNoteRemote(
  userId: string,
  studySlug: string,
  lessonSlug: string,
  stepNumber: number,
): Promise<string | null> {
  if (!isSupabaseConfigured()) return null
  const supabase = getSupabaseBrowserClient()
  if (!supabase) return null
  const { data, error } = await supabase
    .from('user_notes')
    .select('content,updated_at')
    .eq('user_id', userId)
    .eq('study_id', studySlug)
    .eq('lesson_id', lessonSlug)
    .eq('step_number', stepNumber)
    .maybeSingle()
  if (error) {
    if (isMissingTableOrRlsError(error)) return null
    console.warn('[user_notes] fetch', error.message)
    return null
  }
  if (!data || typeof data.content !== 'string') return null
  return data.content
}

export async function upsertLessonNoteRemote(
  userId: string,
  studySlug: string,
  lessonSlug: string,
  stepNumber: number,
  content: string,
): Promise<boolean> {
  if (!isSupabaseConfigured()) return false
  const supabase = getSupabaseBrowserClient()
  if (!supabase) return false
  const { error } = await supabase.from('user_notes').upsert(
    {
      user_id: userId,
      study_id: studySlug,
      lesson_id: lessonSlug,
      step_number: stepNumber,
      content,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,study_id,lesson_id,step_number' },
  )
  if (error) {
    if (isMissingTableOrRlsError(error)) return false
    console.warn('[user_notes] upsert', error.message)
    return false
  }
  return true
}

export type RecentLessonNoteRow = {
  id: string
  study_id: string
  lesson_id: string
  step_number: number
  content: string
  created_at: string
  updated_at: string
}

/** Recent rows for dashboard merge; returns [] when Supabase is unavailable or query fails. */
export async function fetchRecentLessonNotesRemote(userId: string, limit: number): Promise<RecentLessonNoteRow[]> {
  if (!isSupabaseConfigured()) return []
  const supabase = getSupabaseBrowserClient()
  if (!supabase) return []
  const { data, error } = await supabase
    .from('user_notes')
    .select('id, study_id, lesson_id, step_number, content, created_at, updated_at')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
    .limit(limit)

  if (error) {
    if (isMissingTableOrRlsError(error)) return []
    console.warn('[user_notes] list', error.message)
    return []
  }
  if (!data?.length) return []
  return data as RecentLessonNoteRow[]
}
