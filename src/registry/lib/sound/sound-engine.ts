import type { PlayOptions, SoundOptions, SoundSource } from "./sound-types"

/**
 * Minimal audio playback engine built on top of `HTMLAudioElement`.
 * Safe to import in SSR contexts — audio elements are only created lazily,
 * on the client, the first time `play()` is invoked.
 */
export class SoundEngine {
  private src: SoundSource
  private options: SoundOptions
  private audio: HTMLAudioElement | null = null

  constructor(src: SoundSource, options: SoundOptions = {}) {
    this.src = src
    this.options = options
  }

  private getAudio() {
    if (typeof window === "undefined") return null

    if (!this.audio) {
      this.audio = new Audio(this.src)
    }

    return this.audio
  }

  play(overrides: PlayOptions = {}) {
    const audio = this.getAudio()
    if (!audio) return

    const { volume, playbackRate, interrupt } = {
      ...this.options,
      ...overrides,
    }

    if (interrupt !== false) {
      audio.currentTime = 0
    }

    audio.volume = volume ?? 1
    audio.playbackRate = playbackRate ?? 1

    void audio.play().catch(() => {
      // Autoplay restrictions or unsupported format — fail silently.
    })
  }

  stop() {
    if (!this.audio) return
    this.audio.pause()
    this.audio.currentTime = 0
  }
}
