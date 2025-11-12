import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatCardProps {
  color: "orange" | "green" | "blue" | "purple"
  icon: ReactNode
  title: string
  value: string | number
  subtitle: string
}

const colorClasses = {
  orange: {
    gradient: "from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900",
    border: "border-orange-200 dark:border-orange-800",
    circle: "bg-orange-200/20 dark:bg-orange-600/20",
    title: "text-orange-600 dark:text-orange-300",
    value: "text-orange-700 dark:text-orange-200",
    subtitle: "text-orange-600 dark:text-orange-400",
    icon: "text-orange-500",
  },
  green: {
    gradient: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
    border: "border-green-200 dark:border-green-800",
    circle: "bg-green-200/20 dark:bg-green-600/20",
    title: "text-green-600 dark:text-green-300",
    value: "text-green-700 dark:text-green-200",
    subtitle: "text-green-600 dark:text-green-400",
    icon: "text-green-500",
  },
  blue: {
    gradient: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
    border: "border-blue-200 dark:border-blue-800",
    circle: "bg-blue-200/20 dark:bg-blue-600/20",
    title: "text-blue-600 dark:text-blue-300",
    value: "text-blue-700 dark:text-blue-200",
    subtitle: "text-blue-600 dark:text-blue-400",
    icon: "text-blue-500",
  },
  purple: {
    gradient: "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900",
    border: "border-purple-200 dark:border-purple-800",
    circle: "bg-purple-200/20 dark:bg-purple-600/20",
    title: "text-purple-600 dark:text-purple-300",
    value: "text-purple-700 dark:text-purple-200",
    subtitle: "text-purple-600 dark:text-purple-400",
    icon: "text-purple-500",
  },
}

export function StatCard({ color, icon, title, value, subtitle }: StatCardProps) {
  const colors = colorClasses[color]

  return (
    <Card
      className={`relative overflow-hidden bg-gradient-to-br ${colors.gradient} ${colors.border} p-6`}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 ${colors.circle} rounded-full -mr-12 -mt-12`} />
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <div className={`text-sm ${colors.title} font-medium`}>{title}</div>
          {icon}
        </div>
        <div className={`text-3xl font-bold ${colors.value}`}>{value}</div>
        <div className={`text-xs ${colors.subtitle} mt-2`}>{subtitle}</div>
      </div>
    </Card>
  )
}
