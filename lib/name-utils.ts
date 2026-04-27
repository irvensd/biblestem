/** Derive a first name from a "full name" field (first word, trimmed). */
export function firstNameFromFullName(full: string): string {
  const part = full.trim().split(/\s+/)[0] ?? ''
  if (!part) return ''
  return part.slice(0, 1).toUpperCase() + part.slice(1)
}
