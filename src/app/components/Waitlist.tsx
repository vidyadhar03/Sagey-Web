'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const SocialProofLogos = () => {
  const logos = [
    { name: 'The Verge', width: 120 },
    { name: 'Product Hunt', width: 140 },
    { name: 'Indie Hackers', width: 130 }
  ]

  return (
    <motion.div
      className="flex items-center justify-center space-x-8 mt-12 opacity-60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0.6, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <span className="text-zinc-500 text-sm mr-4">Featured on:</span>
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          className="text-zinc-500 hover:text-vynce-green transition-colors duration-300 text-sm font-medium cursor-pointer"
          whileHover={{ scale: 1.05 }}
          style={{ width: logo.width }}
        >
          {logo.name}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Show confetti effect (placeholder - could integrate ts-particles)
        console.log('🎉 Confetti time!', data.message)
      } else {
        console.error('Signup failed:', data.error)
        alert(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vynce-green/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center glass-card p-12 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {!isSubmitted ? (
            <>
              {/* Header */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Be the first to try Vynce
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                  Get early access to our AI music analysis platform. Join thousands of music lovers already on the waitlist.
                </p>
              </motion.div>

              {/* Email form */}
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="glass-input flex-1 px-6 py-4 rounded-full text-white placeholder-zinc-500 text-lg"
                  required
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="glass-button px-8 py-4 rounded-full font-semibold text-lg animate-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </motion.form>

              {/* Privacy note */}
              <motion.p
                className="text-sm text-zinc-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                No spam, unsubscribe at any time. We respect your privacy.
              </motion.p>
            </>
          ) : (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Welcome to the Vynce family!
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                You're on the list! We'll notify you as soon as Vynce is ready to analyze your music.
              </p>
              <motion.div
                className="flex items-center justify-center space-x-4 text-vynce-green"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-lg">🎵</span>
                <span className="font-medium">Get ready to discover your musical DNA</span>
                <span className="text-lg">🎵</span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Social proof */}
        {!isSubmitted && <SocialProofLogos />}
      </div>
    </section>
  )
} 