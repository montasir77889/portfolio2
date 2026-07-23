import Image from "next/image"
import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon, BoxIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { cn } from "@/lib/utils"

import type { Project } from "../../types/projects"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  return (
    <a
      className={cn(
        "group/project flex flex-col overflow-hidden rounded-xl border border-line transition-colors hover:bg-muted/40",
        className
      )}
      href={addQueryParams(project.liveDemo || project.github || "#",UTM_PARAMS)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover/project:scale-105"
            unoptimized
          />
        ) : (
          <div className="flex size-full items-center justify-center text-muted-foreground">
            <BoxIcon className="size-8" />
          </div>
        )}

        {project.categories && project.categories.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-md bg-background/90 px-2 py-1 font-mono text-xs font-medium text-foreground backdrop-blur-sm"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="flex items-center gap-1.5 leading-snug font-medium text-balance">
          {project.title}
          <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/project:opacity-100" />
        </h3>

        {project.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.description.split("\n")[0]}
          </p>
        )}
      </div>
    </a>
  )
}
