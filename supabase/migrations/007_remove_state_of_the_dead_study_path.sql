-- State of the dead topics are covered under Theology; remove the duplicate top-level path.
-- `study_series.study_path_id` references `study_paths` with ON DELETE RESTRICT.
update public.study_series s
set study_path_id = t.id
from public.study_paths t
where t.slug = 'theology'
  and s.study_path_id = (select id from public.study_paths where slug = 'state-of-the-dead' limit 1);

delete from public.study_paths
where slug = 'state-of-the-dead';
