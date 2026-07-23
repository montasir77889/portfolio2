import { decodeEmail, decodePhoneNumber } from "@/utils/string"

import type { SocialProfile } from "@/features/portfolio/types/social-links"
import { USER } from "@/features/portfolio/data/user"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  email: {
    title: "Email",
    handle: USER.emailB64 ? decodeEmail(USER.emailB64) : "",
    href: USER.emailB64 ? `mailto:${decodeEmail(USER.emailB64)}` : "",
    sameAs: false,
  },
  facebook: {
    title: "Facebook",
    handle: "montasir.abdullah.5",
    href: "https://www.facebook.com/montasir.abdullah.5/",
    sameAs: true,
  },
  instagram: {
    title: "Instagram",
    handle: "montasirabdullah",
    href: "https://www.instagram.com/montasirabdullah/",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "montasir-abdullah",
    href: "https://www.linkedin.com/in/montasir-abdullah/",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "montasir77889",
    href: "https://github.com/montasir77889",
    sameAs: true,
  },
  whatsapp: {
    title: "WhatsApp",
    handle: USER.whatsappNumberB64
      ? decodePhoneNumber(USER.whatsappNumberB64)
      : "",
    href: USER.whatsappNumberB64
      ? `https://wa.me/${decodePhoneNumber(USER.whatsappNumberB64).replace(/[^\d]/g, "")}`
      : "",
    sameAs: false,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
)
  .map(([name, profile]) => ({ name, ...profile }))
  .filter((link) => link.href)
