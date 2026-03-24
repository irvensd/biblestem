-- BibleStem Study Series Seed Data
-- Run after migration. Uses Supabase SQL Editor or: supabase db reset (applies migrations + seed)

-- Clear existing (optional - comment out if appending)
TRUNCATE public.lessons CASCADE;
TRUNCATE public.study_series CASCADE;
TRUNCATE public.categories CASCADE;
TRUNCATE public.collections CASCADE;

-- ============================================
-- COLLECTIONS
-- ============================================
INSERT INTO public.collections (id, name, slug, description, sort_order) VALUES
  ('11111111-1111-1111-1111-111111111101', 'Foundational Studies', 'foundational', 'Start here. Build your Bible study foundation.', 1),
  ('11111111-1111-1111-1111-111111111102', 'Growth Studies', 'growth', 'Go deeper. Grow in faith and understanding.', 2),
  ('11111111-1111-1111-1111-111111111103', 'Advanced Studies', 'advanced', 'Expert-level exploration. Hebrew & Greek insights.', 3);

-- ============================================
-- CATEGORIES
-- ============================================
INSERT INTO public.categories (id, name, slug, description, icon, sort_order) VALUES
  ('22222222-2222-2222-2222-222222222201', 'Foundations', 'foundations', 'Core biblical foundations', 'book', 1),
  ('22222222-2222-2222-2222-222222222202', 'Theology', 'theology', 'Doctrine and theology', 'scale', 2),
  ('22222222-2222-2222-2222-222222222203', 'Life Application', 'life-application', 'Applying Scripture to daily life', 'heart', 3),
  ('22222222-2222-2222-2222-222222222204', 'Prophecy', 'prophecy', 'Prophecy and end-times', 'star', 4);

-- ============================================
-- STUDY SERIES (6–10 samples)
-- ============================================

-- Foundational Studies
INSERT INTO public.study_series (title, slug, short_description, long_description, collection_id, category_id, level, lessons_count, estimated_minutes, published) VALUES
  (
    'How to Study the Bible: The Preparation',
    'how-to-study-bible-preparation',
    'A 6-part series preparing you to approach God''s Word with prayer, maturity, teachability, obedience, and trust.',
    'Interactive Bible studies designed to transform your faith and deepen your understanding whether you''re just starting or ready to dive deeper.',
    '11111111-1111-1111-1111-111111111101',
    '22222222-2222-2222-2222-222222222201',
    'Beginner',
    6,
    42,
    true
  ),
  (
    'Where Bible Came From',
    'where-bible-came-from',
    'Explore why the Bible matters, how its books were recognized, inspiration, manuscripts, and translations.',
    'A foundational 6-part study on canon, inspiration, preservation, and how God''s Word reached the nations.',
    '11111111-1111-1111-1111-111111111101',
    '22222222-2222-2222-2222-222222222202',
    'Beginner',
    6,
    42,
    true
  ),
  (
    'The Story of the Bible',
    'story-of-the-bible',
    'The grand narrative from creation to restoration. Covenant, Messiah, redemption, and new creation.',
    'A comprehensive journey through Scripture''s overarching story and God''s plan for humanity.',
    '11111111-1111-1111-1111-111111111101',
    '22222222-2222-2222-2222-222222222201',
    'Beginner',
    6,
    42,
    true
  ),
  (
    'The Power of the Word',
    'power-of-the-word',
    'How God''s Word creates faith, renews minds, pierces hearts, sustains life, and transforms believers.',
    'A transformative study on hearing, believing, obeying, and sharing Scripture.',
    '11111111-1111-1111-1111-111111111101',
    '22222222-2222-2222-2222-222222222203',
    'Beginner',
    6,
    42,
    true
  );

-- Growth Studies
INSERT INTO public.study_series (title, slug, short_description, long_description, collection_id, category_id, level, lessons_count, estimated_minutes, published) VALUES
  (
    'Walking with God Daily',
    'walking-with-god-daily',
    'Devotion, consistency, hearing His voice, and daily surrender. Walk with God in every moment.',
    'Practical habits for daily intimacy with God.',
    '11111111-1111-1111-1111-111111111102',
    '22222222-2222-2222-2222-222222222203',
    'Beginner',
    6,
    36,
    true
  ),
  (
    'Victory Over Temptation',
    'victory-over-temptation',
    'How the Word serves as your weapon. Learn from Jesus'' example and renew your mind for lasting victory.',
    'Discover biblical weapons for spiritual warfare and temptation.',
    '11111111-1111-1111-1111-111111111102',
    '22222222-2222-2222-2222-222222222203',
    'Beginner',
    6,
    40,
    true
  ),
  (
    'Faith That Works',
    'faith-that-works',
    'Explore how genuine faith produces obedience and good works. Faith and action in daily walk with Christ.',
    'Understanding the relationship between faith and works from James and Paul.',
    '11111111-1111-1111-1111-111111111102',
    '22222222-2222-2222-2222-222222222203',
    'Intermediate',
    6,
    45,
    true
  ),
  (
    'Fruit of the Spirit',
    'fruit-of-the-spirit',
    'Deep dive into love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.',
    'Daily cultivation methods for each fruit of the Spirit.',
    '11111111-1111-1111-1111-111111111102',
    '22222222-2222-2222-2222-222222222202',
    'Intermediate',
    9,
    60,
    true
  );

-- Advanced Studies
INSERT INTO public.study_series (title, slug, short_description, long_description, collection_id, category_id, level, lessons_count, estimated_minutes, published) VALUES
  (
    'The Sanctuary Study',
    'sanctuary-study',
    'Heavenly sanctuary, its prophetic significance, and its relationship to Christ''s ministry.',
    'An in-depth exploration of the sanctuary from Exodus to Revelation.',
    '11111111-1111-1111-1111-111111111103',
    '22222222-2222-2222-2222-222222222204',
    'Advanced',
    6,
    180,
    true
  ),
  (
    'Biblical Prophecy Timeline',
    'biblical-prophecy-timeline',
    'Major biblical prophecies and their fulfillment throughout history.',
    'A comprehensive study of Daniel, Revelation, and prophetic timelines.',
    '11111111-1111-1111-1111-111111111103',
    '22222222-2222-2222-2222-222222222204',
    'Advanced',
    8,
    240,
    true
  );
