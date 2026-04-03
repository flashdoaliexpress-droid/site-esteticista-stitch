import { services } from '../data/products'
import { trackServiceView, trackCtaClick } from '../lib/storage'
import { getWhatsAppUrl } from '../lib/whatsapp'

export default function ServicesSection() {
  const handleServiceClick = (serviceId: string, serviceName: string) => {
    trackServiceView(serviceId)
    window.open(getWhatsAppUrl(serviceName), '_blank', 'noopener,noreferrer')
  }

  const handleGeneralCta = () => {
    trackCtaClick()
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="servicos"
      className="bg-surface py-[120px] px-6 md:px-[100px] w-full max-w-[1440px] mx-auto"
    >
      {/* Section header */}
      <header className="flex flex-col items-center mb-[72px]">
        <div className="w-12 h-[2px] bg-primary" />
        <span className="font-label text-[12px] font-medium tracking-[4px] uppercase text-primary mt-4">
          Nossas Especialidades
        </span>
        <h2 className="font-headline text-[32px] md:text-[48px] font-bold text-on-surface text-center max-w-[560px] mt-3 leading-[1.15]">
          Tratamentos que revelam o melhor de você
        </h2>
      </header>

      {/* Grid de serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md border border-stone-100"
          >
            {/* Imagem */}
            <div className="w-full bg-surface-container-low overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="font-headline text-xl font-semibold text-on-surface leading-tight">
                {service.name}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-[1.7]">
                {service.shortDescription}
              </p>
              <button
                onClick={() => handleServiceClick(service.id, service.name)}
                className="self-start font-label text-[13px] font-medium text-primary hover:opacity-80 transition-opacity mt-1"
                aria-label={`Agendar ${service.name} via WhatsApp`}
              >
                Agendar →
              </button>
            </div>
          </div>
        ))}

        {/* Card CTA (8º slot) */}
        <div className="luxury-gradient rounded-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-[1.02] shadow-lg">
          <span className="material-symbols-outlined text-white/60 text-4xl mb-2">chat</span>
          <h3 className="font-headline text-[20px] font-bold text-white">
            Não sabe qual tratamento escolher?
          </h3>
          <p className="font-body text-sm text-white/90 mt-2 leading-relaxed">
            Nossa equipe te orienta sem compromisso.
          </p>
          <button
            onClick={handleGeneralCta}
            className="bg-surface-container-lowest text-primary px-7 py-3 mt-6 rounded-full font-label text-sm font-semibold tracking-wide hover:bg-background transition-colors"
            aria-label="Falar com especialista via WhatsApp"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  )
}
