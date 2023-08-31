import { cn } from "@/lib/utils"

export default function WidthMeasurement({ showWidth, width }) {
  return (
    <div
      className={cn(
        "w-full flex gap-2 items-center text-white transition-opacity",
        showWidth ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      <div className="flex-1 flex items-center">
        <div className="h-4 w-0.5 bg-white/20" />
        <div className="h-px w-full bg-white/20" />
      </div>
      <span className="text-neutral-500 text-sm">{width} px</span>
      <div className="flex-1 flex items-center">
        <div className="h-px w-full bg-white/20" />
        <div className="h-4 w-0.5 bg-white/20" />
      </div>
    </div>
  )
}
