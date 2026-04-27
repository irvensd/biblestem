-- Guided lesson copy for the structured reader (matches `LessonReaderContent` in `lib/lesson-content.ts`).
-- App precedence: `lesson_sections` rows (if any) → else `reader_content` → else static fallback in code.

alter table public.lessons
  add column if not exists reader_content jsonb;

comment on column public.lessons.reader_content is
  'JSON payload for BibleStem guided lesson steps (opening, scripture, teaching, reflect, application, prayer).';
