'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const FeatureCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 ${className}`}
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
)

const AnimatedRadar = () => {
  return (
    <div className="relative w-full h-full mx-auto">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#22c55e" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Background glow */}
        <circle cx="100" cy="100" r="90" fill="url(#radarGlow)" />
        
        {/* Radar grid rings */}
        {[20, 40, 60, 80].map((radius) => (
          <motion.circle
            key={radius}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(34, 197, 94, 0.3)"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: radius * 0.02 }}
          />
        ))}
        
        {/* Pentagon data shape */}
        <motion.polygon
          points="100,30 160,60 140,130 60,130 40,60"
          fill="rgba(34, 197, 94, 0.2)"
          stroke="#22c55e"
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Rotating sweep line */}
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="20"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '100px 100px' }}
        />
      </motion.svg>
    </div>
  )
}

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    { name: "Musical Age", color: "from-purple-500 to-pink-500" },
    { name: "Mood Ring", color: "from-blue-500 to-cyan-500" },
    { name: "Genre Passport", color: "from-orange-500 to-red-500" }
  ]

  return (
    <div className="relative w-80 h-80 mx-auto">
      {images.map((image, index) => (
        <motion.div
          key={image.name}
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${image.color} flex items-center justify-center cursor-pointer`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: currentImage === index ? 1 : 0.3,
            scale: currentImage === index ? 1 : 0.9,
            zIndex: currentImage === index ? 10 : 1
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setCurrentImage(index)}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-bold">{image.name}</h3>
            <p className="text-sm opacity-90 mt-2">AI-Powered Analysis</p>
          </div>
        </motion.div>
      ))}
      
      {/* Carousel indicators */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-vynce-green w-6' : 'bg-white/30'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}

const ShareCardMosaic = () => {
  const cards = [
    { color: 'from-green-400 to-blue-500', emoji: '🎧', label: 'Top Artist' },
    { color: 'from-purple-400 to-pink-500', emoji: '📈', label: 'Music Age' },
    { color: 'from-yellow-400 to-orange-500', emoji: '🌈', label: 'Mood Ring' },
    { color: 'from-indigo-400 to-purple-500', emoji: '🗺️', label: 'Genre Map' },
    { color: 'from-pink-400 to-red-500', emoji: '⭐', label: 'Year Recap' },
    { color: 'from-cyan-400 to-blue-500', emoji: '🎵', label: 'Vibe Check' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          className={`aspect-square rounded-xl bg-gradient-to-br ${card.color} p-4 flex flex-col items-center justify-center text-white cursor-pointer`}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="text-3xl mb-2">{card.emoji}</div>
          <div className="text-xs font-semibold text-center">{card.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

export default function FeatureShowcase() {
  return (
    <div className="relative">
      {/* Musical Insights Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vynce-green/5 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Musical DNA
              <span className="text-gradient-accent block text-2xl font-normal mt-2">
                AI-powered insights into your music personality
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Discover the hidden patterns in your music taste with our comprehensive analysis engine
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Music Radar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-8 rounded-3xl h-full">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-vynce-green to-vynce-green-light flex items-center justify-center text-3xl">
                    📡
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Music Radar</h3>
                  <p className="text-zinc-400">5-axis taste profile</p>
                </div>
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <AnimatedRadar />
                </div>
                <p className="text-sm text-zinc-400 text-center">
                  Visualize your music across Danceability, Energy, Valence, Acousticness, and Popularity
                </p>
              </div>
            </motion.div>

            {/* Right Column - Other Insights */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Musical Age */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl flex-shrink-0">
                    🎂
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Musical Age</h3>
                    <p className="text-zinc-400 mb-3">
                      Discover the era your music taste belongs to. Are you stuck in the 90s or riding the latest waves?
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Decade Analysis</span>
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full">Trend Tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mood Ring */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl flex-shrink-0">
                    🌈
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Mood Ring</h3>
                    <p className="text-zinc-400 mb-3">
                      Track your emotional journey through music. See how your mood patterns change throughout the day and seasons.
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Emotion Mapping</span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">Daily Patterns</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Night Owl Pattern */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-2xl flex-shrink-0">
                    🦉
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Night Owl Pattern</h3>
                    <p className="text-zinc-400 mb-3">
                      Analyze your listening habits across different times. Discover if you're a morning melody person or late-night beat lover.
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full">Time Analysis</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Sleep Patterns</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: '⚡', title: 'Real-Time Analysis', desc: 'Instant insights as your taste evolves' },
              { icon: '🎨', title: 'Beautiful Visualizations', desc: 'Share-ready cards for every insight' },
              { icon: '🤖', title: 'AI-Powered Predictions', desc: 'Discover music you\'ll love before you know it' }
            ].map((feature, index) => (
              <FeatureCard key={feature.title}>
                <div className="text-center">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.desc}</p>
                </div>
              </FeatureCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-gray-800/50">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-vynce-green/5 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageCarousel />
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                AI Insights
                <span className="text-gradient-accent block text-2xl font-normal mt-2">
                  GPT-4 powered analysis
                </span>
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: '🧠', title: 'GPT-4 Powered', desc: 'Advanced AI understands your music DNA' },
                  { icon: '🚀', title: 'No Extra Setup', desc: 'Just log in with Spotify and go' },
                  { icon: '⚡', title: 'Lightning Speed', desc: 'Smart caching for instant results' }
                ].map((feature, index) => (
                  <FeatureCard key={feature.title}>
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <p className="text-zinc-400">{feature.desc}</p>
                      </div>
                    </div>
                  </FeatureCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Sharing Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vynce-green/5 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Social Sharing
                <span className="text-gradient-accent block text-2xl font-normal mt-2">
                  Perfect for your stories
                </span>
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: '📱', title: 'Perfect IG Story Size', desc: 'Optimized dimensions for all platforms' },
                  { icon: '👆', title: '1-Tap Share', desc: 'Share directly from mobile device' },
                  { icon: '📴', title: 'Works Offline', desc: 'PWA technology for seamless experience' }
                ].map((feature, index) => (
                  <FeatureCard key={feature.title}>
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <p className="text-zinc-400">{feature.desc}</p>
                      </div>
                    </div>
                  </FeatureCard>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ShareCardMosaic />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 