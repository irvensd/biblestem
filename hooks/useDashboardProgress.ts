'use client'

import { useEffect, useState } from 'react'
import {
  emptyLocalProgress,
  readLocalProgress,
  replaceLocalDashboardProgressSilent,
  type LocalDashboardProgress,
} from '@/lib/dashboard-local-progress'
import { mergeProgressSnapshots, migrateLocalProgressForUserOnce } from '@/lib/dashboard-progress-sync'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { fetchProgressState } from '@/lib/supabase/user-progress'

/**
 * Dashboard progress: Supabase-backed when `userId` is set (authenticated with Supabase),
 * merged with the same localStorage snapshot the lesson reader writes so stats stay accurate
 * even if a network upsert fails or the server is briefly behind.
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
    queueMicrotask(() => {
      if (cancelled) return
      setReady(false)
      setRemote(null)
    })

    async function loadMergedProgress(): Promise<LocalDashboardProgress> {
      const client = getSupabaseBrowserClient()
      if (!client) return readLocalProgress()
      const fromRemote = await fetchProgressState(client, uid)
      return mergeProgressSnapshots(fromRemote, readLocalProgress())
    }

    function applyMerged(merged: LocalDashboardProgress): void {
      replaceLocalDashboardProgressSilent(merged)
      setRemote(merged)
    }

    function refreshMerged(): void {
      void (async () => {
        const merged = await loadMergedProgress()
        if (!cancelled) applyMerged(merged)
      })()
    }

    void (async () => {
      await migrateLocalProgressForUserOnce(uid)
      const merged = await loadMergedProgress()
      if (!cancelled) {
        applyMerged(merged)
        setReady(true)
      }
    })()

    window.addEventListener('biblestem-progress', refreshMerged)
    return () => {
      cancelled = true
      window.removeEventListener('biblestem-progress', refreshMerged)
    }
  }, [userId])

  const progress = userId ? (remote ?? emptyLocalProgress()) : local
  return { progress: ready ? progress : emptyLocalProgress(), ready }
}
