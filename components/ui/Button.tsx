import Link from 'next/link'
import { type MouseEventHandler, type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  href?: string
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  variant?: Variant
  className?: string
  disabled?: boolean
  /** When `href` is set, forwarded to the underlying `Link`. */
  onClick?: MouseEventHandler<HTMLButtonElement & HTMLAnchorElement>
}

const styles: Record<Variant, string> = {
  primary: 'bg-blue-800 text-white hover:bg-blue-900',
  secondary: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100',
  ghost: 'text-zinc-700 hover:text-zinc-900',
}

export function Button({
  href,
  type = 'button',
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${styles[variant]} ${disabled ? 'pointer-events-none opacity-60' : ''} ${className}`

  if (href) {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={classes} aria-disabled={disabled} onClick={onClick}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} aria-disabled={disabled} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
