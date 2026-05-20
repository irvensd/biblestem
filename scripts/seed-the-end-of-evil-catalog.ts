/**
 * Inserts The End of Evil (study + 7 lessons) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:the-end-of-evil
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000088'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'the-end-of-evil',
  title: 'The End of Evil',
  description: `The End of Evil explores the Bible's teaching on the final destruction of sin and the lost.

This study contrasts eternal torment with the biblical teaching of final destruction, showing that God's justice and mercy are perfectly united.`,
  shortDescription:
    'The End of Evil reveals that God is love even in final judgment, bringing sin, Satan, death, and rebellion to a complete end rather than preserving evil forever.',
  level: 'Beginner' as const,
  durationSummary: 'Approx. 80–95 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 27,
  foundationOrder: 26,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-000000000970',
      slug: 'god-is-love-in-final-judgment',
      title: 'God Is Love in Final Judgment',
      summary:
        'Final judgment must be understood through the character of God revealed in Jesus.',
      durationMinutes: 13,
      scripture: '1 John 4:8 · Ezekiel 33:11 · John 3:16 · Romans 6:23 · Revelation 21:4',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000971',
      slug: 'the-incompatibility-of-justice-and-torture',
      title: 'The Incompatibility of Justice and Torture',
      summary:
        'Eternal torture contradicts both biblical justice and the loving character of God.',
      durationMinutes: 13,
      scripture:
        'Jeremiah 19:5 · Ezekiel 33:11 · Luke 9:54-56 · Romans 13:10 · 1 John 4:18',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000972',
      slug: 'what-the-bible-says-about-the-wicked',
      title: 'What the Bible Says About the Wicked',
      summary:
        'Scripture teaches that the wicked perish, die, are consumed, and are reduced to ashes.',
      durationMinutes: 13,
      scripture:
        'John 3:16 · Romans 6:23 · James 1:15 · Psalm 37:20 · Malachi 4:1-3 · Obadiah 16',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000973',
      slug: 'immortality-is-a-gift',
      title: 'Immortality Is a Gift',
      summary:
        'The Bible teaches that immortality belongs to God and is given to the redeemed, not possessed naturally by every soul.',
      durationMinutes: 13,
      scripture:
        'Genesis 3:1-5 · 1 Timothy 6:16 · 1 Corinthians 15:51-54 · Romans 2:7 · 2 Timothy 1:10',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000974',
      slug: 'forever-eternal-and-unquenchable-fire',
      title: 'Forever, Eternal, and Unquenchable Fire',
      summary:
        'The Bible uses words like forever and eternal to describe complete results, not endless conscious torment.',
      durationMinutes: 13,
      scripture:
        'Jonah 2:6 · 1 Samuel 1:22, 28 · Exodus 21:6 · Jude 7 · 2 Peter 2:6 · Matthew 3:12',
      sortOrder: 5,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000975',
      slug: 'the-second-death',
      title: 'The Second Death',
      summary:
        'The lake of fire is the second death, the final and irreversible destruction of sin, Satan, and rebellion.',
      durationMinutes: 13,
      scripture:
        'Revelation 20:9-15 · Ezekiel 28:18-19 · Malachi 4:1-3 · Matthew 10:28 · Nahum 1:9',
      sortOrder: 6,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000976',
      slug: 'no-more-death',
      title: 'No More Death',
      summary:
        'God ends evil completely so the new earth can be free from death, sorrow, crying, pain, and fear forever.',
      durationMinutes: 13,
      scripture:
        'Revelation 21:1-5 · Revelation 22:1-5 · 2 Peter 3:13 · Ezekiel 33:11 · Revelation 15:3-4',
      sortOrder: 7,
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
    console.log(`Study "${s.slug}" already exists (${existing.id}). Skipping insert.`)
    console.log('Run npm run sync:supabase:reader to push reader content.')
    return
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
      foundation_order: s.foundationOrder,
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
