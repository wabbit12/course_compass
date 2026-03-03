import { motion } from 'framer-motion'

export function PremiumCard() {
  return (
    <motion.div
      className="flex flex-col items-start justify-between gap-4 rounded-xl bg-slate-50 px-4 py-4 sm:flex-row sm:px-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:max-w-[60%] xl:max-w-[55%]">
        <h3 className="text-base font-bold text-black sm:text-lg xl:text-xl">
          Learn Even More!
        </h3>
        <p className="text-xs text-slate-600 sm:text-sm xl:text-base">
          Unlock premium features only for $9.99 per month.
        </p>
        <button
          type="button"
          className="w-fit rounded-lg bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800 sm:text-sm"
        >
          Go Premium
        </button>
      </div>
      <div className="flex shrink-0 items-center justify-center gap-2">
        <img
          src="/assets/book.png"
          alt="Premium learning"
          className="h-24 w-24 rounded-lg object-contain sm:h-28 sm:w-28 xl:h-32 xl:w-32"
        />
      </div>
    </motion.div>
  )
}
