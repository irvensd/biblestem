'use client'

import { useCallback, useEffect, useId, useState } from 'react'
import { LessonTextRenderer } from '@/components/lessons/LessonTextRenderer'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import { inputClassName } from '@/components/ui/form-styles'
import { persistMeaningfulStudyActivity } from '@/lib/dashboard-local-progress'
import type { NoteSaveTarget } from '@/lib/lesson-notes'
import { fetchLessonNoteRemote, upsertLessonNoteRemote } from '@/lib/supabase/lesson-notes'

export const DEFAULT_REFLECTION_CHIPS = [
  'I need to study this more',
  'I feel convicted',
  'I want to apply this',
  'I need prayer',
] as const

export interface ReflectionNotesProps {
  storageKey: string
  prompt: string
  introLine?: string
  quickResponses?: readonly string[]
  studySlug: string
  lessonSlug: string
  stepNumber: number
  userId?: string
  legacyMigrationKey?: string
}

function readStored(key: string): string {
  try {
    return localStorage.getItem(key) ?? ''
  } catch {
    return ''
  }
}

function emitNoteSaved() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('biblestem-lesson-note'))
  }
}

export function ReflectionNotes({
  storageKey,
  prompt,
  introLine,
  quickResponses = DEFAULT_REFLECTION_CHIPS,
  studySlug,
  lessonSlug,
  stepNumber,
  userId,
  legacyMigrationKey,
}: ReflectionNotesProps) {
  const id = useId()
  const [value, setValue] = useState('')
  const [saveTarget, setSaveTarget] = useState<NoteSaveTarget>('device')
  const [saveMessage, setSaveMessage] = useState<string | null>(null)
  const [savedOnce, setSavedOnce] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  const syncFromStorage = useCallback(() => {
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
    setValue(next)
  }, [storageKey, legacyMigrationKey])

  useEffect(() => {
    queueMicrotask(() => {
      syncFromStorage()
      setHydrated(true)
    })
  }, [syncFromStorage])

  useEffect(() => {
    if (!userId || !hydrated) return
    let cancelled = false
    void (async () => {
      const remote = await fetchLessonNoteRemote(userId, studySlug, lessonSlug, stepNumber)
      if (cancelled || remote == null) return
      const local = readStored(storageKey).trim()
      if (remote.trim() && !local) {
        setValue(remote)
        try {
          localStorage.setItem(storageKey, remote)
        } catch {
          /* ignore */
        }
        setSaveTarget('account')
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userId, studySlug, lessonSlug, stepNumber, storageKey, hydrated])

  function persistLocal(next: string) {
    setValue(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      /* ignore */
    }
    emitNoteSaved()
  }

  function handleChange(next: string) {
    persistLocal(next)
    if (savedOnce) setSaveMessage(null)
    setSaveTarget('device')
  }

  const appendChip = (label: string) => {
    const line = value.trim().length ? `${value.trim()}\n\n${label}` : label
    persistLocal(line)
  }

  const handleSaveNote = async () => {
    setSavedOnce(true)
    try {
      localStorage.setItem(storageKey, value)
    } catch {
      /* ignore */
    }
    if (value.trim().length > 0) {
      persistMeaningfulStudyActivity()
    }
    if (userId) {
      const ok = await upsertLessonNoteRemote(userId, studySlug, lessonSlug, stepNumber, value)
      if (ok) {
        setSaveTarget('account')
        setSaveMessage('Saved to your account')
        emitNoteSaved()
        return
      }
    }
    setSaveTarget('device')
    setSaveMessage('Saved on this device')
    emitNoteSaved()
  }

  const helper =
    saveMessage ??
    (savedOnce
      ? saveTarget === 'account'
        ? 'Saved to your account'
        : 'Saved on this device'
      : userId
        ? 'Draft autosaves on this device. Tap Save note to store a copy on your account when available.'
        : 'Draft autosaves on this device. Tap Save note to confirm.')

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
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Write freely. Your note is private to this browser unless you are signed in and save to your account."
          className={`${inputClassName} min-h-[8rem] resize-y`}
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => void handleSaveNote()}
            className={`inline-flex w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 sm:w-auto ${READER_FOCUS_RING}`}
          >
            Save note
          </button>
          <p className="text-xs text-zinc-500">{helper}</p>
        </div>
      </div>
    </div>
  )
}

function LessonTextPrompt({ text }: { text: string }) {
  return <LessonTextRenderer text={text} />
}
