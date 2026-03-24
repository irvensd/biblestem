import { redirect } from 'next/navigation'

/** Legacy route — use /paths */
export default function CategoriesRedirectPage() {
  redirect('/paths')
}
