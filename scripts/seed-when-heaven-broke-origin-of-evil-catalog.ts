/**
 * Inserts Did God Create Evil? (study + 5 lessons) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:when-heaven-broke
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
for (const name of ['.env', '.env.local'] as const) {
  const p = resolve(root, name)
  if (existsSync(p)) config({ path: p, override: true })
}

const SERIES_ID = 'e4000001-0000-4000-8000-000000000090'
const DEPRECATED_SERIES_ID = 'e4000001-0000-4000-8000-000000000060'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'when-heaven-broke-origin-of-evil',
  title: 'Did God Create Evil?',
  description: `Explore hard questions people raise about God, and trace the answers through Scripture.

This Deeper Studies series investigates whether God created evil, tracing Lucifer\u2019s fall, Satan\u2019s deception, the great controversy, the final end of sin, and the loving character of God revealed through Jesus Christ.

This Deeper Studies series helps learners understand that God did not create evil, trace how sin began through Lucifer\u2019s rebellion, recognize Satan\u2019s methods, and trust Christ\u2019s final victory over sin.`,
  shortDescription:
    'A Scripture-first study on Lucifer\u2019s fall, the origin of sin, and the character of God.',
  level: 'Intermediate' as const,
  durationSummary: 'Approx. 60 min total',
  lessonsCount: 5,
  featured: false,
  collectionLabel: 'Hard Questions',
  sortOrder: 3,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-000000000984',
      slug: 'the-mystery-that-began-in-heaven',
      title: 'The Mystery That Began in Heaven',
      summary:
        'This lesson introduces the central question of where evil came from and shows that Lucifer was created perfect before rebellion began.',
      durationMinutes: 12,
      scripture:
        'Ezekiel 28:14 to 15 \u00b7 Genesis 1:31 \u00b7 Isaiah 14:12 \u00b7 James 1:13 to 17 \u00b7 1 John 1:5',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000985',
      slug: 'the-rise-of-self',
      title: 'The Rise of Self',
      summary:
        'This lesson traces how pride began in a perfect being, how self-exaltation turned worship inward, and what that reveals about God and Satan.',
      durationMinutes: 12,
      scripture:
        'Isaiah 14:13 to 14 \u00b7 Ezekiel 28:17 \u00b7 Proverbs 16:18 \u00b7 Matthew 4:8 to 10 \u00b7 Romans 1:21 to 25 \u00b7 Revelation 14:6 to 7',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000986',
      slug: 'the-lie-in-the-garden',
      title: 'The Lie in the Garden',
      summary:
        'This lesson shows how Satan deceived Adam and Eve by questioning God\u2019s word, denying God\u2019s warning, and misrepresenting God\u2019s character.',
      durationMinutes: 12,
      scripture:
        'Genesis 2:16 to 17 \u00b7 Genesis 3:1 \u00b7 Genesis 3:4 to 5 \u00b7 John 8:44 \u00b7 2 Corinthians 11:3 \u00b7 Romans 5:12',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000987',
      slug: 'the-war-behind-the-world',
      title: 'The War Behind the World',
      summary:
        'This lesson explores the great controversy behind human history and identifies Satan\u2019s methods of deception, accusation, persecution, false miracles, and misusing Scripture.',
      durationMinutes: 12,
      scripture:
        'Revelation 12:7 to 10 \u00b7 Job 1:9 to 11 \u00b7 Matthew 4:5 to 7 \u00b7 John 10:10 \u00b7 2 Thessalonians 2:9 to 10 \u00b7 Revelation 12:17',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000988',
      slug: 'the-end-of-evil-and-the-face-of-the-father',
      title: 'The End of Evil and the Face of the Father',
      summary:
        'This lesson explains why God did not destroy Lucifer immediately, how Jesus revealed the Father\u2019s character, and how sin will finally be destroyed forever.',
      durationMinutes: 12,
      scripture:
        'John 14:8 to 9 \u00b7 John 3:16 to 17 \u00b7 Romans 5:8 \u00b7 Hebrews 2:14 \u00b7 Colossians 2:15 \u00b7 Romans 14:11 \u00b7 Revelation 20:10 \u00b7 Revelation 21:1 to 5 \u00b7 Nahum 1:9',
      sortOrder: 5,
    },
  ],
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  if (!url || !serviceKey) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
    process.exit(1)
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { data: existing } = await supabase
    .from('study_series')
    .select('id')
    .eq('slug', s.slug)
    .maybeSingle()

  if (existing?.id) {
    const { error: updateErr } = await supabase
      .from('study_series')
      .update({
        title: s.title,
        description: s.description,
        short_description: s.shortDescription,
        long_description: s.description,
      })
      .eq('id', SERIES_ID)
    if (updateErr) {
      console.error('study_series update:', updateErr.message)
      process.exit(1)
    }
    console.log(`Study "${s.slug}" already exists (${existing.id}). Updated title and descriptions.`)
    console.log('Run npm run sync:supabase:reader to push reader content.')
    return
  }

  const { error: delLessonsErr } = await supabase
    .from('lessons')
    .delete()
    .eq('study_series_id', DEPRECATED_SERIES_ID)
  if (delLessonsErr) {
    console.warn('Could not delete legacy origin-of-evil lessons:', delLessonsErr.message)
  } else {
    console.log('Removed legacy lessons for origin-of-evil (if any).')
  }

  const { error: delSeriesErr } = await supabase
    .from('study_series')
    .delete()
    .eq('id', DEPRECATED_SERIES_ID)
  if (delSeriesErr) {
    console.warn('Could not delete legacy origin-of-evil study:', delSeriesErr.message)
  } else {
    console.log('Removed legacy study origin-of-evil (if any).')
  }

  const { error: seriesErr } = await supabase.from('study_series').upsert(
    {
      id: SERIES_ID,
      study_path_id: PATH_ID,
      slug: s.slug,
      title: s.title,
      description: s.description,
      short_description: s.shortDescription,
      long_description: s.description,
      level: s.level,
      duration_summary: s.durationSummary,
      lessons_count: s.lessonsCount,
      featured: s.featured,
      collection_label: s.collectionLabel,
      sort_order: s.sortOrder,
    },
    { onConflict: 'id' },
  )

  if (seriesErr) {
    console.error('study_series:', seriesErr.message)
    process.exit(1)
  }
  console.log(`✓ study_series: ${s.title}`)

  for (const lesson of s.lessons) {
    const { error: lessonErr } = await supabase.from('lessons').upsert(
      {
        id: lesson.id,
        study_series_id: SERIES_ID,
        slug: lesson.slug,
        title: lesson.title,
        summary: lesson.summary,
        duration_minutes: lesson.durationMinutes,
        scripture: lesson.scripture,
        sort_order: lesson.sortOrder,
      },
      { onConflict: 'id' },
    )
    if (lessonErr) {
      console.error(`lessons (${lesson.slug}):`, lessonErr.message)
      process.exit(1)
    }
    console.log(`✓ lesson: ${lesson.slug}`)
  }

  console.log('\nDone. Next: npm run sync:supabase:reader')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
