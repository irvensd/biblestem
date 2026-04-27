export type WordInsightLanguage = 'Greek' | 'Hebrew'

export interface WordInsightProps {
  language: WordInsightLanguage
  originalWord: string
  transliteration: string
  meaning: string
  /** Scripture context; omitted when empty. */
  reference?: string
  shortExplanation: string
  strongsNumber?: string
  /** Default true; set false when nested (e.g. popover body). */
  showLabel?: boolean
  className?: string
}

/** BibleStem signature word study card (Greek/Hebrew). */
export function WordInsight({
  language,
  originalWord,
  transliteration,
  meaning,
  reference = '',
  shortExplanation,
  strongsNumber,
  showLabel = true,
  className = '',
}: WordInsightProps) {
  const ref = reference.trim()
  return (
    <div
      className={`rounded-xl border border-zinc-200/90 bg-white px-4 py-3.5 ring-1 ring-zinc-950/[0.03] md:px-5 md:py-4 ${className}`.trim()}
    >
      {showLabel ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Word insight</p>
      ) : null}
      <p className={`text-lg font-semibold tracking-tight text-zinc-950 md:text-xl ${showLabel ? 'mt-2.5' : ''}`}>
        {originalWord}
      </p>
      <p className="mt-1 text-sm text-zinc-600">{transliteration}</p>
      <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-zinc-400">{language}</p>
      {ref ? (
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{ref}</p>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-zinc-800">{meaning}</p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">{shortExplanation}</p>
      {strongsNumber?.trim() ? (
        <div className="mt-3">
          <span className="rounded border border-zinc-200/90 px-1.5 py-0.5 text-[11px] text-zinc-500">
            Strong&apos;s {strongsNumber.trim()}
          </span>
        </div>
      ) : null}
    </div>
  )
}
