import { HeaderBar } from '@/components/HeaderBar'
import { PremiumCard } from '@/components/PremiumCard'

interface Student {
  id: string
  name: string
  avatar: string
  activeCourses: number
  hoursLearned: string
  status: 'Active' | 'Paused'
}

const STUDENTS: Student[] = [
  { id: 's1', name: 'Alex Johnson', avatar: 'A', activeCourses: 3, hoursLearned: '24h', status: 'Active' },
  { id: 's2', name: 'Maria Garcia', avatar: 'M', activeCourses: 2, hoursLearned: '18h', status: 'Active' },
  { id: 's3', name: 'Liam Smith', avatar: 'L', activeCourses: 1, hoursLearned: '6h', status: 'Paused' },
  { id: 's4', name: 'Emma Davis', avatar: 'E', activeCourses: 4, hoursLearned: '32h', status: 'Active' },
]

export function StudentsPage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:flex-row lg:p-8">
        {/* Main content column */}
        <section className="order-2 min-w-0 flex-1 lg:order-1 lg:min-w-0 lg:shrink lg:basis-[40%] lg:pr-8">
          <div className="mt-8 mb-6 hidden rounded-xl bg-white px-4 py-4 lg:block lg:px-6 lg:py-5">
            <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">Students</h1>
            <p className="mt-1 text-slate-600">
              See who&apos;s learning, how engaged they are, and which courses they&apos;re taking.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {STUDENTS.map((student) => (
              <div
                key={student.id}
                className="flex flex-wrap items-center gap-3 rounded-xl bg-white px-4 py-3 lg:flex-nowrap lg:gap-4 lg:px-5 lg:py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white lg:h-11 lg:w-11">
                  {student.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900 lg:text-base">
                    {student.name}
                  </p>
                  <p className="text-xs text-slate-500 lg:text-sm">
                    {student.activeCourses} active course
                    {student.activeCourses === 1 ? '' : 's'} · {student.hoursLearned} learned
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                    student.status === 'Active'
                      ? 'bg-black text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Right column */}
        <aside className="order-1 min-w-0 flex-1 overflow-visible lg:order-2 lg:min-w-[320px] lg:pt-0 lg:pl-8">
          <div className="w-full space-y-6 mt-8 lg:sticky lg:top-12">
            <HeaderBar />

            {/* Mobile title card */}
            <div className="rounded-xl bg-white px-4 py-4 lg:hidden">
              <h1 className="text-2xl font-bold text-slate-900">Students</h1>
              <p className="mt-1 text-slate-600">
                See who&apos;s learning, how engaged they are, and which courses they&apos;re taking.
              </p>
            </div>

            <div className="rounded-xl bg-white px-4 py-4 lg:px-5 lg:py-5">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Engagement
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">3</span> students active this week.
                </p>
                <p>
                  Average learning time:{' '}
                  <span className="font-semibold">20h</span>.
                </p>
                <p>
                  Top learner:{' '}
                  <span className="font-semibold">Emma Davis</span>.
                </p>
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

