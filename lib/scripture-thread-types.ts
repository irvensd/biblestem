/** One passage in a Scripture Thread sequence. */
export type ScriptureThreadReference = {
  reference: string
  /** Shown in an expandable panel when present. */
  verseText?: string
  shortNote?: string
}

/** Normalized Scripture Thread payload for UI and completion recap. */
export type ScriptureThreadData = {
  title: string
  question?: string
  references: ScriptureThreadReference[]
  takeaway?: string
  relatedHref?: string
  relatedLabel?: string
}

export type LessonScriptureThreadRecap = ScriptureThreadData & {
  id: string
}
