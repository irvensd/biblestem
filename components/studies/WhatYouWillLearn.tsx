interface WhatYouWillLearnProps {
  items: string[]
}

export function WhatYouWillLearn({ items }: WhatYouWillLearnProps) {
  if (items.length === 0) return null

  return (
    <section className="scroll-mt-8">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">What you&apos;ll learn</h2>
      <ul className="mt-5 list-none space-y-3 text-sm leading-relaxed text-zinc-700">
        {items.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
