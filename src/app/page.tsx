import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeatureShowcase from './components/FeatureShowcase'
import HowItWorks from './components/HowItWorks'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureShowcase />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </main>
  )
}
