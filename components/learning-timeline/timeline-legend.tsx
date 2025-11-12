export function TimelineLegend() {
  return (
    <div className="mt-8 pt-6 border-t border-border flex gap-6 text-xs">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
        <span className="text-muted-foreground">Completed</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400" />
        <span className="text-muted-foreground">Ongoing</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-300" />
        <span className="text-muted-foreground">Blocked</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-300 to-green-500" />
        <span className="text-muted-foreground">Recommended</span>
      </div>
    </div>
  )
}
