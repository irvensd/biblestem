import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  href?: string
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  variant?: Variant
  className?: string
}

const styles: Record<Variant, string> = {
  primary: 'bg-blue-800 text-white hover:bg-blue-900',
  secondary: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100',
  ghost: 'text-zinc-700 hover:text-zinc-900',
}

export function Button({ href, type = 'button', children, variant = 'primary', className = '' }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${styles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  )
}
