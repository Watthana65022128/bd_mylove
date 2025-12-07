"use client"

import { useEffect } from "react"
import { PhotoNavigationProps } from "@/types"

export default function PhotoNavigation({
  currentIndex,
  totalPhotos,
  onPrevious,
  onNext,
}: PhotoNavigationProps) {
  const isFirstPhoto = currentIndex === 0
  const isLastPhoto = currentIndex === totalPhotos - 1

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && !isFirstPhoto) {
        onPrevious()
      }
      if (e.key === "ArrowRight" && !isLastPhoto) {
        onNext()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isFirstPhoto, isLastPhoto, onPrevious, onNext])

  return (
    <div className="flex justify-between items-center mt-8 gap-4">
      <button
        onClick={onPrevious}
        disabled={isFirstPhoto}
        className=" px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full
                   font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed
                   disabled:hover:scale-100 transform hover:scale-105 transition-all
                   duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
        aria-label="Previous photo"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        disabled={isLastPhoto}
        className=" px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full
                   font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed
                   disabled:hover:scale-100 transform hover:scale-105 transition-all
                   duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
        aria-label="Next photo"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
