import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import type { BlockStep } from "@/lib/timeline-mock-data"
import { StepCircle } from "./step-circle"

interface BlockModalProps {
  block: BlockStep
  onClose: () => void
}

export function BlockModal({ block, onClose }: BlockModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-card border-border max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
          <h2 className="text-xl font-bold text-foreground">{block.blockName}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {block.steps.map((step) => (
              <StepCircle key={step.id} step={step} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}