import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { DemoAuthProvider } from '@/components/auth/DemoAuthProvider'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const lora = Lora({ subsets: ['latin'], variable: '--font-scripture' })

export const metadata: Metadata = {
  title: 'BibleStem',
  description: 'Deep Bible study made simple.',
  icons: {
    icon: [{ url: '/favicon.png?v=4', type: 'image/png' }],
    shortcut: '/favicon.png?v=4',
    apple: [{ url: '/favicon.png?v=4', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Extensions (e.g. Storylane) may add classes to <html> before hydration.
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <DemoAuthProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </DemoAuthProvider>
      </body>
    </html>
  )
}
