import { useState } from 'react'
import { HeaderBar } from '@/components/HeaderBar'
import { CourseCard, type CatalogCourse } from '@/components/CourseCard'
import { PremiumCard } from '@/components/PremiumCard'

type CourseStatus = 'In Progress' | 'Completed'

type CoursesListItem = CatalogCourse & {
  status: CourseStatus
  bookmarked?: boolean
}

const ALL_COURSES: CoursesListItem[] = [
  { id: 'c1', title: 'React & TypeScript Mastery', creator: 'Sarah Chen', logo: 'devicon-react-original colored', duration: '12h', rating: '4.9', status: 'In Progress', bookmarked: true },
  { id: 'c2', title: 'Master Instagram Marketing', creator: 'Alex Rivera', logo: 'devicon-tailwindcss-plain colored', duration: '10h', rating: '4.7', status: 'In Progress' },
  { id: 'c3', title: 'Spanish B2', creator: 'Jordan Lee', logo: '', duration: '15h', rating: '4.8', status: 'Completed', bookmarked: true },
  { id: 'c4', title: 'Python for Data Science', creator: 'Morgan Kim', logo: 'devicon-python-plain colored', duration: '20h', rating: '4.6', status: 'Completed' },
  { id: 'c5', title: 'UI/UX Design Fundamentals', creator: 'Taylor Reed', logo: 'devicon-figma-plain colored', duration: '10h', rating: '4.9', status: 'Completed' },
  { id: 'c6', title: 'Databases & SQL Essentials', creator: 'Jamie Patel', logo: 'devicon-mysql-plain colored', duration: '9h', rating: '4.5', status: 'In Progress' },
]

const COURSE_FILTERS = ['All', 'In Progress', 'Completed', 'Bookmarked'] as const

export function CoursesPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof COURSE_FILTERS)[number]>('All')

  const filteredCourses = ALL_COURSES.filter((course) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'In Progress') return course.status === 'In Progress'
    if (activeFilter === 'Completed') return course.status === 'Completed'
    if (activeFilter === 'Bookmarked') return Boolean(course.bookmarked)
    return true
  })

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:flex-row lg:p-8">
        {/* Main content column */}
        <section className="order-2 min-w-0 flex-1 lg:order-1 lg:min-w-0 lg:shrink lg:basis-[40%] lg:pr-8">
          <div className="mt-8 mb-6 hidden rounded-xl bg-slate-50 px-4 py-4 lg:block lg:px-6 lg:py-5">
            <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">My Courses</h1>
            <p className="mt-1 text-slate-600">
              Browse all of your active, completed, and bookmarked courses in one place.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-4 flex flex-wrap items-center gap-2 lg:gap-3">
            {COURSE_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors lg:px-4 lg:text-sm ${
                  filter === activeFilter
                    ? 'bg-black text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Courses list */}
          <div className="flex flex-col gap-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Right column */}
        <aside className="order-1 min-w-0 flex-1 overflow-visible lg:order-2 lg:min-w-[320px] lg:pt-0 lg:pl-8">
          <div className="w-full space-y-6 mt-8 lg:sticky lg:top-12">
            <HeaderBar />

            {/* Mobile title card */}
            <div className="rounded-xl bg-slate-50 px-4 py-4 lg:hidden">
              <h1 className="text-2xl font-bold text-slate-900">My Courses</h1>
              <p className="mt-1 text-slate-600">
                Browse all of your active, completed, and bookmarked courses in one place.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 px-4 py-4 lg:px-5 lg:py-5">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Course summary
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-500">In progress</p>
                  <p className="text-2xl font-bold text-slate-900">3</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Completed</p>
                  <p className="text-2xl font-bold text-slate-900">5</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Bookmarked</p>
                  <p className="text-2xl font-bold text-slate-900">2</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Total hours</p>
                  <p className="text-2xl font-bold text-slate-900">74h</p>
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

