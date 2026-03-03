import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const PERIODS = ['Daily', 'Weekly', 'Monthly', 'Yearly'] as const
const TABS = ['Learning Hours', 'My Courses'] as const

// Example data by period (0-5 scale)
const LEARNING_HOURS_DAILY = [
  { day: 'mon', hours: 1.2 },
  { day: 'tue', hours: 1.8 },
  { day: 'wed', hours: 0.9 },
  { day: 'thu', hours: 2.1 },
  { day: 'fri', hours: 1.4 },
  { day: 'sat', hours: 2.6 },
  { day: 'sun', hours: 0.7 },
]

const LEARNING_HOURS_WEEKLY = [
  { day: 'mon', hours: 2.5 },
  { day: 'tue', hours: 3.2 },
  { day: 'wed', hours: 1.8 },
  { day: 'thu', hours: 4.0 },
  { day: 'fri', hours: 2.0 },
  { day: 'sat', hours: 3.5 },
  { day: 'sun', hours: 1.0 },
]

const LEARNING_HOURS_MONTHLY = [
  { day: 'wk 1', hours: 2.2 },
  { day: 'wk 2', hours: 3.8 },
  { day: 'wk 3', hours: 2.9 },
  { day: 'wk 4', hours: 4.3 },
]

const LEARNING_HOURS_YEARLY = [
  { day: 'jan', hours: 2.1 },
  { day: 'feb', hours: 2.8 },
  { day: 'mar', hours: 3.4 },
  { day: 'apr', hours: 3.9 },
  { day: 'may', hours: 4.1 },
  { day: 'jun', hours: 3.7 },
  { day: 'jul', hours: 2.9 },
  { day: 'aug', hours: 3.3 },
  { day: 'sep', hours: 3.8 },
  { day: 'oct', hours: 4.2 },
  { day: 'nov', hours: 3.5 },
  { day: 'dec', hours: 2.6 },
]

const MY_COURSES_SUMMARY = [
  { id: 'c1', title: 'React & TypeScript Mastery', progress: 65, hours: '12h' },
  { id: 'c2', title: 'Advanced CSS & Tailwind', progress: 30, hours: '10h' },
  { id: 'c3', title: 'Node.js Backend Development', progress: 85, hours: '15h' },
]

export function Statistics() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Learning Hours')
  const [period, setPeriod] = useState<(typeof PERIODS)[number]>('Weekly')

  const dataForPeriod =
    period === 'Daily'
      ? LEARNING_HOURS_DAILY
      : period === 'Weekly'
        ? LEARNING_HOURS_WEEKLY
        : period === 'Monthly'
          ? LEARNING_HOURS_MONTHLY
          : LEARNING_HOURS_YEARLY

  return (
    <div className="mt-6 min-w-0 px-4">
      <h2 className="mb-4 text-lg font-bold text-black">Your Statistics</h2>

      {/* Tabs + Dropdown row */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`text-sm transition-colors ${
                activeTab === tab
                  ? 'font-bold text-black'
                  : 'font-medium text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value as (typeof PERIODS)[number])}
          className="w-full rounded-lg bg-slate-50 px-3 py-2 text-sm font-bold text-black focus:outline-none sm:w-auto"
          aria-label="Filter by period"
        >
          {PERIODS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Chart or content */}
      <div className="min-h-[200px] rounded-xl py-4">
        {activeTab === 'Learning Hours' ? (
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={dataForPeriod}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={true} vertical={false} />
              <XAxis
                dataKey="day"
                padding={{ left: 8, right: 8 }}
                tick={{ fill: '#0f172a', fontSize: 12 }}
                axisLine={{ stroke: '#94a3b8' }}
                tickLine={false}
              />
              <YAxis
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
                width={24}
                tick={{ fill: '#0f172a', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                formatter={(value) => [`${value ?? 0}h`, '']}
                labelFormatter={() => ''}
                separator=""
                cursor={false}
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                }}
                itemStyle={{ color: '#fff', fontWeight: 500 }}
                labelStyle={{ color: '#fff' }}
              />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#0f172a"
                strokeWidth={2}
                dot={{ fill: '#0f172a', r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: '#0f172a', stroke: '#fff', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="space-y-3">
            {MY_COURSES_SUMMARY.map((course) => (
              <div
                key={course.id}
                className="rounded-xl bg-slate-50 px-3 py-3 lg:px-4 lg:py-3.5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="truncate text-sm font-semibold text-slate-900 lg:text-base">
                    {course.title}
                  </p>
                  <span className="shrink-0 text-xs font-medium text-slate-600">
                    {course.progress}% · {course.hours}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-slate-900"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
