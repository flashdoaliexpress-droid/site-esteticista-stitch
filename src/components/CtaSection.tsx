// CtaSection — CTA Banner + Localização — baseado no Stitch cta-footer.html (screen fe385baf4ddc433db2739df04411eb85)

import { getWhatsAppUrl } from '../lib/whatsapp'

const BOTANICAL_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA-b4qrXezwzbi7GZ6nrIvW_BpHYcgMyaO2LMKdFKhyh4-NwK1Qe2mzHhj8ulbWLWSnrXOBCe8k3nfiHTKFAez6c2s5qyWIlsVvv5F2SNdpSNO_Ozpu1vVXNCpwL6rpqp_DiIN8iho2aFMSkDmnNuaD8-0Uk0xLP5gfJjRRzcaC_sKFyP4KjNDC6wRaBO3pDmep3xRW8K0LV9pRxlSpYF_Ihpc6l85vpsOczcGC4JX4EyIxX4B7GytmhXZj7vSGeE9HVWffMH0dkav0'

const MAP_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBQpm87-3MtGNOUnTdYIhMUk7d9cHLjk3SYTltriT7s-4Yb6nmQRr5FTFoG5Jv8eyVXWaPwfoGOuX8FLJqGAkAHXA0Y5ZHFt8BNGrygI9HqwWNmkPWebf5EjTI1-pY-cXSpVPXOB3ObxizfNVff_pg84TFPoB_FPCbwy4DIGxwMlqaZjHFsQ-u-UpK6Q2EkPRU8v7Rv9qzQoPYfSRDWfqCHCiVFmFPdP-1Syx9cbrF_7fyjSwBbljfYijBsdvhM2_x38fW4Os7vutpD'

const contactItems = [
  {
    icon: 'map',
    label: 'Endereço',
    content: (
      <>
        Av. Europa, 450 - 4º Andar
        <br />
        Jardim Europa, São Paulo - SP
      </>
    ),
  },
  {
    icon: 'call',
    label: 'Telefone',
    content: <>+55 (11) 99876-5432</>,
  },
  {
    icon: 'schedule',
    label: 'Horários',
    content: (
      <>
        Segunda a Sexta: 09h às 20h
        <br />
        Sábado: 09h às 14h
      </>
    ),
  },
  {
    icon: 'mail',
    label: 'Email',
    content: <>concierge@belladerma.com.br</>,
  },
]

export default function CtaSection() {
  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="relative dark-gradient overflow-hidden py-32 px-8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${BOTANICAL_URL})`,
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
            opacity: 0.1,
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-8 border border-outline-variant/30 rounded-full">
            <span className="text-primary-container font-label text-xs tracking-[0.2em] uppercase">
              Sua Jornada de Beleza
            </span>
          </div>
          <h2 className="text-[28px] md:text-6xl font-headline text-surface mb-8 leading-tight">
            Sua melhor versão <span className="italic font-light">começa</span> com uma consulta.
          </h2>
          <p className="text-surface-variant/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Experimente o auge da estética clínica em um ambiente projetado para sua tranquilidade e
            resultados extraordinários.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-white px-10 py-4 rounded-lg font-semibold tracking-wider flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              AGENDAR VIA WHATSAPP
            </a>
            <a
              href="#servicos"
              className="border border-outline-variant/40 text-surface px-10 py-4 rounded-lg font-semibold tracking-wider hover:bg-surface/5 transition-colors"
            >
              CONHECER PROCEDIMENTOS
            </a>
          </div>
        </div>
      </section>

      {/* ── Location + Contact ── */}
      <section id="contato" className="bg-[#FDFAF6] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Map */}
          <div className="relative group">
            <div className="aspect-square md:aspect-video lg:aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <img
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                src={MAP_URL}
                alt="Localização Bella Derma — Jardim Europa, São Paulo"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center">
                  <div className="bg-primary p-3 rounded-full shadow-2xl animate-bounce">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                  <div className="mt-2 bg-surface px-3 py-1 rounded shadow-lg">
                    <span className="text-[10px] font-bold tracking-tighter">BELLA DERMA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-headline text-on-surface tracking-tight">
                Onde a excelência reside
              </h3>
              <p className="text-secondary font-light max-w-md">
                Localizada no coração do Jardim Europa, nossa clínica oferece um refúgio de
                privacidade e sofisticação.
              </p>
            </div>

            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.icon} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                      {item.label}
                    </h4>
                    <p className="text-on-surface">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined">chat</span>
              INICIAR CONVERSA NO WHATSAPP
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
