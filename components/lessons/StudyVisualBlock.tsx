'use client'

import { Fragment } from 'react'
import { Daniel2KingdomsDiagram } from '@/components/lessons/Daniel2KingdomsDiagram'
import type {
  StudyVisualAccent,
  StudyVisualLessonBlock,
  StudyVisualPayload,
} from '@/lib/lesson-content-blocks'

function accentSurface(accent: StudyVisualAccent | undefined): string {
  switch (accent) {
    case 'sky':
      return 'border-sky-200/80 bg-sky-50/45 shadow-sm shadow-sky-100/40'
    case 'sage':
      return 'border-emerald-200/75 bg-emerald-50/40 shadow-sm shadow-emerald-100/30'
    case 'amber':
      return 'border-amber-200/75 bg-amber-50/50 shadow-sm shadow-amber-100/35'
    case 'stone':
    default:
      return 'border-zinc-200/85 bg-stone-50/85 shadow-sm shadow-zinc-200/40'
  }
}

function TimelineGraphic({
  nodes,
}: {
  nodes: { label: string; subtitle?: string; reference?: string }[]
}) {
  const n = Math.max(nodes.length, 1)
  const vbW = 360
  const vbH = 96
  const pad = 28
  const usable = vbW - pad * 2
  const y = 36
  const step = n > 1 ? usable / (n - 1) : 0

  return (
    <div className="w-full overflow-x-auto pb-1">
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="mx-auto h-auto w-full max-w-full min-w-[260px]"
        role="img"
        aria-hidden
      >
        <title>Timeline</title>
        <line x1={pad} y1={y} x2={vbW - pad} y2={y} strokeWidth={2} className="stroke-zinc-300" />
        {nodes.map((node, i) => {
          const cx = n === 1 ? vbW / 2 : pad + step * i
          return (
            <g key={i}>
              <circle cx={cx} cy={y} r={7} className="fill-white stroke-zinc-400" strokeWidth={2} />
              <circle cx={cx} cy={y} r={4} className="fill-zinc-500" />
              <text
                x={cx}
                y={vbH - 12}
                textAnchor="middle"
                className="fill-zinc-800 text-[11px] font-semibold"
                style={{ fontFamily: 'inherit' }}
              >
                {node.label.length > 22 ? `${node.label.slice(0, 20)}…` : node.label}
              </text>
            </g>
          )
        })}
      </svg>
      <dl className="mt-4 grid gap-3 md:hidden">
        {nodes.map((node, i) => (
          <div key={i} className="rounded-lg border border-zinc-200/70 bg-white/70 px-3 py-2.5">
            <dt className="text-sm font-semibold text-zinc-800">{node.label}</dt>
            {node.subtitle ? (
              <dd className="mt-1 text-xs leading-relaxed text-zinc-600">{node.subtitle}</dd>
            ) : null}
            {node.reference ? (
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-400">{node.reference}</dd>
            ) : null}
          </div>
        ))}
      </dl>
      <ul className="mt-4 hidden gap-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
        {nodes.map((node, i) => (
          <li key={i} className="text-center">
            <p className="text-sm font-semibold leading-snug text-zinc-800">{node.label}</p>
            {node.subtitle ? (
              <p className="mt-1 text-xs leading-relaxed text-zinc-600">{node.subtitle}</p>
            ) : null}
            {node.reference ? (
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-400">{node.reference}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ComparisonGraphic(payload: Extract<StudyVisualPayload, { variant: 'comparison' }>) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <div className="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-4 md:px-5">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-zinc-500">{payload.leftTitle}</p>
        {payload.leftItems?.length ? (
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700">
            {payload.leftItems.map((t, i) => (
              <li key={i} className="border-l-2 border-zinc-200 pl-3">
                {t}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-zinc-500"> </p>
        )}
      </div>
      <div className="rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-4 md:px-5">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-zinc-500">{payload.rightTitle}</p>
        {payload.rightItems?.length ? (
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700">
            {payload.rightItems.map((t, i) => (
              <li key={i} className="border-l-2 border-zinc-200 pl-3">
                {t}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-zinc-500"> </p>
        )}
      </div>
    </div>
  )
}

function SequenceGraphic(payload: Extract<StudyVisualPayload, { variant: 'sequence' }>) {
  return (
    <ol className="relative space-y-0 border-l border-zinc-200 pl-6 md:pl-8">
      {payload.steps.map((step, i) => (
        <li key={i} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[29px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 bg-white text-xs font-semibold text-zinc-700 md:-left-[33px]">
            {i + 1}
          </span>
          <p className="text-[15px] font-semibold leading-snug text-zinc-900">{step.label}</p>
          {step.subtitle ? <p className="mt-1 text-sm leading-relaxed text-zinc-600">{step.subtitle}</p> : null}
          {step.reference ? (
            <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-zinc-400">{step.reference}</p>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

function ProphecyDiagramGraphic(payload: Extract<StudyVisualPayload, { variant: 'prophecyDiagram' }>) {
  const stages = payload.stages
  return (
    <div className="w-full overflow-x-auto pb-1">
      <div className="flex min-w-[min(100%,520px)] flex-wrap items-stretch justify-center gap-2 md:flex-nowrap md:gap-3">
        {stages.map((s, i) => (
          <Fragment key={i}>
            <div className="flex min-w-[6.5rem] flex-1 flex-col rounded-xl border border-zinc-200/85 bg-white/75 px-3 py-3 text-center md:min-w-[7rem]">
              <span className="text-[13px] font-semibold leading-snug text-zinc-800">{s.label}</span>
              {s.reference ? (
                <span className="mt-2 block text-[10px] font-medium uppercase tracking-wide text-zinc-400">{s.reference}</span>
              ) : null}
            </div>
            {i < stages.length - 1 ? (
              <span className="hidden self-center text-zinc-300 md:inline" aria-hidden>
                →
              </span>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function ScriptureChainGraphic(payload: Extract<StudyVisualPayload, { variant: 'scriptureChainVisual' }>) {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
      {payload.references.map((ref, i) => (
        <Fragment key={i}>
          {i > 0 ? (
            <span className="mx-0.5 inline-flex text-zinc-300" aria-hidden>
              ·
            </span>
          ) : null}
          <span className="inline-flex max-w-full flex-col rounded-lg border border-zinc-200/80 bg-white/80 px-2.5 py-2 text-left">
            <span className="text-[13px] font-semibold text-zinc-800">{ref.reference}</span>
            {ref.note ? <span className="mt-1 text-xs leading-snug text-zinc-600">{ref.note}</span> : null}
          </span>
        </Fragment>
      ))}
    </div>
  )
}

function payloadGraphic(payload: StudyVisualPayload) {
  switch (payload.variant) {
    case 'timeline':
      return payload.nodes?.length ? <TimelineGraphic nodes={payload.nodes} /> : null
    case 'comparison':
      return <ComparisonGraphic {...payload} />
    case 'sequence':
      return <SequenceGraphic {...payload} />
    case 'prophecyDiagram':
      return payload.stages?.length ? <ProphecyDiagramGraphic {...payload} /> : null
    case 'scriptureChainVisual':
      return payload.references?.length ? <ScriptureChainGraphic {...payload} /> : null
    case 'daniel2KingdomsDiagram':
      return (
        <Daniel2KingdomsDiagram
          secondComingLabel={payload.secondComingLabel}
          enableMobileTapReveal={payload.enableMobileTapReveal ?? true}
        />
      )
    default:
      return null
  }
}

export type StudyVisualBlockProps = {
  block: StudyVisualLessonBlock
}

/** BibleStem-branded study visuals for guided lessons (SVG-forward, responsive). */
export function StudyVisualBlock({ block }: StudyVisualBlockProps) {
  const {
    title,
    subtitle,
    description,
    verseReferences,
    footnote,
    accent,
    collapsibleExplanation,
    collapsibleLabel,
    collapsibleOnMobile,
    payload,
  } = block

  const shell = accentSurface(accent)
  const wideDiagram = payload.variant === 'daniel2KingdomsDiagram'
  const widthClass = wideDiagram ? 'max-w-[min(100%,46rem)]' : 'max-w-[52ch]'

  return (
    <aside className={`${widthClass} rounded-2xl border px-4 py-5 md:px-6 md:py-6 ${shell}`}>
      {title ? <h3 className="text-[15px] font-semibold tracking-tight text-zinc-900">{title}</h3> : null}
      {subtitle ? <p className={`mt-1 text-sm leading-relaxed text-zinc-600 ${title ? '' : ''}`}>{subtitle}</p> : null}
      {verseReferences?.length ? (
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">{verseReferences.join(' · ')}</p>
      ) : null}
      {description ? (
        <p className={`text-[1.0625rem] leading-relaxed text-zinc-700 md:text-[1.08rem] ${title || subtitle ? 'mt-4' : ''}`}>
          {description}
        </p>
      ) : null}

      <div className={description || title || subtitle ? 'mt-5' : ''}>{payloadGraphic(payload)}</div>

      {collapsibleExplanation ? (
        <>
          <div className="mt-4 hidden text-sm leading-relaxed text-zinc-600 md:block">{collapsibleExplanation}</div>
          {collapsibleOnMobile !== false ? (
            <details className="mt-4 rounded-xl border border-zinc-200/75 bg-white/60 px-3 py-2 md:hidden">
              <summary className="cursor-pointer text-sm font-medium text-zinc-600">{collapsibleLabel ?? 'More detail'}</summary>
              <p className="mt-2 pb-1 text-sm leading-relaxed text-zinc-600">{collapsibleExplanation}</p>
            </details>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:hidden">{collapsibleExplanation}</p>
          )}
        </>
      ) : null}

      {footnote ? (
        <p className={`border-t border-zinc-200/70 pt-3 text-xs leading-relaxed text-zinc-500 ${collapsibleExplanation || description ? 'mt-4' : 'mt-4'}`}>
          {footnote}
        </p>
      ) : null}
    </aside>
  )
}
