import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { HomePageContent } from '@/components/home/HomePageContent'
import { getServerAuthUser } from '@/lib/supabase/server'

export const metadata: Metadata = {
  title: 'BibleStem',
  description: 'Deep Bible study made simple. A free account is required to read lessons. There is no paid tier.',
  alternates: { canonical: '/' },
  openGraph: { url: '/', images: [{ url: '/logo.png', alt: 'BibleStem' }] },
}

export default async function HomePage() {
  const user = await getServerAuthUser()
  if (user) redirect('/dashboard')
  return <HomePageContent />
}
