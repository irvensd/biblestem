/**
 * Inserts Faithful in the Wilderness (study + 7 lessons) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npx tsx scripts/seed-faithful-in-the-wilderness-catalog.ts
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000081'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

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

  const s = {
    slug: 'faithful-in-the-wilderness',
    title: 'Faithful in the Wilderness',
    description:
      "Faithful in the Wilderness explores Revelation 12 and the prophetic story of God's faithful church through history.\n\nThis study shows that God has always had a people in the world to preserve and proclaim the truth of His character, even during seasons of darkness, persecution, and religious confusion.",
    shortDescription:
      'God has always preserved a faithful people to reveal His character, proclaim His truth, and carry the gospel through history.',
    level: 'Beginner' as const,
    durationSummary: 'Approx. 60–75 min total',
    lessonsCount: 7,
    featured: false,
    collectionLabel: 'Foundational Studies',
    sortOrder: 19,
    lessons: [
      {
        id: 'd3000007-0000-4000-8000-00000000092b',
        slug: 'the-woman-in-the-wilderness',
        title: 'The Woman in the Wilderness',
        summary:
          "Revelation 12 introduces a symbolic woman who represents God's faithful people, clothed with the light of Christ and opposed by the dragon.",
        durationMinutes: 9,
        scripture: 'Revelation 12:1-6 · Jeremiah 6:2 · Ephesians 5:22-27 · Malachi 4:2 · John 8:12',
        sortOrder: 1,
      },
      {
        id: 'd3000007-0000-4000-8000-00000000092c',
        slug: 'the-dragon-and-the-child',
        title: 'The Dragon and the Child',
        summary:
          "The dragon seeks to destroy Christ, but Jesus fulfills His mission, defeats Satan, and is caught up to God's throne.",
        durationMinutes: 9,
        scripture: 'Revelation 12:3-5 · Genesis 3:15 · Matthew 2:13-16 · John 12:31-32 · Colossians 2:15',
        sortOrder: 2,
      },
      {
        id: 'd3000007-0000-4000-8000-00000000092d',
        slug: 'preserved-through-the-dark-years',
        title: 'Preserved Through the Dark Years',
        summary:
          'During the wilderness period, God preserved His faithful people and nourished the truth of the gospel through persecution.',
        durationMinutes: 9,
        scripture: 'Revelation 12:6 · Revelation 12:13-16 · Ezekiel 4:6 · Daniel 7:25',
        sortOrder: 3,
      },
      {
        id: 'd3000007-0000-4000-8000-00000000092e',
        slug: 'the-war-behind-history',
        title: 'The War Behind History',
        summary:
          "Revelation 12 connects the original war in heaven with Christ's victory at the cross and Satan's continued opposition to God's people.",
        durationMinutes: 9,
        scripture: 'Revelation 12:7-12 · John 12:31-32 · Colossians 2:15 · 1 Peter 5:8-9',
        sortOrder: 4,
      },
      {
        id: 'd3000007-0000-4000-8000-00000000092f',
        slug: 'the-remnant-of-her-seed',
        title: 'The Remnant of Her Seed',
        summary:
          'Revelation identifies the remnant as those who keep the commandments of God and have the testimony of Jesus Christ.',
        durationMinutes: 9,
        scripture: 'Revelation 12:17 · Revelation 14:12 · Isaiah 10:20-22 · Jeremiah 23:3',
        sortOrder: 5,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000930',
        slug: 'truth-recovered-for-the-world',
        title: 'Truth Recovered for the World',
        summary:
          'After centuries of persecution and confusion, God raised up a movement to recover biblical truth and proclaim the gospel with clarity.',
        durationMinutes: 9,
        scripture: 'Revelation 12:17 · Revelation 14:6-12 · Daniel 8:14 · John 17:17',
        sortOrder: 6,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000931',
        slug: 'faithful-until-the-end',
        title: 'Faithful Until the End',
        summary:
          "God's final people endure by trusting Jesus, keeping His commandments, and holding fast to His faithful promise.",
        durationMinutes: 9,
        scripture: 'Revelation 14:12 · Revelation 12:17 · Matthew 24:13 · Hebrews 10:23',
        sortOrder: 7,
      },
    ],
  }
  const { error: seriesErr } = await supabase.from('study_series').upsert(
    {
      id: SERIES_ID,
      study_path_id: PATH_ID,
      slug: s.slug,
      title: s.title,
      description: s.description,
      short_description: s.shortDescription ?? null,
      long_description: s.description,
      level: s.level,
      duration_summary: s.durationSummary,
      lessons_count: s.lessonsCount,
      featured: s.featured,
      collection_label: s.collectionLabel ?? null,
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

  console.log('\nNext: npm run sync:supabase:reader -- --slug=the-woman-in-the-wilderness')
  console.log('(repeat for each lesson slug, or sync all lessons in the library)')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
