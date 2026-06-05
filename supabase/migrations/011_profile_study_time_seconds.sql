-- Lifetime study time (lesson reader seconds) synced across devices.

alter table public.profiles
  add column if not exists study_time_seconds bigint not null default 0
  check (study_time_seconds >= 0);

comment on column public.profiles.study_time_seconds is
  'Accumulated active lesson-reader time in seconds (synced across devices).';

create or replace function public.increment_profile_study_time(p_user_id uuid, p_seconds bigint)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_seconds is null or p_seconds <= 0 then
    return;
  end if;
  update public.profiles
  set
    study_time_seconds = study_time_seconds + p_seconds,
    updated_at = now()
  where id = p_user_id;
end;
$$;

revoke all on function public.increment_profile_study_time(uuid, bigint) from public;
grant execute on function public.increment_profile_study_time(uuid, bigint) to authenticated;
