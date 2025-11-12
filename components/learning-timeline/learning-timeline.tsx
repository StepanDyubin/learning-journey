"use client"

import { Card } from "@/components/ui/card"
import { type Step, type Category } from "@/lib/timeline-mock-data"
import { CategoryColumn } from "./category-column"
import { TimelineLegend } from "./timeline-legend"

interface LearningTimelineProps {
  categories: Category[]
}

export function LearningTimeline({ categories }: LearningTimelineProps) {
  return (
    <Card className="p-8 bg-card border-border overflow-x-auto">
        <div className="flex gap-0 min-w-max pb-4">
          {categories.map((category, categoryIdx) => {
            return (
              <div key={category.id} className="flex items-stretch">
                <CategoryColumn
                  categoryName={category.name}
                  steps={category.steps}
                  recomendation={category.recomendation}
                />

                {categoryIdx < categories.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-border via-border to-transparent mx-4" />
                )}
              </div>
            )
          })}
        </div>

        <TimelineLegend />
      </Card>
  )
}
