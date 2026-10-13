'use client'

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { LessonTextRenderer } from '@/components/lessons/LessonTextRenderer'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import { inputClassName } from '@/components/ui/form-styles'
import { persistMeaningfulStudyActivity } from '@/lib/dashboard-local-progress'
import {
  approvedGuidedPrompts,
  emptyGuidedResponses,
  guidedHasText,
  guidedSectionAfterKey,
  guidedSectionPrompt,
  GUIDED_REFLECTION_SECTIONS,
  parseStoredReflection,
  reflectionHasText,
  reflectionPersistMessage,
  REFLECTION_UNSAVED_MESSAGE,
  serializeStoredReflection,
  type GuidedReflectionPrompts,
  type GuidedResponses,
  type GuidedSectionId,
  type ReflectionPersistResult,
} from '@/lib/guided-reflection'
import { fetchLessonNoteRemote, upsertLessonNoteRemote } from '@/lib/supabase/lesson-notes'

export const DEFAULT_REFLECTION_CHIPS = [
  'I need to study this more',
  'I feel convicted',
  'I want to apply this',
  'I need prayer',
] as const

type RemoteSave = (
  userId: string,
  studySlug: string,
  lessonSlug: string,
  stepNumber: number,
  content: string,
) => Promise<boolean>

type RemoteLoad = (
  userId: string,
  studySlug: string,
  lessonSlug: string,
  stepNumber: number,
) => Promise<string | null>

export interface ReflectionNotesProps {
  storageKey: string
  prompt: string
  introLine?: string
  placeholder?: string
  quickResponses?: readonly string[]
  studySlug: string
  lessonSlug: string
  stepNumber: number
  userId?: string
  legacyMigrationKey?: string
  /** Reflection steps offer Observe, Interpret, and Apply. Other notes stay a single field. */
  allowGuided?: boolean
  /** Replaces the method questions only when all three strings contain text. */
  guidedPrompts?: GuidedReflectionPrompts | null
  saveRemote?: RemoteSave
  loadRemote?: RemoteLoad
}

function readStored(key: string): string {
  try {
    return localStorage.getItem(key) ?? ''
  } catch {
    return ''
  }
}

function emitNoteSaved() {
  if (typeof window === 'undefined' || typeof window.dispatchEvent !== 'function' || typeof window.Event !== 'function') {
    return
  }
  try {
    window.dispatchEvent(new window.Event('biblestem-lesson-note'))
  } catch {
    /* ignore */
  }
}

export function ReflectionNotes({
  storageKey,
  prompt,
  introLine,
  placeholder = 'Write freely. Your note is private to this browser unless you are signed in and save to your account.',
  quickResponses = DEFAULT_REFLECTION_CHIPS,
  studySlug,
  lessonSlug,
  stepNumber,
  userId,
  legacyMigrationKey,
  allowGuided = false,
  guidedPrompts,
  saveRemote = upsertLessonNoteRemote,
  loadRemote = fetchLessonNoteRemote,
}: ReflectionNotesProps) {
  const id = useId()
  const passagePrompts = approvedGuidedPrompts(guidedPrompts)
  const [note, setNote] = useState('')
  const [guided, setGuided] = useState<GuidedResponses>(emptyGuidedResponses)
  const [section, setSection] = useState<GuidedSectionId>('observe')
  const [guidedOpen, setGuidedOpen] = useState(false)
  const [status, setStatus] = useState<ReflectionPersistResult | null>(null)
  const [hydrated, setHydrated] = useState(false)
  const [saving, setSaving] = useState(false)
  const savingRef = useRef(false)
  const draftRef = useRef<{ note: string; guided: GuidedResponses }>({
    note: '',
    guided: emptyGuidedResponses(),
  })
  const accountBaseline = useRef<string | null>(null)
  const accountOutOfDate = useRef(false)
  const localWriteFailed = useRef(false)

  function writeLocal(content: string): boolean {
    try {
      localStorage.setItem(storageKey, content)
      localWriteFailed.current = false
      return true
    } catch {
      localWriteFailed.current = true
      return false
    }
  }

  function applyStored(raw: string, fromAccount: boolean) {
    const parsed = parseStoredReflection(raw)
    draftRef.current = { note: parsed.note, guided: parsed.guided }
    setNote(parsed.note)
    setGuided(parsed.guided)
    if (allowGuided && guidedHasText(parsed.guided)) setGuidedOpen(true)
    if (fromAccount) {
      accountBaseline.current = raw
      accountOutOfDate.current = false
    }
  }

  useEffect(() => {
    queueMicrotask(() => {
      let next = typeof window !== 'undefined' ? readStored(storageKey) : ''
      if (!next.trim() && legacyMigrationKey && typeof window !== 'undefined') {
        const legacy = readStored(legacyMigrationKey)
        if (legacy.trim()) {
          next = legacy
          try {
            localStorage.setItem(storageKey, legacy)
          } catch {
            /* ignore */
          }
        }
      }
      applyStored(next, false)
      setHydrated(true)
    })
    // Storage hydration runs when the note identity changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, legacyMigrationKey, allowGuided])

  useEffect(() => {
    if (!userId || !hydrated) return
    let cancelled = false
    void (async () => {
      const remote = await loadRemote(userId, studySlug, lessonSlug, stepNumber)
      if (cancelled || remote == null) return
      const local = readStored(storageKey).trim()
      if (remote.trim() && !local) {
        writeLocal(remote)
        applyStored(remote, true)
        setStatus(reflectionPersistMessage({ localSaved: true, signedIn: true, accountSaved: true }))
      }
    })()
    return () => {
      cancelled = true
    }
    // Remote fill runs once the local draft has been read.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, studySlug, lessonSlug, stepNumber, storageKey, hydrated, loadRemote])

  useEffect(() => {
    const onLeave = (event: BeforeUnloadEvent) => {
      const serialized = serializeStoredReflection(note, guided)
      const accountBehind =
        accountOutOfDate.current ||
        (accountBaseline.current !== null && accountBaseline.current !== serialized)
      if (!localWriteFailed.current && !accountBehind) return
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', onLeave)
    return () => window.removeEventListener('beforeunload', onLeave)
  }, [note, guided])

  function commitDraft(nextNote: string, nextGuided: GuidedResponses) {
    draftRef.current = { note: nextNote, guided: nextGuided }
    setNote(nextNote)
    setGuided(nextGuided)
    const serialized = serializeStoredReflection(nextNote, nextGuided)
    const localSaved = writeLocal(serialized)
    if (!localSaved) {
      setStatus(reflectionPersistMessage({ localSaved: false, signedIn: Boolean(userId), accountSaved: false }))
      return
    }
    emitNoteSaved()
    const accountBehind =
      accountOutOfDate.current ||
      (accountBaseline.current !== null && accountBaseline.current !== serialized)
    if (accountBehind) {
      setStatus({
        message: REFLECTION_UNSAVED_MESSAGE,
        reportedAccountSuccess: false,
        persistedLocally: true,
      })
      return
    }
    setStatus(null)
  }

  const appendChip = (label: string) => {
    const line = note.trim().length ? `${note.trim()}\n\n${label}` : label
    commitDraft(line, guided)
  }

  const handleSaveNote = async () => {
    if (savingRef.current) return
    savingRef.current = true
    setSaving(true)
    const draft = draftRef.current
    const serialized = serializeStoredReflection(draft.note, draft.guided)
    const localSaved = writeLocal(serialized)
    if (localSaved && reflectionHasText(draft.note, draft.guided)) {
      try {
        persistMeaningfulStudyActivity()
      } catch {
        /* activity tracking must not change the save result */
      }
    }
    if (!userId) {
      setStatus(reflectionPersistMessage({ localSaved, signedIn: false, accountSaved: false }))
      if (localSaved) emitNoteSaved()
      savingRef.current = false
      setSaving(false)
      return
    }
    if (!localSaved) {
      setStatus(reflectionPersistMessage({ localSaved: false, signedIn: true, accountSaved: false }))
      savingRef.current = false
      setSaving(false)
      return
    }
    const accountSaved = await saveRemote(userId, studySlug, lessonSlug, stepNumber, serialized)
    const latest = serializeStoredReflection(draftRef.current.note, draftRef.current.guided)
    if (accountSaved && latest === serialized) {
      accountBaseline.current = serialized
      accountOutOfDate.current = false
      setStatus(reflectionPersistMessage({ localSaved: true, signedIn: true, accountSaved: true }))
    } else if (latest !== serialized) {
      accountBaseline.current = accountSaved ? serialized : accountBaseline.current
      accountOutOfDate.current = true
      setStatus({
        message: REFLECTION_UNSAVED_MESSAGE,
        reportedAccountSuccess: false,
        persistedLocally: true,
      })
    } else {
      accountOutOfDate.current = true
      setStatus(reflectionPersistMessage({ localSaved: true, signedIn: true, accountSaved: false }))
    }
    emitNoteSaved()
    savingRef.current = false
    setSaving(false)
  }

  function onSectionKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const next = guidedSectionAfterKey(section, event.key)
    if (!next) return
    event.preventDefault()
    setSection(next)
    document.getElementById(`${id}-tab-${next}`)?.focus()
  }

  const helper =
    status?.message ??
    (userId
      ? 'Draft autosaves on this device. Tap Save note to store a copy on your account when available.'
      : 'Draft autosaves on this device. Tap Save note to confirm.')

  const activePrompt = guidedSectionPrompt(section, passagePrompts)

  return (
    <div className="space-y-6">
      <LessonTextPrompt text={prompt} />
      <div className="space-y-3">
        {introLine ? (
          <p className="text-sm italic leading-relaxed text-zinc-500">{introLine}</p>
        ) : null}
        {quickResponses.length ? (
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => appendChip(q)}
                className="rounded-full border border-zinc-200/90 bg-white px-3 py-1.5 text-left text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                {q}
              </button>
            ))}
          </div>
        ) : null}
        <label htmlFor={id} className="sr-only">
          Your reflection
        </label>
        <textarea
          id={id}
          rows={5}
          value={note}
          onChange={(event) => commitDraft(event.target.value, guided)}
          placeholder={placeholder}
          className={`${inputClassName} min-h-[8rem] w-full resize-y`}
        />
        {allowGuided ? (
          <div className="space-y-3 border-t border-zinc-200/80 pt-4">
            <button
              type="button"
              aria-expanded={guidedOpen}
              aria-controls={`${id}-guided`}
              onClick={() => setGuidedOpen((open) => !open)}
              className={`inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 sm:w-auto ${READER_FOCUS_RING}`}
            >
              Guided reflection
            </button>
            {guidedOpen ? (
              <div id={`${id}-guided`} className="space-y-3">
                <div
                  role="tablist"
                  aria-label="Guided reflection"
                  className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3"
                >
                  {GUIDED_REFLECTION_SECTIONS.map((item) => {
                    const selected = item.id === section
                    return (
                      <button
                        key={item.id}
                        id={`${id}-tab-${item.id}`}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        aria-controls={`${id}-panel-${item.id}`}
                        tabIndex={selected ? 0 : -1}
                        onClick={() => setSection(item.id)}
                        onKeyDown={onSectionKeyDown}
                        className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-medium ${
                          selected
                            ? 'border-zinc-900 bg-zinc-900 text-white'
                            : 'border-zinc-300 bg-white text-zinc-800'
                        } ${READER_FOCUS_RING}`}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>
                <div
                  role="tabpanel"
                  id={`${id}-panel-${section}`}
                  aria-labelledby={`${id}-tab-${section}`}
                >
                  <label htmlFor={`${id}-guided-text`} className="block text-sm leading-relaxed text-zinc-800">
                    {activePrompt}
                  </label>
                  <textarea
                    id={`${id}-guided-text`}
                    rows={5}
                    value={guided[section]}
                    onChange={(event) =>
                      commitDraft(note, {
                        ...guided,
                        [section]: event.target.value,
                      })
                    }
                    className={`${inputClassName} mt-2 min-h-[8rem] w-full resize-y`}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => void handleSaveNote()}
            disabled={saving}
            aria-busy={saving}
            className={`inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 sm:w-auto ${READER_FOCUS_RING} disabled:opacity-60`}
          >
            {saving ? 'Saving...' : 'Save note'}
          </button>
          <p role="status" aria-live="polite" className="text-xs text-zinc-500">
            {helper}
          </p>
        </div>
      </div>
    </div>
  )
}

function LessonTextPrompt({ text }: { text: string }) {
  return <LessonTextRenderer text={text} />
}
