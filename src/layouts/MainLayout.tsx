import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/Sidebar'

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-20 md:ml-32 md:pb-0">
        <Outlet />
      </main>
    </div>
  )
}
