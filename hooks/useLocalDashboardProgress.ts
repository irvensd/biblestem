'use client'

import { useSyncExternalStore } from 'react'
import {
  DASHBOARD_PROGRESS_STORAGE_KEY,
  emptyLocalProgress,
  readLocalProgress,
  type LocalDashboardProgress,
} from '@/lib/dashboard-local-progress'

let progressSnapshotCache: LocalDashboardProgress = emptyLocalProgress()
let progressSnapshotJson = ''

function getProgressSnapshot(): LocalDashboardProgress {
  const next = readLocalProgress()
  const j = JSON.stringify(next)
  if (j !== progressSnapshotJson) {
    progressSnapshotJson = j
    progressSnapshotCache = next
  }
  return progressSnapshotCache
}

function subscribeLocalDashboardProgress(onStoreChange: () => void): () => void {
  const onStorage = (e: StorageEvent) => {
    if (e.key === DASHBOARD_PROGRESS_STORAGE_KEY || e.key === null) onStoreChange()
  }
  const onCustom = () => onStoreChange()
  if (typeof window === 'undefined') return () => {}
  window.addEventListener('storage', onStorage)
  window.addEventListener('biblestem-progress', onCustom)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener('biblestem-progress', onCustom)
  }
}

/**
 * Browser progress from localStorage with SSR-safe hydration (server snapshot is always empty).
 */
export function useLocalDashboardProgress(): LocalDashboardProgress {
  return useSyncExternalStore(
    subscribeLocalDashboardProgress,
    getProgressSnapshot,
    () => emptyLocalProgress(),
  )
}
