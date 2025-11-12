import { Category } from "./timeline-mock-data"

export interface ProgressOverviewData {
  streak: number
  avgPerformance: number
  totalHours: number
  completedCourses: number
}

export function calculateProgressOverview(
  categories: Category[],
): ProgressOverviewData {
  let totalHours = 0
  let totalPerformance = 0
  let completedCount = 0
  let totalCompletedCourses = 0

  // Iterate through filtered categories and their steps
  categories.forEach((category) => {
    category.steps.forEach((step) => {
      totalHours += step.statistics.hoursSpent

      // Count completed courses/blocks
      if (step.isDone) {
        totalCompletedCourses++
        totalPerformance += step.statistics.performance
        completedCount++
      } else if (step.statistics.progress > 0) {
        // For ongoing courses, add proportional performance
        totalPerformance += step.statistics.performance
        completedCount++
      }
    })
  })

  // Calculate average performance
  const avgPerformance = completedCount > 0 ? Math.round(totalPerformance / completedCount) : 0

  // Calculate streak (mock implementation - in real app would be based on actual activity dates)
  const streak = 11

  return {
    streak,
    avgPerformance,
    totalHours,
    completedCourses: totalCompletedCourses,
  }
}
