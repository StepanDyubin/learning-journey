import type { Step } from "@/lib/timeline-mock-data"
import { CourseCircle } from "./course-circle"
import { BlockCircle } from "./block-circle"
import { RecommendationCircle } from "./recommendation-circle"

interface StepCircleProps {
  step: Step
  onClick?: () => void
}

export function StepCircle({ step, onClick }: StepCircleProps) {
  if (step.type === "COURSE") {
    return <CourseCircle step={step} onClick={onClick} />
  }

  if (step.type === "BLOCK") {
    return <BlockCircle step={step} onClick={onClick} />
  }

  if (step.type === "RECOMMENDATION") {
    return <RecommendationCircle step={step} onClick={onClick} />
  }

  return null
}
