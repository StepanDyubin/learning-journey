"use client"

import { useState, useMemo } from "react"
import { ProgressOverview } from "@/components/progress-overview"
import { LearningTimeline } from "@/components/learning-timeline"
import {
  generateWebDevCategory,
  generateDataScienceCategory,
  generateMobileDevCategory,
  generateDevOpsCategory,
  generateAIMLCategory,
} from "@/lib/timeline-mock-data"
import { calculateProgressOverview } from "@/lib/timeline-stats"
import { CategoryFilter } from "@/components/category-filter"

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["web-dev", "data-science", "mobile-dev", "devops", "ai-ml"])

  const timelineCategories = useMemo(
    () => [
      generateWebDevCategory(),
      generateDataScienceCategory(),
      generateMobileDevCategory(),
      generateDevOpsCategory(),
      generateAIMLCategory(),
    ],
    []
  )

  const categories = useMemo(
    () => timelineCategories.map((cat) => ({ id: cat.id, name: cat.name })),
    [timelineCategories]
  )

  const filteredCategories = useMemo(() => {
    return timelineCategories.filter((cat) => selectedCategories.includes(cat.id))
  }, [timelineCategories, selectedCategories])

  const progressData = useMemo(
    () => {
      return calculateProgressOverview(filteredCategories)
    },
    [filteredCategories]
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Learning Journey</h1>
        </div>

        <ProgressOverview data={progressData} />

        {/* Filters */}
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
        />

        {/* Timeline View */}
        <div className="mt-8">
          <LearningTimeline categories={filteredCategories} />
        </div>
      </div>
    </main>
  )
}
