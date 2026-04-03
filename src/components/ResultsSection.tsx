// ResultsSection — galeria e depoimentos em carrossel
// Baseado no Stitch results.html (screen 875042a335f94a58b417b06d723dcd9a)

import { useState } from 'react'

import result1 from '../assets/resultados/resultado-1.jfif'
import result2 from '../assets/resultados/resultado-2.jfif'
import result3 from '../assets/resultados/resultado-3.jpg'
import result4 from '../assets/resultados/resultado-4.jpg'
import result5 from '../assets/resultados/resultado-5.jpg'
import result6 from '../assets/resultados/resultado-6.jpg'

const galleryImages = [
  {
    src: result1,
    label: 'Protocolo Diamond',
    title: 'Rejuvenescimento Facial 360º',
  },
  {
    src: result2,
    label: 'Contorno Facial',
    title: 'Perfil Contornado',
  },
  {
    src: result3,
    label: 'Skin Quality',
    title: 'Luminosidade & Textura',
  },
  {
    src: result4,
    label: 'Peeling',
    title: 'Textura Uniforme',
  },
  {
    src: result5,
    label: 'Preenchimento',
    title: 'Volume Natural',
  },
  {
    src: result6,
    label: 'Lifting',
    title: 'Efeito Up',
  },
]

const testimonials = [
  {
    quote:
      '"A Bella Derma não apenas mudou minha pele, mas devolveu minha confiança. O cuidado nos detalhes é excepcional."',
    name: 'Helena Albuquerque',
    service: 'Protocolo Rejuvenescimento',
  },
  {
    quote:
      '"O atendimento concierge e a precisão clínica fazem toda a diferença. Sinto-me em boas mãos em cada consulta."',
    name: 'Camila Martins',
    service: 'Harmonização Facial',
  },
  {
    quote:
      '"Resultados sutis, mas impactantes. É a estética elevada ao estado de arte. Exatamente o que eu procurava."',
    name: 'Beatriz Fontes',
    service: 'Bioestimuladores',
  },
]

const filledStar = { fontVariationSettings: "'FILL' 1" }

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Anterior' : 'Próximo'}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-lowest hover:border-bella-gold hover:text-bella-gold transition-all duration-200"
    >
      <span className="material-symbols-outlined text-xl">
        {direction === 'prev' ? 'chevron_left' : 'chevron_right'}
      </span>
    </button>
  )
}

export default function ResultsSection() {
  const [galleryIdx, setGalleryIdx] = useState(0)
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const prevGallery = () =>
    setGalleryIdx((i) => (i - 1 + galleryImages.length) % galleryImages.length)
  const nextGallery = () => setGalleryIdx((i) => (i + 1) % galleryImages.length)

  const prevTestimonial = () =>
    setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % testimonials.length)

  const currentT = testimonials[testimonialIdx]

  return (
    <section id="resultados" className="w-full bg-[#FDFAF6] pt-[128px] pb-[120px] px-6 md:px-8">
      <div className="max-w-[1440px] mx-auto">

        {/* ── BLOCK 1: Gallery Carousel ── */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-bella-gold" />
              <span className="font-label text-xs uppercase tracking-[0.2em] text-bella-gold font-semibold">
                Transformações Reais
              </span>
              <div className="h-[1px] w-12 bg-bella-rose" />
            </div>
            <h2 className="font-cormorant text-[32px] md:text-5xl lg:text-6xl text-on-surface editorial-text mb-6">
              Resultados que <span className="italic">falam</span> por si.
            </h2>
            <p className="max-w-2xl text-secondary font-light text-base md:text-lg leading-relaxed">
              Acompanhe a evolução de nossas pacientes através de protocolos personalizados que
              respeitam a individualidade e realçam a beleza natural.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-video bg-gradient-to-tr from-[#f3e9dc] to-[#e6d5c1] flex items-center justify-center">
              {galleryImages.map((img, i) => (
                <img
                  key={img.label}
                  src={img.src}
                  alt={img.title}
                  className={`absolute inset-0 w-full h-full object-contain p-2 md:p-4 transition-opacity duration-500 ${
                    i === galleryIdx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10">
              <CarouselArrow direction="prev" onClick={prevGallery} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10">
              <CarouselArrow direction="next" onClick={nextGallery} />
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryIdx(i)}
                aria-label={`Imagem ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === galleryIdx
                    ? 'w-6 h-2 bg-bella-gold'
                    : 'w-2 h-2 bg-outline-variant/50 hover:bg-bella-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Diamond Separator ── */}
        <div className="relative flex items-center justify-center mb-32">
          <div className="absolute w-full h-[1px] bg-outline-variant/30" />
          <div className="relative bg-[#FDFAF6] px-6">
            <div className="w-3 h-3 rotate-45 border border-bella-gold bg-[#FDFAF6]" />
          </div>
        </div>

        {/* ── BLOCK 2: Testimonials Carousel ── */}
        <div>
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">
              O que nossas clientes dizem
            </span>
            <div className="w-12 h-[2px] bg-bella-gold mx-auto" />
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Card */}
            <div className="bg-surface-container-lowest px-8 md:px-14 py-12 rounded-lg shadow-[0_10px_40px_rgba(27,28,26,0.03)] flex flex-col items-center text-center min-h-[280px] justify-center transition-all duration-300">
              <span className="material-symbols-outlined text-bella-rose text-4xl mb-6">
                format_quote
              </span>
              <p className="font-cormorant italic text-xl md:text-2xl leading-relaxed text-on-surface-variant mb-8">
                {currentT.quote}
              </p>
              <div className="w-8 h-[1px] bg-outline-variant/40 mb-6" />
              <h4 className="font-headline font-bold text-sm tracking-tight mb-1">{currentT.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-secondary mb-4">
                {currentT.service}
              </p>
              <div className="flex text-bella-gold gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-[16px]" style={filledStar}>
                    star
                  </span>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <CarouselArrow direction="prev" onClick={prevTestimonial} />
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    aria-label={`Depoimento ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === testimonialIdx
                        ? 'w-6 h-2 bg-bella-gold'
                        : 'w-2 h-2 bg-outline-variant/50 hover:bg-bella-gold/50'
                    }`}
                  />
                ))}
              </div>
              <CarouselArrow direction="next" onClick={nextTestimonial} />
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-bella-gold font-bold">
              Mais de 2.400 clientes transformadas
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
