import { GetStartedForm } from '@/components/get-started/GetStartedForm'

export default function GetStartedPage() {
  return (
    <div className="section-space">
      <div className="container-shell flex justify-center">
        <div className="w-full max-w-md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Account</p>
          <h1 className="mt-3 text-center text-2xl font-semibold tracking-tight text-zinc-900">Get started</h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600">
            Create an account to save progress and notes across devices. We use your first name in the dashboard
            greeting.
          </p>

          <GetStartedForm />
        </div>
      </div>
    </div>
  )
}
