"use client"

import { CheckCircle2 } from "lucide-react"
import type { BlockStep } from "@/lib/timeline-mock-data"
import { StepMetrics } from "./step-metrics"
import { BlockModal } from "./block-modal"
import { useState } from "react"

interface BlockCircleProps {
  step: BlockStep
  onClick?: () => void
}

export function BlockCircle({ step, onClick }: BlockCircleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const bgColor = step.isDone
    ? "bg-gradient-to-br from-blue-400 to-purple-500"
    : "bg-gradient-to-br from-slate-500 to-slate-600"

  const borderColor = step.isDone ? "border-blue-500" : "border-slate-600"

  const handleClick = () => {
    setIsModalOpen(true)
    onClick?.()
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-pointer"
      >
      <div className="relative w-28 h-28 shrink-0">
        <div
          className={`absolute inset-0 ${bgColor} rounded-full flex flex-col items-center justify-center border-2 border-solid ${borderColor} shadow-lg`}
        >
          {step.isDone ? (
            <CheckCircle2 className="w-6 h-6 text-white" />
          ) : (
            <>
              <span className="text-xs font-bold text-white text-center px-2">
                {step.blockName}
              </span>
              <span className="text-[10px] text-white/80">Click to expand</span>
            </>
          )}
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs font-semibold text-foreground max-w-24 line-clamp-2">
          {step.blockName}
        </p>
        <StepMetrics stats={step.statistics} />
      </div>
      </button>

      {isModalOpen && <BlockModal block={step} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
