"use client"

import Countdown from "./Countdown"

interface IntroScreenProps {
  onCountdownComplete: () => void
}

export default function IntroScreen({
  onCountdownComplete,
}: IntroScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-pink-600 animate-pulse">
          Happy birthday, my love.
        </h1>

        {/* Countdown Component */}
        <Countdown onComplete={onCountdownComplete} />
      </div>
    </div>
  )
}
