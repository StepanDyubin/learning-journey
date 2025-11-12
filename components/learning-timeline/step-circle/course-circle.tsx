import { CheckCircle2 } from "lucide-react"
import type { CourseStep } from "@/lib/timeline-mock-data"
import { StepMetrics } from "./step-metrics"

interface CourseCircleProps {
  step: CourseStep
  onClick?: () => void
}

export function CourseCircle({ step, onClick }: CourseCircleProps) {
  const bgColor = step.isDone
    ? "bg-gradient-to-br from-blue-400 to-purple-500"
    : "bg-gradient-to-br from-yellow-300 to-amber-400"

  const borderColor = step.isDone ? "border-blue-500" : "border-yellow-500"

  return (
    <button onClick={onClick} className="flex flex-col items-center gap-3 transition-transform">
      <div className="relative w-20 h-20 shrink-0">
        <div
          className={`absolute inset-0 ${bgColor} rounded-full flex flex-col items-center justify-center border-2 border-solid ${borderColor} shadow-lg`}
        >
          {step.isDone ? (
            <CheckCircle2 className="w-6 h-6 text-white" />
          ) : (
            <span className="text-2xl font-bold text-white">
              {Math.round(step.statistics.progress)}%
            </span>
          )}
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs font-semibold text-foreground max-w-24 line-clamp-2">
          {step.course.name}
        </p>
        <StepMetrics stats={step.statistics} />
      </div>
    </button>
  )
}
