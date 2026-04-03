// Footer — versão premium dark — baseada no Stitch cta-footer.html (screen fe385baf4ddc433db2739df04411eb85)

const institucional = [
  { href: '#sobre', label: 'Sobre a Clínica' },
  { href: '#servicos', label: 'Nossa Filosofia' },
  { href: '#sobre', label: 'Corpo Clínico' },
  { href: '#resultados', label: 'Casos de Sucesso' },
]

const especialidades = [
  { href: '#servicos', label: 'Harmonização Facial' },
  { href: '#servicos', label: 'Bioestimuladores' },
  { href: '#servicos', label: 'Tecnologias Laser' },
  { href: '#servicos', label: 'Lifting Não-Invasivo' },
  { href: '#servicos', label: 'Protocolos Corporais' },
]

const BADGE_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBoWg8kEavZE8yj7T8nzTxvnXIiM6ubQ9IV9Z_shfCARIjI5G43mqzZdga3SQBpKbB0TWXUnpZ7VwhM5NVqzhNyCfAxaFw5h5-oFsmhfwMfZYtIbF7HTXsIEGAC-HSLPvpwnYjSwUGaPDRhCE-L2d7GpQ9nfAc4LIcBQirhdgjCVGbefAfWH8eySLi59WrE4svo_Pj9-w23pD3qf7XuOMmruLlucw9-T5ndVp8fviopCkVek0MbIeZDACAUReBtEL8It_9_xW936eAp'

const BADGE_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCubu-MElSvQX3h38HZ1-iPhl2KPnbDp5MkkLlkfP2YHjHytbQCyoOPt_lUjbM7pWBHEdCBFE-6JVyQ155vL5O2eHISPu5ry9ThL6pRv0fV51R4odSMgxC6haCX_Nx6p1CmFLqAjVGo9-kjXsv-dDMbKsMugwj7lXAtGO0LJkBqHRykhvAkAvpIHiV3Ico77Dhbp-dvr3LZKvIMn17gtbQ5geoetq75uTkVl00v2o2g9XjF2x-6-5bwhcqcy8FrhAPPA-Jz8Krq4ROA'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1E1A17] text-surface-variant pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand + Socials */}
          <div className="space-y-8">
            <span className="text-2xl font-headline italic text-surface tracking-tighter">
              BELLA DERMA
            </span>
            <p className="text-sm font-light leading-relaxed opacity-70">
              A união entre a ciência médica avançada e a arte da estética personalizada. Nossa
              missão é revelar sua beleza mais autêntica através de tratamentos exclusivos.
            </p>
            <div className="flex gap-4">
              {(['share', 'movie', 'photo_camera'] as const).map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-surface-variant/20 hover:border-primary-container hover:text-primary-container transition-all"
                  aria-label={icon}
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-surface">
              Institucional
            </h5>
            <ul className="space-y-4 text-sm font-light">
              {institucional.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary-container transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Especialidades */}
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-surface">
              Especialidades
            </h5>
            <ul className="space-y-4 text-sm font-light">
              {especialidades.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary-container transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificações */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-widest text-surface">
                Certificações
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface/5 p-4 rounded-lg flex items-center justify-center">
                  <img
                    className="h-8 grayscale opacity-50 brightness-200"
                    src={BADGE_1}
                    alt="Certificação dermatologia"
                  />
                </div>
                <div className="bg-surface/5 p-4 rounded-lg flex items-center justify-center">
                  <img
                    className="h-8 grayscale opacity-50 brightness-200"
                    src={BADGE_2}
                    alt="Prêmio excelência médica"
                  />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-surface-variant/10">
              <p className="text-xs font-light text-surface-variant/60 leading-tight">
                RT: Dra. Isabella Alabaster
                <br />
                CRM-SP 123456 / RQE 78910
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-sans tracking-[0.1em] opacity-40 uppercase">
            © {year} BELLA DERMA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[10px] font-sans tracking-[0.1em] uppercase opacity-60">
            <a href="#" className="hover:text-surface transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-surface transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-surface transition-colors">
              Acessibilidade
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
