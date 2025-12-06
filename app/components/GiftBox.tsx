"use client"

import { useState } from "react"

interface GiftBoxProps {
  onOpen: () => void
}

export default function GiftBox({ onOpen }: GiftBoxProps) {
  const [isShaking, setIsShaking] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = () => {
    setIsShaking(true)
    setShowConfetti(true)

    // Wait for animation then call onOpen
    setTimeout(() => {
      onOpen()
    }, 1500)
  }

  return (
    <div className="relative flex flex-col items-center justify-center animate-fade-in">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                backgroundColor: [
                  "#ec4899",
                  "#f472b6",
                  "#fbbf24",
                  "#60a5fa",
                  "#a78bfa",
                ][Math.floor(Math.random() * 5)],
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random() * 1}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Gift Box */}
      <button
        onClick={handleClick}
        disabled={showConfetti}
        className={`relative group cursor-pointer ${
          isShaking ? "animate-shake" : ""
        }`}
      >
        {/* Gift Box SVG */}
        <div className="transform transition-transform duration-300 group-hover:scale-110">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="drop-shadow-2xl"
          >
            {/* Box Bottom */}
            <rect
              x="40"
              y="80"
              width="120"
              height="100"
              fill="#ec4899"
              rx="5"
            />

            {/* Box Top/Lid */}
            <rect
              x="35"
              y="60"
              width="130"
              height="25"
              fill="#db2777"
              rx="5"
            />

            {/* Ribbon Vertical */}
            <rect x="95" y="60" width="10" height="120" fill="#fbbf24" />

            {/* Ribbon Horizontal */}
            <rect x="40" y="95" width="120" height="10" fill="#fbbf24" />

            {/* Bow */}
            <circle cx="70" cy="50" r="15" fill="#f59e0b" />
            <circle cx="130" cy="50" r="15" fill="#f59e0b" />
            <circle cx="100" cy="45" r="10" fill="#fbbf24" />
          </svg>
        </div>

        {/* Sparkles around gift */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <span
            className="absolute top-4 left-4 text-2xl animate-ping"
            style={{ animationDuration: "2s" }}
          >
            ✨
          </span>
          <span
            className="absolute top-4 right-4 text-2xl animate-ping"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          >
            ✨
          </span>
          <span
            className="absolute bottom-4 left-8 text-2xl animate-ping"
            style={{ animationDuration: "2.2s", animationDelay: "1s" }}
          >
            ✨
          </span>
          <span
            className="absolute bottom-4 right-8 text-2xl animate-ping"
            style={{ animationDuration: "2.8s", animationDelay: "1.5s" }}
          >
            ✨
          </span>
        </div>
      </button>

      {/* Instruction Text */}
      <p className="mt-8 text-xl md:text-2xl text-pink-500 text-center animate-bounce">
        ของขวัญนี้มอบให้คุณสุณัฐชา🎉
      </p>
    </div>
  )
}
