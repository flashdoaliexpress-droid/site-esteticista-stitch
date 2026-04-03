import { useEffect, useState } from 'react'
import { getWhatsAppUrl } from '../lib/whatsapp'
import { trackCtaClick } from '../lib/storage'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBooking = () => {
    trackCtaClick()
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/90 backdrop-blur-md shadow-sm border-b border-outline-variant/50'
          : 'bg-background/80 backdrop-blur-md'
      }`}
    >
      {/* Logo */}
      <div className="font-serif text-[19px] font-light tracking-widest text-on-surface">
        BELLA DERMA
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center space-x-10">
        <a
          href="#sobre"
          className="text-on-surface-variant font-serif tracking-tight text-lg hover:text-primary transition-colors duration-500"
        >
          Sobre
        </a>
        <a
          href="#servicos"
          className="text-on-surface-variant font-serif tracking-tight text-lg hover:text-primary transition-colors duration-500"
        >
          Serviços
        </a>
        <a
          href="#contato"
          className="text-on-surface-variant font-serif tracking-tight text-lg hover:text-primary transition-colors duration-500"
        >
          Contato
        </a>
      </div>

      {/* CTA */}
      <button
        onClick={handleBooking}
        className="bg-primary text-on-primary px-7 py-3 rounded-full font-label text-sm font-semibold tracking-widest uppercase transition-all shadow-md hover:bg-primary/90 active:scale-95"
        aria-label="Agendar consulta via WhatsApp"
      >
        Agendar Consulta
      </button>
    </nav>
  )
}
