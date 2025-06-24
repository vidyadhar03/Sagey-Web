'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full glass-card z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-vynce-green transition-colors">
              <Image 
                src="/Vynce_logo.png" 
                alt="Vynce Logo" 
                width={32} 
                height={32}
                className="rounded-sm"
              />
              <span className="text-2xl font-bold">Vynce</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-zinc-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-zinc-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-zinc-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#demo" className="text-zinc-300 hover:text-white transition-colors">
                Demo
              </Link>
              <button className="glass-button px-6 py-2 rounded-full font-medium">
                Join Waitlist
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
              <Link href="/" className="block px-3 py-2 text-zinc-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="block px-3 py-2 text-zinc-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="block px-3 py-2 text-zinc-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#demo" className="block px-3 py-2 text-zinc-300 hover:text-white transition-colors">
                Demo
              </Link>
              <div className="px-3 py-2">
                <button className="glass-button w-full px-6 py-2 rounded-full font-medium">
                  Join Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
} 