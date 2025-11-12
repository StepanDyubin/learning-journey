import { Clock, Target } from "lucide-react"
import type { BlockStep, CourseStep } from "@/lib/timeline-mock-data"

interface StepMetricsProps {
  stats: (CourseStep | BlockStep)["statistics"]
}

export function StepMetrics({ stats }: StepMetricsProps) {
  return (
    <div className="flex gap-2 text-xs text-muted-foreground mt-1">
      <div className="flex items-center gap-0.5">
        <Clock className="w-3 h-3" />
        <span>{stats.hoursSpent}h</span>
      </div>
      <div className="flex items-center gap-0.5">
        <Target className="w-3 h-3" />
        <span>{stats.performance}%</span>
      </div>
    </div>
  )
}
