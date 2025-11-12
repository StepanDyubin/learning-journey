"use client"

import type { ProgressOverviewData } from "@/lib/timeline-stats"
import { StatCard } from "./stat-card"
import { Trophy, Flame, BookOpen } from "lucide-react"

interface ProgressOverviewProps {
  data: ProgressOverviewData
}

export function ProgressOverview({ data }: ProgressOverviewProps) {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          color="orange"
          icon={<Flame />}
          title="Streak"
          value={data.streak}
          subtitle="Days active"
        />

        <StatCard
          color="green"
          icon={<Trophy />}
          title="Avg Performance"
          value={`${data.avgPerformance}%`}
          subtitle="Mastery level"
        />

        <StatCard
          color="blue"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 2m6-11a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          title="Hours"
          value={`${data.totalHours}h`}
          subtitle="Learning time invested"
        />

        <StatCard
          color="purple"
          icon={<BookOpen />}
          title="Completed"
          value={data.completedCourses}
          subtitle="Courses finished"
        />
      </div>
    </div>
  )
}
