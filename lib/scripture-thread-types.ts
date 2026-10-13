/** One passage in a Scripture Thread sequence. */
export type ScriptureThreadReference = {
  reference: string
  /** Optional heading already authored for this passage. Omitted when absent. */
  title?: string
  /** Shown when the lesson already includes this passage's text. */
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
