/** Demo-only credentials until Supabase auth ships. Replace with real auth later. */

export const DEMO_LOGIN_EMAIL = 'demo@biblestem.app'
export const DEMO_LOGIN_PASSWORD = 'demo'

export function validateDemoCredentials(email: string, password: string): boolean {
  const normalized = email.trim().toLowerCase()
  return normalized === DEMO_LOGIN_EMAIL.toLowerCase() && password === DEMO_LOGIN_PASSWORD
}
