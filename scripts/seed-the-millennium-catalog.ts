/**
 * Inserts The Millennium (study + 7 lessons) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npx tsx scripts/seed-the-millennium-catalog.ts
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000087'
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
    slug: 'the-millennium',
    title: 'The Millennium',
    description:
      "The Millennium explores Revelation 20 and the Bible's teaching about the 1000-year period following the Second Coming of Jesus.\n\nThis study shows that God brings evil to an end with complete transparency.",
    shortDescription:
      "The Millennium reveals God's transparent justice as the redeemed review His judgments and see that His ways are righteous, loving, and true.",
    level: 'Beginner' as const,
    durationSummary: 'Approx. 80–95 min total',
    lessonsCount: 7,
    featured: false,
    collectionLabel: 'Foundational Studies',
    sortOrder: 26,
    foundationOrder: 25,
    lessons: [
      {
        id: 'd3000007-0000-4000-8000-000000000960',
        slug: 'why-the-millennium',
        title: 'Why the Millennium?',
        summary:
          'God provides the Millennium so the redeemed can see the full record of His justice and trust that He did everything love could do.',
        durationMinutes: 12,
        scripture: 'Revelation 20:4 · 1 Corinthians 6:2-3 · Deuteronomy 32:4 · Isaiah 5:3-4 · Revelation 15:3',
        sortOrder: 1,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000961',
        slug: 'the-order-of-events',
        title: 'The Order of Events',
        summary: 'The Bible gives a clear sequence of events before, during, and after the 1000 years.',
        durationMinutes: 12,
        scripture:
          'Revelation 19:11-21 · Revelation 20:1-6 · Revelation 20:7-15 · Revelation 21:1-5 · 1 Thessalonians 4:13-18',
        sortOrder: 2,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000962',
        slug: 'satan-in-chains',
        title: 'Satan in Chains',
        summary:
          'Satan is bound during the Millennium because he has no one left to deceive on the desolate earth.',
        durationMinutes: 12,
        scripture:
          'Revelation 20:1-3 · Isaiah 14:12-17 · Jeremiah 4:23-26 · Leviticus 16:20-22 · Revelation 12:9',
        sortOrder: 3,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000963',
        slug: 'the-redeemed-review-the-records',
        title: 'The Redeemed Review the Records',
        summary:
          'God invites the redeemed into the judgment process so every question about His justice can be answered.',
        durationMinutes: 12,
        scripture:
          'Revelation 20:4 · 1 Corinthians 6:2-3 · Daniel 7:9-10 · Psalm 89:14 · Revelation 15:3-4',
        sortOrder: 4,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000964',
        slug: 'the-second-resurrection',
        title: 'The Second Resurrection',
        summary:
          'After the Millennium, the wicked are raised, Satan is released, and the final rebellion exposes that evil has not changed.',
        durationMinutes: 12,
        scripture:
          'Revelation 20:5-9 · John 5:28-29 · Isaiah 14:15-17 · Revelation 20:7-8 · Romans 14:11',
        sortOrder: 5,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000965',
        slug: 'the-final-end-of-evil',
        title: 'The Final End of Evil',
        summary:
          'God brings sin, Satan, death, and rebellion to a final end in perfect justice and transparent love.',
        durationMinutes: 12,
        scripture:
          'Revelation 20:9-15 · Malachi 4:1-3 · Ezekiel 28:18-19 · 2 Peter 3:10-13 · Nahum 1:9',
        sortOrder: 6,
      },
      {
        id: 'd3000007-0000-4000-8000-000000000966',
        slug: 'god-makes-all-things-new',
        title: 'God Makes All Things New',
        summary:
          'After evil is ended forever, God creates the new earth where righteousness, love, and freedom will never be threatened again.',
        durationMinutes: 12,
        scripture:
          'Revelation 21:1-5 · Revelation 22:1-5 · Isaiah 65:17 · 2 Peter 3:13 · Revelation 15:3-4',
        sortOrder: 7,
      },
    ],
  }

  const { data: existing } = await supabase.from('studies').select('id').eq('slug', s.slug).maybeSingle()
  if (existing?.id) {
    console.log(`Study "${s.slug}" already exists (${existing.id}). Skipping insert.`)
    console.log('Run npm run sync:supabase:reader to push reader content.')
    return
  }

  const { error: studyErr } = await supabase.from('studies').insert({
    id: SERIES_ID,
    study_path_id: PATH_ID,
    slug: s.slug,
    title: s.title,
    subtitle: "God's transparent justice during the thousand years between the resurrections.",
    description: s.description,
    short_description: s.shortDescription,
    level: s.level,
    duration_summary: s.durationSummary,
    lessons_count: s.lessonsCount,
    featured: s.featured,
    collection_label: s.collectionLabel,
    sort_order: s.sortOrder,
    foundation_order: s.foundationOrder,
    is_published: true,
  })

  if (studyErr) {
    console.error('Failed to insert study:', studyErr.message)
    process.exit(1)
  }

  const lessonRows = s.lessons.map((l) => ({
    id: l.id,
    study_id: SERIES_ID,
    slug: l.slug,
    title: l.title,
    summary: l.summary,
    duration_minutes: l.durationMinutes,
    scripture: l.scripture,
    sort_order: l.sortOrder,
    reader_content: { draftShell: true },
  }))

  const { error: lessonsErr } = await supabase.from('lessons').insert(lessonRows)
  if (lessonsErr) {
    console.error('Failed to insert lessons:', lessonsErr.message)
    process.exit(1)
  }

  console.log(`Inserted study "${s.title}" with ${s.lessons.length} lessons.`)
  console.log('Next: npm run sync:supabase:reader')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
