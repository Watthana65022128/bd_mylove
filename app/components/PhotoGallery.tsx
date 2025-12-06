"use client"

import { useState } from "react"
import Image from "next/image"
import PhotoNavigation from "./PhotoNavigation"
import MusicPlayer from "./MusicPlayer"
import { PhotoData, PhotoGalleryProps } from "@/types"

export default function PhotoGallery({
  currentIndex,
  setCurrentIndex,
  audioRef,
  setAudioRef,
  isMusicPlaying,
  setIsMusicPlaying,
}: PhotoGalleryProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Photo data - ผู้ใช้สามารถแก้ไขข้อความได้ที่นี่
  const photos: PhotoData[] = [
    {
      id: 1,
      imagePath: "/photos/1.jpg",
      message: "ไปเที่ยวน้ำตกที่สวยมาก",
    },
    {
      id: 2,
      imagePath: "/photos/2.jpg",
      message: "ทริปเชียงดาว",
    },
    {
      id: 3,
      imagePath: "/photos/3.jpg",
      message: "รูปคู่กับดอยหลวงเชียงดาว",
    },
    {
      id: 4,
      imagePath: "/photos/4.jpg",
      message: "เดินเล่นริมคลอง",
    },
    {
      id: 5,
      imagePath: "/photos/5.jpg",
      message: "มองตาก็รู้ใจ",
    },
    {
      id: 6,
      imagePath: "/photos/6.jpg",
      message: "ชุดนี้เธอน่ารักมาก",
    },
    {
      id: 7,
      imagePath: "/photos/7.jpg",
      message: "ธรรมดาที่แสนพิเศษ",
    },
    {
      id: 8,
      imagePath: "/photos/8.jpg",
      message: "แม่กำปองฤดูฝน",
    },
    {
      id: 9,
      imagePath: "/photos/9.jpg",
      message: "ไว้เที่ยวด้วยกันอีกเยอะๆเลยย ",
    },
    {
      id: 10,
      imagePath: "/photos/10.jpg",
      message: "ขอให้เธอมีความสุขมากๆดูแลสุขภาพด้วย และขอให้เจอเป้าหมายของชีวิตที่ตามหาอยู่นะ ❤️",
    },
  ]

  const changePhoto = (newIndex: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      changePhoto(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      changePhoto(currentIndex + 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Music Player - ด้านบนสุด */}
        <div className="mb-6 flex justify-center">
          <MusicPlayer
            audioRef={audioRef}
            setAudioRef={setAudioRef}
            isMusicPlaying={isMusicPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
          />
        </div>

        {/* Message - อยู่ด้านบนรูป นอก container */}
        <div className="mb-4">
          <p className="text-pink-600 text-2xl md:text-4xl font-bold text-center animate-fade-in">
            {photos[currentIndex].message}
          </p>
        </div>

        {/* Photo Container */}
        <div
          className={`relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <Image
            src={photos[currentIndex].imagePath}
            alt={`Photo ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Navigation */}
        <PhotoNavigation
          currentIndex={currentIndex}
          totalPhotos={photos.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        {/* Progress Indicator */}
        <div className="mt-6 text-center">
          <p className="text-pink-600 font-semibold text-lg">
            {currentIndex + 1} / {photos.length}
          </p>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changePhoto(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-pink-600 w-8"
                    : "bg-pink-300 hover:bg-pink-400 w-3"
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
