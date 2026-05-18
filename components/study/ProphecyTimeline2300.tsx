'use client'

import {
  PROPHECY_TIMELINE_2300_ARIA_LABEL,
  PROPHECY_TIMELINE_2300_DEFAULT_CAPTION,
  PROPHECY_TIMELINE_2300_END,
  PROPHECY_TIMELINE_2300_HALF_WEEKS,
  PROPHECY_TIMELINE_2300_MARKERS,
  PROPHECY_TIMELINE_2300_REMAINDER,
  PROPHECY_TIMELINE_2300_SEVENTY_WEEKS,
  PROPHECY_TIMELINE_2300_START,
} from '@/lib/prophecy-timeline-2300-data'

export interface ProphecyTimeline2300Props {
  title?: string
  subtitle?: string
  caption?: string
  labelledBy?: string
}

/** Daniel 8:14 — 2300 days/years with the 70-week portion (457 BC to 1844 AD). */
export function ProphecyTimeline2300({
  title = '2300 Days / Years',
  subtitle = 'Daniel 8:14',
  caption = PROPHECY_TIMELINE_2300_DEFAULT_CAPTION,
  labelledBy,
}: ProphecyTimeline2300Props) {
  const headingId = labelledBy ?? 'prophecy-timeline-2300-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label={PROPHECY_TIMELINE_2300_ARIA_LABEL}
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-1 text-sm font-medium text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      {/* Mobile: vertical stack */}
      <div className="space-y-3 lg:hidden">
        <TimelineNode year={PROPHECY_TIMELINE_2300_START.year} label={PROPHECY_TIMELINE_2300_START.label} variant="start" />
        <SegmentCard
          tone="light"
          title={PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.title}
          range={`${PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.from} to ${PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.to}`}
          nested={`${PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.nestedTitle} (${PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.from} to ${PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.nestedTo})`}
        />
        <MarkersList />
        <HalfWeekNotes />
        <SegmentCard
          tone="dark"
          title={PROPHECY_TIMELINE_2300_REMAINDER.title}
          range={`${PROPHECY_TIMELINE_2300_REMAINDER.from} to ${PROPHECY_TIMELINE_2300_REMAINDER.to}`}
        />
        <TimelineNode year={PROPHECY_TIMELINE_2300_END.year} label={PROPHECY_TIMELINE_2300_END.label} variant="end" />
      </div>

      {/* Desktop: horizontal scrollable rail */}
      <div className="hidden overflow-x-auto pb-2 lg:block">
        <div className="min-w-[52rem] space-y-4 px-1">
          <div className="flex items-stretch gap-2">
            <EndpointPill year={PROPHECY_TIMELINE_2300_START.year} label={PROPHECY_TIMELINE_2300_START.label} />
            <div className="flex min-w-0 flex-[2] flex-col rounded-xl border border-sky-300/70 bg-sky-50/50 px-3 py-3 ring-1 ring-sky-200/50">
              <p className="text-xs font-semibold text-sky-900">{PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.title}</p>
              <p className="mt-1 text-[11px] text-sky-800/90">
                {PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.from} to {PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.to}
              </p>
              <p className="mt-2 border-t border-sky-200/80 pt-2 text-[11px] font-medium text-sky-900/90">
                {PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.nestedTitle} ({PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.from} to{' '}
                {PROPHECY_TIMELINE_2300_SEVENTY_WEEKS.nestedTo})
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROPHECY_TIMELINE_2300_MARKERS.map((m) => (
                  <MarkerChip key={m.year} {...m} />
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2 border-t border-dotted border-sky-200/90 pt-2">
                {PROPHECY_TIMELINE_2300_HALF_WEEKS.map((hw) => (
                  <span
                    key={hw.span}
                    className="rounded-md bg-white/70 px-2 py-0.5 text-[10px] font-medium text-sky-900/80 ring-1 ring-sky-200/80"
                  >
                    {hw.label} ({hw.span})
                  </span>
                ))}
              </div>
            </div>
            <div className="flex min-w-0 flex-[1.2] flex-col justify-center rounded-xl border border-blue-900/25 bg-blue-950/5 px-3 py-3 ring-1 ring-blue-900/10">
              <p className="text-xs font-semibold text-blue-950">{PROPHECY_TIMELINE_2300_REMAINDER.title}</p>
              <p className="mt-1 text-[11px] text-blue-900/85">
                {PROPHECY_TIMELINE_2300_REMAINDER.from} to {PROPHECY_TIMELINE_2300_REMAINDER.to}
              </p>
            </div>
            <EndpointPill year={PROPHECY_TIMELINE_2300_END.year} label={PROPHECY_TIMELINE_2300_END.label} accent="end" />
          </div>
        </div>
      </div>

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}

function TimelineNode({
  year,
  label,
  variant,
}: {
  year: string
  label: string
  variant: 'start' | 'end'
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 shadow-sm ${
        variant === 'end'
          ? 'border-blue-900/30 bg-blue-950/5 ring-1 ring-blue-900/10'
          : 'border-zinc-200/90 bg-white ring-1 ring-zinc-950/[0.03]'
      }`}
    >
      <p className="text-xs font-bold tabular-nums text-zinc-900">{year}</p>
      <p className="mt-1 text-sm font-medium text-zinc-700">{label}</p>
    </div>
  )
}

function SegmentCard({
  tone,
  title,
  range,
  nested,
}: {
  tone: 'light' | 'dark'
  title: string
  range: string
  nested?: string
}) {
  const toneClass =
    tone === 'light'
      ? 'border-sky-300/70 bg-sky-50/50 ring-sky-200/50'
      : 'border-blue-900/25 bg-blue-950/5 ring-blue-900/10'
  return (
    <div className={`rounded-xl border px-4 py-3 shadow-sm ring-1 ${toneClass}`}>
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-1 text-xs text-zinc-600">{range}</p>
      {nested ? <p className="mt-2 border-t border-zinc-200/80 pt-2 text-xs text-zinc-600">{nested}</p> : null}
    </div>
  )
}

function MarkersList() {
  return (
    <ul className="flex flex-wrap gap-2">
      {PROPHECY_TIMELINE_2300_MARKERS.map((m) => (
        <li key={m.year}>
          <MarkerChip {...m} />
        </li>
      ))}
    </ul>
  )
}

function MarkerChip({
  year,
  label,
  subLabel,
  highlight,
}: {
  year: string
  label: string
  subLabel?: string
  highlight?: boolean
}) {
  return (
    <span
      className={`inline-flex flex-col rounded-lg px-2.5 py-1.5 text-left ring-1 ${
        highlight
          ? 'bg-blue-800 text-white ring-blue-900/30'
          : 'bg-white text-zinc-800 ring-zinc-200/90'
      }`}
    >
      <span className="text-[10px] font-bold tabular-nums">{year}</span>
      <span className="text-[11px] font-medium leading-tight">{label}</span>
      {subLabel ? <span className="text-[10px] opacity-90">{subLabel}</span> : null}
    </span>
  )
}

function HalfWeekNotes() {
  return (
    <ul className="space-y-1.5 border-l-2 border-dotted border-zinc-300 pl-3">
      {PROPHECY_TIMELINE_2300_HALF_WEEKS.map((hw) => (
        <li key={hw.span} className="text-xs text-zinc-600">
          <span className="font-medium text-zinc-800">{hw.label}</span> ({hw.span})
        </li>
      ))}
    </ul>
  )
}

function EndpointPill({ year, label, accent }: { year: string; label: string; accent?: 'end' }) {
  return (
    <div
      className={`flex w-28 shrink-0 flex-col justify-center rounded-xl border px-3 py-3 text-center shadow-sm ${
        accent === 'end'
          ? 'border-blue-900/30 bg-blue-950/5 ring-1 ring-blue-900/10'
          : 'border-zinc-200/90 bg-white ring-1 ring-zinc-950/[0.03]'
      }`}
    >
      <p className="text-xs font-bold tabular-nums text-zinc-900">{year}</p>
      <p className="mt-1 text-[10px] font-medium leading-snug text-zinc-600">{label}</p>
    </div>
  )
}
