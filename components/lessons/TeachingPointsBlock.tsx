'use client'

import { LessonTextRenderer } from '@/components/lessons/LessonTextRenderer'
import { WordStudyPopover } from '@/components/lessons/WordStudyPopover'
import type { WordInsight } from '@/lib/lesson-content'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function matchInsight(part: string, insights: WordInsight[]): WordInsight | undefined {
  return insights.find((w) => w.surface.toLowerCase() === part.toLowerCase())
}

function renderLineWithInsights(text: string, insights: WordInsight[]) {
  if (!insights.length) return text
  const sorted = [...insights].sort((a, b) => b.surface.length - a.surface.length)
  const pattern = sorted.map((s) => escapeRegExp(s.surface)).join('|')
  const re = new RegExp(`(${pattern})`, 'gi')
  const parts = text.split(re)
  return (
    <>
      {parts.map((part, i) => {
        const insight = matchInsight(part, insights)
        if (insight) {
          return <WordStudyPopover key={`${i}-${part}`} surface={part} study={insight} />
        }
        return <span key={`${i}-t`}>{part}</span>
      })}
    </>
  )
}

/** Lead line + body (first newline) without whitespace-pre-*; insights still use regex split on surfaces only. */
function renderPointWithInsights(point: string, insights: WordInsight[]) {
  const raw = point.replace(/\r\n/g, '\n')
  const nl = raw.indexOf('\n')
  if (nl === -1) {
    return <div className="min-w-0">{renderLineWithInsights(raw, insights)}</div>
  }
  const lead = raw.slice(0, nl).trimEnd()
  const body = raw.slice(nl + 1)
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <div className="font-medium text-zinc-800">{renderLineWithInsights(lead, insights)}</div>
      <div className="font-normal text-zinc-700">{renderLineWithInsights(body, insights)}</div>
    </div>
  )
}

interface TeachingPointsBlockProps {
  points: string[]
  teachingInsights: { pointIndex: number; insights: WordInsight[] }[]
}

export function TeachingPointsBlock({ points, teachingInsights }: TeachingPointsBlockProps) {
  function insightsForIndex(i: number): WordInsight[] {
    return teachingInsights.find((x) => x.pointIndex === i)?.insights ?? []
  }

  return (
    <ul className="space-y-4 text-[1.05rem] leading-[1.75] text-zinc-700">
      {points.map((point, i) => {
        const insights = insightsForIndex(i)
        return (
          <li key={`tp-${i}`} className="flex gap-2.5">
            <span
              className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-blue-800/40"
              aria-hidden
            />
            <div className="min-w-0 flex-1 max-w-[58ch]">
              {insights.length > 0 ? (
                renderPointWithInsights(point, insights)
              ) : (
                <LessonTextRenderer text={point} className="!max-w-none" />
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
