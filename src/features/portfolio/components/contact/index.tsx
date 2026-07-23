import { decodeEmail, decodePhoneNumber } from "@/utils/string"
import {
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react"

import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { USER } from "@/features/portfolio/data/user"

import { ContactForm } from "./contact-form"

const ID = "contact"

export function Contact() {
  const email = USER.emailB64 ? decodeEmail(USER.emailB64) : ""
  const phone = USER.phoneNumberB64
    ? decodePhoneNumber(USER.phoneNumberB64)
    : ""

  const whatsappNumber = USER.whatsappNumberB64
    ? decodePhoneNumber(USER.whatsappNumberB64).replace(/[^\d+]/g, "")
    : ""

  return (
    <Panel id={ID} className="screen-line-bottom-none">
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Contact</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">
            Let&rsquo;s build something together.
          </h3>

          <p className="max-w-lg text-sm text-muted-foreground">
            Whether it&rsquo;s an AI project, research collaboration,
            internship opportunity, or software engineering role,
            I&rsquo;d love to hear from you.
          </p>
        </div>
        
        <ContactForm />

        <div className="border-t border-line pt-5">
          <div className="grid gap-3 sm:grid-cols-3">

            {email && (
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-3 rounded-xl border border-line p-4 transition-all hover:bg-muted/50"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                  <MailIcon className="size-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">
                    Email
                  </p>

                  <p className="truncate text-sm font-medium">
                    {email}
                  </p>
                </div>
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone}`}
                className="group flex items-center gap-3 rounded-xl border border-line p-4 transition-all hover:bg-muted/50"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <PhoneIcon className="size-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">
                    Phone
                  </p>

                  <p className="truncate text-sm font-medium">
                    {phone}
                  </p>
                </div>
              </a>
            )}

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-3 rounded-xl border border-line p-4 transition-all hover:bg-muted/50"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircleIcon className="size-4" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    WhatsApp
                  </p>

                  <p className="text-sm font-medium">
                    Quick Chat
                  </p>
                </div>
              </a>
            )}

          </div>
        </div>
      </PanelContent>
    </Panel>
  )
}