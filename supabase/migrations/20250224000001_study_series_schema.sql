-- BibleStem Study Series Schema
-- Collections, Categories, Study Series, Lessons

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- COLLECTIONS
-- ============================================
CREATE TABLE IF NOT EXISTS public.collections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_collections_slug ON public.collections(slug);
CREATE INDEX IF NOT EXISTS idx_collections_sort ON public.collections(sort_order);

-- ============================================
-- CATEGORIES
-- ============================================
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_sort ON public.categories(sort_order);

-- ============================================
-- STUDY SERIES
-- ============================================
CREATE TABLE IF NOT EXISTS public.study_series (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT NOT NULL,
  long_description TEXT,
  collection_id UUID NOT NULL REFERENCES public.collections(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  level TEXT NOT NULL CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  lessons_count INT NOT NULL DEFAULT 0,
  estimated_minutes INT NOT NULL DEFAULT 0,
  cover_style JSONB DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_study_series_slug ON public.study_series(slug);
CREATE INDEX IF NOT EXISTS idx_study_series_collection ON public.study_series(collection_id);
CREATE INDEX IF NOT EXISTS idx_study_series_category ON public.study_series(category_id);
CREATE INDEX IF NOT EXISTS idx_study_series_published ON public.study_series(published);
CREATE INDEX IF NOT EXISTS idx_study_series_created ON public.study_series(created_at DESC);

-- ============================================
-- LESSONS
-- ============================================
CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  series_id UUID NOT NULL REFERENCES public.study_series(id) ON DELETE CASCADE,
  lesson_number INT NOT NULL,
  title TEXT NOT NULL,
  estimated_minutes INT NOT NULL DEFAULT 0,
  content JSONB NOT NULL DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(series_id, lesson_number)
);

CREATE INDEX IF NOT EXISTS idx_lessons_series ON public.lessons(series_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_series ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Published content readable by everyone (anon + authenticated)
CREATE POLICY "collections_read_all" ON public.collections
  FOR SELECT USING (true);

CREATE POLICY "categories_read_all" ON public.categories
  FOR SELECT USING (true);

CREATE POLICY "study_series_read_published" ON public.study_series
  FOR SELECT USING (published = true);

CREATE POLICY "lessons_read_published" ON public.lessons
  FOR SELECT USING (published = true);

-- Write restricted to authenticated users (placeholder - refine with admin role later)
CREATE POLICY "collections_auth_write" ON public.collections
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "categories_auth_write" ON public.categories
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "study_series_auth_write" ON public.study_series
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "lessons_auth_write" ON public.lessons
  FOR ALL USING (auth.role() = 'authenticated');
