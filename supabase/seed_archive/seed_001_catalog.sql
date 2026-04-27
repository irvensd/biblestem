-- BibleStem — seed catalog for `001_initial_schema.sql`
--
-- PREREQUISITES: run `migrations/001_initial_schema.sql` first.
-- NOTE: Preferred routine workflow is running `supabase/seed.sql` (catalog + reader content).
--
-- Catalog: one path (Foundations) + one series (“The Bible — God’s Living Word”) + 7 lessons.
-- Aligned with `lib/product-mock.ts`. Reader copy: `seed_003` or `npm run sync:supabase:reader`.
--
-- IMPORTANT: The app uses Supabase when NEXT_PUBLIC_* is set — old series stay visible until you RUN THIS FILE
-- in the Supabase SQL Editor (it replaces DB data; editing `lib/product-mock.ts` alone does not).

begin;

do $$
begin
  if to_regclass('public.lesson_sections') is null then
    raise exception
      'Missing table public.lesson_sections. Run migrations/001_initial_schema.sql first.';
  end if;
end $$;

-- Clear dependent rows first (FKs from progress / links).
truncate table public.lesson_word_links,
  public.user_lesson_progress,
  public.user_series_progress,
  public.lesson_sections,
  public.lessons,
  public.study_series,
  public.study_paths
cascade;

insert into public.study_paths (id, slug, name, description, sort_order) values
  ('b1000001-0000-4000-8000-000000000001', 'foundations', 'Foundations', 'Core doctrines, first principles, and clarity for new readers.', 1);

insert into public.study_series (
  id, study_path_id, slug, title, description, level, duration_summary, lessons_count,
  featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000010',
  'b1000001-0000-4000-8000-000000000001',
  'bible-gods-living-word',
  'The Bible — God’s Living Word',
  'Discover Scripture as one unified story across time—written by many, yet pointing in one direction: toward God, and toward Christ.',
  'Beginner',
  '56 min total',
  7,
  true,
  'Foundational Studies',
  0
);

insert into public.lessons (
  id, study_series_id, slug, title, summary, duration_minutes, scripture, sort_order
) values
  (
    'd3000007-0000-4000-8000-000000000001',
    'e4000001-0000-4000-8000-000000000010',
    'a-book-unlike-any-other',
    'A Book Unlike Any Other',
    'Awakening wonder: one book, many voices, one message.',
    8,
    'John 1:1 · Luke 24:27',
    1
  ),
  (
    'd3000007-0000-4000-8000-000000000002',
    'e4000001-0000-4000-8000-000000000010',
    'how-the-bible-came-to-us',
    'How the Bible Came to Us',
    'How did this book reach us? A gentle path into authors, manuscripts, and trust.',
    8,
    '2 Timothy 3:16',
    2
  ),
  (
    'd3000007-0000-4000-8000-000000000003',
    'e4000001-0000-4000-8000-000000000010',
    'can-the-bible-be-trusted',
    'Can the Bible Be Trusted?',
    'Why confidence in Scripture is grounded in history, preservation, and truth.',
    8,
    'Isaiah 40:8 · Psalm 119:160 · Matthew 5:18',
    3
  ),
  (
    'd3000007-0000-4000-8000-000000000004',
    'e4000001-0000-4000-8000-000000000010',
    'how-to-read-the-bible',
    'How to Read the Bible',
    'A practical, Scripture-first rhythm to read with clarity, patience, and attention.',
    8,
    'Psalm 119:105 · James 1:5 · 2 Timothy 2:15',
    4
  ),
  (
    'd3000007-0000-4000-8000-000000000005',
    'e4000001-0000-4000-8000-000000000010',
    'the-bibles-central-theme',
    'The Bible’s Central Theme',
    'One unified story centered on Christ, from beginning to fulfillment.',
    8,
    'Luke 24:27 · John 5:39',
    5
  ),
  (
    'd3000007-0000-4000-8000-000000000006',
    'e4000001-0000-4000-8000-000000000010',
    'the-bible-as-a-living-word',
    'The Bible as a Living Word',
    'Scripture not just as information, but as living truth that transforms from within.',
    8,
    'Hebrews 4:12 · John 6:63 · Isaiah 55:11',
    6
  ),
  (
    'd3000007-0000-4000-8000-000000000007',
    'e4000001-0000-4000-8000-000000000010',
    'your-response',
    'Your Response',
    'Move from understanding to response by acting on what God has made clear.',
    8,
    'James 1:22 · Joshua 1:8 · Luke 11:28',
    7
  );

commit;
