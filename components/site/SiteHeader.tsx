import { HeaderAuthControls } from '@/components/site/HeaderAuthControls'
import { SiteHeaderNav } from '@/components/site/SiteHeaderNav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/90 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8 lg:px-10">
        <SiteHeaderNav />
        <HeaderAuthControls />
      </div>
    </header>
  )
}
