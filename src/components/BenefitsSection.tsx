// BenefitsSection — baseado no Stitch benefits.html (screen d455423705f94364af60388ac5048ed7)

const benefits = [
  {
    icon: 'face',
    title: 'Cuidado Personalizado',
    description:
      'Protocolos exclusivos desenhados para a biologia única da sua pele e seus objetivos pessoais.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Alta Tecnologia',
    description:
      'Equipamentos de última geração com certificação internacional para resultados precisos e seguros.',
  },
  {
    icon: 'spa',
    title: 'Ambiente Refinado',
    description:
      'Um santuário de tranquilidade planejado para proporcionar relaxamento profundo durante seu tratamento.',
  },
  {
    icon: 'clean_hands',
    title: 'Rigor em Higiene',
    description:
      'Seguimos os mais estritos protocolos de biossegurança e esterilização em todos os procedimentos.',
  },
  {
    icon: 'workspace_premium',
    title: 'Especialistas',
    description:
      'Corpo clínico altamente qualificado, em constante atualização com as tendências globais de estética.',
  },
  {
    icon: 'verified',
    title: 'Resultados Comprovados',
    description:
      'Transformações reais documentadas e acompanhadas por avaliações clínicas rigorosas.',
  },
]

const filledStar = { fontVariationSettings: "'FILL' 1" }

export default function BenefitsSection() {
  return (
    <section className="w-full bg-brand-linen py-[120px] px-6 md:px-20 lg:px-[120px]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-brand-gold/40" />
            <span className="font-sans-modern text-brand-gold uppercase tracking-[0.2em] text-xs font-medium">
              Por que escolher a Bella Derma
            </span>
            <div className="h-[1px] w-16 bg-brand-gold/40" />
          </div>
          <h2 className="font-cormorant text-[32px] md:text-5xl lg:text-6xl text-on-surface leading-tight max-w-3xl">
            Uma experiência <span className="italic font-light">única</span>, do início ao fim.
          </h2>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.icon}
              className="custom-card bg-surface-container-lowest p-10 rounded-lg flex flex-col items-start gap-6 border-b border-outline-variant/10"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-brand-gold"
                  style={{ fontSize: '40px', fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}
                >
                  {b.icon}
                </span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-on-surface mb-4">{b.title}</h3>
                <p className="font-sans-modern text-secondary leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-32 pt-20 border-t border-brand-gold/10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <span className="font-cormorant text-5xl text-brand-gold font-light mb-2">8 anos</span>
            <span className="font-sans-modern text-secondary uppercase tracking-[0.1em] text-xs">
              de clínica
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cormorant text-5xl text-brand-gold font-light mb-2">97%</span>
            <span className="font-sans-modern text-secondary uppercase tracking-[0.1em] text-xs">
              de satisfação
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span className="font-cormorant text-5xl text-brand-gold font-light mb-2">4.9</span>
              <span
                className="material-symbols-outlined text-brand-gold text-2xl"
                style={filledStar}
              >
                star
              </span>
            </div>
            <span className="font-sans-modern text-secondary uppercase tracking-[0.1em] text-xs">
              no Google
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
