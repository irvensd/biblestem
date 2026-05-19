'use client'

import { useState } from 'react'
import {
  MILLENNIUM_EVENT_CHART_AFTER,
  MILLENNIUM_EVENT_CHART_BEFORE,
  MILLENNIUM_EVENT_CHART_DEFAULT_CAPTION,
  MILLENNIUM_EVENT_CHART_DURING,
  type MillenniumEventChartCardData,
  type MillenniumEventChartColumnData,
} from '@/lib/millennium-event-chart-stages'

export interface MillenniumEventChartProps {
  before?: MillenniumEventChartColumnData
  during?: MillenniumEventChartColumnData
  after?: MillenniumEventChartColumnData
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

function EventCard({ card, index }: { card: MillenniumEventChartCardData; index: number }) {
  const [open, setOpen] = useState(false)
  const refLine = card.references.join(' · ')

  return (
    <article className="rounded-xl border border-indigo-200/70 bg-white/95 px-3.5 py-3 shadow-sm ring-1 ring-indigo-950/[0.03]">
      <EventCardBody card={card} index={index} refLine={refLine} open={open} setOpen={setOpen} />
    </article>
  )
}

function EventCardBody({
  card,
  index,
  refLine,
  open,
  setOpen,
}: {
  card: MillenniumEventChartCardData
  index: number
  refLine: string
  open: boolean
  setOpen: (v: boolean) => void
}) {
  return (
    <div className="flex gap-2">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-900 ring-1 ring-indigo-200/80"
        aria-hidden
      >
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-zinc-900">{card.title}</h4>
        <p className="mt-1 text-sm leading-snug text-zinc-600">{card.text}</p>
        <p className="mt-2 hidden text-[11px] font-medium leading-relaxed text-indigo-900/70 lg:block">{refLine}</p>
        <button
          type="button"
          className="mt-2 text-left text-xs font-medium text-indigo-800 underline-offset-2 hover:underline lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? 'Hide references' : 'Show references'}
        </button>
        {open ? (
          <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-indigo-900/70 lg:hidden">{refLine}</p>
        ) : null}
      </div>
    </div>
  )
}

function ResurrectionDivider({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-2 px-1 py-4 lg:px-2 lg:py-0">
      <span className="hidden h-full min-h-[4rem] w-px bg-indigo-300/80 lg:block" aria-hidden />
      <span className="rounded-full border border-indigo-300/80 bg-indigo-50 px-2.5 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-indigo-900 lg:[writing-mode:vertical-rl] lg:rotate-180">
        {label}
      </span>
      <span className="hidden h-full min-h-[4rem] w-px bg-indigo-300/80 lg:block" aria-hidden />
    </div>
  )
}

function ColumnBlock({ column }: { column: MillenniumEventChartColumnData }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3">
      <h4 className="text-center text-sm font-semibold text-indigo-950 lg:text-left">{column.label}</h4>
      <ul className="flex flex-col gap-2.5">
        {column.cards.map((card, index) => (
          <li key={`${card.title}-${index}`}>
            <EventCard card={card} index={index} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Three-column Millennium timeline with resurrection dividers (responsive). */
export function MillenniumEventChart({
  before = MILLENNIUM_EVENT_CHART_BEFORE,
  during = MILLENNIUM_EVENT_CHART_DURING,
  after = MILLENNIUM_EVENT_CHART_AFTER,
  title = 'The Millennium: 1000 Years',
  subtitle,
  caption = MILLENNIUM_EVENT_CHART_DEFAULT_CAPTION,
  labelledBy,
}: MillenniumEventChartProps) {
  const headingId = labelledBy ?? 'millennium-event-chart-heading'

  return (
    <section
      className="w-full max-w-5xl"
      aria-labelledby={headingId}
      aria-label="Chart showing the order of events before, during, and after the Millennium."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <div className="hidden lg:flex lg:items-stretch lg:gap-2">
        <ColumnBlock column={before} />
        <ResurrectionDivider label="1st Resurrection" />
        <ColumnBlock column={during} />
        <ResurrectionDivider label="2nd Resurrection" />
        <ColumnBlock column={after} />
      </div>

      <div className="flex flex-col gap-4 lg:hidden">
        <ColumnBlock column={before} />
        <p className="text-center text-xs font-bold uppercase tracking-wide text-indigo-800">1st Resurrection</p>
        <ColumnBlock column={during} />
        <p className="text-center text-xs font-bold uppercase tracking-wide text-indigo-800">2nd Resurrection</p>
        <ColumnBlock column={after} />
      </div>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
