import type { ReactNode } from 'react'

/** Auth is enforced by the parent study-library layout before children render. */
export default function StudySeriesLayout({ children }: { children: ReactNode }) {
  return children
}
