import Link from 'next/link'
import { formatPreviewTrackMeta, type StudyTrackDefinition } from '@/lib/study-tracks'

interface StudiesPreviewTrackCardProps {
  track: StudyTrackDefinition
  studyCount: number
}

export function StudiesPreviewTrackCard({ track, studyCount }: StudiesPreviewTrackCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" />
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{track.publicLabel}</h2>
      <p className="mt-1.5 text-xs text-zinc-500">{formatPreviewTrackMeta(studyCount, track.previewMetaLabel)}</p>
      <p className="mt-3 min-h-[4.5rem] flex-1 text-sm leading-relaxed text-zinc-600">{track.sectionDescription}</p>
      <Link
        href={track.previewHref}
        className="mt-6 inline-flex w-full min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 sm:w-auto"
      >
        {track.previewCta}
      </Link>
    </article>
  )
}
