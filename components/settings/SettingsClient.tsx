'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { SupportFormSkeleton } from '@/components/support/SupportFormSkeleton'
import { SupportRequestForm } from '@/components/support/SupportRequestForm'
import { Button } from '@/components/ui/Button'
import { ConfirmDialog } from '@/components/ui/ConfirmDialog'
import { inputClassName } from '@/components/ui/form-styles'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'
import {
  clearLocalDashboardProgress,
  emptyLocalProgress,
  replaceLocalDashboardProgress,
} from '@/lib/dashboard-local-progress'
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client'
import { clearAllProgressRemote } from '@/lib/supabase/user-progress'
import { REPORT_ISSUE_LINK_CLASSNAME } from '@/lib/support/report-issue-href'

type Banner =
  | { kind: 'success'; text: string }
  | { kind: 'error'; text: string }
  | null

export function SettingsClient() {
  const router = useRouter()
  const { user, isReady, logout, updateFirstName } = useDemoAuth()
  const [supportOpenNonce, setSupportOpenNonce] = useState(0)

  const openSupportSection = useCallback(
    (type?: string) => {
      const params = new URLSearchParams()
      if (type?.trim()) params.set('type', type.trim())
      const qs = params.toString()
      router.push(qs ? `/settings?${qs}#settings-support` : '/settings#settings-support', { scroll: false })
      setSupportOpenNonce((n) => n + 1)
    },
    [router],
  )

  useEffect(() => {
    if (isReady && !user) router.replace('/sign-in')
  }, [isReady, user, router])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash !== '#settings-support') return
    setSupportOpenNonce((n) => n + 1)
  }, [])

  if (!isReady) return <SettingsSkeleton />
  if (!user) {
    return (
      <Shell>
        <p className="text-sm text-zinc-600">Redirecting to sign-in…</p>
      </Shell>
    )
  }

  return (
    <Shell>
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Account</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Settings</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          Update how we greet you, manage security, reset progress, or send a support report.
        </p>
        <p className="mt-3">
          <button
            type="button"
            onClick={() => openSupportSection('login-issue')}
            className={REPORT_ISSUE_LINK_CLASSNAME}
          >
            Report account issue
          </button>
        </p>
      </header>

      <SettingsSectionNav onOpenSupport={() => openSupportSection()} />

      <div className="grid gap-5 sm:gap-6">
        <ProfileSection
          email={user.email}
          firstName={user.firstName}
          updateFirstName={updateFirstName}
        />
        <SecuritySection
          onSignOutThisDevice={async () => {
            await logout({ navigateTo: '/' })
          }}
        />
        <ProgressDataSection userId={user.id} />
        <Suspense fallback={<SupportSectionSkeleton />}>
          <SupportSection openNonce={supportOpenNonce} />
        </Suspense>
      </div>

      <footer className="mt-8 border-t border-zinc-200/80 pt-6 text-xs text-zinc-500">
        Signed in as <span className="font-mono text-zinc-600">{user.email}</span>
        {' · '}
        Display name {dashboardDisplayName(user.email, user.firstName)}
      </footer>
    </Shell>
  )
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[55vh] border-b border-zinc-200/80 bg-stone-50">
      <div className="container-shell py-10 md:py-12">
        <div className="mx-auto max-w-3xl">{children}</div>
      </div>
    </div>
  )
}

function SettingsSkeleton() {
  return (
    <Shell>
      <div className="h-8 w-40 animate-pulse rounded-lg bg-zinc-200/80" />
      <div className="mt-4 h-4 w-72 max-w-full animate-pulse rounded bg-zinc-200/60" />
      <div className="mt-6 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-8 w-20 shrink-0 animate-pulse rounded-full bg-zinc-200/60" />
        ))}
      </div>
      <div className="mt-6 grid gap-5">
        <div className="h-40 animate-pulse rounded-xl bg-zinc-200/50" />
        <div className="h-48 animate-pulse rounded-xl bg-zinc-200/45" />
        <div className="h-40 animate-pulse rounded-xl bg-zinc-200/40" />
        <div className="h-28 animate-pulse rounded-xl bg-zinc-200/35" />
      </div>
    </Shell>
  )
}

const SETTINGS_SECTIONS = [
  { id: 'settings-profile', label: 'Profile' },
  { id: 'settings-security', label: 'Security' },
  { id: 'settings-progress', label: 'Progress Data' },
  { id: 'settings-support', label: 'Support' },
] as const

function scrollToSettingsSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SettingsSectionNav({ onOpenSupport }: { onOpenSupport: () => void }) {
  return (
    <nav aria-label="Settings sections" className="mb-6">
      <ul className="-mx-1 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
        {SETTINGS_SECTIONS.map(({ id, label }) => (
          <li key={id} className="shrink-0">
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                if (id === 'settings-support') onOpenSupport()
                scrollToSettingsSection(id)
              }}
              className="inline-flex rounded-full border border-zinc-200/90 bg-white px-3.5 py-1.5 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-950/[0.02] transition-colors hover:border-zinc-300 hover:text-zinc-900"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Card({
  id,
  title,
  description,
  children,
}: {
  id?: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{title}</h2>
      {description ? (
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{description}</p>
      ) : null}
      <div className={description ? 'mt-5' : 'mt-4'}>{children}</div>
    </section>
  )
}

function SupportSectionSkeleton() {
  return (
    <section className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-6">
      <div className="h-6 w-40 animate-pulse rounded bg-zinc-200/70" />
      <div className="mt-3 h-4 w-full max-w-md animate-pulse rounded bg-zinc-200/50" />
      <div className="mt-5 h-10 w-36 animate-pulse rounded-xl bg-zinc-200/60" />
    </section>
  )
}

function SupportSection({ openNonce }: { openNonce: number }) {
  const searchParams = useSearchParams()
  const hasPrefill = useMemo(() => {
    return ['type', 'study', 'lesson', 'step'].some((key) => {
      const v = searchParams.get(key)
      return v != null && v.trim() !== ''
    })
  }, [searchParams])

  const [open, setOpen] = useState(hasPrefill)

  useEffect(() => {
    if (hasPrefill) setOpen(true)
  }, [hasPrefill])

  useEffect(() => {
    if (openNonce === 0) return
    setOpen(true)
    requestAnimationFrame(() => scrollToSettingsSection('settings-support'))
  }, [openNonce])

  const collapsedDescription =
    'Report bugs, broken links, quiz issues, login problems, or content concerns.'

  return (
    <Card id="settings-support" title="Technical support" description={open ? undefined : collapsedDescription}>
      {!open ? (
        <Button type="button" variant="secondary" onClick={() => setOpen(true)}>
          Open support form
        </Button>
      ) : (
        <div className="min-w-0 space-y-4">
          <p className="text-sm leading-relaxed text-zinc-600">
            {collapsedDescription} Your browser details are included to help reproduce issues.
          </p>
          <Suspense fallback={<SupportFormSkeleton embedded />}>
            <SupportRequestForm
              variant="embedded"
              onDismiss={() => setOpen(false)}
            />
          </Suspense>
          <Button type="button" variant="ghost" className="!px-0" onClick={() => setOpen(false)}>
            Close form
          </Button>
        </div>
      )}
    </Card>
  )
}

function BannerNote({ banner }: { banner: Banner }) {
  if (!banner) return null
  const cls =
    banner.kind === 'success'
      ? 'border-emerald-200/90 bg-emerald-50/80 text-emerald-900'
      : 'border-red-200/90 bg-red-50/80 text-red-800'
  return (
    <p
      className={`rounded-lg border px-3 py-2 text-sm ${cls}`}
      role={banner.kind === 'error' ? 'alert' : 'status'}
    >
      {banner.text}
    </p>
  )
}

/* ----------------------------- Profile ----------------------------- */

function ProfileSection({
  email,
  firstName,
  updateFirstName,
}: {
  email: string
  firstName?: string
  updateFirstName: (name: string) => Promise<{ ok: true } | { ok: false; message: string }>
}) {
  const [name, setName] = useState(firstName ?? '')
  const [pending, setPending] = useState(false)
  const [banner, setBanner] = useState<Banner>(null)

  useEffect(() => {
    setName(firstName ?? '')
  }, [firstName])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setBanner(null)
    setPending(true)
    try {
      const result = await updateFirstName(name)
      if (!result.ok) {
        setBanner({ kind: 'error', text: result.message })
        return
      }
      setBanner({ kind: 'success', text: 'Display name updated.' })
    } finally {
      setPending(false)
    }
  }

  const savedName = (firstName ?? '').trim()
  const nameChanged = name.trim() !== savedName

  return (
    <Card id="settings-profile" title="Profile" description="This is how BibleStem greets you across the app.">
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <BannerNote banner={banner} />
        <div className="grid gap-1.5">
          <label htmlFor="settings-name" className="text-sm font-medium text-zinc-800">
            First name
          </label>
          <input
            id="settings-name"
            name="name"
            type="text"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What should we call you?"
            className={inputClassName}
            disabled={pending}
            maxLength={60}
          />
          <p className="text-xs text-zinc-500">Used in headers and greetings (e.g. “Welcome back, {name || 'friend'}”).</p>
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="settings-email" className="text-sm font-medium text-zinc-800">
            Email
          </label>
          <input
            id="settings-email"
            type="email"
            value={email}
            readOnly
            aria-readonly="true"
            tabIndex={-1}
            className={`${inputClassName} cursor-default border-zinc-200 bg-stone-50/90 text-zinc-600 selection:bg-transparent`}
          />
          <p className="text-xs text-zinc-500">
            Email changes are not available yet. Use Technical support below if you need help with your account.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <Button type="submit" disabled={pending || !name.trim() || !nameChanged}>
            {pending ? 'Saving…' : 'Save changes'}
          </Button>
        </div>
      </form>
    </Card>
  )
}

/* ----------------------------- Security ----------------------------- */

function SecuritySection({ onSignOutThisDevice }: { onSignOutThisDevice: () => Promise<void> }) {
  const supabaseConfigured = isSupabaseConfigured()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [pending, setPending] = useState(false)
  const [banner, setBanner] = useState<Banner>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [confirmError, setConfirmError] = useState<string | null>(null)
  const [signOutPending, setSignOutPending] = useState(false)
  const [deviceSignOutPending, setDeviceSignOutPending] = useState(false)

  async function onChangePassword(e: FormEvent) {
    e.preventDefault()
    setBanner(null)
    setPasswordError(null)
    setConfirmError(null)
    if (!supabaseConfigured) {
      setBanner({
        kind: 'error',
        text: 'Password changes require Supabase. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY for this deployment.',
      })
      return
    }
    if (password.length < 8) {
      setPasswordError('Use at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setConfirmError('Passwords do not match.')
      return
    }
    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      setBanner({ kind: 'error', text: 'Could not reach authentication.' })
      return
    }
    setPending(true)
    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) {
        setBanner({ kind: 'error', text: error.message })
        return
      }
      setPassword('')
      setConfirm('')
      setBanner({ kind: 'success', text: 'Password updated. Use it the next time you sign in.' })
    } finally {
      setPending(false)
    }
  }

  async function onSignOutEverywhere() {
    setBanner(null)
    if (!supabaseConfigured) {
      setBanner({
        kind: 'error',
        text: 'Sign out everywhere requires Supabase. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY for this deployment.',
      })
      return
    }
    const supabase = getSupabaseBrowserClient()
    if (!supabase) return
    setSignOutPending(true)
    try {
      await supabase.auth.signOut({ scope: 'global' })
      await onSignOutThisDevice()
    } finally {
      setSignOutPending(false)
    }
  }

  async function onSignOutDevice() {
    setBanner(null)
    setDeviceSignOutPending(true)
    try {
      await onSignOutThisDevice()
    } finally {
      setDeviceSignOutPending(false)
    }
  }

  const accountBackedBySupabase = supabaseConfigured

  return (
    <Card
      id="settings-security"
      title="Security"
      description="Change your password and sign out on this device or on all devices."
    >
      <form onSubmit={onChangePassword} className="space-y-5" noValidate>
        <BannerNote banner={banner} />

        <div className="rounded-xl border border-zinc-200/80 bg-stone-50/70 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-900">This device</p>
              <p className="mt-0.5 text-xs text-zinc-600">End your session in this browser only.</p>
            </div>
            <Button
              type="button"
              variant="secondary"
              className="w-full shrink-0 sm:w-auto"
              disabled={deviceSignOutPending}
              onClick={() => void onSignOutDevice()}
            >
              {deviceSignOutPending ? 'Signing out…' : 'Sign out here'}
            </Button>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-5">
          <p className="text-sm font-medium text-zinc-900">Password</p>
          <p className="mt-0.5 text-xs text-zinc-600">Choose a new password for your next sign-in.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <label htmlFor="new-password" className="text-sm font-medium text-zinc-800">
                New password
              </label>
              <input
                id="new-password"
                name="new-password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError(null)
                }}
                className={inputClassName}
                placeholder="At least 8 characters"
                disabled={pending || !accountBackedBySupabase}
                aria-invalid={passwordError ? true : undefined}
                aria-describedby={passwordError ? 'new-password-error' : undefined}
              />
              {passwordError ? (
                <p id="new-password-error" className="text-xs text-red-700" role="alert">
                  {passwordError}
                </p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="confirm-password" className="text-sm font-medium text-zinc-800">
                Confirm password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value)
                  setConfirmError(null)
                }}
                className={inputClassName}
                placeholder="Re-enter the new password"
                disabled={pending || !accountBackedBySupabase}
                aria-invalid={confirmError ? true : undefined}
                aria-describedby={confirmError ? 'confirm-password-error' : undefined}
              />
              {confirmError ? (
                <p id="confirm-password-error" className="text-xs text-red-700" role="alert">
                  {confirmError}
                </p>
              ) : null}
            </div>
          </div>
          {!accountBackedBySupabase ? (
            <p className="mt-3 text-xs text-zinc-500">
              Password change and sign-out everywhere require Supabase keys on this deployment.
            </p>
          ) : null}
          <div className="mt-4 flex justify-end">
            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={pending || !password || !confirm || !accountBackedBySupabase}
            >
              {pending ? 'Updating…' : 'Update password'}
            </Button>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-900">All devices</p>
              <p className="mt-0.5 max-w-md text-xs leading-relaxed text-zinc-600">
                Signs you out everywhere your account is active, then returns you to the home page.
              </p>
            </div>
            <Button
              type="button"
              variant="secondary"
              className="w-full shrink-0 sm:w-auto"
              disabled={signOutPending || !accountBackedBySupabase}
              onClick={() => void onSignOutEverywhere()}
            >
              {signOutPending ? 'Signing out…' : 'Sign out everywhere'}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}

/* ----------------------------- Progress data ----------------------------- */

type ResetConfirmKind = 'device' | 'all'

function ProgressDataSection({ userId }: { userId?: string }) {
  const supabaseConfigured = isSupabaseConfigured()
  const [pendingDevice, setPendingDevice] = useState(false)
  const [pendingAll, setPendingAll] = useState(false)
  const [banner, setBanner] = useState<Banner>(null)
  const [confirmKind, setConfirmKind] = useState<ResetConfirmKind | null>(null)

  const remoteAvailable = useMemo(
    () => Boolean(supabaseConfigured && userId),
    [supabaseConfigured, userId],
  )

  const confirmPending = confirmKind === 'device' ? pendingDevice : pendingAll

  function openResetConfirm(kind: ResetConfirmKind) {
    setBanner(null)
    if (kind === 'all' && !remoteAvailable) {
      setBanner({
        kind: 'error',
        text:
          'Cloud reset requires a signed-in Supabase account. Use “Reset on this device” for progress stored only on this browser.',
      })
      return
    }
    setConfirmKind(kind)
  }

  async function runConfirmedReset() {
    if (!confirmKind) return
    if (confirmKind === 'device') {
      setPendingDevice(true)
      try {
        clearLocalDashboardProgress()
        setBanner({
          kind: 'success',
          text: remoteAvailable
            ? 'Device progress cleared. Sign in again or reload to re-sync from the cloud.'
            : 'Local progress cleared.',
        })
        setConfirmKind(null)
      } finally {
        setPendingDevice(false)
      }
      return
    }

    const supabase = getSupabaseBrowserClient()
    if (!supabase || !userId) return
    setPendingAll(true)
    try {
      const result = await clearAllProgressRemote(supabase, userId)
      if (!result.ok) {
        setBanner({ kind: 'error', text: result.message })
        return
      }
      replaceLocalDashboardProgress(emptyLocalProgress())
      setBanner({ kind: 'success', text: 'All study progress has been reset.' })
      setConfirmKind(null)
    } finally {
      setPendingAll(false)
    }
  }

  return (
    <Card
      id="settings-progress"
      title="Progress data"
      description="Manage your lesson progress, streak, and study history."
    >
      <ConfirmDialog
        open={confirmKind === 'device'}
        title="Reset this device?"
        description="Your streak and progress on this device will be cleared. Cloud progress is not affected."
        confirmLabel="Reset device"
        pending={confirmPending}
        onCancel={() => {
          if (!confirmPending) setConfirmKind(null)
        }}
        onConfirm={() => void runConfirmedReset()}
      />
      <ConfirmDialog
        open={confirmKind === 'all'}
        title="Reset everywhere?"
        description="This permanently deletes every completed lesson, streak day, and last-lesson marker for your account. This cannot be undone."
        confirmLabel="Reset all progress"
        variant="destructive"
        pending={confirmPending}
        onCancel={() => {
          if (!confirmPending) setConfirmKind(null)
        }}
        onConfirm={() => void runConfirmedReset()}
      />

      <div className="space-y-4">
        <BannerNote banner={banner} />

        <div className="rounded-xl border border-zinc-200/80 bg-stone-50/70 p-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-900">Reset on this device</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                Clears locally stored progress for this browser. Cloud progress (when signed in) re-syncs on next load.
              </p>
            </div>
            <Button
              variant="secondary"
              type="button"
              className="w-full shrink-0 sm:w-auto"
              disabled={pendingDevice}
              onClick={() => openResetConfirm('device')}
            >
              {pendingDevice ? 'Resetting…' : 'Reset device'}
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-red-200/70 bg-red-50/30 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-800/90">Danger zone</p>
          <p className="mt-2 text-sm leading-relaxed text-red-900/90">
            This permanently resets your saved lesson progress and streak data. This cannot be undone.
            {!remoteAvailable ? (
              <span className="mt-1 block text-xs text-red-800/75">
                Requires a connected account and cloud sync.
              </span>
            ) : null}
          </p>
          <Button
            variant="secondary"
            type="button"
            className="mt-4 w-full !border-red-300 !text-red-900 hover:!bg-red-100 sm:w-auto"
            disabled={pendingAll || !remoteAvailable}
            onClick={() => openResetConfirm('all')}
          >
            {pendingAll ? 'Resetting…' : 'Reset all progress'}
          </Button>
        </div>
      </div>
    </Card>
  )
}
