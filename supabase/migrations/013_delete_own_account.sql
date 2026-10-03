-- Lets a signed-in person delete their own auth user.
-- Progress, notes, and profile rows cascade from auth.users.
-- Support reports keep the message but clear user_id (on delete set null).

create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Not authenticated';
  end if;

  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_own_account() from public;
revoke all on function public.delete_own_account() from anon;
grant execute on function public.delete_own_account() to authenticated;

-- Also hide leftover draft shells from the public catalog.
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
    and l.reader_content->>'openingThought' is distinct from 'This lesson has been created, but the study content has not been added yet.'
    and coalesce(l.reader_content #>> '{studyInsight,title}', '') is distinct from 'Lesson content coming soon'
  ) as content_ready
from public.lessons l;
