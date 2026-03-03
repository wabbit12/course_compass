import { HeaderBar } from '@/components/HeaderBar'
import { PremiumCard } from '@/components/PremiumCard'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:flex-row lg:p-8">
        {/* Main content column */}
        <section className="order-2 min-w-0 flex-1 lg:order-1 lg:min-w-0 lg:shrink lg:basis-[40%] lg:pr-8">
          <div className="mb-6 rounded-xl bg-slate-50 px-4 py-4 lg:px-6 lg:py-5">
            <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">{title}</h1>
            <p className="mt-1 text-slate-600">
              This section is not available yet. We&apos;re working on bringing it to you soon.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 px-4 py-6 lg:px-6 lg:py-8">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Overview
            </p>
            <p className="mt-3 text-sm text-slate-600 lg:text-base">
              When this page is ready, you&apos;ll see a focused overview here that follows the same
              clean, two-column design as your dashboard: simple typography, black and white palette,
              and clear hierarchy.
            </p>
          </div>
        </section>

        {/* Right column - shared header + premium card */}
        <aside className="order-1 min-w-0 flex-1 overflow-visible lg:order-2 lg:min-w-[300px] lg:pt-0 lg:pl-8">
          <div className="w-full space-y-6 lg:sticky lg:top-4">
            <HeaderBar />
            <PremiumCard />
          </div>
        </aside>
      </div>
    </div>
  )
}
