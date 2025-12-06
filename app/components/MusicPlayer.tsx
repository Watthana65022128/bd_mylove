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
    <div className="flex items-center justify-center gap-4 px-8 py-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl">
      {/* Play/Pause Button */}
      <button
        onClick={toggleMusic}
        className="w-12 h-12 flex items-center justify-center bg-pink-500/80 hover:bg-pink-600/80
                   rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        {isMusicPlaying ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5v14l11-7L8 5z"
              fill="white"
            />
          </svg>
        )}
      </button>

      {/* Music Info */}
      <div className="flex flex-col">
        <span className="text-pink-600 font-semibold text-sm">
          {isMusicPlaying ? "Now Playing..." : "Music"}
        </span>
        <span className="text-pink-400 text-xs">
          {isMusicPlaying ? "" : "Click to play"}
        </span>
      </div>

      {/* Animated Music Bars (when playing) */}
      {isMusicPlaying && (
        <div className="flex items-end gap-1 h-8">
          <div className="w-1 bg-pink-500 rounded-full animate-music-bar-1"></div>
          <div className="w-1 bg-pink-400 rounded-full animate-music-bar-2"></div>
          <div className="w-1 bg-pink-500 rounded-full animate-music-bar-3"></div>
          <div className="w-1 bg-pink-400 rounded-full animate-music-bar-1"></div>
        </div>
      )}
    </div>
  )
}
