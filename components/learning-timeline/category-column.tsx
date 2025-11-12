import type { CourseStep, RecomendationStep, Step } from "@/lib/timeline-mock-data"
import { StepCircle } from "./step-circle/step-circle"
import { TimelineConnector } from "./timeline-connector"
import { RecommendationCircle } from "./step-circle/recommendation-circle"

interface CategoryColumnProps {
  categoryName: string
  steps: Step[]
  recomendation?: RecomendationStep
}

export function CategoryColumn({ 
  categoryName, 
  steps,
  recomendation,
}: CategoryColumnProps) {
  return (
    <div className="flex flex-col gap-8 px-8">
      <div className="pb-4 border-b-2 border-primary/20">
        <h3 className="font-bold text-sm text-foreground">{categoryName}</h3>
      </div>

      <div className="flex flex-col items-center gap-6">
        {steps.map((step, stepIdx) => {
          if (step.type === "RECOMMENDATION") return null;
          
          return (
            <div key={step.id} className="flex flex-col items-center">
              <StepCircle 
                step={step}
              />

              {stepIdx < steps.length - 1 && <TimelineConnector />}
            </div>
          )
        })}

        {recomendation && (
          <>
            <TimelineConnector />
            <RecommendationCircle step={recomendation} />
          </>
        )}
      </div>
    </div>
  )
}
