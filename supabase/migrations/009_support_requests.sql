-- Technical support requests from Settings (and legacy /support redirects). Public inserts via anon JWT;
-- authenticated users may insert with optional user_id = auth.uid(); optional self-read.

drop table if exists public.support_requests cascade;

create table public.support_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  name text,
  email text not null,
  issue_type text not null,
  severity text not null default 'P2',
  page_url text,
  study_slug text,
  lesson_slug text,
  step_number integer,
  message text not null,
  browser_info jsonb,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint support_requests_issue_type_check check (
    issue_type in (
      'Bug',
      'Login issue',
      'Study progress issue',
      'Notes issue',
      'Broken link',
      'Content correction',
      'Quiz issue',
      'Donation/support issue',
      'General feedback'
    )
  ),
  constraint support_requests_severity_check check (severity in ('P0', 'P1', 'P2', 'P3')),
  constraint support_requests_status_check check (status in ('new', 'in_review', 'resolved', 'closed'))
);

comment on table public.support_requests is 'Product support submissions from the BibleStem app (settings form).';

create index support_requests_created_at_idx on public.support_requests (created_at desc);
create index support_requests_status_idx on public.support_requests (status);

alter table public.support_requests enable row level security;

-- Inserts: anon (no session) may only create anonymous rows; authenticated may set user_id to self or null.
drop policy if exists "support_requests_insert_anon" on public.support_requests;
create policy "support_requests_insert_anon"
  on public.support_requests for insert to anon
  with check (
    user_id is null
    and status = 'new'
  );

drop policy if exists "support_requests_insert_authenticated" on public.support_requests;
create policy "support_requests_insert_authenticated"
  on public.support_requests for insert to authenticated
  with check (
    (user_id is null or user_id = auth.uid())
    and status = 'new'
  );

-- Reads: no anon select. Signed-in users may read rows they own (when user_id is set).
drop policy if exists "support_requests_select_own" on public.support_requests;
create policy "support_requests_select_own"
  on public.support_requests for select to authenticated
  using (user_id is not null and auth.uid() = user_id);

-- Admin-wide select/update: intentionally omitted (TODO).

create or replace function public.set_support_requests_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists support_requests_set_updated_at on public.support_requests;
create trigger support_requests_set_updated_at
  before update on public.support_requests
  for each row execute function public.set_support_requests_updated_at();
