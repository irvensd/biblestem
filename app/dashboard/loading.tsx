/**
 * Shown immediately on navigation to /dashboard while loadCatalog() and the page shell resolve.
 */
export default function DashboardLoading() {
  return (
    <div className="min-h-[60vh] border-b border-zinc-200/80 bg-stone-50">
      <div className="container-shell py-14 md:py-16">
        <div className="h-8 w-48 max-w-full animate-pulse rounded-lg bg-zinc-200/80" />
        <div className="mt-6 h-12 max-w-md animate-pulse rounded-lg bg-zinc-200/80" />
        <div className="mt-4 h-4 w-32 animate-pulse rounded bg-zinc-200/60" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-start lg:gap-14">
          <div className="flex flex-col gap-10">
            <div className="h-48 animate-pulse rounded-xl bg-zinc-200/50" />
            <div className="h-40 animate-pulse rounded-xl bg-zinc-200/45" />
            <div className="h-32 animate-pulse rounded-xl bg-zinc-200/40" />
          </div>
          <aside className="hidden flex-col gap-8 lg:flex">
            <div className="h-36 animate-pulse rounded-xl bg-zinc-200/45" />
            <div className="h-28 animate-pulse rounded-xl bg-zinc-200/40" />
          </aside>
        </div>
      </div>
    </div>
  )
}
