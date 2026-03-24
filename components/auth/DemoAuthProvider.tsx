'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { validateDemoCredentials } from '@/lib/demo-auth'

const STORAGE_KEY = 'biblestem-demo-session'

export type DemoUser = { email: string }

type DemoAuthContextValue = {
  user: DemoUser | null
  isReady: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const DemoAuthContext = createContext<DemoAuthContextValue | null>(null)

function readStoredUser(): DemoUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as { email?: unknown }
    if (typeof parsed.email === 'string' && parsed.email.includes('@')) {
      return { email: parsed.email }
    }
  } catch {
    /* ignore */
  }
  return null
}

export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    queueMicrotask(() => {
      setUser(readStoredUser())
      setIsReady(true)
    })
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 280))
    if (!validateDemoCredentials(email, password)) return false
    const next: DemoUser = { email: email.trim().toLowerCase() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setUser(next)
    return true
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ user, isReady, login, logout }),
    [user, isReady, login, logout],
  )

  return <DemoAuthContext.Provider value={value}>{children}</DemoAuthContext.Provider>
}

export function useDemoAuth(): DemoAuthContextValue {
  const ctx = useContext(DemoAuthContext)
  if (!ctx) {
    throw new Error('useDemoAuth must be used within DemoAuthProvider')
  }
  return ctx
}
