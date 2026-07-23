import { addQueryParams } from "@/utils/url"
import { ArrowUpIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-12" />
        </div>

        <div className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between sm:px-6">
          <p className="font-mono text-sm text-muted-foreground">
            © {year} {USER.displayName}. All rights reserved.
          </p>

          <ul className="flex items-center gap-1">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.name}>
                <a
                  className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&_svg]:size-4.5"
                  href={addQueryParams(item.href, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                  aria-label={item.title}
                >
                  {SOCIAL_ICONS[item.name]}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            href="#top"
          >
            Back to top
            <ArrowUpIcon className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
