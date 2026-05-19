/**
 * Inserts The Third Angel's Message (study + 7 lessons + placeholder shells) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:the-third-angels-message
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000086'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'the-third-angels-message',
  title: 'The Third Angel\'s Message',
  description: `The Third Angel's Message explores Revelation 14:9-12 as God's urgent warning against false worship, coercion, and the mark of the beast.

This study presents the third angel's message through the lens of God's non-coercive love. Students will see that true worship cannot be forced, because love is the only valid motive for worship. The study explains the beast, the image of the beast, the mark of the beast, the seal of God, the Sabbath as God's sign, and the faithful resistance of those who keep the commandments of God and the faith of Jesus.

The study avoids fear-based sensationalism and instead focuses on the central issue: worship, freedom, allegiance, and the character of God. It shows that any religious or political system that uses civil power to force worship does not represent the God revealed in Jesus Christ. The final call is not panic, but faithful love.`,
  shortDescription:
    'The third angel\'s message warns against coerced worship and calls God\'s people to remain faithful to Jesus, His commandments, and the liberty of love.',
  level: 'Beginner' as const,
  durationSummary: 'Approx. 80–95 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 24,
  lessons: [
    {
      id: 'd3000007-0000-4000-8000-00000000094e',
      slug: 'true-worship-cannot-be-forced',
      title: 'True Worship Cannot Be Forced',
      summary:
        'The third angel\'s message warns against coerced worship because true worship can only be awakened by love.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:9-12 · 1 John 4:8 · 1 John 4:19 · 2 Corinthians 3:17 · John 4:23-24',
      sortOrder: 1,
    },
    {
      id: 'd3000007-0000-4000-8000-00000000094f',
      slug: 'the-beast-and-his-authority',
      title: 'The Beast and His Authority',
      summary:
        'Revelation 13 identifies the beast as a power that rises from the nations, receives authority from the dragon, blasphemes God, and persecutes the saints.',
      durationMinutes: 12,
      scripture:
        'Revelation 13:1-10 · Daniel 7:17, 23 · Revelation 17:15 · Revelation 12:9 · Daniel 7:21-25',
      sortOrder: 2,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000950',
      slug: 'the-image-of-the-beast',
      title: 'The Image of the Beast',
      summary:
        'The image of the beast forms when civil power is used to enforce religious authority and compel worship.',
      durationMinutes: 12,
      scripture:
        'Revelation 13:11-15 · Revelation 14:9 · Daniel 3:1-6 · Matthew 13:24-30 · John 18:36',
      sortOrder: 3,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000951',
      slug: 'the-mark-of-the-beast',
      title: 'The Mark of the Beast',
      summary:
        'The mark of the beast is connected to worship, allegiance, civil enforcement, and human authority placed against God\'s authority.',
      durationMinutes: 12,
      scripture:
        'Revelation 13:16-17 · Revelation 14:9-10 · Exodus 20:8-11 · Ezekiel 20:12, 20 · Romans 6:16',
      sortOrder: 4,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000952',
      slug: 'the-seal-of-god',
      title: 'The Seal of God',
      summary:
        'The seal of God points to God\'s authority, His law written in the heart, and the Sabbath as a sign of creation, redemption, and sanctification.',
      durationMinutes: 12,
      scripture:
        'Revelation 7:1-3 · Deuteronomy 6:4-9 · Ezekiel 20:12, 20 · Ephesians 1:13-14 · Exodus 20:8-11',
      sortOrder: 5,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000953',
      slug: 'the-patience-of-the-saints',
      title: 'The Patience of the Saints',
      summary:
        'God\'s end-time people endure by the faith of Jesus, keeping God\'s commandments through love rather than fear.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:12 · Galatians 5:5-6 · John 14:15 · Hebrews 10:35-39 · James 5:7-11',
      sortOrder: 6,
    },
    {
      id: 'd3000007-0000-4000-8000-000000000954',
      slug: 'liberty-love-and-final-worship',
      title: 'Liberty, Love, and Final Worship',
      summary:
        'The final crisis reveals whether our worship is motivated by coercion, fear, and human authority, or by love, freedom, and loyalty to Jesus.',
      durationMinutes: 12,
      scripture:
        'Revelation 14:9-12 · 2 Corinthians 3:17 · John 8:36 · 1 John 4:18-19 · John 13:34-35',
      sortOrder: 7,
    },
  ],
}

const OVERVIEW_HREF = '/study-library/the-third-angels-message'

const LESSON_SHELL_SECTIONS: {
  sectionId: string
  lessonId: string
  includeThirdAngelsMessageBreakdown?: boolean
  includeTrueWorshipVsCoercion?: boolean
  includeBeastPowerIdentifiers?: boolean
  includeImageOfBeastFormation?: boolean
  includeMarkVsSealComparison?: boolean
  includeSealElementsSabbath?: boolean
  includePatienceSaintsTriad?: boolean
}[] = [
  {
    sectionId: 'eab2bf01-0000-41b7-922b-d30009253629',
    lessonId: 'd3000007-0000-4000-8000-00000000094e',
    includeThirdAngelsMessageBreakdown: true,
    includeTrueWorshipVsCoercion: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-922c-d30009253730',
    lessonId: 'd3000007-0000-4000-8000-00000000094f',
    includeBeastPowerIdentifiers: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-922d-d30009253831',
    lessonId: 'd3000007-0000-4000-8000-000000000950',
    includeTrueWorshipVsCoercion: true,
    includeImageOfBeastFormation: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-922e-d30009253932',
    lessonId: 'd3000007-0000-4000-8000-000000000951',
    includeMarkVsSealComparison: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-922f-d30009254033',
    lessonId: 'd3000007-0000-4000-8000-000000000952',
    includeMarkVsSealComparison: true,
    includeSealElementsSabbath: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9230-d30009254134',
    lessonId: 'd3000007-0000-4000-8000-000000000953',
    includePatienceSaintsTriad: true,
  },
  {
    sectionId: 'eab2bf01-0000-41b7-9231-d30009254235',
    lessonId: 'd3000007-0000-4000-8000-000000000954',
    includeThirdAngelsMessageBreakdown: true,
    includeTrueWorshipVsCoercion: true,
    includeMarkVsSealComparison: true,
    includePatienceSaintsTriad: true,
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
      includeThirdAngelsMessageBreakdown: sec.includeThirdAngelsMessageBreakdown,
      includeTrueWorshipVsCoercion: sec.includeTrueWorshipVsCoercion,
      includeBeastPowerIdentifiers: sec.includeBeastPowerIdentifiers,
      includeImageOfBeastFormation: sec.includeImageOfBeastFormation,
      includeMarkVsSealComparison: sec.includeMarkVsSealComparison,
      includeSealElementsSabbath: sec.includeSealElementsSabbath,
      includePatienceSaintsTriad: sec.includePatienceSaintsTriad,
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
