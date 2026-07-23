import Image from "next/image"
import { format } from "date-fns"
import {
  ArrowUpRightIcon,
  BadgeCheckIcon,
  CalendarDaysIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

import type { Certification } from "../../types/certifications"

export function CertificationItem({
  certification,
  className,
}: {
  certification: Certification
  className?: string
}) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-line bg-background p-4 transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
        className
      )}
    >
      <a
        href={certification.credentialURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-5"
      >
        {/* Certificate Preview */}
        <div className="relative h-32 w-48 shrink-0 overflow-hidden rounded-xl border border-line bg-muted">
          <Image
            src={certification.certificateImage}
            alt={certification.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Side */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Title */}
          <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
            {certification.title}
          </h3>

          {/* Issuer */}
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <BadgeCheckIcon className="h-4 w-4 text-sky-500" />
            {certification.issuer}
          </div>

          {/* Date */}
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDaysIcon className="h-4 w-4" />
            {format(new Date(certification.issueDate), "MMMM yyyy")}
          </div>

          {/* Tags */}
          {certification.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {certification.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-muted px-2.5 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="font-mono text-xs text-muted-foreground">
              ID: {certification.credentialID}
            </div>

            <div className="flex items-center gap-1 font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              Verify
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </a>
    </article>
  )
}