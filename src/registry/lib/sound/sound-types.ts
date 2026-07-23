export type SoundSource = string

export type SoundOptions = {
  /** Playback volume, from 0 to 1. Defaults to 1. */
  volume?: number
  /** Playback rate. Defaults to 1. */
  playbackRate?: number
  /** If true, restarts the sound from the beginning when triggered again while still playing. Defaults to true. */
  interrupt?: boolean
}

export type PlayOptions = Partial<SoundOptions>
