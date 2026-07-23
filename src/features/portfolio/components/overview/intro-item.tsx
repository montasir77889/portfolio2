import { cn } from "@/lib/utils"

export function IntroItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-lg p-1.5 font-mono text-sm transition-colors hover:bg-muted/60",
        className
      )}
      {...props}
    />
  )
}

export function IntroItemIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-md border ring-1 ring-offset-1 ring-offset-background transition-transform group-hover:scale-110",
        "border-muted-foreground/15 bg-muted ring-line",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

export function IntroItemContent({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-balance", className)} {...props} />
}

export function IntroItemLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn("link", className)}
      target="_blank"
      rel="noopener"
      {...props}
    />
  )
}
