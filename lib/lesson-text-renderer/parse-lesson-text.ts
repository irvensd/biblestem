/**
 * Parses plain lesson copy into display segments for editorial typography.
 * Preserves all line breaks in source; only changes how groups are rendered.
 */

export type LessonTextSegment =
  | { kind: 'paragraph'; text: string }
  | { kind: 'compact'; lines: string[] }
  | { kind: 'shortsolo'; text: string }

const BOLD_FULL = /^\*\*(.+)\*\*$/

/** Lines that read as short “beats” (list-like or dramatic fragments), not full prose. */
export function isShortLine(line: string): boolean {
  const t = line.trim()
  if (!t) return false
  const words = t.split(/\s+/).filter(Boolean).length
  if (t.length <= 36) return true
  if (words <= 5 && t.length <= 58) return true
  if (words <= 6 && t.length <= 44) return true
  return false
}

function partitionRun(lines: string[]): LessonTextSegment[] {
  const out: LessonTextSegment[] = []
  let bufShort: string[] = []

  const flushShort = () => {
    if (bufShort.length >= 2) {
      out.push({ kind: 'compact', lines: [...bufShort] })
    } else if (bufShort.length === 1) {
      out.push({ kind: 'shortsolo', text: bufShort[0] })
    }
    bufShort = []
  }

  for (const line of lines) {
    const t = line.trim()
    if (!t) continue
    if (isShortLine(t)) {
      bufShort.push(t)
    } else {
      flushShort()
      out.push({ kind: 'paragraph', text: t })
    }
  }
  flushShort()
  return out
}

/**
 * Split on blank lines (paragraph breaks in authored copy), then cluster short lines.
 */
export function parseLessonTextSegments(raw: string): LessonTextSegment[] {
  const normalized = raw.replace(/\r\n/g, '\n')
  const blocks = normalized
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter((b) => b.length > 0)

  const segments: LessonTextSegment[] = []
  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trim())
    const nonEmpty = lines.filter((l) => l.length > 0)
    if (nonEmpty.length === 0) continue
    segments.push(...partitionRun(nonEmpty))
  }
  return segments
}

export function lineIsBoldWrapped(line: string): { emphasis: boolean; text: string } {
  const t = line.trim()
  const m = t.match(BOLD_FULL)
  if (m) return { emphasis: true, text: m[1] }
  return { emphasis: false, text: t }
}
