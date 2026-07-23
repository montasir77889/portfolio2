import { TECH_STACK } from "../data/tech-stack"
import type { TechStack as TechStackType } from "../types/tech-stack"
import { Panel, PanelHeader, PanelTitle } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "stack"

// Brand colors so the stack reads as colorful chips instead of monochrome icons.
const BRAND_COLORS: Record<string, string> = {
  python: "#3776AB",
  js: "#F7DF1E",
  c: "#A8B9CC",
  cpp: "#00599C",
  pytorch: "#EE4C2C",
  tensorflow: "#FF6F00",
  opencv: "#5C3EE8",
  react: "#61DAFB",
  html: "#E34F26",
  tailwindcss: "#38BDF8",
  nodejs: "#339933",
  expressjs: "#9CA3AF",
  mongodb: "#47A248",
  sql: "#4479A1",
  git: "#F05032",
  github: "#9CA3AF",
  vscode: "#007ACC",
  linux: "#FCC624",
}

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(48)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
          aria-hidden
        />

        {Object.entries(groupByCategory(TECH_STACK)).map(
          ([category, items], index) => {
            const categoryId = `${ID}-${category
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`

            return (
              <div
                key={category}
                className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
              >
                <div
                  id={categoryId}
                  className="pl-4 text-sm/(--badge-height) text-muted-foreground"
                >
                  <span
                    className="mr-1.5 font-mono text-muted-foreground/50 select-none"
                    aria-hidden
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  {category}
                </div>

                <ul
                  aria-labelledby={categoryId}
                  className="flex flex-wrap gap-1.5 px-4"
                >
                  {items.map((item) => {
                    return (
                      <li key={item.key} className="flex">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener"
                          className="flex h-(--badge-height) items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
                        >
                          <span
                            className="flex"
                            style={{ color: BRAND_COLORS[item.key] }}
                          >
                            {item.icon}
                          </span>
                          {item.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          }
        )}
      </div>
    </Panel>
  )
}

function groupByCategory(
  items: TechStackType[]
): Record<string, TechStackType[]> {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      ;(acc[category] ??= []).push(item)
    }
    return acc
  }, {})
}
