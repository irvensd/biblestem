-- Fix: Settings "Save changes" on first name failed with
-- "new row violates row-level security policy for table profiles"
-- when auth.users existed but public.profiles row was missing (pre-trigger accounts).

-- Allow signed-in users to create their own profile row (upsert insert path).
drop policy if exists "Users insert own profile" on public.profiles;
create policy "Users insert own profile"
  on public.profiles for insert to authenticated
  with check (auth.uid() = id);

-- Backfill profile rows for existing auth users (runs once in migration).
insert into public.profiles (id, display_name)
select
  u.id,
  nullif(trim(coalesce(u.raw_user_meta_data->>'full_name', '')), '')
from auth.users u
where not exists (
  select 1 from public.profiles p where p.id = u.id
);
