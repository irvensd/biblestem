'use client'

import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/Button'

type ConfirmDialogProps = {
  open: boolean
  title: string
  description: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: 'default' | 'destructive'
  pending?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  pending = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && !pending) onCancel()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, pending, onCancel])

  if (!open || typeof document === 'undefined') return null

  const confirmClassName =
    variant === 'destructive'
      ? '!border-red-300 !bg-red-800 !text-white hover:!bg-red-900'
      : undefined

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-zinc-900/45"
        aria-label="Close dialog"
        disabled={pending}
        onClick={onCancel}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-xl"
      >
        <h2 id={titleId} className="text-lg font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
        <p id={descriptionId} className="mt-2 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <Button type="button" variant="secondary" disabled={pending} onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant="primary"
            className={confirmClassName}
            disabled={pending}
            onClick={onConfirm}
          >
            {pending ? 'Working…' : confirmLabel}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
