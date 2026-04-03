// Seção "Sobre" — baseada fielmente no Stitch about.html

const brandValues = [
  { icon: 'verified', label: 'Excelência' },
  { icon: 'spa', label: 'Cuidado Personalizado' },
  { icon: 'auto_awesome', label: 'Resultados Reais' },
  { icon: 'biotech', label: 'Tecnologia Avançada' },
]

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="bg-background py-[120px] px-6 md:px-[160px] text-on-surface overflow-hidden"
    >
      <div className="max-w-[860px] mx-auto">

        {/* ── Texto da marca ── */}
        <div className="flex flex-col">
          <div className="w-12 h-0.5 bg-primary" />
          <span className="mt-4 font-body font-medium text-[12px] tracking-[4px] uppercase text-primary">
            Nossa História
          </span>
          <h2 className="mt-3 font-serif font-bold text-[32px] md:text-[44px] leading-[1.2] text-on-surface max-w-[640px]">
            Mais do que estética. É cuidado que transforma.
          </h2>

          <div className="mt-7 font-body font-normal text-[16px] leading-[1.85] text-on-surface-variant max-w-[640px] space-y-6">
            <p>
              Na Bella Derma, acreditamos que a verdadeira beleza nasce do equilíbrio entre a saúde da pele e o bem-estar da mente. Nossa jornada começou com o desejo de humanizar os procedimentos estéticos avançados.
            </p>
            <p>
              Cada protocolo desenvolvido em nossa clínica é fruto de anos de especialização técnica e uma sensibilidade apurada para as particularidades de cada paciente. Não buscamos padronização, mas a exaltação da sua melhor versão.
            </p>
            <p>
              Situada em um ambiente planejado para o acolhimento, oferecemos uma experiência sensorial completa, onde o tempo desacelera para que o cuidado aconteça de forma profunda e duradoura.
            </p>
          </div>

          {/* Brand values */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {brandValues.map((v) => (
              <div
                key={v.icon}
                className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant rounded-lg px-5 py-2.5 shadow-sm"
              >
                <span
                  className="material-symbols-outlined text-primary text-lg"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                >
                  {v.icon}
                </span>
                <span className="font-body font-medium text-[13px] text-on-surface">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fundadora */}
        <div className="mt-20 pt-16 border-t border-outline-variant/30 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-xl shadow-sm">
            <img
              src="/Fundadora.webp"
              alt="Fundadora da Bella Derma"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-body font-medium text-[12px] tracking-[4px] uppercase text-primary mb-6 block">
              Fundadora da Bella Derma
            </span>
            <span className="font-serif text-[80px] text-outline-variant leading-[0] h-8 select-none mb-8">
              "
            </span>
            <blockquote className="font-serif italic text-[22px] md:text-[26px] text-on-surface leading-relaxed">
              Cada tratamento é uma experiência única de transformação e autoestima.
            </blockquote>
            <div className="mt-8 w-20 h-[1px] bg-outline-variant" />
          </div>
        </div>

      </div>
    </section>
  )
}
