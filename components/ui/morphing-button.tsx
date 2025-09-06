"use client"

import { motion } from "framer-motion"
import { useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface MorphingButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  onClick?: () => void
}

export function MorphingButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
}: MorphingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Button variant={variant} size={size} onClick={onClick} className={`relative overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="relative z-10"
          animate={{
            color: isHovered ? "#ffffff" : undefined,
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  )
}
