"use client"

import { useMemo, useRef } from "react"

import { SoundEngine } from "@/registry/lib/sound/sound-engine"
import type { PlayOptions, SoundOptions, SoundSource } from "@/registry/lib/sound/sound-types"

/**
 * Hook for playing a single sound source.
 *
 * @example
 * const [play] = useSound("/sounds/click.mp3", { volume: 0.5 })
 * <button onClick={() => play()}>Click me</button>
 */
export function useSound(
  src: SoundSource,
  options: SoundOptions = {}
): [(overrides?: PlayOptions) => void, { stop: () => void }] {
  const optionsRef = useRef(options)
  optionsRef.current = options

  const engine = useMemo(() => new SoundEngine(src, optionsRef.current), [src])

  const play = (overrides?: PlayOptions) => {
    engine.play({ ...optionsRef.current, ...overrides })
  }

  const stop = () => engine.stop()

  return [play, { stop }]
}
