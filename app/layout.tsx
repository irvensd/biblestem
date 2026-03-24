import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DemoAuthProvider } from '@/components/auth/DemoAuthProvider'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BibleStem',
  description: 'Deep Bible study made simple.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DemoAuthProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </DemoAuthProvider>
      </body>
    </html>
  )
}
