-- BibleStem initial schema — aligns with `lib/types/product.ts`
-- Run after creating a Supabase project: `supabase db push` or paste into SQL editor.

-- -----------------------------------------------------------------------------
-- Extensions
-- -----------------------------------------------------------------------------
create extension if not exists "pgcrypto";

-- -----------------------------------------------------------------------------
-- Remove legacy catalog (migrations/20250224000001_study_series_schema.sql) if present.
-- That migration uses the same table names (study_series, lessons) but different
-- columns, so CREATE TABLE below would fail with "already exists".
-- App schema uses study_path_id on study_series; legacy uses collection_id.
-- -----------------------------------------------------------------------------
do $$
begin
  -- Full legacy stack (collections/categories schema)
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'study_series'
      and column_name = 'collection_id'
  ) then
    drop table if exists public.lessons cascade;
    drop table if exists public.study_series cascade;
    drop table if exists public.categories cascade;
    drop table if exists public.collections cascade;

  -- Wrong-shape lessons only (keep 001 study_series / study_paths if already created)
  elsif exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'lessons')
    and not exists (
      select 1
      from information_schema.columns
      where table_schema = 'public'
        and table_name = 'lessons'
        and column_name = 'study_series_id'
    )
  then
    drop table if exists public.lessons cascade;
  end if;
end $$;

-- -----------------------------------------------------------------------------
-- Profiles (1:1 with auth.users)
-- -----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Public profile row for each authenticated user.';

-- -----------------------------------------------------------------------------
-- Content hierarchy: paths → series → lessons → sections
-- -----------------------------------------------------------------------------
create table if not exists public.study_paths (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.study_series (
  id uuid primary key default gen_random_uuid(),
  study_path_id uuid not null references public.study_paths (id) on delete restrict,
  slug text not null unique,
  title text not null,
  description text not null,
  short_description text,
  long_description text,
  level text not null check (level in ('Beginner', 'Intermediate', 'Advanced')),
  duration_summary text not null,
  lessons_count int not null default 0 check (lessons_count >= 0),
  featured boolean not null default false,
  collection_label text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists study_series_path_id_idx on public.study_series (study_path_id);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  study_series_id uuid not null references public.study_series (id) on delete cascade,
  slug text not null,
  title text not null,
  summary text not null,
  duration_minutes int not null check (duration_minutes > 0),
  scripture text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  reader_content jsonb,
  unique (study_series_id, slug)
);

create index if not exists lessons_series_id_idx on public.lessons (study_series_id);

create table if not exists public.lesson_sections (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  sort_order int not null,
  heading text not null,
  body text not null,
  section_type text not null check (
    section_type in ('scripture', 'teaching', 'reflection', 'word_study', 'other')
  )
);

create index if not exists lesson_sections_lesson_id_idx on public.lesson_sections (lesson_id);

-- -----------------------------------------------------------------------------
-- Word studies (reusable) + link to lessons/sections
-- -----------------------------------------------------------------------------
create table if not exists public.word_studies (
  id uuid primary key default gen_random_uuid(),
  lemma text not null,
  transliteration text,
  strongs text,
  gloss text not null,
  language text not null check (language in ('hebrew', 'greek', 'aramaic', 'other')),
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_word_links (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  word_study_id uuid not null references public.word_studies (id) on delete cascade,
  lesson_section_id uuid references public.lesson_sections (id) on delete set null,
  sort_order int not null default 0,
  unique (lesson_id, word_study_id)
);

create index if not exists lesson_word_links_lesson_id_idx on public.lesson_word_links (lesson_id);

-- -----------------------------------------------------------------------------
-- User progress
-- -----------------------------------------------------------------------------
create table if not exists public.user_series_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  study_series_id uuid not null references public.study_series (id) on delete cascade,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  last_lesson_slug text,
  percent_complete int not null default 0 check (percent_complete >= 0 and percent_complete <= 100),
  unique (user_id, study_series_id)
);

create index if not exists user_series_progress_user_id_idx on public.user_series_progress (user_id);

create table if not exists public.user_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  state text not null check (state in ('not_started', 'in_progress', 'complete')),
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create index if not exists user_lesson_progress_user_id_idx on public.user_lesson_progress (user_id);

-- -----------------------------------------------------------------------------
-- Notes & highlights
-- -----------------------------------------------------------------------------
create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  lesson_id uuid references public.lessons (id) on delete set null,
  verse_reference text not null,
  body text not null,
  updated_at timestamptz not null default now()
);

create index if not exists notes_user_id_idx on public.notes (user_id);

create table if not exists public.highlights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  lesson_id uuid references public.lessons (id) on delete set null,
  verse_reference text not null,
  body text not null,
  updated_at timestamptz not null default now()
);

create index if not exists highlights_user_id_idx on public.highlights (user_id);

-- -----------------------------------------------------------------------------
-- Row Level Security (enable + policies when wiring Supabase Auth)
-- -----------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.user_series_progress enable row level security;
alter table public.user_lesson_progress enable row level security;
alter table public.notes enable row level security;
alter table public.highlights enable row level security;

-- Example policies (uncomment and adjust when auth is live):
-- create policy "Users read own profile" on public.profiles for select using (auth.uid() = id);
-- create policy "Users update own profile" on public.profiles for update using (auth.uid() = id);

-- Content tables: typically readable by all authenticated users; writes via service role or admin.
-- alter table public.study_paths enable row level security;
-- create policy "Paths readable" on public.study_paths for select to authenticated using (true);
