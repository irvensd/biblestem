'use client'

import {
  TRANSPARENT_JUDGMENT_PANEL_DEFAULT_CAPTION,
  TRANSPARENT_JUDGMENT_PANEL_SCRIPTURE_ANCHORS,
  TRANSPARENT_JUDGMENT_PANELS,
  type TransparentJudgmentPanelData,
} from '@/lib/transparent-judgment-panel-stages'

export interface TransparentJudgmentPanelProps {
  panels?: readonly TransparentJudgmentPanelData[]
  highlightedIndices?: readonly number[]
  title?: string
  subtitle?: string
  caption?: string
  scriptureAnchors?: readonly string[]
  labelledBy?: string
}

function clampHighlightSet(indices: readonly number[] | undefined, len: number): Set<number> {
  const out = new Set<number>()
  if (!indices?.length || len <= 0) return out
  for (const i of indices) {
    if (Number.isInteger(i) && i >= 0 && i < len) out.add(i)
  }
  return out
}

/** God opens the records so the redeemed see His transparent justice. */
export function TransparentJudgmentPanel({
  panels,
  highlightedIndices,
  title = 'God\'s Transparent Judgment',
  subtitle,
  caption = TRANSPARENT_JUDGMENT_PANEL_DEFAULT_CAPTION,
  scriptureAnchors = TRANSPARENT_JUDGMENT_PANEL_SCRIPTURE_ANCHORS,
  labelledBy,
}: TransparentJudgmentPanelProps) {
  const list = panels !== undefined && panels.length > 0 ? panels : TRANSPARENT_JUDGMENT_PANELS
  const focus = clampHighlightSet(highlightedIndices, list.length)
  const headingId = labelledBy ?? 'transparent-judgment-panel-heading'

  return (
    <section
      className="w-full max-w-3xl"
      aria-labelledby={headingId}
      aria-label="Three-part explanation of God's transparent judgment during the Millennium."
    >
      <header className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{subtitle}</p>
        ) : null}
      </header>

      <ol className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {list.map((panel, index) => {
          const emphasized = focus.has(index)
          return (
            <li key={`${panel.label}-${index}`}>
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-xl border px-4 py-4 shadow-sm ${
                  emphasized
                    ? 'border-indigo-700/35 bg-indigo-50/50 ring-2 ring-indigo-700/15 ring-offset-2 ring-offset-stone-50'
                    : 'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03]'
                }`}
              >
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-indigo-600/70"
                  aria-hidden
                />
                <div className="pl-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wide text-indigo-800/80"
                    aria-hidden
                  >
                    Step {index + 1}
                  </span>
                  <h4 className="mt-1 text-sm font-semibold text-zinc-900">{panel.label}</h4>
                  <p className="mt-2 flex-1 text-sm leading-snug text-zinc-600">{panel.text}</p>
                </div>
              </article>
            </li>
          )
        })}
      </ol>

      {scriptureAnchors.length > 0 ? (
        <p className="mt-3 text-xs font-medium text-indigo-900/75">{scriptureAnchors.join(' · ')}</p>
      ) : null}

      {caption ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-[0.9375rem]">{caption}</p>
      ) : null}
    </section>
  )
}
