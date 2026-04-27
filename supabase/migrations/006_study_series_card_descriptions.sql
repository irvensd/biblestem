-- Card teaser vs overview body: optional columns; app falls back to `description`.

alter table public.study_series
  add column if not exists short_description text;

alter table public.study_series
  add column if not exists long_description text;

comment on column public.study_series.short_description is 'Short line for study cards; app uses description if null.';
comment on column public.study_series.long_description is 'Long intro for study overview; app uses description if null.';
