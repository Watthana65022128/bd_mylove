"use client"

import { useState } from "react"
import IntroScreen from "./components/IntroScreen"
import GiftBox from "./components/GiftBox"
import PhotoGallery from "./components/PhotoGallery"

export default function Home() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false)
  const [isGiftOpened, setIsGiftOpened] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
      {!isCountdownComplete ? (
        <IntroScreen
          onCountdownComplete={() => setIsCountdownComplete(true)}
        />
      ) : !isGiftOpened ? (
        <div className="flex min-h-screen items-center justify-center p-4">
          <GiftBox onOpen={() => setIsGiftOpened(true)} />
        </div>
      ) : (
        <PhotoGallery
          currentIndex={currentPhotoIndex}
          setCurrentIndex={setCurrentPhotoIndex}
          audioRef={audioRef}
          setAudioRef={setAudioRef}
          isMusicPlaying={isMusicPlaying}
          setIsMusicPlaying={setIsMusicPlaying}
        />
      )}
    </div>
  )
}
