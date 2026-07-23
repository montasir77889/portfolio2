import { MailIcon } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
      <path
        d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.42a2.92 2.92 0 1 1 0-5.84 2.92 2.92 0 0 1 0 5.84Zm4.7-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z"
        fill="#fff"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#25D366">
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2Zm5.86 14.14c-.25.7-1.24 1.28-2.03 1.45-.55.12-1.26.21-3.67-.79-3.08-1.27-5.06-4.4-5.21-4.6-.15-.2-1.25-1.66-1.25-3.17s.79-2.25 1.07-2.56c.28-.31.6-.39.8-.39h.58c.19 0 .44-.07.68.53.25.61.85 2.11.92 2.26.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.31.77 1.28 1.66 2.08 1.14 1.02 2.1 1.34 2.4 1.49.31.15.49.13.67-.08.19-.2.79-.92.99-1.24.2-.31.4-.26.68-.15.28.1 1.77.84 2.07.99.31.15.51.23.58.36.08.13.08.75-.17 1.46Z" />
    </svg>
  )
}

export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  email: <MailIcon className="text-muted-foreground" />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  whatsapp: <WhatsAppIcon />,
}
