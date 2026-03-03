import { HeaderBar } from '@/components/HeaderBar'
import { Statistics } from '@/components/Statistics'
import { PremiumCard } from '@/components/PremiumCard'

export function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:flex-row lg:p-8">
        {/* Main content column */}
        <section className="order-2 min-w-0 flex-1 lg:order-1 lg:min-w-0 lg:shrink lg:basis-[40%] lg:pr-8">
          <div className="mt-8 mb-6 hidden rounded-xl bg-slate-50 px-4 py-4 lg:block lg:px-6 lg:py-5">
            <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">Analytics</h1>
            <p className="mt-1 text-slate-600">
              Track learning hours and course performance over time.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 px-4 py-4 lg:px-6 lg:py-5">
            <Statistics />
          </div>
        </section>

        {/* Right column */}
        <aside className="order-1 min-w-0 flex-1 overflow-visible lg:order-2 lg:min-w-[320px] lg:pt-0 lg:pl-8">
          <div className="w-full space-y-6 mt-8 lg:sticky lg:top-12">
            <HeaderBar />

            {/* Mobile title card */}
            <div className="rounded-xl bg-slate-50 px-4 py-4 lg:hidden">
              <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
              <p className="mt-1 text-slate-600">
                Track learning hours and course performance over time.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 px-4 py-4 lg:px-5 lg:py-5">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Key metrics
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-500">Weekly hours</p>
                  <p className="text-2xl font-bold text-slate-900">18h</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Active days</p>
                  <p className="text-2xl font-bold text-slate-900">5</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Courses</p>
                  <p className="text-2xl font-bold text-slate-900">8</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Completion rate</p>
                  <p className="text-2xl font-bold text-slate-900">72%</p>
                </div>
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

