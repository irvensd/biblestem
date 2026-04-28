export default function SettingsLoading() {
  return (
    <div className="min-h-[60vh] border-b border-zinc-200/80 bg-stone-50">
      <div className="container-shell py-14 md:py-16">
        <div className="h-8 w-40 animate-pulse rounded-lg bg-zinc-200/80" />
        <div className="mt-4 h-4 w-72 max-w-full animate-pulse rounded bg-zinc-200/60" />
        <div className="mt-10 grid gap-6">
          <div className="h-44 animate-pulse rounded-xl bg-zinc-200/50" />
          <div className="h-44 animate-pulse rounded-xl bg-zinc-200/45" />
          <div className="h-44 animate-pulse rounded-xl bg-zinc-200/40" />
        </div>
      </div>
    </div>
  )
}
