import { NavLink } from 'react-router-dom'
import {
  HouseIcon,
  BookOpenIcon,
  UsersIcon,
  ChartBarIcon,
  GearIcon,
  SignOutIcon,
} from '@phosphor-icons/react'

const navItems = [
  { to: '/', icon: HouseIcon, label: 'Dashboard' },
  { to: '/courses', icon: BookOpenIcon, label: 'Courses' },
  { to: '/students', icon: UsersIcon, label: 'Students' },
  { to: '/analytics', icon: ChartBarIcon, label: 'Analytics' },
  { to: '/settings', icon: GearIcon, label: 'Settings' },
]

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 right-0 z-40 flex h-16 flex-row items-center justify-around rounded-t-2xl bg-black px-2 py-2 md:bottom-auto md:left-4 md:top-4 md:h-[calc(100vh-2rem)] md:w-24 md:flex-col md:justify-start md:rounded-2xl md:px-3 md:py-6 md:shadow-[4px_0_16px_rgba(0,0,0,0.6)]">
      {/* Logo - hidden on mobile */}
      <div className="hidden shrink-0 items-center justify-center pb-5 md:flex">
        <img
          src="/assets/logo.png"
          alt="CourseCompass logo"
          className="h-12 w-12"
        />
      </div>

      {/* Nav icons */}
      <nav className="flex flex-1 flex-row justify-around gap-2 md:flex-col md:justify-start md:gap-8 md:pt-6">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            title={label}
            className={({ isActive }) =>
              `flex items-center justify-center rounded-lg p-3 transition-colors ${
                isActive
                  ? 'text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <Icon
                size={20}
                weight={isActive ? 'fill' : 'regular'}
                color="currentColor"
              />
            )}
          </NavLink>
        ))}
        {/* Logout - mobile only, in nav */}
        <button
          type="button"
          title="Log out"
          className="flex items-center justify-center rounded-lg p-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          <SignOutIcon size={20} weight="regular" color="currentColor" />
        </button>
      </nav>

      {/* Logout - desktop only */}
      <div className="hidden shrink-0 pt-3 md:block">
        <button
          type="button"
          title="Log out"
          className="flex w-full items-center justify-center rounded-lg p-2.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <SignOutIcon size={20} weight="regular" color="currentColor" />
        </button>
      </div>
    </aside>
  )
}
