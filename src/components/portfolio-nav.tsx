import Link from "next/link"
import type { Route } from "next"

const ITEMS: { title: string; href: Route }[] = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/#projects" as Route },
  { title: "Resume", href: "/resume.pdf" as Route },
  {title: "Contact", href: "/#contact" as Route },
]

export function PortfolioNav() {
  return (
    <nav className="flex items-center gap-4 max-sm:hidden">
      {ITEMS.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          target={item.href.endsWith(".pdf") ? "_blank" : undefined}
          rel={item.href.endsWith(".pdf") ? "noopener" : undefined}
          className="text-sm font-medium tracking-wide text-muted-foreground transition-[color] hover:text-foreground"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
