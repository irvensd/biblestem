/**
 * Pushes `lib/lesson-content.ts` into Supabase `public.lessons.reader_content`.
 *
 * Requires in `.env.local` (never commit secrets):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY   (Project Settings → API — server only; bypasses RLS for writes)
 *
 * Usage:
 *   npm run sync:supabase:reader
 *   npm run sync:supabase:reader -- --slug=a-book-unlike-any-other
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import type { LessonReaderContent } from '../lib/lesson-content'
import { getLessonReaderContentLibraryForSync } from '../lib/lesson-content'

const root = process.cwd()
/** Load `.env` then `.env.local` so local overrides (same order as Next.js). */
for (const name of ['.env', '.env.local'] as const) {
  const p = resolve(root, name)
  if (existsSync(p)) {
    config({ path: p, override: true })
  }
}

function parseSlugArg(): string | null {
  const i = process.argv.indexOf('--slug')
  if (i >= 0 && process.argv[i + 1]) return process.argv[i + 1]!.trim()
  const eq = process.argv.find((a) => a.startsWith('--slug='))
  if (eq) return eq.slice('--slug='.length).trim()
  return null
}

function toJsonbPayload(content: LessonReaderContent): object {
  return JSON.parse(JSON.stringify(content)) as object
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()

  if (!url || !serviceKey) {
    const envPath = resolve(root, '.env.local')
    const envExists = existsSync(envPath)
    const missing = [
      !url && 'NEXT_PUBLIC_SUPABASE_URL',
      !serviceKey && 'SUPABASE_SERVICE_ROLE_KEY',
    ].filter(Boolean) as string[]
    console.error('Missing:', missing.join(', '))
    console.error(`Working directory: ${root}`)
    console.error(`.env.local exists: ${envExists}${envExists ? ` (${envPath})` : ''}`)
    if (!envExists) {
      console.error(
        'Create a file named .env.local in the project root (same folder as package.json).\n' +
          'env.example is only a template — the sync script does not read env.example.',
      )
    }
    console.error(
      'Add:\nNEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co\nSUPABASE_SERVICE_ROLE_KEY=(service_role key from Supabase → Project Settings → API → Legacy keys)',
    )
    process.exit(1)
  }

  const slugFilter = parseSlugArg()
  const library = getLessonReaderContentLibraryForSync()
  const entries = Object.entries(library).filter(([slug]) => !slugFilter || slug === slugFilter)

  if (entries.length === 0) {
    console.error(slugFilter ? `No lesson found for slug "${slugFilter}" in lib/lesson-content.ts` : 'No lessons to sync.')
    process.exit(1)
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  console.log(`Syncing ${entries.length} lesson(s) to ${url} …`)

  for (const [slug, content] of entries) {
    const reader_content = toJsonbPayload(content)
    const { data, error } = await supabase
      .from('lessons')
      .update({ reader_content })
      .eq('slug', slug)
      .select('id, slug, title')

    if (error) {
      console.error(`✗ ${slug}:`, error.message)
      process.exitCode = 1
      continue
    }
    if (!data?.length) {
      console.warn(`⚠ ${slug}: no row in public.lessons — run supabase/seed.sql (or catalog migration) so this slug exists.`)
      continue
    }
    const lessonId = data[0]!.id as string
    const { error: sectionErr } = await supabase.from('lesson_sections').delete().eq('lesson_id', lessonId)
    if (sectionErr) {
      console.error(`✗ ${slug} (lesson_sections):`, sectionErr.message)
      process.exitCode = 1
      continue
    }
    console.log(`✓ ${slug} → ${data[0]!.title}`)
  }

  if (process.exitCode === 1) {
    process.exit(1)
  }
  console.log('Done.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
