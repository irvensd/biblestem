/**
 * Inserts The World Love Restores (study + 7 lessons) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:the-world-love-restores
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000089'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'the-world-love-restores',
  title: 'The World Love Restores',
  description: `The World Love Restores explores the Bible's vision of the New Earth and the eternal future God has planned for His people.

This study shows that salvation is not merely about escaping death or going somewhere far away. God's final purpose is restored intimacy with His people in a renewed creation.`,
  shortDescription:
    'The World Love Restores reveals God\u2019s final purpose: a renewed creation filled with eternal friendship, restored bodies, unbroken joy, and face-to-face fellowship with Him forever.',
  level: 'Beginner' as const,
  durationSummary: 'Approx. 80\u201395 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 28,
  foundationOrder: 27,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-000000000977',
      slug: 'more-than-a-place',
      title: 'More Than a Place',
      summary:
        'The New Earth is not merely a location of luxury, but eternal friendship with God and His redeemed people.',
      durationMinutes: 13,
      scripture: 'Psalm 16:11 \u00b7 John 14:1-6 \u00b7 John 16:27 \u00b7 Revelation 21:3 \u00b7 Revelation 22:4',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000978',
      slug: 'eden-restored',
      title: 'Eden Restored',
      summary:
        'The Bible begins in Eden and ends with creation restored to God\u2019s original purpose.',
      durationMinutes: 13,
      scripture:
        'Genesis 1:26-31 \u00b7 Genesis 2:8-15 \u00b7 Revelation 21:1-5 \u00b7 Revelation 22:1-3 \u00b7 Isaiah 11:6-9',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000979',
      slug: 'god-with-us',
      title: 'God With Us',
      summary:
        'The deepest promise of the New Earth is that God will dwell face-to-face with His people forever.',
      durationMinutes: 13,
      scripture:
        'Revelation 21:3 \u00b7 Revelation 21:22-23 \u00b7 Revelation 22:4 \u00b7 Exodus 25:22 \u00b7 1 Kings 6:20',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000980',
      slug: 'bodies-made-whole',
      title: 'Bodies Made Whole',
      summary:
        'God\u2019s future includes the redemption of our physical bodies and the healing of creation itself.',
      durationMinutes: 13,
      scripture:
        'Romans 8:18-23 \u00b7 Philippians 3:20-21 \u00b7 Luke 24:36-43 \u00b7 John 20:24-29 \u00b7 1 Corinthians 15:51-54',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000981',
      slug: 'no-more-curse',
      title: 'No More Curse',
      summary:
        'Everything sin damaged will be removed, reversed, healed, and restored.',
      durationMinutes: 13,
      scripture:
        'Revelation 21:4 \u00b7 Revelation 22:3 \u00b7 Genesis 3:17-19 \u00b7 Isaiah 65:17-25 \u00b7 Nahum 1:9',
      sortOrder: 5,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000982',
      slug: 'pleasures-forevermore',
      title: 'Pleasures Forevermore',
      summary:
        'God is the source of holy pleasure, joy, beauty, friendship, creation, and eternal fulfillment.',
      durationMinutes: 13,
      scripture:
        'Psalm 16:11 \u00b7 Psalm 36:7-9 \u00b7 Isaiah 35:1-10 \u00b7 Revelation 22:1-5 \u00b7 1 Corinthians 2:9',
      sortOrder: 6,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000983',
      slug: 'life-face-to-face',
      title: 'Life Face to Face',
      summary:
        'The redeemed will live forever in the direct presence of God, seeing His face and enjoying eternal friendship with Him.',
      durationMinutes: 13,
      scripture:
        'Revelation 22:3-5 \u00b7 Revelation 21:1-7 \u00b7 John 17:24 \u00b7 1 Corinthians 13:12 \u00b7 Psalm 16:11',
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
