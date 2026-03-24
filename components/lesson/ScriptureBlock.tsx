'use client'

import { WordStudyPopover } from '@/components/lesson/WordStudyPopover'
import type { LessonReaderContent } from '@/lib/lesson-content'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

type WordStudy = NonNullable<LessonReaderContent['wordStudy']>

interface ScriptureBlockProps {
  reference: string
  quote: string
  highlightSurface: string | null
  wordStudy: WordStudy | null
}

export function ScriptureBlock({ reference, quote, highlightSurface, wordStudy }: ScriptureBlockProps) {
  if (!highlightSurface || !wordStudy) {
    return (
      <>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{reference}</p>
        <blockquote className="mt-8 font-serif text-[1.0625rem] leading-[1.9] text-zinc-800 sm:text-[1.125rem]">
          {quote}
        </blockquote>
      </>
    )
  }

  const re = new RegExp(`(${escapeRegExp(highlightSurface)})`, 'gi')
  const parts = quote.split(re)

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{reference}</p>
      <blockquote className="mt-8 font-serif text-[1.0625rem] leading-[1.9] text-zinc-800 sm:text-[1.125rem]">
        {parts.map((part, i) => {
          const isMatch = part.toLowerCase() === highlightSurface.toLowerCase()
          if (isMatch) {
            return (
              <WordStudyPopover
                key={`${i}-${part}`}
                surface={part}
                study={{
                  lemma: wordStudy.lemma,
                  transliteration: wordStudy.transliteration,
                  meaning: wordStudy.meaning,
                  strongs: wordStudy.strongs,
                  note: wordStudy.note,
                }}
              />
            )
          }
          return <span key={`${i}-t`}>{part}</span>
        })}
      </blockquote>
      <p className="mt-8 text-xs text-zinc-500">Tap a highlighted word to see a short word study.</p>
    </>
  )
}
