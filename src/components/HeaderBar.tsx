import { MagnifyingGlassIcon, BellIcon, UserCircleIcon } from '@phosphor-icons/react'

export function HeaderBar() {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
      {/* Search bar - shrinks to make room for icons */}
      <div className="flex min-w-[3.5rem] flex-1 basis-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 sm:min-w-[4rem] sm:px-4 sm:py-2.5">
        <span className="shrink-0">
          <MagnifyingGlassIcon size={20} weight="regular" color="#0f172a" />
        </span>
        <input
          type="search"
          placeholder=""
          className="w-full min-w-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
          aria-label="Search"
        />
      </div>

      {/* Notification icon */}
      <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-900 transition-colors hover:bg-slate-100 sm:h-10 sm:w-10"
          aria-label="Notifications"
      >
        <BellIcon size={22} weight="regular" color="#0f172a" />
      </button>

      {/* Profile icon */}
      <button
        type="button"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100 sm:h-10 sm:w-10"
        aria-label="Profile"
      >
        <UserCircleIcon size={28} weight="regular" color="#0f172a" />
      </button>
    </div>
  )
}
