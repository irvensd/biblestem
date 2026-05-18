/**
 * Inserts The Day of Atonement (study + 7 lessons + placeholder shells) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:the-day-of-atonement
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildFoundationLessonShellSectionBody, PLACEHOLDER_BODY } from '../lib/foundation-lesson-shell'

const root = process.cwd()
for (const name of ['.env', '.env.local'] as const) {
  const p = resolve(root, name)
  if (existsSync(p)) config({ path: p, override: true })
}

const SERIES_ID = 'e4000001-0000-4000-8000-000000000083'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'the-day-of-atonement',
  title: 'The Day of Atonement',
  description: `The Day of Atonement explores Daniel 8:14, Revelation 10, and the sanctuary message as a Christ-centered explanation of what Jesus is doing now as our heavenly High Priest.

This study explains the sealed and opened prophecies of Daniel, the 2300-day prophecy, the bittersweet experience of the early Advent believers, and the discovery that the sanctuary to be cleansed was not the earth, but the heavenly sanctuary where Jesus ministers for humanity.`,
  shortDescription:
    'Jesus is our heavenly High Priest, ministering for us in the final phase of redemption history and bringing full resolution to the sin problem.',
  level: 'Beginner' as const,
  durationSummary: 'Approx. 70–85 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 21,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-000000000939',
      slug: 'sealed-and-opened',
      title: 'Sealed and Opened',
      summary:
        "Daniel's sealed prophecy is opened in Revelation 10, showing that God would bring understanding to the 2300-day prophecy in the end-time period.",
      durationMinutes: 12,
      scripture: 'Daniel 8:14 · Daniel 8:26 · Daniel 12:4-10 · Revelation 10:1-11',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000093a',
      slug: 'the-2300-days',
      title: 'The 2300 Days',
      summary:
        "The 2300-day prophecy points from the command to restore Jerusalem to the beginning of the final phase of Christ's heavenly ministry.",
      durationMinutes: 12,
      scripture: 'Daniel 8:14 · Daniel 9:24-27 · Ezra 7:11-12 · Ezekiel 4:6 · Numbers 14:34',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000093b',
      slug: 'sweet-in-the-mouth-bitter-in-the-belly',
      title: 'Sweet in the Mouth, Bitter in the Belly',
      summary:
        "Revelation 10 foretells the bittersweet experience of believers who expected Christ's return but later discovered a deeper sanctuary truth.",
      durationMinutes: 12,
      scripture: 'Revelation 10:8-11 · Habakkuk 2:2-3 · Hebrews 10:35-39',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000093c',
      slug: 'the-heavenly-sanctuary',
      title: 'The Heavenly Sanctuary',
      summary:
        'The earthly sanctuary was a symbolic outline of the plan of salvation and pointed to the true sanctuary in heaven where Jesus ministers.',
      durationMinutes: 12,
      scripture: 'Hebrews 8:1-5 · Psalm 102:19 · Exodus 25:8-9 · Hebrews 9:11-12',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000093d',
      slug: 'jesus-our-high-priest',
      title: 'Jesus Our High Priest',
      summary:
        'Jesus ministers for humanity as our sympathetic High Priest, Mediator, and source of mercy, grace, cleansing, and confidence before God.',
      durationMinutes: 12,
      scripture: 'Hebrews 4:14-16 · Hebrews 7:25-28 · Hebrews 9:12-14 · 1 Timothy 2:5 · 1 John 2:1',
      sortOrder: 5,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000093e',
      slug: 'the-final-cleansing',
      title: 'The Final Cleansing',
      summary:
        "The Day of Atonement points to God's final work of cleansing, judgment, and full resolution of the sin problem through Christ.",
      durationMinutes: 12,
      scripture: 'Leviticus 16:29-34 · Daniel 8:14 · Hebrews 9:23-28 · 1 John 1:9 · Revelation 14:6-7',
      sortOrder: 6,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000093f',
      slug: 'boldness-in-the-judgment',
      title: 'Boldness in the Judgment',
      summary:
        'Because Jesus is our High Priest and Mediator, believers can face the judgment with confidence, assurance, and love.',
      durationMinutes: 12,
      scripture: '1 John 4:16-18 · Hebrews 6:18-20 · Hebrews 10:19-23 · Romans 8:31-34',
      sortOrder: 7,
    },
  ],
}

const OVERVIEW_HREF = '/study-library/the-day-of-atonement'

const LESSON_SHELL_SECTIONS: {
  sectionId: string
  lessonId: string
  includeSweetBitterPattern?: boolean
  includeProphecyTimeline2300?: boolean
  includeSanctuaryDiagram?: boolean
  includeDayOfAtonementFlow?: boolean
}[] = [
  {
    sectionId: 'eab2bf01-0000-41b7-9216-d30009251508',
    lessonId: 'd3000007-0000-4000-8000-000000000939',
    includeSweetBitterPattern: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9217-d30009251609',
    lessonId: 'd3000007-0000-4000-8000-00000000093a',
    includeProphecyTimeline2300: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9218-d30009251710',
    lessonId: 'd3000007-0000-4000-8000-00000000093b',
    includeSweetBitterPattern: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9219-d30009251811',
    lessonId: 'd3000007-0000-4000-8000-00000000093c',
    includeSanctuaryDiagram: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-921a-d30009251912',
    lessonId: 'd3000007-0000-4000-8000-00000000093d',
    includeDayOfAtonementFlow: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-921b-d30009252013',
    lessonId: 'd3000007-0000-4000-8000-00000000093e',
    includeSanctuaryDiagram: true,
    includeDayOfAtonementFlow: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-921c-d30009252114',
    lessonId: 'd3000007-0000-4000-8000-00000000093f',
    includeDayOfAtonementFlow: true,
  },
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
      placeholderText: PLACEHOLDER_BODY,
      includeSweetBitterPattern: sec.includeSweetBitterPattern,
      includeProphecyTimeline2300: sec.includeProphecyTimeline2300,
      includeSanctuaryDiagram: sec.includeSanctuaryDiagram,
      includeDayOfAtonementFlow: sec.includeDayOfAtonementFlow,
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
