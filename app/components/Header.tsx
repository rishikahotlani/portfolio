'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgb(var(--color-background))] bg-opacity-90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={`#${item.toLowerCase()}`} className="text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-accent))] transition-colors">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

