'use client'

import { motion } from 'framer-motion'

const StepCard = ({ 
  number, 
  title, 
  description, 
  icon, 
  delay = 0,
  isLast = false 
}: { 
  number: string
  title: string
  description: string
  icon: string
  delay?: number
  isLast?: boolean
}) => (
  <div className="flex flex-col items-center text-center relative">
    {/* Step circle */}
    <motion.div
      className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r from-vynce-green to-vynce-green-light flex items-center justify-center text-black font-bold text-2xl mb-6 shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.1 }}
    >
      <span className="text-3xl">{icon}</span>
    </motion.div>
    
    {/* Connecting line (not shown on last item) */}
    {!isLast && (
      <motion.div
        className="absolute top-10 left-10 w-full h-0.5 bg-gradient-to-r from-vynce-green/50 to-transparent hidden md:block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    )}
    
    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + 0.2 }}
    >
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 max-w-xs">{description}</p>
    </motion.div>
  </div>
)

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Connect Spotify",
      description: "Link your Spotify account with one click. No passwords, completely secure.",
      icon: "🔗"
    },
    {
      number: "2", 
      title: "AI Crunches Numbers",
      description: "Our GPT-4 powered engine analyzes your music taste and listening patterns.",
      icon: "🤖"
    },
    {
      number: "3",
      title: "Share Your Vibe",
      description: "Get beautiful, shareable cards perfect for Instagram stories and social media.",
      icon: "📤"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vynce-green/10 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Get your music analysis in three simple steps. No complex setup, just pure insight.
          </p>
        </motion.div>

        {/* Steps - Desktop horizontal layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={index * 0.2}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Steps - Mobile vertical layout */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex items-start space-x-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-vynce-green to-vynce-green-light flex items-center justify-center text-black font-bold text-xl shadow-lg">
                <span className="text-2xl">{step.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="glass-button px-8 py-4 rounded-full text-lg font-semibold animate-glow">
            Try It Now
          </button>
        </motion.div>
      </div>
    </section>
  )
} 