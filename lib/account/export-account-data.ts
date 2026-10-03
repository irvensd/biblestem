import { DASHBOARD_PROGRESS_STORAGE_KEY, readLocalProgress } from '@/lib/dashboard-local-progress'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'

const NOTE_PREFIX = 'biblestem-lesson-note:'
const LEGACY_NOTE_PREFIX = 'biblestem-reflection-'

export type AccountExportResult = { ok: true } | { ok: false; message: string }

function localNotes(): { key: string; content: string }[] {
  if (typeof window === 'undefined') return []
  const rows: { key: string; content: string }[] = []
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key) continue
      if (!key.startsWith(NOTE_PREFIX) && !key.startsWith(LEGACY_NOTE_PREFIX)) continue
      const content = localStorage.getItem(key) ?? ''
      if (content.trim()) rows.push({ key, content })
    }
  } catch {
    /* private mode */
  }
  return rows
}

/** Download a JSON file of the signed-in person's account, progress, and notes. */
export async function downloadAccountExport(user: {
  id: string
  email: string
  firstName?: string
}): Promise<AccountExportResult> {
  const supabase = getSupabaseBrowserClient()
  if (!supabase) return { ok: false, message: 'Could not reach your account.' }

  const [profileRes, progressRes, daysRes, notesRes, supportRes] = await Promise.all([
    supabase.from('profiles').select('display_name, study_time_seconds, created_at, updated_at').eq('id', user.id).maybeSingle(),
    supabase
      .from('user_study_progress')
      .select('series_slug, lesson_slug, completed, current_step_index, total_steps, updated_at')
      .eq('user_id', user.id),
    supabase.from('user_activity_days').select('activity_on').eq('user_id', user.id),
    supabase
      .from('user_notes')
      .select('study_id, lesson_id, step_number, content, created_at, updated_at')
      .eq('user_id', user.id),
    supabase
      .from('support_requests')
      .select('issue_type, message, page_url, study_slug, lesson_slug, step_number, status, created_at')
      .eq('user_id', user.id),
  ])

  const payload = {
    exportedAt: new Date().toISOString(),
    account: {
      id: user.id,
      email: user.email,
      firstName: user.firstName ?? null,
    },
    profile: profileRes.error ? null : profileRes.data,
    studyProgress: progressRes.error ? [] : (progressRes.data ?? []),
    activityDays: daysRes.error ? [] : (daysRes.data ?? []),
    notes: notesRes.error ? [] : (notesRes.data ?? []),
    supportRequests: supportRes.error ? [] : (supportRes.data ?? []),
    onThisDevice: {
      progress: readLocalProgress(),
      notes: localNotes(),
    },
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  const day = new Date().toISOString().slice(0, 10)
  anchor.href = url
  anchor.download = `biblestem-data-${day}.json`
  anchor.click()
  URL.revokeObjectURL(url)
  return { ok: true }
}

/** Remove progress and notes stored only in this browser. */
export function clearLocalAccountData(): void {
  if (typeof window === 'undefined') return
  try {
    const keys: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key) continue
      if (
        key === DASHBOARD_PROGRESS_STORAGE_KEY ||
        key.startsWith(NOTE_PREFIX) ||
        key.startsWith(LEGACY_NOTE_PREFIX)
      ) {
        keys.push(key)
      }
    }
    for (const key of keys) localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}
