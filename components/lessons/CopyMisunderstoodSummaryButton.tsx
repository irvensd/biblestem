'use client'

import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/Button'

export function CopyMisunderstoodSummaryButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [text])

  return (
    <Button type="button" variant="secondary" className="text-sm" onClick={() => void onCopy()}>
      {copied ? 'Copied' : 'Copy summary'}
    </Button>
  )
}
