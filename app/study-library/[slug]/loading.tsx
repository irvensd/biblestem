export default function StudySeriesDetailLoading() {
  return (
    <div className="border-b border-zinc-200/80 bg-stone-50">
      <div className="container-shell py-12 md:py-16">
        <div className="h-3 w-40 animate-pulse rounded bg-zinc-200/60" />
        <div className="mt-4 h-9 max-w-xl animate-pulse rounded-lg bg-zinc-200/80" />
        <div className="mt-3 h-4 max-w-2xl animate-pulse rounded bg-zinc-200/55" />
        <div className="mt-8 h-24 max-w-2xl animate-pulse rounded-xl bg-zinc-200/45" />
      </div>
    </div>
  )
}
