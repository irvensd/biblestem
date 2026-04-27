'use client'

import { useEffect, useState } from 'react'
import {
  emptyLocalProgress,
  readLocalProgress,
  type LocalDashboardProgress,
} from '@/lib/dashboard-local-progress'
import { migrateLocalProgressForUserOnce } from '@/lib/dashboard-progress-sync'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { fetchProgressState } from '@/lib/supabase/user-progress'

/**
 * Dashboard progress: Supabase-backed when `userId` is set (authenticated with Supabase),
 * otherwise localStorage (demo mode without Supabase env).
 */
export function useDashboardProgress(userId: string | undefined): {
  progress: LocalDashboardProgress
  ready: boolean
} {
  const [local, setLocal] = useState(() => readLocalProgress())
  const [remote, setRemote] = useState<LocalDashboardProgress | null>(null)
  const [ready, setReady] = useState(() => userId === undefined)

  useEffect(() => {
    if (userId === undefined) {
      function refresh() {
        setLocal(readLocalProgress())
      }
      refresh()
      window.addEventListener('storage', refresh)
      window.addEventListener('biblestem-progress', refresh)
      return () => {
        window.removeEventListener('storage', refresh)
        window.removeEventListener('biblestem-progress', refresh)
      }
    }

    const uid = userId

    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      queueMicrotask(() => {
        setRemote(readLocalProgress())
        setReady(true)
      })
      return
    }

    let cancelled = false

    function refreshRemote() {
      const client = getSupabaseBrowserClient()
      if (!client) return
      void (async () => {
        const next = await fetchProgressState(client, uid)
        if (!cancelled) setRemote(next)
      })()
    }

    void (async () => {
      await migrateLocalProgressForUserOnce(uid)
      const next = await fetchProgressState(supabase, uid)
      if (!cancelled) {
        setRemote(next)
        setReady(true)
      }
    })()

    window.addEventListener('biblestem-progress', refreshRemote)
    return () => {
      cancelled = true
      window.removeEventListener('biblestem-progress', refreshRemote)
    }
  }, [userId])

  const progress = userId ? (remote ?? emptyLocalProgress()) : local
  return { progress: ready ? progress : emptyLocalProgress(), ready }
}
