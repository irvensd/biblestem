-- -----------------------------------------------------------------------------
-- Legacy schema removal (migrations/20250224000001_study_series_schema.sql)
-- -----------------------------------------------------------------------------
-- The Next.js app + seed_001_catalog.sql expect migrations/001_initial_schema.sql
-- (study_paths → study_series → lessons → lesson_sections).
--
-- If you already ran the 202502 migration, public.study_series / public.lessons
-- are the WRONG shape and 001 cannot be applied until those tables are removed.
-- This script drops ONLY the legacy catalog tables (and their RLS policies via CASCADE).
--
-- After this: run 001_initial_schema.sql, then supabase/seed.sql
-- -----------------------------------------------------------------------------

drop table if exists public.lessons cascade;
drop table if exists public.study_series cascade;
drop table if exists public.categories cascade;
drop table if exists public.collections cascade;
