/**
 * Dashboard “Recent notes” reads the same lesson reflection storage as {@link ReflectionNotes}:
 * - localStorage keys `biblestem-lesson-note:{studySlug}:{lessonSlug}:{stepNumber}`
 * - legacy keys `biblestem-reflection-{studySlug}-{lessonSlug}` (treated as step 0)
 * - Supabase `user_notes` when signed in (fallback to local on failure)
 */

import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type { DashboardNote } from '@/lib/dashboard-mock-data'
import { reflectionNotePlainText } from '@/lib/guided-reflection'
import { lessonNoteStorageKey } from '@/lib/lesson-notes'
import { fetchRecentLessonNotesRemote, type RecentLessonNoteRow } from '@/lib/supabase/lesson-notes'
import type { Lesson, StudySeries } from '@/lib/types/product'

const NOTE_PREFIX = 'biblestem-lesson-note:'
const LEGACY_REFLECTION_PREFIX = 'biblestem-reflection-'

export type ReflectionNoteStorageType = 'local' | 'remote'

/** Canonical shape for one reflection note from either storage layer. */
export type ReflectionNoteDisplay = {
  id: string
  studySlug: string
  studyTitle: string
  lessonSlug: string
  lessonTitle: string
  /** Stable string id for the step (0-based index as string). */
  stepId: string
  /** Reader-facing label; reflections default to “Reflect”. */
  stepLabel: string
  prompt: string
  noteBody: string
  selectedTags: string[]
  createdAt: string | null
  updatedAt: string | null
  storageType: ReflectionNoteStorageType
}

function noteKey(studySlug: string, lessonSlug: string, stepNumber: number): string {
  return `${studySlug}:${lessonSlug}:${stepNumber}`
}

function findLessonInCatalog(
  catalog: LoadedCatalog,
  studySlug: string,
  lessonSlug: string,
): { series: StudySeries; lesson: Lesson } | undefined {
  const series = catalog.allSeries.find((s) => s.slug === studySlug)
  const lesson = series?.lessons.find((l) => l.slug === lessonSlug)
  if (!series || !lesson) return undefined
  return { series, lesson }
}

/** Parse `biblestem-lesson-note:studySlug:lessonSlug:step` (slugs should not contain trailing segment ambiguity). */
export function parseLessonNoteStorageKey(fullKey: string): { studySlug: string; lessonSlug: string; stepNumber: number } | null {
  if (!fullKey.startsWith(NOTE_PREFIX)) return null
  const rest = fullKey.slice(NOTE_PREFIX.length)
  const lastColon = rest.lastIndexOf(':')
  if (lastColon <= 0) return null
  const stepPart = rest.slice(lastColon + 1)
  const stepNumber = parseInt(stepPart, 10)
  if (Number.isNaN(stepNumber)) return null
  const withoutStep = rest.slice(0, lastColon)
  const secondLast = withoutStep.lastIndexOf(':')
  if (secondLast <= 0) return null
  const lessonSlug = withoutStep.slice(secondLast + 1)
  const studySlug = withoutStep.slice(0, secondLast)
  return { studySlug, lessonSlug, stepNumber }
}

/** Enumerate non-empty lesson-note entries from localStorage (current + legacy formats). */
export function collectLocalReflectionNotes(catalog: LoadedCatalog): ReflectionNoteDisplay[] {
  if (typeof window === 'undefined') return []
  const out: ReflectionNoteDisplay[] = []

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key) continue

      if (key.startsWith(NOTE_PREFIX)) {
        const parsed = parseLessonNoteStorageKey(key)
        if (!parsed) continue
        const raw = localStorage.getItem(key)?.trim()
        if (!raw) continue
        const hit = findLessonInCatalog(catalog, parsed.studySlug, parsed.lessonSlug)
        out.push({
          id: key,
          studySlug: parsed.studySlug,
          studyTitle: hit?.series.title ?? parsed.studySlug,
          lessonSlug: parsed.lessonSlug,
          lessonTitle: hit?.lesson.title ?? parsed.lessonSlug,
          stepId: String(parsed.stepNumber),
          stepLabel: 'Reflect',
          prompt: '',
          noteBody: reflectionNotePlainText(raw).trim(),
          selectedTags: [],
          createdAt: null,
          updatedAt: null,
          storageType: 'local',
        })
        continue
      }

      if (key.startsWith(LEGACY_REFLECTION_PREFIX)) {
        const raw = localStorage.getItem(key)?.trim()
        if (!raw) continue
        const rest = key.slice(LEGACY_REFLECTION_PREFIX.length)
        let matched: { series: StudySeries; lesson: Lesson } | undefined
        const sorted = [...catalog.allSeries].sort((a, b) => a.sortOrder - b.sortOrder)
        for (const series of sorted) {
          const prefix = `${series.slug}-`
          if (rest.startsWith(prefix)) {
            const lessonSlug = rest.slice(prefix.length)
            const lesson = series.lessons.find((l) => l.slug === lessonSlug)
            if (lesson) {
              matched = { series, lesson }
              break
            }
          }
        }
        const studySlug = matched?.series.slug ?? ''
        const lessonSlug = matched?.lesson.slug ?? ''
        if (!studySlug || !lessonSlug) continue
        const canonicalKey = lessonNoteStorageKey(studySlug, lessonSlug, 0)
        out.push({
          id: canonicalKey,
          studySlug,
          studyTitle: matched?.series.title ?? studySlug,
          lessonSlug,
          lessonTitle: matched?.lesson.title ?? lessonSlug,
          stepId: '0',
          stepLabel: 'Reflect',
          prompt: '',
          noteBody: reflectionNotePlainText(raw).trim(),
          selectedTags: [],
          createdAt: null,
          updatedAt: null,
          storageType: 'local',
        })
      }
    }
  } catch {
    return []
  }

  return dedupeLocalReflectionNotes(out)
}

/** Prefer canonical `biblestem-lesson-note:` rows over legacy keys for the same lesson step. */
function dedupeLocalReflectionNotes(notes: ReflectionNoteDisplay[]): ReflectionNoteDisplay[] {
  const map = new Map<string, ReflectionNoteDisplay>()
  for (const n of notes) {
    const stepNum = parseInt(n.stepId, 10)
    if (Number.isNaN(stepNum)) continue
    const k = noteKey(n.studySlug, n.lessonSlug, stepNum)
    const prev = map.get(k)
    if (!prev) {
      map.set(k, n)
      continue
    }
    const prevCanonical = prev.id.startsWith(NOTE_PREFIX)
    const nextCanonical = n.id.startsWith(NOTE_PREFIX)
    if (nextCanonical && !prevCanonical) map.set(k, n)
    else if (nextCanonical === prevCanonical && n.noteBody.trim().length > prev.noteBody.trim().length) map.set(k, n)
  }
  return [...map.values()]
}

function sortNotesForDashboard(notes: ReflectionNoteDisplay[]): ReflectionNoteDisplay[] {
  return [...notes].sort((a, b) => {
    const ta = a.updatedAt ? Date.parse(a.updatedAt) : 0
    const tb = b.updatedAt ? Date.parse(b.updatedAt) : 0
    if (tb !== ta) return tb - ta
    return (b.noteBody.length || 0) - (a.noteBody.length || 0)
  })
}

function remoteRowsToDisplay(catalog: LoadedCatalog, rows: RecentLessonNoteRow[]): ReflectionNoteDisplay[] {
  return rows
    .filter((r) => r.content.trim())
    .map((r) => {
      const hit = findLessonInCatalog(catalog, r.study_id, r.lesson_id)
      return {
        id: `remote:${r.id}`,
        studySlug: r.study_id,
        studyTitle: hit?.series.title ?? r.study_id,
        lessonSlug: r.lesson_id,
        lessonTitle: hit?.lesson.title ?? r.lesson_id,
        stepId: String(r.step_number),
        stepLabel: 'Reflect',
        prompt: '',
        noteBody: reflectionNotePlainText(r.content).trim(),
        selectedTags: [],
        createdAt: r.created_at,
        updatedAt: r.updated_at,
        storageType: 'remote' as const,
      }
    })
}

/**
 * Merge remote (preferred when present) with local-only entries. Same composite key:
 * studySlug + lessonSlug + step index.
 */
export function mergeLocalAndRemoteReflectionNotes(
  catalog: LoadedCatalog,
  local: ReflectionNoteDisplay[],
  remoteRows: RecentLessonNoteRow[],
): ReflectionNoteDisplay[] {
  const remoteDisplay = remoteRowsToDisplay(catalog, remoteRows)
  const map = new Map<string, ReflectionNoteDisplay>()

  for (const r of remoteDisplay) {
    map.set(noteKey(r.studySlug, r.lessonSlug, parseInt(r.stepId, 10)), r)
  }

  for (const l of local) {
    const stepNum = parseInt(l.stepId, 10)
    if (Number.isNaN(stepNum)) continue
    const k = noteKey(l.studySlug, l.lessonSlug, stepNum)
    if (!map.has(k)) map.set(k, l)
  }

  return sortNotesForDashboard([...map.values()])
}

/**
 * Returns reflection notes from the active note system (local + optional Supabase), newest first.
 * Does not duplicate lesson persistence — reads existing keys and `user_notes` only.
 */
export async function getRecentReflectionNotes(
  catalog: LoadedCatalog,
  options: { userId?: string; limit: number },
): Promise<ReflectionNoteDisplay[]> {
  const { userId, limit } = options
  const local = collectLocalReflectionNotes(catalog)

  if (!userId) {
    return sortNotesForDashboard(local).slice(0, limit)
  }

  try {
    const rows = await fetchRecentLessonNotesRemote(userId, Math.max(limit * 8, 24))
    const merged = mergeLocalAndRemoteReflectionNotes(catalog, local, rows)
    return merged.slice(0, limit)
  } catch {
    return sortNotesForDashboard(local).slice(0, limit)
  }
}

/** Sorted local notes for immediate dashboard updates (same ordering as merged list). */
export function getSortedLocalReflectionNotesPreview(catalog: LoadedCatalog, limit: number): ReflectionNoteDisplay[] {
  return sortNotesForDashboard(collectLocalReflectionNotes(catalog)).slice(0, limit)
}

export function formatReflectionNoteUpdatedLabel(note: ReflectionNoteDisplay): string {
  if (note.updatedAt) {
    try {
      const d = new Date(note.updatedAt)
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    } catch {
      /* fall through */
    }
  }
  return note.storageType === 'remote' ? 'Saved to account' : 'Saved on this device'
}

/** Builds `/study-library/.../lesson/...?step=` — `stepId` is the reader step index (ReflectionNotes `stepNumber`). */
export function buildReflectionNoteOpenHref(note: ReflectionNoteDisplay): string {
  const step = parseInt(note.stepId, 10)
  const idx = Number.isNaN(step) ? 0 : step
  // TODO(reader-navigation): if lessons move to slug-based step anchors, map `stepId` from stored metadata instead of index.
  return `/study-library/${note.studySlug}/lesson/${note.lessonSlug}?step=${idx}`
}

export function reflectionNoteToDashboard(note: ReflectionNoteDisplay): DashboardNote {
  const raw = note.noteBody.trim()
  const snippet = raw.length > 200 ? `${raw.slice(0, 197)}…` : raw
  return {
    id: note.id,
    studyTitle: note.studyTitle,
    lessonTitle: note.lessonTitle,
    stepLabel: note.stepLabel,
    snippet,
    openHref: buildReflectionNoteOpenHref(note),
    updatedLabel: formatReflectionNoteUpdatedLabel(note),
  }
}

export function mapReflectionNotesToDashboard(notes: ReflectionNoteDisplay[]): DashboardNote[] {
  return notes.map(reflectionNoteToDashboard)
}
