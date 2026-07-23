export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /** Cover image shown on the project card (path under /public or absolute URL). */
  image?: string
  /** Short category labels shown as an overlay tag on the card (e.g. ["AI Platform"]). */
  categories?: string[]
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  
  github?: string
  liveDemo?: string
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Logo image URL (absolute or path under /public). */
  logo?: string
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
}
