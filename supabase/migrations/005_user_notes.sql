-- Optional per-step lesson notes (reflections). Slug keys match app catalog.
-- Demo works with localStorage only; when this migration is applied, logged-in users can sync.

create table if not exists public.user_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  study_id text not null,
  lesson_id text not null,
  step_number int not null check (step_number >= 0),
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, study_id, lesson_id, step_number)
);

create index if not exists user_notes_user_updated_idx
  on public.user_notes (user_id, updated_at desc);

comment on table public.user_notes is 'User-authored lesson step notes (e.g. reflections); study_id/lesson_id are series/lesson slugs.';

alter table public.user_notes enable row level security;

drop policy if exists "Users manage own lesson notes" on public.user_notes;
create policy "Users manage own lesson notes"
  on public.user_notes
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create or replace function public.set_user_notes_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists user_notes_set_updated_at on public.user_notes;
create trigger user_notes_set_updated_at
  before update on public.user_notes
  for each row execute function public.set_user_notes_updated_at();
