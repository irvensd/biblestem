-- Lesson text and quiz answers are not readable with the public anon key.
-- Catalog lists use lesson_catalog (metadata + content_ready). Signed-in users
-- read the full row through RLS.

alter table public.lessons enable row level security;
alter table public.lesson_sections enable row level security;

drop policy if exists "lessons_read_published" on public.lessons;
drop policy if exists "lessons_auth_write" on public.lessons;
drop policy if exists "lessons_select_authenticated" on public.lessons;

create policy "lessons_select_authenticated"
  on public.lessons
  for select
  to authenticated
  using (true);

drop policy if exists "lesson_sections_select_authenticated" on public.lesson_sections;

create policy "lesson_sections_select_authenticated"
  on public.lesson_sections
  for select
  to authenticated
  using (true);

revoke select on table public.lessons from anon;
revoke select on table public.lesson_sections from anon;

create or replace view public.lesson_catalog
with (security_invoker = false) as
select
  l.id,
  l.study_series_id,
  l.slug,
  l.title,
  l.summary,
  l.duration_minutes,
  l.scripture,
  l.sort_order,
  l.created_at,
  (
    l.reader_content is not null
    and jsonb_typeof(l.reader_content) = 'object'
    and coalesce(l.reader_content->>'draftShell', '') is distinct from 'true'
    and nullif(btrim(l.reader_content->>'openingThought'), '') is not null
    and l.reader_content->>'openingThought' is distinct from 'This lesson content has not been added yet.'
    and coalesce(l.reader_content #>> '{studyInsight,title}', '') is distinct from 'Lesson content coming soon'
  ) as content_ready
from public.lessons l;

create or replace view public.lesson_section_headings
with (security_invoker = false) as
select
  id,
  lesson_id,
  sort_order,
  heading,
  section_type
from public.lesson_sections;

grant select on public.lesson_catalog to anon, authenticated;
grant select on public.lesson_section_headings to anon, authenticated;
