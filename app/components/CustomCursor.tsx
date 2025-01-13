'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <>
      {/* Solid Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[rgb(var(--color-primary))] rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      {/* Hollow Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[rgb(var(--color-accent))] border rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </>
  )
}

export default CustomCursor
