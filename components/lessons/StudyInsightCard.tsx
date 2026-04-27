import { LessonTextRenderer } from '@/components/lessons/LessonTextRenderer'
import { STUDY_INSIGHT_VARIANT_LABELS, type StudyInsightVariant } from '@/lib/lesson-content'

interface StudyInsightCardProps {
  title: string
  body: string
  variant?: StudyInsightVariant
}

function isGenericStudyInsightTitle(raw: string): boolean {
  const t = raw.trim().toLowerCase()
  return t === '' || t === 'study insight'
}

/**
 * When variant is omitted, infer a subtype from opening copy so the card does not repeat
 * the section heading with another generic "Study insight" line.
 */
function inferVariantFromBody(body: string): StudyInsightVariant | undefined {
  const sample = body.slice(0, 900).toLowerCase()
  if (
    /\b(prophecy|prophetic|revelation|apocalyptic|daniel|babylon|beast|144[,\s]?000|three angels|remnant)\b/.test(
      sample,
    )
  ) {
    return 'prophecy_lens'
  }
  if (
    /\b(another passage|parallel text|also appears|scripture.*(connect|link|echo)|cf\.|compare|alongside)\b/.test(
      sample,
    )
  ) {
    return 'scripture_connection'
  }
  if (/\b(doctrine|teaches us|means that|in other words|fundamental truth|belief)\b/.test(sample)) {
    return 'doctrine_clarity'
  }
  return undefined
}

function resolveKindLabel(
  title: string,
  body: string,
  variant?: StudyInsightVariant,
): { kindLabel: string; showSubtitle: boolean; subtitle: string } {
  const generic = isGenericStudyInsightTitle(title)
  const inferred = !variant && generic ? inferVariantFromBody(body) : undefined
  const effectiveVariant = variant ?? inferred

  if (effectiveVariant) {
    const kindLabel = STUDY_INSIGHT_VARIANT_LABELS[effectiveVariant]
    const showSubtitle = !generic
    return { kindLabel, showSubtitle, subtitle: title.trim() }
  }

  if (!generic) {
    return { kindLabel: 'Study insight', showSubtitle: true, subtitle: title.trim() }
  }

  return { kindLabel: 'Study insight', showSubtitle: false, subtitle: '' }
}

/** Small contextual bridge—restrained border, no heavy shadow. Body uses the shared lesson text rhythm. */
export function StudyInsightCard({ title, body, variant }: StudyInsightCardProps) {
  const { kindLabel, showSubtitle, subtitle } = resolveKindLabel(title, body, variant)

  return (
    <div className="rounded-xl border border-zinc-200/90 bg-stone-50/70 px-5 py-4 ring-1 ring-zinc-950/[0.02] md:px-6 md:py-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">{kindLabel}</p>
      {showSubtitle ? (
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{subtitle}</p>
      ) : null}
      <div className="mt-3">
        <LessonTextRenderer text={body} tone="insight" />
      </div>
    </div>
  )
}
