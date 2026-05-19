/**
 * Inserts The Second Angel's Message (study + 7 lessons + placeholder shells) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:the-second-angels-message
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000085'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'the-second-angels-message',
  title: 'The Second Angel\'s Message',
  description: `The Second Angel's Message explores Revelation 14:8 and the Bible's unfolding picture of Babylon as a symbol of religious confusion, self-exaltation, coercion, false worship, and opposition to God's character.

This study begins with ancient Babylon, from Babel to Nebuchadnezzar and Belshazzar, showing how Babylon represents human systems that attempt to save themselves, exalt themselves, and control others. It then moves to end-time Babylon in Revelation 17 and 18, showing how false religion misrepresents God while claiming to represent Him.

Students will learn that the fall of Babylon is not merely about identifying a system "out there," but about rejecting every Babylonian principle in the human heart: pride, self-justification, coercion, religious control, and distorted pictures of God. The second angel's message calls people out of confusion and into the beautiful light of God's self-giving, non-coercive love revealed in Jesus.`,
  shortDescription:
    'The second angel\'s message exposes Babylon\'s confusion and calls God\'s people out of false religion into the light of God\'s self-giving love revealed in Christ.',
  level: 'Beginner' as const,
  durationSummary: 'Approx. 75–90 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 23,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-000000000947',
      slug: 'babylon-is-fallen',
      title: 'Babylon Is Fallen',
      summary:
        'The second angel announces the fall of Babylon, a symbol of religious confusion that misrepresents God and intoxicates the nations.',
      durationMinutes: 11,
      scripture:
        'Revelation 14:8 · Revelation 18:1-5 · Genesis 11:1-9 · Jeremiah 51:6-9 · 2 Corinthians 4:3-6',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000948',
      slug: 'the-spirit-of-ancient-babylon',
      title: 'The Spirit of Ancient Babylon',
      summary:
        'Ancient Babylon reveals the core principles of rebellion, self-exaltation, confusion, forced worship, and human systems of salvation.',
      durationMinutes: 11,
      scripture:
        'Genesis 10:8-10 · Genesis 11:1-9 · Daniel 3:1-6 · Daniel 4:30 · Daniel 5:22-28',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000949',
      slug: 'the-way-of-self-exaltation',
      title: 'The Way of Self-Exaltation',
      summary:
        'Babylon follows the upward path of self-exaltation, while Jesus reveals the downward path of humility and self-giving love.',
      durationMinutes: 11,
      scripture:
        'Isaiah 14:12-15 · Philippians 2:5-11 · Matthew 23:11-12 · Luke 14:11 · James 4:6-10',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000094a',
      slug: 'end-time-babylon',
      title: 'End-Time Babylon',
      summary:
        'Revelation 17 identifies end-time Babylon as a global religious-political system that claims to represent God while opposing His character.',
      durationMinutes: 11,
      scripture:
        'Revelation 17:1-6 · Revelation 17:15 · Revelation 17:18 · John 10:33 · Mark 2:7',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000094b',
      slug: 'confusion-about-god',
      title: 'Confusion About God',
      summary:
        'Babylon\'s worst damage is not merely political or historical, but theological: it fills the world with dark confusion about God\'s character.',
      durationMinutes: 11,
      scripture:
        'Revelation 18:1-3 · 2 Corinthians 4:3-6 · John 14:9 · Matthew 11:28-30 · Romans 8:15',
      sortOrder: 5,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000094c',
      slug: 'come-out-of-her-my-people',
      title: 'Come Out of Her, My People',
      summary:
        'God calls His people out of Babylon, not because He hates the people inside it, but because He loves them and wants them free.',
      durationMinutes: 11,
      scripture:
        'Revelation 18:4-5 · Hosea 2:23 · John 10:16 · 2 Corinthians 6:14-18 · John 8:31-36',
      sortOrder: 6,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000094d',
      slug: 'babylon-out-of-me',
      title: 'Babylon Out of Me',
      summary:
        'The second angel\'s message calls us not only to leave false systems, but to let God remove pride, control, and self-exaltation from our hearts.',
      durationMinutes: 11,
      scripture:
        'Revelation 18:7 · Romans 8:7 · Philippians 2:5-11 · Galatians 5:13-15 · John 13:34-35',
      sortOrder: 7,
    },
  ],
}

const OVERVIEW_HREF = '/study-library/the-second-angels-message'

const LESSON_SHELL_SECTIONS: {
  sectionId: string
  lessonId: string
  includeSecondAngelsMessageBreakdown?: boolean
  includeAncientBabylonPattern?: boolean
  includeChristVsBabylonContrast?: boolean
  includeEndTimeBabylonIdentifiers?: boolean
  includeComeOutCallFlow?: boolean
}[] = [
  {
    sectionId: 'eab2bf01-0000-41b7-9224-d30009252922',
    lessonId: 'd3000007-0000-4000-8000-000000000947',
    includeSecondAngelsMessageBreakdown: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9225-d30009253023',
    lessonId: 'd3000007-0000-4000-8000-000000000948',
    includeAncientBabylonPattern: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9226-d30009253124',
    lessonId: 'd3000007-0000-4000-8000-000000000949',
    includeAncientBabylonPattern: true,
    includeChristVsBabylonContrast: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9227-d30009253225',
    lessonId: 'd3000007-0000-4000-8000-00000000094a',
    includeEndTimeBabylonIdentifiers: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9228-d30009253326',
    lessonId: 'd3000007-0000-4000-8000-00000000094b',
    includeComeOutCallFlow: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9229-d30009253427',
    lessonId: 'd3000007-0000-4000-8000-00000000094c',
    includeComeOutCallFlow: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-922a-d30009253528',
    lessonId: 'd3000007-0000-4000-8000-00000000094d',
    includeSecondAngelsMessageBreakdown: true,
    includeChristVsBabylonContrast: true,
    includeComeOutCallFlow: true,
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
      includeSecondAngelsMessageBreakdown: sec.includeSecondAngelsMessageBreakdown,
      includeAncientBabylonPattern: sec.includeAncientBabylonPattern,
      includeChristVsBabylonContrast: sec.includeChristVsBabylonContrast,
      includeEndTimeBabylonIdentifiers: sec.includeEndTimeBabylonIdentifiers,
      includeComeOutCallFlow: sec.includeComeOutCallFlow,
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
