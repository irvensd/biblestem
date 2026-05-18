import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const file = resolve(process.cwd(), 'lib/lesson-content.ts')
const src = readFileSync(file, 'utf8')

const start = src.indexOf('const libraryRaw: Record<string, LessonReaderContent> = {')
const end = src.indexOf('  _fallback:')

if (start < 0 || end < 0 || end <= start) {
  console.error('[check:lesson-copy] Could not locate lesson library block in lib/lesson-content.ts')
  process.exit(1)
}

const lessonBlock = src.slice(start, end)
const emDash = '—'
const emDashCount = [...lessonBlock].filter((ch) => ch === emDash).length

if (emDashCount > 0) {
  console.error(`[check:lesson-copy] Found ${emDashCount} em dash character(s) in authored lesson copy.`)
  process.exit(1)
}

console.log('[check:lesson-copy] OK — no em dashes found in authored lesson copy.')
