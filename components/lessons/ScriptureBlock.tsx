'use client'

import { useCallback, useState, type ReactNode } from 'react'
import { LessonTextRenderer } from '@/components/lessons/LessonTextRenderer'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import { ScriptureChain } from '@/components/lessons/ScriptureChain'
import { WordStudyPopover } from '@/components/lessons/WordStudyPopover'
import type { WordInsight } from '@/lib/lesson-content'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

interface ScriptureBlockProps {
  reference: string
  quote: string
  /** When set, these words are tappable in the quote (repeat surfaces match every occurrence). */
  insights: WordInsight[]
  /** Optional cross-reference chain after the primary passage. */
  chain?: { reference: string }[]
  secondary?: { reference: string; quote: string }
  /** Reflection copy between primary passage and secondary (when secondary exists). */
  afterPrimary?: string
  /** Optional emphasized phrases within `afterPrimary`. */
  afterPrimaryEmphasisPhrases?: string[]
  /** Reflection copy after the secondary passage. */
  afterSecondary?: string
  /** Optional emphasized phrases within `afterSecondary`. */
  afterSecondaryEmphasisPhrases?: string[]
}

function matchInsightForPart(part: string, insights: WordInsight[]): WordInsight | undefined {
  return insights.find((w) => w.surface.toLowerCase() === part.toLowerCase())
}

function renderQuoteWithInsights(quote: string, insights: WordInsight[]) {
  if (!insights.length) {
    return <>{quote}</>
  }
  const sorted = [...insights].sort((a, b) => b.surface.length - a.surface.length)
  const pattern = sorted.map((s) => escapeRegExp(s.surface)).join('|')
  const re = new RegExp(`(${pattern})`, 'gi')
  const parts = quote.split(re)
  return (
    <>
      {parts.map((part, i) => {
        const insight = matchInsightForPart(part, insights)
        if (insight) {
          return <WordStudyPopover key={`${i}-${part}`} surface={part} study={insight} />
        }
        return <span key={`${i}-t`}>{part}</span>
      })}
    </>
  )
}

function ScriptureQuoteShell({ children }: { children: ReactNode }) {
  return <div className="border-l-2 border-zinc-200/80 pl-5 md:pl-6">{children}</div>
}

/** Bridge paragraphs use the same `LessonTextRenderer` pipeline as `ContentBlockRenderer` paragraph blocks. */
function AfterBridge({
  text,
  emphasisPhrases,
}: {
  text: string
  emphasisPhrases?: string[]
}) {
  return (
    <div className="mt-10">
      <LessonTextRenderer text={text.trim()} phraseEmphasis={emphasisPhrases} />
    </div>
  )
}

export function ScriptureBlock({
  reference,
  quote,
  insights,
  chain,
  secondary,
  afterPrimary,
  afterPrimaryEmphasisPhrases,
  afterSecondary,
  afterSecondaryEmphasisPhrases,
}: ScriptureBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyText = [reference.trim(), quote.trim()].filter(Boolean).join('\n\n')
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }, [copyText])

  const secondaryBlock =
    secondary && secondary.quote.trim() ? (
      <>
        <div className="my-12 border-t border-zinc-200/70" aria-hidden />
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400 [font-variant:small-caps]">
          {secondary.reference}
        </p>
        <ScriptureQuoteShell>
          <blockquote className="mt-6 font-scripture text-[1.1875rem] leading-[1.92] text-zinc-900 sm:text-[1.25rem] sm:leading-[1.95]">
            {secondary.quote}
          </blockquote>
        </ScriptureQuoteShell>
      </>
    ) : null

  const hint = insights.length > 0 ? (
    <p className="mt-10 text-xs text-zinc-500">Tap a highlighted word for a brief Greek/Hebrew note.</p>
  ) : null

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400 [font-variant:small-caps]">
          {reference}
        </p>
        <button
          type="button"
          onClick={() => void handleCopy()}
          className={`rounded-lg border border-zinc-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors hover:bg-zinc-50 ${READER_FOCUS_RING}`}
        >
          {copied ? 'Copied' : 'Copy verse'}
        </button>
      </div>
      <ScriptureQuoteShell>
        <blockquote className="mt-6 font-scripture text-[1.1875rem] leading-[1.92] text-zinc-900 sm:text-[1.25rem] sm:leading-[1.95]">
          {renderQuoteWithInsights(quote, insights)}
        </blockquote>
      </ScriptureQuoteShell>
      {chain?.length ? <ScriptureChain references={chain} /> : null}
      {afterPrimary?.trim() ? (
        <AfterBridge text={afterPrimary} emphasisPhrases={afterPrimaryEmphasisPhrases} />
      ) : null}
      {secondaryBlock}
      {afterSecondary?.trim() ? (
        <AfterBridge text={afterSecondary} emphasisPhrases={afterSecondaryEmphasisPhrases} />
      ) : null}
      {hint}
    </>
  )
}
