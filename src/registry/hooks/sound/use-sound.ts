"use client"

import { useMemo } from "react"

import { SoundEngine } from "@/registry/lib/sound/sound-engine"
import type { PlayOptions, SoundOptions, SoundSource } from "@/registry/lib/sound/sound-types"

export function useSound(
  src: SoundSource,
  options: SoundOptions = {}
): [(overrides?: PlayOptions) => void, { stop: () => void }] {
  const engine = useMemo(() => new SoundEngine(src), [src])

  const play = (overrides?: PlayOptions) => {
    engine.play({ ...options, ...overrides })
  }

  const stop = () => engine.stop()

  return [play, { stop }]
}
