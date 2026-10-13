/** Local passage index for a Scripture Chain. This does not read or write lesson progress. */

export function clampPassageIndex(index: number, length: number): number {
  if (length <= 0) return 0
  if (!Number.isFinite(index)) return 0
  return Math.min(length - 1, Math.max(0, Math.trunc(index)))
}

const NAVIGATION_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'])

export function isPassageNavigationKey(key: string): boolean {
  return NAVIGATION_KEYS.has(key)
}

/** Next index after a keyboard command. Unrecognized keys leave the index unchanged. */
export function passageIndexAfterKey(index: number, length: number, key: string): number {
  const current = clampPassageIndex(index, length)
  if (length <= 0) return 0
  if (key === 'Home' || key === 'ArrowLeft' || key === 'ArrowUp') {
    if (key === 'Home') return 0
    return Math.max(0, current - 1)
  }
  if (key === 'End' || key === 'ArrowRight' || key === 'ArrowDown') {
    if (key === 'End') return length - 1
    return Math.min(length - 1, current + 1)
  }
  return current
}

export function passageProgressLabel(index: number, length: number): string {
  const current = clampPassageIndex(index, length)
  const total = Math.max(0, length)
  if (total === 0) return 'Passage 0 of 0'
  return `Passage ${current + 1} of ${total}`
}
