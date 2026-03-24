import { HeaderAuthControls } from '@/components/site/HeaderAuthControls'
import { MobileNavDrawer } from '@/components/site/MobileNavDrawer'
import { SiteHeaderNav } from '@/components/site/SiteHeaderNav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-stone-50/95 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 md:gap-4 md:px-8 lg:px-10">
        <SiteHeaderNav />
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <MobileNavDrawer />
          <HeaderAuthControls />
        </div>
      </div>
    </header>
  )
}
