"use client"

import { useEffect, useRef } from "react"

type Dot = {
  ox: number
  oy: number
  x: number
  y: number
  vx: number
  vy: number
}

const COLOR = {
  light: "#000000",
  dark: "#fcfeff",
}

function isDarkMode() {
  return document.documentElement.classList.contains("dark")
}

export function NameSpotlightScatter({ name }: { name: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let dots: Dot[] = []

    let W = 0
    let H = 0

    const pointer = { x: -9999, y: -9999 }

    function resolveFontFamily() {
      return getComputedStyle(container!).fontFamily || "sans-serif"
    }

    function buildDots(width: number, height: number) {
      W = Math.round(width)
      H = Math.round(height)

      if (W <= 0 || H <= 0) return

      const dpr = window.devicePixelRatio || 1

      canvas!.width = W * dpr
      canvas!.height = H * dpr

      canvas!.style.width = `${W}px`
      canvas!.style.height = `${H}px`

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, W, H)

      const off = document.createElement("canvas")
      off.width = W
      off.height = H

      const offCtx = off.getContext("2d")
      if (!offCtx) return

      offCtx.clearRect(0, 0, W, H)
      offCtx.fillStyle = "#000"

      const fontSize = Math.min(
        72,
        W / (name.length * 0.75),
        H * 0.55
      )

      offCtx.font = "900 " + fontSize + "px " + resolveFontFamily()
      offCtx.textAlign = "center"
      offCtx.textBaseline = "middle"

      offCtx.fillText(name, W / 2, H / 2)

      const img = offCtx.getImageData(0, 0, W, H).data

      dots = []

      const spacing = 3

      for (let y = 0; y < H; y += spacing) {
        for (let x = 0; x < W; x += spacing) {
          const alpha = img[(y * W + x) * 4 + 3]

          if (alpha > 20) {
            dots.push({
              ox: x,
              oy: y,
              x,
              y,
              vx: 0,
              vy: 0,
            })
          }
        }
      }
    }

    function resize() {
      const rect = container!.getBoundingClientRect()
      buildDots(rect.width, rect.height)
    }

    const resizeObserver = new ResizeObserver(() => {
      resize()
    })

    resizeObserver.observe(container)

    resize()

    if ("fonts" in document) {
      document.fonts.ready.then(resize)
    }

    function handlePointerMove(e: MouseEvent | TouchEvent) {
      const rect = canvas!.getBoundingClientRect()

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY

      pointer.x = clientX - rect.left
      pointer.y = clientY - rect.top
    }

    function handlePointerLeave() {
      pointer.x = -9999
      pointer.y = -9999
    }

    canvas.addEventListener("mousemove", handlePointerMove)
    canvas.addEventListener("mouseleave", handlePointerLeave)
    canvas.addEventListener("touchmove", handlePointerMove, { passive: true })
    canvas.addEventListener("touchend", handlePointerLeave)

    let animationId = 0

    function animate() {
      ctx!.clearRect(0, 0, W, H)

      ctx!.fillStyle = isDarkMode() ? COLOR.dark : COLOR.light

      const radius = 70

      for (const d of dots) {
        const dx = d.x - pointer.x
        const dy = d.y - pointer.y

        const dist = Math.sqrt(dx * dx + dy * dy) || 0.001

        if (dist < radius) {
          const force = (1 - dist / radius) * 12

          d.vx += (dx / dist) * force
          d.vy += (dy / dist) * force
        }

        d.vx += (d.ox - d.x) * 0.08
        d.vy += (d.oy - d.y) * 0.08

        d.vx *= 0.82
        d.vy *= 0.82

        d.x += d.vx
        d.y += d.vy

        ctx!.beginPath()
        ctx!.arc(d.x, d.y, 1.25, 0, Math.PI * 2)
        ctx!.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)

      resizeObserver.disconnect()

      canvas.removeEventListener("mousemove", handlePointerMove)
      canvas.removeEventListener("mouseleave", handlePointerLeave)
      canvas.removeEventListener("touchmove", handlePointerMove)
      canvas.removeEventListener("touchend", handlePointerLeave)
    }
  }, [name])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 h-full w-full"
      />

      <h2 className="sr-only">{name}</h2>
    </div>
  )
}
