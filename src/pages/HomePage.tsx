import { useState } from 'react'
import { CurrentCourseCard, type Course } from '@/components/CurrentCourseCard'
import { CourseCard, type CatalogCourse } from '@/components/CourseCard'
import { HeaderBar } from '@/components/HeaderBar'
import { DashboardStats } from '@/components/DashboardStats'
import { Statistics } from '@/components/Statistics'
import { PremiumCard } from '@/components/PremiumCard'

const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Databases & SQL Essentials',
    creator: 'Jamie Patel',
    logo: 'devicon-mysql-plain colored',
    progress: 65,
  },
  {
    id: '2',
    title: 'Master Instagram Marketing',
    creator: 'Alex Rivera',
    logo: 'devicon-tailwindcss-plain colored',
    progress: 30,
  },
  {
    id: '3',
    title: 'Spanish B2',
    creator: 'Jordan Lee',
    logo: '',
    progress: 85,
  },
]

const CATALOG_COURSES: CatalogCourse[] = [
  { id: 'c1', title: 'React & TypeScript Mastery', creator: 'Sarah Chen', logo: 'devicon-react-original colored', duration: '12h', rating: '4.9' },
  { id: 'c2', title: 'Master Instagram Marketing', creator: 'Alex Rivera', logo: 'devicon-tailwindcss-plain colored', duration: '10h', rating: '4.7' },
  { id: 'c3', title: 'Spanish B2', creator: 'Jordan Lee', logo: '', duration: '15h', rating: '4.8' },
  { id: 'c4', title: 'Python for Data Science', creator: 'Morgan Kim', logo: 'devicon-python-plain colored', duration: '20h', rating: '4.6' },
  { id: 'c5', title: 'UI/UX Design Fundamentals', creator: 'Taylor Reed', logo: 'devicon-figma-plain colored', duration: '10h', rating: '4.9' },
]

const TABS = ['All Courses', 'The Newest', 'Top Rated', 'Most Popular'] as const

export function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('All Courses')
  const currentCourse = MOCK_COURSES[currentIndex]

  const visibleCourses: CatalogCourse[] = (() => {
    if (activeTab === 'All Courses') return CATALOG_COURSES
    if (activeTab === 'The Newest') {
      return [...CATALOG_COURSES].slice(-3).reverse()
    }
    if (activeTab === 'Top Rated') {
      return [...CATALOG_COURSES].sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating),
      )
    }
    if (activeTab === 'Most Popular') {
      // For now, treat "most popular" as highest rating with shorter duration
      return [...CATALOG_COURSES].sort((a, b) => {
        const ratingDiff = parseFloat(b.rating) - parseFloat(a.rating)
        if (ratingDiff !== 0) return ratingDiff
        const durA = parseInt(a.duration.replace('h', ''), 10)
        const durB = parseInt(b.duration.replace('h', ''), 10)
        return durA - durB
      })
    }
    return CATALOG_COURSES
  })()

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:flex-row lg:p-8">
        {/* First column - 60% (greeting, course card, courses list) */}
        <section className="order-2 min-w-0 flex-1 lg:order-1 lg:min-w-0 lg:shrink lg:basis-[40%] lg:pr-8">
          {/* Greeting card - hidden on mobile/tablet (shown in aside), visible in left column from lg */}
          <div className="relative mb-6 mt-8 hidden rounded-xl bg-slate-50 px-4 py-4 lg:block lg:px-6 lg:py-5">
            <img
              src="/assets/welcome avatar.png"
              alt="Welcome avatar"
              className="absolute bottom-0 right-4 hidden h-28 w-28 object-contain sm:block lg:right-24 lg:h-36 lg:w-36"
            />
            <div className="pr-24">
              <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">Hello Charls</h1>
              <p className="mt-1 text-slate-600">It&apos;s nice to see you again.</p>
            </div>
          </div>

          {/* Course card + pagination */}
          <CurrentCourseCard
            course={currentCourse}
            onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            onNext={() =>
              setCurrentIndex((i) => Math.min(MOCK_COURSES.length - 1, i + 1))
            }
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < MOCK_COURSES.length - 1}
          />

          {/* Courses section */}
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-slate-900 lg:text-2xl">Courses</h2>
            <div className="mb-4 flex flex-wrap gap-2 lg:gap-4">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-1 text-sm transition-colors ${
                    activeTab === tab
                      ? 'font-bold text-black'
                      : 'font-medium text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {visibleCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Second column - search, notification, profile (35%) */}
        <aside className="order-1 min-w-0 flex-1 overflow-visible  lg:order-2 lg:min-w-[300px] lg:pt-0 lg:pl-8">
          <div className="w-full space-y-6 mt-8 lg:sticky lg:top-12">
            <HeaderBar />
            {/* Greeting - shown below search until lg (then in left column) */}
            <div className="relative rounded-xl bg-slate-50 px-4 py-4 lg:hidden">
              <img
                src="/assets/welcome avatar.png"
                alt="Welcome avatar"
                className="absolute bottom-0 right-12 h-24 w-24 object-contain"
              />
              <div className="pr-32">
                <h1 className="text-2xl font-bold text-slate-900">Hello Charls</h1>
                <p className="mt-1 text-slate-600">It&apos;s nice to see you again.</p>
              </div>
            </div>
            <DashboardStats
              coursesCompleted={5}
              coursesInProgress={MOCK_COURSES.length}
            />
            <Statistics />
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
