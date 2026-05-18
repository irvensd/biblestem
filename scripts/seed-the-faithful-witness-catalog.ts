/**
 * Inserts The Faithful Witness (study + 7 lessons) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:the-faithful-witness
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  buildFoundationLessonShellSectionBody,
  FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
} from '../lib/foundation-lesson-shell'

const root = process.cwd()
for (const name of ['.env', '.env.local'] as const) {
  const p = resolve(root, name)
  if (existsSync(p)) config({ path: p, override: true })
}

const SERIES_ID = 'e4000001-0000-4000-8000-000000000082'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'the-faithful-witness',
  title: 'The Faithful Witness',
  description:
    "The Faithful Witness explores the biblical identity and mission of God's remnant people.\n\nBuilding on Revelation 12, this study looks more deeply at the two identifying marks of the remnant: they keep the commandments of God and have the testimony of Jesus Christ.",
  shortDescription:
    "God's end-time people preserve His commandments, point to Jesus, and witness to His character with humility and love.",
  level: 'Beginner' as const,
  durationSummary: 'Approx. 60–75 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 20,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-000000000932',
      slug: 'guardians-of-the-law',
      title: 'Guardians of the Law',
      summary:
        'The remnant is identified as a people who keep, guard, and preserve the commandments of God in a world that has attacked His law.',
      durationMinutes: 9,
      scripture: 'Revelation 12:17 · Revelation 14:12 · 2 Thessalonians 2:7-8 · John 14:15 · Romans 13:10',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000933',
      slug: 'law-and-gospel-together',
      title: 'Law and Gospel Together',
      summary:
        "God's end-time people hold together the harmony of grace and obedience, showing that love fulfills the law.",
      durationMinutes: 9,
      scripture: 'Revelation 14:12 · Romans 3:31 · Ephesians 2:8-10 · Galatians 5:6 · 1 John 5:3',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000934',
      slug: 'the-testimony-of-jesus',
      title: 'The Testimony of Jesus',
      summary:
        "The remnant bears witness to Jesus as the true revelation of the Father's character and love.",
      durationMinutes: 9,
      scripture: 'Revelation 12:17 · John 1:18 · John 14:9 · John 16:27 · Revelation 3:14',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000935',
      slug: 'the-spirit-of-prophecy',
      title: 'The Spirit of Prophecy',
      summary:
        "Revelation identifies the testimony of Jesus as the Spirit of prophecy, showing God's continued guidance through inspired witness.",
      durationMinutes: 9,
      scripture: 'Revelation 19:10 · 2 Peter 1:21 · Numbers 12:6 · Joel 2:28-29 · 1 Thessalonians 5:19-21',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000936',
      slug: 'christ-at-the-center',
      title: 'Christ at the Center',
      summary:
        "Every truth entrusted to God's people must be centered in Christ and His self-sacrificing love.",
      durationMinutes: 9,
      scripture: 'John 5:39 · 1 Corinthians 2:2 · 2 Corinthians 4:6 · Colossians 1:15-20 · Hebrews 1:1-3',
      sortOrder: 5,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000937',
      slug: 'obedience-without-force',
      title: 'Obedience Without Force',
      summary:
        "The remnant reveals the harmony of faith, love, and obedience as the natural fruit of God's saving grace.",
      durationMinutes: 9,
      scripture: 'John 14:15 · 1 John 4:19 · Romans 13:10 · Philippians 2:13 · Hebrews 8:10',
      sortOrder: 6,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000938',
      slug: 'truth-with-humility',
      title: 'Truth With Humility',
      summary:
        'God calls His people to hold remnant truth without arrogance, speaking the truth in love and pointing the world to Jesus.',
      durationMinutes: 9,
      scripture: 'Ephesians 4:15 · 1 Corinthians 8:1 · 1 Peter 3:15 · Revelation 14:6-12 · Matthew 24:14',
      sortOrder: 7,
    },
  ],
}

const OVERVIEW_HREF = '/study-library/the-faithful-witness'

const LESSON_SHELL_SECTIONS: {
  sectionId: string
  lessonId: string
  includeRemnantWitnessPattern?: boolean
}[] = [
  { sectionId: 'eab2bf01-0000-41b7-920f-d30009250801', lessonId: 'd3000007-0000-4000-8000-000000000932', includeRemnantWitnessPattern: true },
  { sectionId: 'eab2bf01-0000-41b7-9210-d30009250902', lessonId: 'd3000007-0000-4000-8000-000000000933' },
  { sectionId: 'eab2bf01-0000-41b7-9211-d30009251003', lessonId: 'd3000007-0000-4000-8000-000000000934', includeRemnantWitnessPattern: true },
  { sectionId: 'eab2bf01-0000-41b7-9212-d30009251104', lessonId: 'd3000007-0000-4000-8000-000000000935', includeRemnantWitnessPattern: true },
  { sectionId: 'eab2bf01-0000-41b7-9213-d30009251205', lessonId: 'd3000007-0000-4000-8000-000000000936' },
  { sectionId: 'eab2bf01-0000-41b7-9214-d30009251306', lessonId: 'd3000007-0000-4000-8000-000000000937' },
  { sectionId: 'eab2bf01-0000-41b7-9215-d30009251407', lessonId: 'd3000007-0000-4000-8000-000000000938', includeRemnantWitnessPattern: true },
]

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

  for (const sec of LESSON_SHELL_SECTIONS) {
    const body = buildFoundationLessonShellSectionBody({
      overviewHref: OVERVIEW_HREF,
      placeholderText: FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
      includeRemnantWitnessPattern: sec.includeRemnantWitnessPattern,
    })
    const { error: sectionErr } = await supabase.from('lesson_sections').upsert(
      {
        id: sec.sectionId,
        lesson_id: sec.lessonId,
        sort_order: 1,
        heading: 'Lesson content coming soon',
        body,
        section_type: 'other',
      },
      { onConflict: 'id' },
    )
    if (sectionErr) {
      console.error(`lesson_sections (${sec.lessonId}):`, sectionErr.message)
      process.exit(1)
    }
  }
  console.log(`✓ lesson_sections: ${LESSON_SHELL_SECTIONS.length} placeholder shells`)

  console.log('\nDone.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
