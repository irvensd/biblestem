import { redirect } from 'next/navigation'

/** Legacy route: Intermediate track is now labeled Hard Questions. */
export default async function IntermediateStudiesBrowseRedirect({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>
}) {
  const { from } = await searchParams
  const target = from
    ? `/study-library/hard-questions?from=${encodeURIComponent(from)}`
    : '/study-library/hard-questions'
  redirect(target)
}
