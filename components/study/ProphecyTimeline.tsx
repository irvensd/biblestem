import type { ProphecyTimelineItem } from '@/lib/prophecy-timeline-types'

export interface ProphecyTimelineProps {
  /** Short heading above the rail (e.g. “490 Years / 70 Weeks”). */
  label?: string
  /** Main title (defaults to “Timeline”). */
  heading?: string
  items: ProphecyTimelineItem[]
  /** Optional explanatory bullets below the items. */
  footerNotes?: string[]
  /** Optional id for `aria-labelledby`. */
  id?: string
}

/**
 * Minimal, reusable prophecy timeline for lesson content (e.g. Daniel 9).
 * Static and screen-reader friendly; pair with data from `lib/prophecy-timeline-*.ts`.
 */
export function ProphecyTimeline({ label, heading = 'Timeline', items, footerNotes, id }: ProphecyTimelineProps) {
  const ariaTitleId = id ? `${id}-timeline-title` : undefined
  const highlightCount = items.filter((item) => item.highlight).length

  return (
    <section id={id} {...(ariaTitleId ? { 'aria-labelledby': ariaTitleId } : {})} className="rounded-xl border border-zinc-200/90 bg-white p-5 ring-1 ring-zinc-950/[0.03] md:p-7">
      {label ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{label}</p>
      ) : null}
      <h3
        {...(ariaTitleId ? { id: ariaTitleId } : {})}
        className={`text-lg font-semibold tracking-tight text-zinc-900 ${label ? 'mt-2' : ''}`}
      >
        {heading}
      </h3>
      <ol className="mt-5 space-y-4" role="list">
        {items.map((item, index) => (
          <li
            key={`${item.dateLabel}-${item.title}-${index}`}
            className={`relative rounded-lg border px-4 py-3 md:px-5 md:py-4 ${
              item.highlight
                ? 'border-blue-800/25 bg-blue-50/50 ring-1 ring-blue-800/15'
                : 'border-zinc-200/80 bg-stone-50/40'
            }`}
            aria-current={item.highlight && highlightCount === 1 ? 'step' : undefined}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {item.dateLabel}
              </span>
              <span className="text-sm font-semibold text-zinc-900">{item.title}</span>
            </div>
            {item.description ? (
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
            ) : null}
            <p className="mt-2 text-xs font-medium text-zinc-600">
              <span className="sr-only">Scripture references: </span>
              <cite className="not-italic">{item.scriptureReference}</cite>
            </p>
          </li>
        ))}
      </ol>
      {footerNotes?.length ? (
        <ul className="mt-5 space-y-2 border-t border-zinc-200/80 pt-4 text-sm leading-relaxed text-zinc-600">
          {footerNotes.map((note, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
