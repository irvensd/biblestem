export default function LessonReaderLoading() {
  return (
    <div className="min-h-[100dvh] bg-stone-50">
      <div className="sticky top-0 z-40 border-b border-zinc-200/90 bg-stone-50/95 backdrop-blur-sm">
        <div className="h-1 w-full rounded-none bg-zinc-200/80">
          <div className="h-1 w-[35%] bg-blue-800/40" />
        </div>
        <div className="container-shell py-4">
          <div className="h-4 w-28 animate-pulse rounded bg-zinc-200/60" />
          <div className="mt-3 h-7 max-w-sm animate-pulse rounded-lg bg-zinc-200/80" />
          <div className="mt-2 h-4 w-40 animate-pulse rounded bg-zinc-200/55" />
        </div>
      </div>
      <div className="container-shell py-8">
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="h-4 w-full animate-pulse rounded bg-zinc-200/50" />
          <div className="h-4 w-[92%] animate-pulse rounded bg-zinc-200/45" />
          <div className="h-4 w-[88%] animate-pulse rounded bg-zinc-200/45" />
          <div className="h-32 animate-pulse rounded-xl bg-zinc-200/40" />
        </div>
      </div>
    </div>
  )
}
