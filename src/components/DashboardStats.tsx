import { motion } from 'framer-motion'

interface DashboardStatsProps {
  coursesCompleted: number
  coursesInProgress: number
}

export function DashboardStats({ coursesCompleted, coursesInProgress }: DashboardStatsProps) {
  return (
    <div className="mt-6 flex w-full flex-row flex-wrap gap-3">
      <motion.div
        className="flex min-w-[min(100%,180px)] flex-1 items-stretch gap-3 rounded-xl bg-slate-50 px-4 py-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        whileHover={{ y: -2 }}
      >
        <div className="flex shrink-0 items-center self-stretch">
          <span className="text-6xl font-bold leading-none text-black">{coursesCompleted}</span>
        </div>
        <span className="flex items-center max-w-[9ch] text-base font-medium leading-snug text-black">Courses Completed</span>
      </motion.div>
      <motion.div
        className="flex min-w-[min(100%,180px)] flex-1 items-stretch gap-3 rounded-xl bg-slate-50 px-4 py-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        whileHover={{ y: -2 }}
      >
        <div className="flex shrink-0 items-center self-stretch">
          <span className="text-6xl font-bold leading-none text-black">{coursesInProgress}</span>
        </div>
        <span className="flex items-center max-w-[9ch] text-base font-medium leading-snug text-black">Courses in Progress</span>
      </motion.div>
    </div>
  )
}
