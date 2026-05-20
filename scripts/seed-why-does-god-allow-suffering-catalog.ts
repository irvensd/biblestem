/**
 * Inserts Why Does God Allow Suffering? (study + 5 lessons) into Supabase when missing.
 *
 * Requires `.env.local`: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: npm run seed:supabase:why-does-god-allow-suffering
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

const SERIES_ID = 'e4000001-0000-4000-8000-000000000091'
const PATH_ID = 'b1000001-0000-4000-8000-000000000001'

const s = {
  slug: 'why-does-god-allow-suffering',
  title: 'Why Does God Allow Suffering?',
  description: `Suffering is one of the deepest questions people bring to faith. This study traces the biblical answer through the origin of sin, the great controversy between Christ and Satan, the cross, God\u2019s refining work in trials, Christ\u2019s sympathy with human grief, the believer\u2019s call to compassion, and the final promise that pain will end forever.

Students will see that God is not the author of suffering. Sin brought pain, death, and brokenness into the world. Yet God does not stand far away from human sorrow. In Jesus, He entered suffering, bore sin\u2019s weight, wept with the grieving, healed the afflicted, and promised a future where death, sorrow, crying, and pain will be no more.`,
  shortDescription:
    'A Scripture-first study on sin, sorrow, the cross, refining trials, and the end of pain.',
  level: 'Intermediate' as const,
  durationSummary: 'Approx. 60 min total',
  lessonsCount: 5,
  featured: false,
  collectionLabel: 'Hard Questions',
  sortOrder: 4,
  lessons: [
    {
      id: 'd3000008-0000-4000-8000-000000000989',
      slug: 'the-question-we-cannot-ignore',
      title: 'The Question We Cannot Ignore',
      summary:
        'This lesson opens the study by naming the weight of suffering and tracing pain, death, and sorrow to the entrance of sin, not to God\u2019s original design.',
      durationMinutes: 12,
      scripture:
        'Genesis 1:31 \u00b7 Genesis 3:6 to 7 \u00b7 Genesis 3:16 to 19 \u00b7 Romans 5:12 \u00b7 James 1:13 \u00b7 James 1:17 \u00b7 1 John 3:4 \u00b7 Romans 6:23 \u00b7 1 John 1:5',
      sortOrder: 1,
    },
    {
      id: 'd3000008-0000-4000-8000-00000000098a',
      slug: 'why-god-did-not-end-it-immediately',
      title: 'Why God Did Not End It Immediately',
      summary:
        'This lesson explains why God did not destroy Satan immediately and why the universe needed to see the true nature of sin and the justice of God\u2019s character.',
      durationMinutes: 12,
      scripture:
        'Revelation 12:7 to 9 \u00b7 Ezekiel 28:17 \u00b7 Isaiah 14:13 to 14 \u00b7 Matthew 13:24 to 30 \u00b7 Matthew 13:36 to 43 \u00b7 1 Corinthians 4:9 \u00b7 1 John 4:8 \u00b7 1 John 4:18 \u00b7 Nahum 1:9',
      sortOrder: 2,
    },
    {
      id: 'd3000008-0000-4000-8000-00000000098b',
      slug: 'the-god-who-entered-pain',
      title: 'The God Who Entered Pain',
      summary:
        'This lesson centers on Christ. God\u2019s answer to suffering is incarnation. Jesus entered sorrow, bore grief, and revealed that the Father is not distant from our pain.',
      durationMinutes: 12,
      scripture:
        'Isaiah 53:3 to 5 \u00b7 John 11:35 \u00b7 Matthew 27:46 \u00b7 Romans 5:8 \u00b7 Hebrews 2:14 to 18 \u00b7 Hebrews 4:15 to 16 \u00b7 John 14:9 \u00b7 Matthew 4:23 to 24',
      sortOrder: 3,
    },
    {
      id: 'd3000008-0000-4000-8000-00000000098c',
      slug: 'the-furnace-that-refines',
      title: 'The Furnace That Refines',
      summary:
        'This lesson explains that God can use trials to refine faith and deepen dependence without being the author of evil.',
      durationMinutes: 12,
      scripture:
        '1 Peter 1:6 to 7 \u00b7 James 1:2 to 4 \u00b7 Romans 5:3 to 5 \u00b7 Hebrews 12:5 to 11 \u00b7 Malachi 3:2 to 3 \u00b7 Job 23:10 \u00b7 2 Corinthians 12:7 to 10 \u00b7 Psalm 139:23 to 24',
      sortOrder: 4,
    },
    {
      id: 'd3000008-0000-4000-8000-00000000098d',
      slug: 'until-there-is-no-more-pain',
      title: 'Until There Is No More Pain',
      summary:
        'This final lesson closes with hope. Suffering is not eternal. Believers minister to the hurting now while waiting for the day when God removes death, sorrow, crying, and pain forever.',
      durationMinutes: 12,
      scripture:
        'Romans 8:22 to 23 \u00b7 John 11:11 to 14 \u00b7 1 Thessalonians 4:13 to 18 \u00b7 1 Corinthians 15:51 to 55 \u00b7 2 Corinthians 1:3 to 4 \u00b7 Matthew 25:35 to 40 \u00b7 Revelation 20:10 \u00b7 Revelation 21:1 to 5',
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
