"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    let animationId: number

    const updatePosition = (e: MouseEvent) => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }

      animationId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, [role='button'], input, textarea")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-mode-difference transition-all duration-150 ease-out"
        style={{
          left: `${position.x - 12}px`,
          top: `${position.y - 12}px`,
          transform: `scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="relative w-6 h-6">
          {/* Main cursor dot */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-200 ${
              isHovering
                ? "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500"
                : "bg-gradient-to-br from-amber-500 to-amber-600"
            }`}
            style={{
              boxShadow: isHovering
                ? "0 0 20px rgba(245, 158, 11, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)"
                : "0 0 15px rgba(245, 158, 11, 0.6)",
            }}
          />

          {/* Outer ring */}
          <div
            className={`absolute -inset-2 rounded-full border-2 transition-all duration-300 ${
              isHovering ? "border-white/60 scale-150" : "border-amber-400/40 scale-100"
            }`}
            style={{
              animation: isHovering ? "pulse 1s ease-in-out infinite" : "none",
            }}
          />

          {/* Coffee bean icon for hover state */}
          {isHovering && (
            <div className="absolute inset-0 flex items-center justify-center text-white text-xs animate-pulse">☕</div>
          )}
        </div>
      </div>

      {/* Trailing particles */}
      <div
        className="fixed pointer-events-none z-[9998] opacity-60"
        style={{
          left: `${position.x - 6}px`,
          top: `${position.y - 6}px`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="w-3 h-3 bg-amber-400/30 rounded-full blur-sm" />
      </div>
    </>
  )
}
