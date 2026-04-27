-- Slug-based lesson progress + activity days for streaks (works with catalog from DB or mock slugs).
-- Requires Supabase Auth; RLS uses auth.uid().

-- -----------------------------------------------------------------------------
-- Progress: one row per user / series slug / lesson slug
-- -----------------------------------------------------------------------------
create table if not exists public.user_study_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  series_slug text not null,
  lesson_slug text not null,
  completed boolean not null default false,
  current_step_index int not null default 0,
  total_steps int not null default 1 check (total_steps >= 1),
  updated_at timestamptz not null default now(),
  primary key (user_id, series_slug, lesson_slug)
);

create index if not exists user_study_progress_user_updated_idx
  on public.user_study_progress (user_id, updated_at desc);

comment on table public.user_study_progress is 'Per-lesson progress keyed by series/lesson slugs (matches app catalog keys).';

-- -----------------------------------------------------------------------------
-- Streak: one row per calendar day the user had study activity
-- -----------------------------------------------------------------------------
create table if not exists public.user_activity_days (
  user_id uuid not null references auth.users (id) on delete cascade,
  activity_on date not null,
  primary key (user_id, activity_on)
);

create index if not exists user_activity_days_user_idx on public.user_activity_days (user_id);

comment on table public.user_activity_days is 'Calendar days (UTC date) with recorded study activity for streak calculation.';

-- -----------------------------------------------------------------------------
-- RLS
-- -----------------------------------------------------------------------------
alter table public.user_study_progress enable row level security;
alter table public.user_activity_days enable row level security;

drop policy if exists "Users manage own study progress" on public.user_study_progress;
create policy "Users manage own study progress"
  on public.user_study_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users manage own activity days" on public.user_activity_days;
create policy "Users manage own activity days"
  on public.user_activity_days
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- Profiles: read/update own row (insert via trigger on signup)
-- -----------------------------------------------------------------------------
drop policy if exists "Users read own profile" on public.profiles;
create policy "Users read own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Users update own profile" on public.profiles;
create policy "Users update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- -----------------------------------------------------------------------------
-- Auto-create profile on signup (display_name from user metadata)
-- -----------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    nullif(trim(coalesce(new.raw_user_meta_data->>'full_name', '')), '')
  )
  on conflict (id) do update
    set display_name = coalesce(excluded.display_name, public.profiles.display_name),
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
