// Photo data structure
export interface PhotoData {
  id: number
  imagePath: string
  message: string
}

// Component Props
export interface CountdownProps {
  onComplete: () => void
}

export interface MusicPlayerProps {
  audioRef: HTMLAudioElement | null
  setAudioRef: (audio: HTMLAudioElement | null) => void
  isMusicPlaying: boolean
  setIsMusicPlaying: (playing: boolean) => void
}

export interface IntroScreenProps {
  onCountdownComplete: () => void
  audioRef: HTMLAudioElement | null
  setAudioRef: (audio: HTMLAudioElement | null) => void
  isMusicPlaying: boolean
  setIsMusicPlaying: (playing: boolean) => void
}

export interface PhotoGalleryProps {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  audioRef: HTMLAudioElement | null
  setAudioRef: (audio: HTMLAudioElement | null) => void
  isMusicPlaying: boolean
  setIsMusicPlaying: (playing: boolean) => void
}

export interface PhotoNavigationProps {
  currentIndex: number
  totalPhotos: number
  onPrevious: () => void
  onNext: () => void
}
