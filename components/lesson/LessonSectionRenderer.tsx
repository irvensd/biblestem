import type { LessonStep } from '@/lib/lesson-steps'
import { ReflectionInput } from '@/components/lesson/ReflectionInput'
import { ScriptureBlock } from '@/components/lesson/ScriptureBlock'

interface LessonSectionRendererProps {
  step: LessonStep
  reflectionStorageKey: string
}

export function LessonSectionRenderer({ step, reflectionStorageKey }: LessonSectionRendererProps) {
  return (
    <div className="pb-6 pt-10 md:pt-12">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{step.title}</h2>

      <div className="mt-8">
        {step.type === 'opening_thought' ? (
          <p className="text-[1.0625rem] leading-[1.85] text-zinc-700 md:text-[1.08rem]">{step.body}</p>
        ) : null}

        {step.type === 'scripture' ? (
          <ScriptureBlock
            reference={step.reference}
            quote={step.quote}
            highlightSurface={step.highlightSurface}
            wordStudy={step.wordStudy}
          />
        ) : null}

        {step.type === 'teaching_points' ? (
          <ul className="space-y-4 text-[1.0625rem] leading-[1.8] text-zinc-700">
            {step.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-800/60" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {step.type === 'word_study' ? (
          <div className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-7">
            <p className="text-sm leading-relaxed text-zinc-600">{step.intro}</p>
            <div className="mt-6 border-t border-zinc-100 pt-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">Original</p>
              <p className="mt-2 text-xl font-semibold text-zinc-900">{step.data.lemma}</p>
              <p className="mt-1 text-sm text-zinc-500">{step.data.transliteration}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">{step.data.meaning}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-zinc-500">
                <span className="rounded border border-zinc-200 px-1.5 py-0.5">Strong&apos;s {step.data.strongs}</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">{step.data.note}</p>
            </div>
          </div>
        ) : null}

        {step.type === 'reflect_journal' ? (
          <ReflectionInput storageKey={reflectionStorageKey} prompt={step.prompt} />
        ) : null}

        {step.type === 'life_application' ? (
          <p className="text-[1.0625rem] leading-[1.85] text-zinc-700 md:text-[1.08rem]">{step.body}</p>
        ) : null}

        {step.type === 'prayer' ? (
          <p className="font-serif text-[1.0625rem] leading-[1.9] text-zinc-800 md:text-[1.125rem]">{step.body}</p>
        ) : null}
      </div>
    </div>
  )
}
