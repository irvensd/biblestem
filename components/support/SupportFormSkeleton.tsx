/** Loading placeholder for forms that use `useSearchParams` (Support page, Settings). */
export function SupportFormSkeleton({ embedded }: { embedded?: boolean }) {
  const inner = (
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-28 rounded bg-zinc-200/90" />
      <div className="h-10 rounded-lg bg-zinc-100" />
      <div className="h-10 rounded-lg bg-zinc-100" />
      <div className="h-24 rounded-lg bg-zinc-100" />
    </div>
  )
  if (embedded) {
    return (
      <div className="rounded-lg border border-zinc-100 bg-stone-50/50 p-4" aria-hidden>
        {inner}
      </div>
    )
  }
  return (
    <div
      className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]"
      aria-hidden
    >
      {inner}
    </div>
  )
}
