import type { ReactNode } from 'react'
import {
  lineIsBoldWrapped,
  parseLessonTextSegments,
  type LessonTextSegment,
} from '@/lib/lesson-text-renderer/parse-lesson-text'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Phrase list emphasis (same rules as scripture “after” copy); combines with `**bold**` per segment. */
function renderWithPhraseEmphasis(text: string, phrases: string[]): ReactNode {
  const uniq = [...new Set(phrases.filter((p) => p.trim().length > 0))]
  if (!uniq.length) return renderInlineEmphasis(text)
  const pattern = uniq.map((p) => escapeRegExp(p)).join('|')
  const re = new RegExp(`(${pattern})`, 'g')
  const parts = text.split(re)
  return (
    <>
      {parts.map((part, i) => {
        if (uniq.includes(part)) {
          return (
            <span key={`pe-${i}`} className="font-semibold text-zinc-900">
              {part}
            </span>
          )
        }
        return <span key={`pt-${i}`}>{renderInlineEmphasis(part)}</span>
      })}
    </>
  )
}

function renderInlineEmphasis(text: string): ReactNode {
  const parts = text.split(/(\*\*.+?\*\*)/g)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    const m = part.match(/^\*\*(.+)\*\*$/)
    if (m) {
      return (
        <span key={i} className="font-semibold text-zinc-900">
          {m[1]}
        </span>
      )
    }
    return part
  })
}

function renderLine(line: string, phraseEmphasis?: string[]): ReactNode {
  const { emphasis, text } = lineIsBoldWrapped(line)
  const body =
    phraseEmphasis?.length && phraseEmphasis.length > 0
      ? renderWithPhraseEmphasis(text, phraseEmphasis)
      : renderInlineEmphasis(text)
  if (emphasis) {
    return (
      <span className="block border-l-2 border-zinc-200/90 pl-3 font-medium text-zinc-900">{body}</span>
    )
  }
  return <span className="block">{body}</span>
}

const bodyText = 'text-[1.07rem] text-zinc-700 md:text-[1.09rem]'

/** Rhythm between segments: tight for consecutive short “beats”, breathable for prose. */
function spacingBefore(prev: LessonTextSegment, curr: LessonTextSegment): string {
  if (prev.kind === 'shortsolo' && curr.kind === 'shortsolo') return 'mt-2.5'
  if (prev.kind === 'compact' && curr.kind === 'shortsolo') return 'mt-4'
  if (prev.kind === 'shortsolo' && curr.kind === 'compact') return 'mt-4'
  if (prev.kind === 'compact' && curr.kind === 'compact') return 'mt-5'
  return 'mt-5'
}

interface LessonTextRendererProps {
  text: string
  /** e.g. opening thought max width */
  className?: string
  /** Prayer: scripture font + roomier lines. Insight: slightly smaller body for cards. */
  tone?: 'default' | 'prayer' | 'insight'
  /** Optional phrases to emphasize (matches `paragraph.emphasisPhrases` in CMS blocks). */
  phraseEmphasis?: string[]
}

export function LessonTextRenderer({
  text,
  className = '',
  tone = 'default',
  phraseEmphasis,
}: LessonTextRendererProps) {
  const segments = parseLessonTextSegments(text)
  if (segments.length === 0) return null

  const bodyTone =
    tone === 'prayer'
      ? 'text-[1.0625rem] text-zinc-800 md:text-[1.08rem] font-scripture leading-[1.95]'
      : tone === 'insight'
        ? 'text-sm text-zinc-700 md:text-[0.9375rem]'
        : bodyText

  return (
    <div className={`flex max-w-[52ch] flex-col ${className}`.trim()}>
      {segments.map((seg, i) => {
        const marginTop = i === 0 ? '' : spacingBefore(segments[i - 1]!, seg)
        return renderSegment(seg, i, marginTop, bodyTone, tone, phraseEmphasis)
      })}
    </div>
  )
}

function renderSegment(
  seg: LessonTextSegment,
  i: number,
  marginTop: string,
  bodyTone: string,
  tone: 'default' | 'prayer' | 'insight',
  phraseEmphasis?: string[],
): ReactNode {
  const proseLeading =
    tone === 'prayer' ? 'leading-[1.95]' : tone === 'insight' ? 'leading-[1.72]' : 'leading-[1.75]'
  const compactLine = `${bodyTone} leading-[1.75]`
  const mt = marginTop ? marginTop : ''

  if (seg.kind === 'compact') {
    return (
      <div key={i} className={`${mt} flex flex-col gap-1.5 py-1 ${bodyTone}`.trim()}>
        {seg.lines.map((line, j) => (
          <p key={j} className={`m-0 ${compactLine}`}>
            {renderLine(line, phraseEmphasis)}
          </p>
        ))}
      </div>
    )
  }

  if (seg.kind === 'shortsolo') {
    return (
      <p
        key={i}
        className={`${mt} m-0 ${bodyTone} ${tone === 'prayer' ? 'leading-[1.95]' : tone === 'insight' ? 'leading-[1.72]' : 'leading-[1.75]'}`.trim()}
      >
        {renderLine(seg.text, phraseEmphasis)}
      </p>
    )
  }

  return (
    <p key={i} className={`${mt} m-0 ${bodyTone} ${proseLeading}`.trim()}>
      {phraseEmphasis?.length
        ? renderWithPhraseEmphasis(seg.text, phraseEmphasis)
        : renderInlineEmphasis(seg.text)}
    </p>
  )
}
