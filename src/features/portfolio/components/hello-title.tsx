"use client"

import { useSyncExternalStore } from "react"

import { InlineScript } from "@/components/inline-script"
import { PanelTitle } from "@/features/portfolio/components/panel"

const ID = "hello"
const SSR_TEXT = "Hello"

export function HelloTitle() {
  // Server renders "Hello" for SEO; the client snapshot resolves the viewer's
  // local greeting, which also covers client-side navigation (no inline script).
  const greeting = useSyncExternalStore(
    () => () => {},
    getGreeting,
    () => SSR_TEXT
  )

  return (
    <>
      <PanelTitle id={`${ID}-greeting`} suppressHydrationWarning>
        {greeting}
      </PanelTitle>

      <InlineScript html={getInlineScript(`${ID}-greeting`)} />
    </>
  )
}

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >=12 && hour < 17) return "Good aftrenoon"
  if (hour >= 17 && hour < 21) return "Good evening"
  return "Good night"
}

function runGreetingScript(elementId: string, compute: typeof getGreeting) {
  try {
    const el = document.getElementById(elementId)
    if (el) el.textContent = compute()
  } catch {}
}

// Blocking inline script that paints the greeting before hydration on the
// initial document load (Next.js "prevent flash before hydration").
function getInlineScript(elementId: string) {
  return `(${runGreetingScript.toString()})(${JSON.stringify(elementId)},${getGreeting.toString()})`
}
