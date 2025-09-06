"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, type ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function InteractiveCard({ children, className = "", glowColor = "#f59e0b" }: InteractiveCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-amber-600/20 overflow-hidden">
        {children}

        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
          }}
        />

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            boxShadow: isHovered ? `0 0 20px ${glowColor}40, inset 0 0 20px ${glowColor}20` : "0 0 0px transparent",
          }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  )
}
