'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect, useMemo, useState, type FormEvent } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { SupportFormSkeleton } from '@/components/support/SupportFormSkeleton'
import { SupportRequestForm } from '@/components/support/SupportRequestForm'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'
import {
  clearLocalDashboardProgress,
  emptyLocalProgress,
  replaceLocalDashboardProgress,
} from '@/lib/dashboard-local-progress'
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client'
import { clearAllProgressRemote } from '@/lib/supabase/user-progress'
import { REPORT_ISSUE_LINK_CLASSNAME, supportReportHref } from '@/lib/support/report-issue-href'

type Banner =
  | { kind: 'success'; text: string }
  | { kind: 'error'; text: string }
  | null

export function SettingsClient() {
  const router = useRouter()
  const { user, isReady, logout, updateFirstName } = useDemoAuth()

  useEffect(() => {
    if (isReady && !user) router.replace('/sign-in')
  }, [isReady, user, router])

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
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Account</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Settings</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          Update how we greet you, sign out, change your password when your account supports it, and clear study progress
          on this device or in the cloud when available.
        </p>
        <p className="mt-4">
          <Link href={supportReportHref({ type: 'login-issue' })} className={REPORT_ISSUE_LINK_CLASSNAME}>
            Report account issue
          </Link>
        </p>
      </header>

      <div className="grid gap-6">
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
        <StudyDataSection userId={user.id} />
        <Card
          title="Technical support"
          description="Report bugs, broken links, quiz issues, login problems, or content concerns. Your browser details are included to help reproduce issues."
        >
          <Suspense fallback={<SupportFormSkeleton embedded />}>
            <SupportRequestForm variant="embedded" />
          </Suspense>
        </Card>
      </div>

      <p className="mt-10 text-xs text-zinc-500">
        Signed in as <span className="font-mono">{user.email}</span> · Display name {dashboardDisplayName(user.email, user.firstName)}
      </p>
    </Shell>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[60vh] border-b border-zinc-200/80 bg-stone-50">
      <div className="container-shell py-14 md:py-16">
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
      <div className="mt-10 grid gap-6">
        <div className="h-44 animate-pulse rounded-xl bg-zinc-200/50" />
        <div className="h-44 animate-pulse rounded-xl bg-zinc-200/45" />
        <div className="h-44 animate-pulse rounded-xl bg-zinc-200/40" />
        <div className="min-h-[280px] animate-pulse rounded-xl bg-zinc-200/35" />
      </div>
    </Shell>
  )
}

function Card({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-7">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{title}</h2>
      {description ? (
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{description}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
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

  return (
    <Card title="Profile" description="This is how BibleStem greets you across the app.">
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
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
          <label className="text-sm font-medium text-zinc-800">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className={`${inputClassName} cursor-not-allowed bg-stone-50 text-zinc-500`}
          />
          <p className="text-xs text-zinc-500">
            Email changes aren’t available yet. Use Technical support below if you need help with your account.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Button type="submit" disabled={pending || !name.trim() || name.trim() === (firstName ?? '').trim()}>
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
  const [signOutPending, setSignOutPending] = useState(false)
  const [deviceSignOutPending, setDeviceSignOutPending] = useState(false)

  async function onChangePassword(e: FormEvent) {
    e.preventDefault()
    setBanner(null)
    if (!supabaseConfigured) {
      setBanner({
        kind: 'error',
        text: 'Password changes require Supabase. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY for this deployment.',
      })
      return
    }
    if (password.length < 8) {
      setBanner({ kind: 'error', text: 'Use at least 8 characters.' })
      return
    }
    if (password !== confirm) {
      setBanner({ kind: 'error', text: 'Passwords don’t match.' })
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
      title="Security"
      description="Update your account password (when available) and sign out on this device or everywhere."
    >
      <form onSubmit={onChangePassword} className="space-y-4" noValidate>
        <BannerNote banner={banner} />

        <div className="rounded-xl border border-zinc-200/80 bg-stone-50/70 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-700">Done studying on this browser?</p>
            <Button
              type="button"
              variant="secondary"
              disabled={deviceSignOutPending}
              onClick={() => void onSignOutDevice()}
            >
              {deviceSignOutPending ? 'Signing out…' : 'Sign out here'}
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
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
              onChange={(e) => setPassword(e.target.value)}
              className={inputClassName}
              placeholder="At least 8 characters"
              disabled={pending || !accountBackedBySupabase}
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="confirm-password" className="text-sm font-medium text-zinc-800">
              Confirm
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={inputClassName}
              placeholder="Re-enter the new password"
              disabled={pending || !accountBackedBySupabase}
            />
          </div>
        </div>
        {!accountBackedBySupabase ? (
          <p className="text-xs text-zinc-500">
            Password change and sign-out everywhere require Supabase keys on this deployment.
          </p>
        ) : null}

        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <Button
            type="button"
            variant="secondary"
            disabled={signOutPending || !accountBackedBySupabase}
            onClick={() => void onSignOutEverywhere()}
          >
            {signOutPending ? 'Signing out…' : 'Sign out everywhere'}
          </Button>
          <Button type="submit" disabled={pending || !password || !confirm || !accountBackedBySupabase}>
            {pending ? 'Updating…' : 'Update password'}
          </Button>
        </div>
      </form>
    </Card>
  )
}

/* ----------------------------- Study data ----------------------------- */

function StudyDataSection({ userId }: { userId?: string }) {
  const supabaseConfigured = isSupabaseConfigured()
  const [pendingDevice, setPendingDevice] = useState(false)
  const [pendingAll, setPendingAll] = useState(false)
  const [banner, setBanner] = useState<Banner>(null)

  const remoteAvailable = useMemo(
    () => Boolean(supabaseConfigured && userId),
    [supabaseConfigured, userId],
  )

  async function onResetDevice() {
    setBanner(null)
    const ok = window.confirm(
      'Reset this device? Your streak and progress on this device will be cleared. Cloud progress is not affected.',
    )
    if (!ok) return
    setPendingDevice(true)
    try {
      clearLocalDashboardProgress()
      setBanner({
        kind: 'success',
        text: remoteAvailable
          ? 'Device progress cleared. Sign in again or reload to re-sync from the cloud.'
          : 'Local progress cleared.',
      })
    } finally {
      setPendingDevice(false)
    }
  }

  async function onResetAll() {
    setBanner(null)
    if (!remoteAvailable) {
      setBanner({
        kind: 'error',
        text:
          'Cloud reset requires a signed-in Supabase account. Use “Reset on this device” for progress stored only on this browser.',
      })
      return
    }
    const ok = window.confirm(
      'Reset everywhere? This permanently deletes every completed lesson, streak day, and last-lesson marker for your account. This cannot be undone.',
    )
    if (!ok) return
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
    } finally {
      setPendingAll(false)
    }
  }

  return (
    <Card
      title="Study data"
      description="Clear your progress, streak, and last-lesson marker. Notes are not affected."
    >
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
              disabled={pendingDevice}
              onClick={() => void onResetDevice()}
            >
              {pendingDevice ? 'Resetting…' : 'Reset device'}
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-red-200/80 bg-red-50/40 p-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div>
              <p className="text-sm font-medium text-red-900">Reset everywhere</p>
              <p className="mt-1 text-xs leading-relaxed text-red-800/80">
                Deletes every completed lesson and streak day from your account. Cannot be undone.
                {remoteAvailable ? '' : ' Coming soon. Requires a connected account and cloud sync.'}
              </p>
            </div>
            <Button
              variant="secondary"
              type="button"
              disabled={pendingAll || !remoteAvailable}
              className="!border-red-300 !text-red-900 hover:!bg-red-100"
              onClick={() => void onResetAll()}
            >
              {pendingAll ? 'Resetting…' : 'Reset all progress'}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
