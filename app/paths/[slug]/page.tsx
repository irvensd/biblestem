import { PathDetailView } from '@/components/paths/PathDetailView'

export default async function PathDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <PathDetailView pathSlug={slug} />
}
