import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex aspect-square h-8 shrink-0 items-center justify-center rounded-md bg-foreground font-mono text-sm font-bold text-background select-none",
        className
      )}
      {...props}
    >
      MA
    </div>
  )
}
