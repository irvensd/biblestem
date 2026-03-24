import { SignInForm } from '@/app/sign-in/SignInForm'

export default function SignInPage() {
  return (
    <div className="section-space">
      <div className="container-shell flex justify-center">
        <div className="w-full max-w-md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Account</p>
          <h1 className="mt-3 text-center text-2xl font-semibold tracking-tight text-zinc-900">Sign in</h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600">
            Continue your study progress and notes. This is a local demo—real accounts are coming soon.
          </p>

          <SignInForm />
        </div>
      </div>
    </div>
  )
}
