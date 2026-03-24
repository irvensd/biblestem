'use client'

import { useEffect, useId, useState } from 'react'
import { inputClassName } from '@/components/ui/form-styles'

interface ReflectionInputProps {
  storageKey: string
  prompt: string
}

function readStored(key: string): string {
  try {
    return localStorage.getItem(key) ?? ''
  } catch {
    return ''
  }
}

export function ReflectionInput({ storageKey, prompt }: ReflectionInputProps) {
  const id = useId()
  const [value, setValue] = useState(() => (typeof window !== 'undefined' ? readStored(storageKey) : ''))

  useEffect(() => {
    queueMicrotask(() => {
      setValue(readStored(storageKey))
    })
  }, [storageKey])

  function handleChange(next: string) {
    setValue(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-base leading-relaxed text-zinc-700">{prompt}</p>
      <div>
        <label htmlFor={id} className="sr-only">
          Your reflection
        </label>
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Write freely—saved only on this device for now."
          className={`${inputClassName} min-h-[8rem] resize-y`}
        />
        <p className="mt-2 text-xs text-zinc-400">Optional. Stored locally in your browser (demo).</p>
      </div>
    </div>
  )
}
