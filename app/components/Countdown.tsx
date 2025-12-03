"use client"

import { useState, useEffect } from "react"
import { CountdownProps } from "@/types"

export default function Countdown({ onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(27)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    if (!isStarted) return

    if (timeLeft <= 0) {
      onComplete()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onComplete, isStarted])

  const handleStart = () => {
    setIsStarted(true)
  }

  // Calculate progress for circular progress bar
  const circumference = 2 * Math.PI * 120
  const progress = (timeLeft / 27) * 100
  const offset = circumference - (progress / 100) * circumference

  // Determine color based on time left
  const getColor = () => {
    if (timeLeft > 19) return "text-pink-400"
    if (timeLeft > 9) return "text-pink-500"
    return "text-rose-600"
  }

  const getStrokeColor = () => {
    if (timeLeft > 19) return "#f472b6" // pink-400
    if (timeLeft > 9) return "#ec4899" // pink-500
    return "#e11d48" // rose-600
  }

  if (!isStarted) {
    return (
      <div className="relative animate-fade-in">
        <div className="text-center">
          <div className="w-64 h-64 mx-auto relative flex flex-col items-center justify-center">
            <span className="text-8xl font-bold text-pink-500">27</span>
            <span className="text-2xl font-semibold text-pink-400 mt-2">December</span>
          </div>
          <button
            onClick={handleStart}
            className="mt-8 px-12 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full
                       font-semibold text-xl shadow-lg hover:shadow-xl transform
                       hover:scale-105 transition-all duration-300"
          >
            Start
          </button>
          <p className="mt-4 text-xl text-pink-500 text-center animate-pulse">
            Click to begin...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative animate-fade-in">
      {/* Circular Progress Background */}
      <div className="w-64 h-64 mx-auto relative">
        <svg className="transform -rotate-90 w-64 h-64">
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-pink-200"
          />
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke={getStrokeColor()}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
            strokeLinecap="round"
          />
        </svg>

        {/* Number Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-8xl font-bold ${getColor()} animate-bounce transition-colors duration-500`}
          >
            {timeLeft}
          </span>
        </div>
      </div>

      <p className="mt-4 text-xl text-pink-500 text-center animate-pulse">
        Getting ready for something special...
      </p>
    </div>
  )
}
