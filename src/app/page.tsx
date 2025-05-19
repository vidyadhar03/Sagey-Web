import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full glass-card z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-[#4B5563] hover:text-[#1F2937] transition-colors">
                Sagey
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-[#1F2937] transition-colors">Home</Link>
                <Link href="#features" className="text-gray-600 hover:text-[#1F2937] transition-colors">Features</Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-[#1F2937] transition-colors">How It Works</Link>
                <Link href="#privacy" className="text-gray-600 hover:text-[#1F2937] transition-colors">Privacy</Link>
                <button className="glass-button px-6 py-2 rounded-full text-[#1F2937] font-medium">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
                Your wise AI companion for a balanced, connected life.
              </h1>
              <p className="text-xl text-[#4B5563] mb-8 max-w-2xl">
                Sagey connects your music, social, fitness, and thoughts to deliver calming insights and fun micro-challenges.
              </p>
              <button className="glass-button px-8 py-4 rounded-full text-lg font-semibold text-[#1F2937] animate-gentle-pulse">
                Join the Waitlist
              </button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Placeholder for Lottie animation */}
              <div className="absolute inset-0 glass-card rounded-2xl flex items-center justify-center">
                <p className="text-gray-500">Wellness Animation Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1F2937]">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cross-platform Data Sync",
                description: "Connect Spotify, Instagram, Fitbit, and your journaling app for a complete picture of your digital life.",
                icon: "🔄"
              },
              {
                title: "Unified Life Score",
                description: "Get a comprehensive 0-100 wellness index that tracks your overall life balance.",
                icon: "📊"
              },
              {
                title: "AI-Powered Insights",
                description: "Receive personalized 'Aha!' moments and patterns you might have missed.",
                icon: "💡"
              },
              {
                title: "Micro-Challenges",
                description: "Small, achievable tasks that help you grow and improve your digital wellness.",
                icon: "🎯"
              },
              {
                title: "Digital Persona",
                description: "Coming soon: Create a fun digital twin that represents your behavior patterns.",
                icon: "👤"
              },
              {
                title: "Privacy-First Vault",
                description: "Your data is encrypted locally, giving you complete control over your information.",
                icon: "🔒"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">{feature.title}</h3>
                <p className="text-[#4B5563]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-[#E6F0FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1F2937]">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Connect Your Apps",
                description: "Link your favorite apps and services to give Sagey a complete picture of your digital life.",
                icon: "🔌"
              },
              {
                step: "2",
                title: "View Your Life Score",
                description: "Get insights and a comprehensive wellness score based on your connected data.",
                icon: "📈"
              },
              {
                step: "3",
                title: "Grow & Improve",
                description: "Accept personalized challenges and watch your digital twin evolve as you grow.",
                icon: "🌱"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="glass-card w-24 h-24 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">{step.title}</h3>
                <p className="text-[#4B5563]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-2xl">
            <div className="text-4xl mb-6">🔒</div>
            <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Your Privacy Matters</h2>
            <p className="text-xl text-[#4B5563]">
              Your data, your control. Encrypted locally. Share only what you choose.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gradient-to-b from-[#E6F0FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Be the first to try Sagey</h2>
            <p className="text-xl text-[#4B5563] mb-8">Get early access to our AI wellness platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="glass-input flex-1 px-6 py-4 rounded-full text-[#1F2937] placeholder-[#9CA3AF]"
              />
              <button className="glass-button px-8 py-4 rounded-full font-semibold text-[#1F2937] animate-gentle-pulse">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-bold text-[#1F2937]">
                Sagey
              </Link>
              <p className="mt-4 text-[#4B5563]">
                Your AI companion for a balanced, connected life.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#1F2937]">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-[#4B5563] hover:text-[#1F2937] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[#4B5563] hover:text-[#1F2937] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#1F2937]">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-[#4B5563] hover:text-[#1F2937] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-[#4B5563]">
            <p>&copy; {new Date().getFullYear()} Sagey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
