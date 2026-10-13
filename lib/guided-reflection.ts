/**
 * Optional Observe / Interpret / Apply answers share the existing lesson-note
 * string (localStorage and `user_notes.content`). No second table.
 *
 * A note with no guided text stays plain text. Guided text is a versioned
 * envelope in that same string. Readers that only need the words should use
 * `reflectionNotePlainText`.
 */

export type GuidedSectionId = 'observe' | 'interpret' | 'apply'

export type GuidedReflectionPrompts = {
  observe: string
  interpret: string
  apply: string
}

export type GuidedResponses = GuidedReflectionPrompts

export type StoredReflection = {
  note: string
  guided: GuidedResponses
}

export const GUIDED_REFLECTION_SECTIONS: readonly {
  id: GuidedSectionId
  label: string
  prompt: string
}[] = [
  {
    id: 'observe',
    label: 'Observe',
    prompt: 'What does the biblical passage explicitly say?',
  },
  {
    id: 'interpret',
    label: 'Interpret',
    prompt: 'What does the passage mean in its immediate and broader biblical context?',
  },
  {
    id: 'apply',
    label: 'Apply',
    prompt: "How should the passage shape the reader's understanding, decisions, or actions?",
  },
]

const SECTION_ORDER: readonly GuidedSectionId[] = ['observe', 'interpret', 'apply']

const ENVELOPE_VERSION = 1

export function emptyGuidedResponses(): GuidedResponses {
  return { observe: '', interpret: '', apply: '' }
}

/** Passage-specific prompts are used only when every section has real text. */
export function approvedGuidedPrompts(
  value: Partial<GuidedReflectionPrompts> | null | undefined,
): GuidedReflectionPrompts | null {
  if (!value) return null
  const observe = typeof value.observe === 'string' ? value.observe : ''
  const interpret = typeof value.interpret === 'string' ? value.interpret : ''
  const apply = typeof value.apply === 'string' ? value.apply : ''
  if (!observe.trim() || !interpret.trim() || !apply.trim()) return null
  return { observe, interpret, apply }
}

export function guidedSectionPrompt(
  id: GuidedSectionId,
  approved: GuidedReflectionPrompts | null,
): string {
  if (approved) return approved[id]
  return GUIDED_REFLECTION_SECTIONS.find((section) => section.id === id)?.prompt ?? ''
}

export function isGuidedSectionKey(key: string): boolean {
  return key === 'Home' || key === 'End' || key === 'ArrowRight' || key === 'ArrowLeft' || key === 'ArrowDown' || key === 'ArrowUp'
}

export function guidedSectionAfterKey(current: GuidedSectionId, key: string): GuidedSectionId | null {
  if (!isGuidedSectionKey(key)) return null
  const index = SECTION_ORDER.indexOf(current)
  if (key === 'Home') return SECTION_ORDER[0]
  if (key === 'End') return SECTION_ORDER[SECTION_ORDER.length - 1]
  if (key === 'ArrowRight' || key === 'ArrowDown') {
    return index < SECTION_ORDER.length - 1 ? SECTION_ORDER[index + 1] : current
  }
  return index > 0 ? SECTION_ORDER[index - 1] : current
}

export function guidedHasText(guided: GuidedResponses): boolean {
  return [guided.observe, guided.interpret, guided.apply].some((part) => part.trim().length > 0)
}

export function reflectionHasText(note: string, guided: GuidedResponses): boolean {
  return note.trim().length > 0 || guidedHasText(guided)
}

export function parseStoredReflection(raw: string): StoredReflection {
  const empty = emptyGuidedResponses()
  const trimmed = raw.trim()
  if (!trimmed.startsWith('{')) return { note: raw, guided: empty }
  try {
    const value = JSON.parse(raw) as {
      biblestemReflection?: unknown
      note?: unknown
      guided?: unknown
    }
    if (value.biblestemReflection !== ENVELOPE_VERSION || !value.guided || typeof value.guided !== 'object') {
      return { note: raw, guided: empty }
    }
    const guided = value.guided as Partial<GuidedResponses>
    return {
      note: typeof value.note === 'string' ? value.note : '',
      guided: {
        observe: typeof guided.observe === 'string' ? guided.observe : '',
        interpret: typeof guided.interpret === 'string' ? guided.interpret : '',
        apply: typeof guided.apply === 'string' ? guided.apply : '',
      },
    }
  } catch {
    return { note: raw, guided: empty }
  }
}

export function serializeStoredReflection(note: string, guided: GuidedResponses): string {
  if (!guidedHasText(guided)) return note
  return JSON.stringify({
    biblestemReflection: ENVELOPE_VERSION,
    note,
    guided: {
      observe: guided.observe,
      interpret: guided.interpret,
      apply: guided.apply,
    },
  })
}

/** Words a person wrote, without the storage envelope. */
export function reflectionNotePlainText(raw: string): string {
  const trimmed = raw.trim()
  if (!trimmed.startsWith('{')) return raw
  const parsed = parseStoredReflection(raw)
  if (!trimmed.includes('"biblestemReflection"')) return raw
  try {
    const value = JSON.parse(raw) as { biblestemReflection?: unknown }
    if (value.biblestemReflection !== ENVELOPE_VERSION) return raw
  } catch {
    return raw
  }
  const parts = [
    parsed.note.trim(),
    parsed.guided.observe.trim() ? `Observe\n${parsed.guided.observe.trim()}` : '',
    parsed.guided.interpret.trim() ? `Interpret\n${parsed.guided.interpret.trim()}` : '',
    parsed.guided.apply.trim() ? `Apply\n${parsed.guided.apply.trim()}` : '',
  ].filter((part) => part.length > 0)
  return parts.join('\n\n')
}

export type ReflectionPersistResult = {
  message: string
  reportedAccountSuccess: boolean
  persistedLocally: boolean
}

export function reflectionPersistMessage(input: {
  localSaved: boolean
  signedIn: boolean
  accountSaved: boolean
}): ReflectionPersistResult {
  if (!input.localSaved) {
    return {
      message: 'Could not save. Your text is still here.',
      reportedAccountSuccess: false,
      persistedLocally: false,
    }
  }
  if (!input.signedIn) {
    return {
      message: 'Saved on this device',
      reportedAccountSuccess: false,
      persistedLocally: true,
    }
  }
  if (input.accountSaved) {
    return {
      message: 'Saved to your account',
      reportedAccountSuccess: true,
      persistedLocally: true,
    }
  }
  return {
    message: 'Saved on this device. The account copy did not update.',
    reportedAccountSuccess: false,
    persistedLocally: true,
  }
}

export const REFLECTION_UNSAVED_MESSAGE = 'Unsaved changes. The draft is on this device.'
