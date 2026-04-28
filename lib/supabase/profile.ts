import type { SupabaseClient } from '@supabase/supabase-js'

/** Upsert `public.profiles.display_name` for the current user. */
export async function updateProfileDisplayName(
  supabase: SupabaseClient,
  userId: string,
  displayName: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const trimmed = displayName.trim()
  if (!trimmed) return { ok: false, message: 'Enter a name first.' }

  const { error } = await supabase
    .from('profiles')
    .upsert(
      {
        id: userId,
        display_name: trimmed,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'id' },
    )

  if (error) return { ok: false, message: error.message }
  return { ok: true }
}
