
"use client"

import { useState, type FormEvent } from "react"
import {
  LoaderCircleIcon,
  SendHorizontalIcon,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (loading) return

    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to send")
      }

      setEmail("")
      setMessage("")

      alert("✅ Message sent successfully!")
    } catch (error) {
      console.error(error)
      alert("❌ Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-line bg-background p-6"
    >
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        >
          Your Email
        </label>

        <Input
          id="email"
          type="email"
          required
          placeholder="john@example.com"
          value={email}
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 rounded-xl border-line"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        >
          Message
        </label>

        <Textarea
          id="message"
          required
          rows={6}
          placeholder="Tell me about your project..."
          value={message}
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-xl border-line"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <LoaderCircleIcon className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <SendHorizontalIcon className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}