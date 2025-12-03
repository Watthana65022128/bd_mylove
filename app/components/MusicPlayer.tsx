"use client"

import { useEffect } from "react"
import { MusicPlayerProps } from "@/types"

export default function MusicPlayer({
  audioRef,
  setAudioRef,
  isMusicPlaying,
  setIsMusicPlaying,
}: MusicPlayerProps) {
  useEffect(() => {
    const audio = new Audio("/music/birthday-song.mp3")
    audio.loop = true
    setAudioRef(audio)

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [setAudioRef])

  const toggleMusic = () => {
    if (!audioRef) return

    if (isMusicPlaying) {
      audioRef.pause()
    } else {
      audioRef.play().catch((error) => {
        console.error("Error playing audio:", error)
      })
    }
    setIsMusicPlaying(!isMusicPlaying)
  }

  return (
    <button
      onClick={toggleMusic}
      className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full
                 font-semibold text-lg shadow-lg hover:shadow-xl transform
                 hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
    >
      <span className="text-2xl">{isMusicPlaying ? "⏸️" : "▶️"}</span>
      <span>{isMusicPlaying ? "Pause Music" : "Play Music"}</span>
    </button>
  )
}
