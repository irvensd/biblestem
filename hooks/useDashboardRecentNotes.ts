'use client'

import { useCallback, useEffect, useState } from 'react'
import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import type { DashboardNote } from '@/lib/dashboard-mock-data'
import {
  getRecentReflectionNotes,
  getSortedLocalReflectionNotesPreview,
  mapReflectionNotesToDashboard,
} from '@/lib/reflection-notes-dashboard'

/**
 * Recent reflection notes for the dashboard — same sources as lesson {@link ReflectionNotes}
 * (localStorage + optional Supabase `user_notes`).
 */
export function useDashboardRecentNotes(catalog: LoadedCatalog, userId: string | undefined): DashboardNote[] {
  const [notes, setNotes] = useState<DashboardNote[]>([])

  const refresh = useCallback(async () => {
    setNotes(mapReflectionNotesToDashboard(getSortedLocalReflectionNotesPreview(catalog, 3)))
    try {
      const merged = await getRecentReflectionNotes(catalog, { userId, limit: 3 })
      setNotes(mapReflectionNotesToDashboard(merged))
    } catch {
      /* keep latest sync snapshot */
    }
  }, [catalog, userId])

  useEffect(() => {
    queueMicrotask(() => void refresh())
  }, [refresh])

  useEffect(() => {
    const onNote = () => void refresh()
    window.addEventListener('biblestem-lesson-note', onNote)
    window.addEventListener('storage', onNote)
    return () => {
      window.removeEventListener('biblestem-lesson-note', onNote)
      window.removeEventListener('storage', onNote)
    }
  }, [refresh])

  return notes
}
