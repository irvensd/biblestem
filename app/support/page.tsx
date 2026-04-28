import { redirect } from 'next/navigation'

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

/** Legacy URL; technical support lives under Settings. Preserve query params for prefilled reports. */
export default async function SupportPageRedirect({ searchParams }: Props) {
  const sp = await searchParams
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(sp)) {
    if (value === undefined) continue
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v))
    } else {
      params.set(key, value)
    }
  }
  const qs = params.toString()
  redirect(qs ? `/settings?${qs}` : '/settings')
}
