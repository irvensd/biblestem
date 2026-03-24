import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'

export default function GetStartedPage() {
  return (
    <div className="section-space">
      <div className="container-shell flex justify-center">
        <div className="w-full max-w-md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Account</p>
          <h1 className="mt-3 text-center text-2xl font-semibold tracking-tight text-zinc-900">Get started</h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600">Create an account to save progress and notes across devices.</p>

          <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
            <form className="space-y-4" action="#" method="post">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Full name" className={inputClassName} />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="Email address" className={inputClassName} />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  className={inputClassName}
                />
              </div>
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-zinc-600">
              Already have an account?{' '}
              <Link href="/sign-in" className="font-medium text-blue-800 hover:text-blue-900">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
