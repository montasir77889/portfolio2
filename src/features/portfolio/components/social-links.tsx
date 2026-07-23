import { ArrowUpRightIcon } from "lucide-react"

import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <PanelContent className="p-0">
        <ul className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.name}>
              <a
                href={addQueryParams(item.href, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/50 bg-background/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted/70 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:shadow-lg [&_svg]:size-5">
                  {SOCIAL_ICONS[item.name]}
                </span>

                <span className="font-mono text-sm font-medium">
                  {item.title}
                </span>

                <ArrowUpRightIcon className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  )
}
