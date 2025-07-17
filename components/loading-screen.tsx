"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
            PREMIUM MOTORS
          </h1>
          <p className="text-gray-400 text-lg">Loading luxury experience...</p>
        </div>

        {/* Loading Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-gray-400">{progress}%</div>

        {/* Animated Car Icon */}
        <div className="mt-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center animate-pulse">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h1a3 3 0 006 0h2a3 3 0 006 0h1a2 2 0 002-2V9zM5 13a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
