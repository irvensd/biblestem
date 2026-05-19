/**
 * Inserts The First Angel's Message (study + 7 lessons + placeholder shells) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:the-first-angels-message
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000084'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'the-first-angels-message',
  title: 'The First Angel\'s Message',
  description: `The First Angel's Message explores Revelation 14:6-7 as God's end-time gospel proclamation to every person on earth.

This study breaks the first angel's message into five major parts: the everlasting gospel, fear God, give glory to Him, the hour of His judgment has come, and worship Him who made heaven and earth.`,
  shortDescription:
    'The first angel\'s message calls the world to receive the everlasting gospel, stand in awe of God, give Him glory, recognize the judgment hour, and worship the Creator.',
  level: 'Beginner' as const,
  durationSummary: 'Approx. 70–85 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 22,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-000000000940',
      slug: 'to-every-person-on-earth',
      title: 'To Every Person on Earth',
      summary:
        'Revelation 14 introduces God\'s final worldwide message, carried by His people to every nation, kindred, tongue, and people.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:6-7 · Matthew 24:14 · Revelation 14:14-20 · Mark 16:15 · Acts 1:8',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000941',
      slug: 'the-everlasting-gospel',
      title: 'The Everlasting Gospel',
      summary:
        'The first angel\'s message begins with the everlasting gospel, the good news of God\'s faithful love revealed in Jesus.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:6 · Jeremiah 31:3 · Romans 1:16-17 · Romans 3:20-31 · 1 Corinthians 15:1-4',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000942',
      slug: 'fear-god',
      title: 'Fear God',
      summary:
        'To fear God in the light of the gospel means to stand in awe of His mercy, goodness, holiness, and faithful love.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:7 · Psalm 130:4 · Psalm 33:8 · 1 John 4:16-19 · Ecclesiastes 12:13',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000943',
      slug: 'give-glory-to-him',
      title: 'Give Glory to Him',
      summary:
        'Giving glory to God means magnifying His character in our words, worship, choices, and witness.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:7 · Exodus 33:18-19 · Matthew 5:16 · 1 Corinthians 10:31 · 2 Corinthians 4:6',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000944',
      slug: 'the-hour-of-his-judgment',
      title: 'The Hour of His Judgment',
      summary:
        'The first angel announces the judgment hour as good news because God\'s judgment is just, loving, and made in favor of His people.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:7 · Daniel 7:9-14 · Daniel 7:21-22 · Acts 17:31 · 1 John 4:17-18',
      sortOrder: 5,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000945',
      slug: 'worship-the-creator',
      title: 'Worship the Creator',
      summary:
        'The first angel calls the world back to Creator worship, echoing the Sabbath commandment and the rest found in Christ.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:7 · Exodus 20:8-11 · Genesis 2:1-3 · Colossians 1:16-17 · Mark 2:27-28',
      sortOrder: 6,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000946',
      slug: 'the-gospel-that-changes-everything',
      title: 'The Gospel That Changes Everything',
      summary:
        'The first angel\'s message is a complete paradigm shift, calling us to receive God\'s faithful love and share the good news with the world.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:6-7 · 2 Corinthians 3:18 · 2 Corinthians 4:3-6 · Romans 12:1-2 · Matthew 5:14-16',
      sortOrder: 7,
    },
  ],
}

const OVERVIEW_HREF = '/study-library/the-first-angels-message'

const LESSON_SHELL_SECTIONS: {
  sectionId: string
  lessonId: string
  includeFirstAngelsMessageBreakdown?: boolean
  includeEverlastingGospelFlow?: boolean
  includeFearGloryJudgmentCreatorMap?: boolean
  fearGloryJudgmentCreatorMapHighlightIndices?: number[]
  includeCreatorWorshipSabbathBridge?: boolean
}[] = [
  {
    sectionId: 'eab2bf01-0000-41b7-921d-d30009252215',
    lessonId: 'd3000007-0000-4000-8000-000000000940',
    includeFirstAngelsMessageBreakdown: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-921e-d30009252316',
    lessonId: 'd3000007-0000-4000-8000-000000000941',
    includeEverlastingGospelFlow: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-921f-d30009252417',
    lessonId: 'd3000007-0000-4000-8000-000000000942',
    includeFearGloryJudgmentCreatorMap: true,
    fearGloryJudgmentCreatorMapHighlightIndices: [0],
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9220-d30009252518',
    lessonId: 'd3000007-0000-4000-8000-000000000943',
    includeFearGloryJudgmentCreatorMap: true,
    fearGloryJudgmentCreatorMapHighlightIndices: [1],
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9221-d30009252619',
    lessonId: 'd3000007-0000-4000-8000-000000000944',
    includeFearGloryJudgmentCreatorMap: true,
    fearGloryJudgmentCreatorMapHighlightIndices: [2],
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9222-d30009252720',
    lessonId: 'd3000007-0000-4000-8000-000000000945',
    includeFearGloryJudgmentCreatorMap: true,
    fearGloryJudgmentCreatorMapHighlightIndices: [3],
    includeCreatorWorshipSabbathBridge: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9223-d30009252821',
    lessonId: 'd3000007-0000-4000-8000-000000000946',
    includeFirstAngelsMessageBreakdown: true,
    includeEverlastingGospelFlow: true,
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
      includeFirstAngelsMessageBreakdown: sec.includeFirstAngelsMessageBreakdown,
      includeEverlastingGospelFlow: sec.includeEverlastingGospelFlow,
      includeFearGloryJudgmentCreatorMap: sec.includeFearGloryJudgmentCreatorMap,
      fearGloryJudgmentCreatorMapHighlightIndices: sec.fearGloryJudgmentCreatorMapHighlightIndices,
      includeCreatorWorshipSabbathBridge: sec.includeCreatorWorshipSabbathBridge,
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
