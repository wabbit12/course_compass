import { HeaderBar } from '@/components/HeaderBar'
import { PremiumCard } from '@/components/PremiumCard'

export function SettingsPage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:flex-row lg:p-8">
        {/* Main content column */}
        <section className="order-2 min-w-0 flex-1 space-y-4 lg:order-1 lg:min-w-0 lg:shrink lg:basis-[40%] lg:pr-8">
          <div className="mt-8 mb-2 hidden rounded-xl bg-slate-50 px-4 py-4 lg:block lg:px-6 lg:py-5">
            <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">Settings</h1>
            <p className="mt-1 text-slate-600">
              Adjust your profile, notifications, and learning preferences.
            </p>
          </div>

          {/* Profile settings */}
          <div className="rounded-xl bg-slate-50 px-4 py-4 lg:px-6 lg:py-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Profile
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-900">
              <label className="flex flex-col gap-1">
                <span>Name</span>
                <input
                  type="text"
                  defaultValue="Charls"
                  className="rounded-lg bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-slate-900"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Email</span>
                <input
                  type="email"
                  defaultValue="you@example.com"
                  className="rounded-lg bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-slate-900"
                />
              </label>
            </div>
          </div>

          {/* Preferences */}
          <div className="rounded-xl bg-slate-50 px-4 py-4 lg:px-6 lg:py-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Preferences
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-900">
              <label className="flex items-center justify-between gap-4">
                <span>Weekly progress emails</span>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-800"
                >
                  Off
                </button>
              </label>
            </div>
          </div>
        </section>

        {/* Right column */}
        <aside className="order-1 min-w-0 flex-1 overflow-visible lg:order-2 lg:min-w-[320px] lg:pt-0 lg:pl-8">
          <div className="w-full space-y-6 mt-8 lg:sticky lg:top-12">
            <HeaderBar />

            {/* Mobile title card */}
            <div className="rounded-xl bg-slate-50 px-4 py-4 lg:hidden">
              <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
              <p className="mt-1 text-slate-600">
                Adjust your profile, notifications, and learning preferences.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 px-4 py-4 lg:px-5 lg:py-5">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Account
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p>Plan: <span className="font-semibold">Free</span></p>
                <p>Status: <span className="font-semibold">Active</span></p>
              </div>
            </div>

            <div className="hidden lg:block">
              <PremiumCard />
            </div>
          </div>
        </aside>

        <div className="order-3 w-full lg:hidden">
          <PremiumCard />
        </div>
      </div>
    </div>
  )
}

