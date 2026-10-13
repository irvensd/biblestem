'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import {
  WORD_INSIGHT_TABS,
  availableWordInsightTabs,
  cleanedRelatedReferences,
  isWordInsightTabKey,
  wordInsightTabAfterKey,
  type WordInsightTabId,
} from '@/lib/word-insight-sections'

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
  /** Other passages already named for this word. */
  relatedReferences?: string[]
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
  relatedReferences,
  showLabel = true,
  className = '',
}: WordInsightProps) {
  const tabs = availableWordInsightTabs({
    meaning,
    reference,
    passageExplanation: shortExplanation,
    relatedReferences,
  })
  const [tab, setTab] = useState<WordInsightTabId>(tabs[0] ?? 'meaning')
  const active = tabs.includes(tab) ? tab : (tabs[0] ?? 'meaning')
  const panelId = useId()
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const strongs = strongsNumber?.trim()
  const connections = cleanedRelatedReferences(relatedReferences)
  const termScript = language === 'Hebrew' ? { lang: 'he', dir: 'rtl' as const } : { lang: 'el', dir: 'ltr' as const }

  function selectTab(next: WordInsightTabId, focus = false) {
    setTab(next)
    if (!focus) return
    const index = tabs.indexOf(next)
    window.requestAnimationFrame(() => tabRefs.current[index]?.focus())
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!isWordInsightTabKey(event.key)) return
    event.preventDefault()
    selectTab(wordInsightTabAfterKey(tabs, active, event.key), true)
  }

  return (
    <div
      className={`rounded-xl border border-zinc-200/90 bg-white px-4 py-3.5 ring-1 ring-zinc-950/[0.03] md:px-5 md:py-4 ${className}`.trim()}
    >
      {showLabel ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Word insight</p>
      ) : null}
      <p
        lang={termScript.lang}
        dir={termScript.dir}
        className={`font-scripture text-lg font-semibold tracking-tight text-zinc-950 md:text-xl ${showLabel ? 'mt-2.5' : ''} ${
          language === 'Hebrew' ? 'text-right' : ''
        }`}
      >
        {originalWord}
      </p>
      {transliteration.trim() ? <p className="mt-1 text-sm text-zinc-600">{transliteration}</p> : null}
      <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-zinc-400">{language}</p>
      {strongs ? (
        <div className="mt-3">
          <span className="rounded border border-zinc-200/90 px-1.5 py-0.5 text-[11px] text-zinc-500">
            Strong&apos;s {strongs}
          </span>
        </div>
      ) : null}

      {tabs.length > 1 ? (
        <div className="mt-4" onKeyDown={onTabKeyDown}>
          <div role="tablist" aria-label="Word insight sections" className="flex flex-wrap gap-2">
            {tabs.map((id, index) => {
              const selected = id === active
              const label = WORD_INSIGHT_TABS.find((item) => item.id === id)?.label ?? id
              return (
                <button
                  key={id}
                  ref={(node) => {
                    tabRefs.current[index] = node
                  }}
                  type="button"
                  role="tab"
                  id={`${panelId}-${id}`}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectTab(id)}
                  className={`min-h-11 rounded-md border px-3 py-2 text-sm font-medium motion-reduce:transition-none ${READER_FOCUS_RING} ${
                    selected
                      ? 'border-blue-800 bg-blue-800 text-white'
                      : 'border-zinc-200/90 bg-stone-50/80 text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

      <div
        id={panelId}
        role={tabs.length > 1 ? 'tabpanel' : undefined}
        aria-labelledby={tabs.length > 1 ? `${panelId}-${active}` : undefined}
        className="mt-4"
      >
        {active === 'meaning' && meaning.trim() ? (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Lexical sense</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-800">{meaning.trim()}</p>
          </div>
        ) : null}
        {active === 'context' ? (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">In this passage</p>
            {reference.trim() ? (
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">{reference.trim()}</p>
            ) : null}
            {shortExplanation.trim() ? (
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{shortExplanation.trim()}</p>
            ) : null}
          </div>
        ) : null}
        {active === 'connections' && connections.length > 0 ? (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Related passages</p>
            <ul className="mt-2 space-y-1">
              {connections.map((item) => (
                <li key={item} className="text-sm text-zinc-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}
