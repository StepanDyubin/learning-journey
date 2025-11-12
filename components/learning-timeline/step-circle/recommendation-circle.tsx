import type { RecomendationStep } from "@/lib/timeline-mock-data"

interface RecommendationCircleProps {
  step: RecomendationStep
  onClick?: () => void
}

export function RecommendationCircle({ step, onClick }: RecommendationCircleProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 opacity-50 cursor-pointer"
    >
      <div className="relative w-20 h-20 shrink-0">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-300 to-green-500 rounded-full flex items-center justify-center border-2 border-solid border-emerald-500 shadow-lg">
          <span className="text-2xl">✨</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-emerald-600 mb-1">{step.course.name}</p>
        <p className="text-[10px] text-emerald-600/80 font-medium">{step.match}% match</p>
      </div>
    </button>
  )
}
