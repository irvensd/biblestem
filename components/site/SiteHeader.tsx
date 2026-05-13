import { HeaderAuthControls } from '@/components/site/HeaderAuthControls'
import { MobileNavDrawer } from '@/components/site/MobileNavDrawer'
import { SiteHeaderNav } from '@/components/site/SiteHeaderNav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-stone-50/95 pt-[env(safe-area-inset-top)] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur supports-[backdrop-filter]:bg-stone-50/85">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 md:gap-6 md:px-8 lg:px-10">
        <SiteHeaderNav />
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <MobileNavDrawer />
          <HeaderAuthControls />
        </div>
      </div>
    </header>
  )
}
