import type { SupabaseClient } from '@supabase/supabase-js'

/** Upsert `public.profiles.display_name` for the current user. */
export async function updateProfileDisplayName(
  supabase: SupabaseClient,
  userId: string,
  displayName: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const trimmed = displayName.trim()
  if (!trimmed) return { ok: false, message: 'Enter a name first.' }

  const updated_at = new Date().toISOString()
  const { data: existing, error: readError } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', userId)
    .maybeSingle()
  if (readError) return { ok: false, message: readError.message }

  const { error } = existing
    ? await supabase.from('profiles').update({ display_name: trimmed, updated_at }).eq('id', userId)
    : await supabase.from('profiles').insert({ id: userId, display_name: trimmed, updated_at })

  if (error) return { ok: false, message: error.message }
  return { ok: true }
}
