'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Reset state when text changes
    setDisplayedText('')
    setShowCursor(true)
    
    let timeoutId: NodeJS.Timeout

    const startTyping = () => {
      let currentIndex = 0
      
      const typeCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeCharacter, 60) // Smooth 60ms per character
        } else {
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 800)
        }
      }

      // Start typing after initial delay
      timeoutId = setTimeout(typeCharacter, delay)
    }

    startTyping()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text, delay])

  return (
    <span>
      {displayedText}
      {showCursor && (
        <span className="animate-cursor-blink text-vynce-green ml-1">|</span>
      )}
    </span>
  )
}

const MusicRadarAnimation = () => {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="relative w-80 h-80"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Pentagon shape for Music Radar */}
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Radar grid */}
          {[1, 2, 3, 4, 5].map((ring) => (
            <polygon
              key={ring}
              points="100,20 175,65 155,145 45,145 25,65"
              fill="none"
              stroke="rgba(34, 197, 94, 0.2)"
              strokeWidth="1"
              transform={`scale(${ring * 0.2})`}
              style={{ transformOrigin: '100px 100px' }}
            />
          ))}
          
          {/* Data visualization */}
          <motion.polygon
            points="100,40 140,70 130,120 70,120 60,70"
            fill="url(#radarGradient)"
            stroke="#22c55e"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          
          {/* Radar sweep */}
          <motion.line
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            stroke="#22c55e"
            strokeWidth="2"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '100px 100px' }}
          />
        </svg>
        
        {/* Floating music notes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 text-vynce-green-light text-xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            ♪
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Spotify.{' '}
              <span className="text-gradient-accent">
                <TypewriterText text="Analyzed." delay={500} />
              </span>
              <br />
              <TypewriterText text="Shared. Loved." delay={1500} />
            </h1>
            
            <motion.p
              className="text-xl text-zinc-400 mb-8 max-w-[52ch]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Turn your music data into stunning, AI-powered insights. Discover your musical DNA with Music Radar, Musical Age, Mood Ring, and share-ready cards.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="glass-button px-8 py-4 rounded-full text-lg font-semibold animate-glow">
                Join the Waitlist
              </button>
              <button className="glass-button-secondary px-8 py-4 rounded-full text-lg font-semibold">
                Try the Demo
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Music Radar Animation */}
          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl h-full">
              <MusicRadarAnimation />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
} 