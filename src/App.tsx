import { useEffect, useState } from 'react'
import { getPreferences, initOrUpdateSession, trackScrollDepth } from './lib/storage'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ResultsSection from './components/ResultsSection'
import BenefitsSection from './components/BenefitsSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const prefs = getPreferences()
    if (!prefs.cookieConsent) {
      setShowBanner(true)
    } else {
      initOrUpdateSession()
    }
  }, [])

  // Rastreia scroll depth (PRD seção 5)
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const depth = Math.round((scrolled / total) * 100)
      trackScrollDepth(depth)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAccept = () => {
    setShowBanner(false)
    initOrUpdateSession()
  }

  const handleDecline = () => {
    setShowBanner(false)
  }

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
      {showBanner && (
        <CookieBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  )
}
