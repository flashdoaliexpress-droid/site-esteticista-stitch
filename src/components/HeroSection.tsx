import { trackCtaClick } from '../lib/storage'
import { getWhatsAppUrl } from '../lib/whatsapp'

// Imagem gerada pelo Stitch (substituir por foto real da clínica)
const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAwT643r6TGkcEJaS_GVF_MJG1S2fYDA65HJWBV92CTcMCdtWCvhrCPXaPRSvgf8wMtG4I_flRfY4TwVRppOPev-SiRAojPIXZBHNyQhi9_QUAYhp_MFLthtd8DnKcKax5DHZQq_2IrCbcgiWC5q7BX-YjNmGoP2FtFc_nr9urGyCCWwczqHmQPHAGRfv2QZ7faAFbLLCWFxrnxgkFDyfnJH2bi_dlu36zd7_Ax3mfiiDFLg-D8FWmpjLriwDMK-PKFwgqmjXGQ7gzp'

export default function HeroSection() {
  const handleCta = () => {
    trackCtaClick()
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Sala de tratamento da Bella Derma — ambiente luxuoso com iluminação suave e acabamento em mármore"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay — extraído do Stitch */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-24 w-full max-w-7xl mx-auto flex flex-col items-start pt-20">
        {/* Eyebrow */}
        <span className="text-white/80 font-label text-xs md:text-[12px] font-semibold tracking-[0.25em] uppercase mb-4 block animate-fade-in">
          Clínica de Estética Avançada
        </span>

        {/* Headline */}
        <h1 className="font-headline text-[32px] md:text-[72px] font-bold leading-[1.1] max-w-[600px] mb-6 text-glow text-white animate-fade-in">
          Realce Sua<br />Beleza Natural
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 font-body text-lg md:text-[18px] font-light leading-relaxed max-w-[480px] mb-10">
          Tratamentos estéticos de alto padrão com tecnologia avançada e cuidado personalizado para você.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-start gap-4">
          <button
            onClick={handleCta}
            className="bg-primary hover:bg-primary/90 text-on-primary font-semibold px-12 py-[18px] rounded-full transition-all duration-300 shadow-[0_8px_32px_rgba(201,169,110,0.3)] active:scale-95"
            aria-label="Agendar agora via WhatsApp"
          >
            Quero Cuidar de Mim
          </button>

          <a
            href="#servicos"
            className="flex items-center gap-2 text-white/55 hover:text-white transition-colors text-[13px] font-medium mt-4 group"
          >
            Conheça nossos serviços
            <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-scroll-line" />
        </div>
        <span className="material-symbols-outlined text-white/55 text-2xl">expand_more</span>
      </div>
    </main>
  )
}
