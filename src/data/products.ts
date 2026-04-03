// Serviços da Bella Derma — dados hardcoded conforme PRD seção 4 (Tela 3)
// Preços em BRL (valores de referência premium para SP, 2026)

export interface Service {
  id: string
  name: string
  shortDescription: string
  description: string
  price: number        // sessão única
  duration: string     // duração estimada
  category: Category
  icon: string         // Material Symbol name
  image: string        // URL da imagem (Stitch AI-generated)
}

export type Category = 'facial' | 'corporal' | 'estetico'

export const CATEGORIES: Record<Category, string> = {
  facial:   'Tratamentos Faciais',
  corporal: 'Tratamentos Corporais',
  estetico: 'Estética',
}

export const services: Service[] = [
  {
    id: 'limpeza-de-pele-profunda',
    name: 'Limpeza de Pele Profunda',
    shortDescription: 'Purificação intensa e renovação celular para uma tez impecável e radiante.',
    description:
      'Remoção profissional de impurezas, células mortas e cravos com extração higienizante, vapor de ozônio e máscara calmante. Indicada para todos os tipos de pele.',
    price: 220,
    duration: '60 min',
    category: 'facial',
    icon: 'water_drop',
    image: '/Limpeza de pele.webp',
  },
  {
    id: 'microagulhamento',
    name: 'Microagulhamento',
    shortDescription: 'Estímulo natural de colágeno para suavizar linhas de expressão e cicatrizes.',
    description:
      'Microagulhamento com radiofrequência fracionada para indução de colágeno. Reduz poros dilatados, cicatrizes de acne e sinais de envelhecimento. Protocolo com 4 sessões recomendado.',
    price: 480,
    duration: '75 min',
    category: 'facial',
    icon: 'grid_view',
    image: '/Microagulhamento.jpg',
  },
  {
    id: 'clareamento-de-manchas',
    name: 'Clareamento de Manchas',
    shortDescription: 'Tecnologia avançada para uniformizar o tom da pele com segurança e eficácia.',
    description:
      'Protocolo combinado de peeling químico e laser de baixa intensidade para tratamento de melasma, manchas solares e hiperpigmentação pós-inflamatória.',
    price: 380,
    duration: '60 min',
    category: 'facial',
    icon: 'light_mode',
    image: '/Clareamento de manchas.jpg',
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática',
    shortDescription: 'Redução de edemas e desintoxicação corporal através de toques suaves.',
    description:
      'Técnica manual de Vodder para estimulação do sistema linfático. Reduz retenção hídrica, inchaço e fadiga. Recomendada no pós-operatório e para modulação corporal.',
    price: 200,
    duration: '60 min',
    category: 'corporal',
    icon: 'waves',
    image: '/Drenagem Linfática.webp',
  },
  {
    id: 'massagem-modeladora',
    name: 'Massagem Modeladora',
    shortDescription: 'Técnicas vigorosas para esculpir o contorno corporal e reduzir medidas.',
    description:
      'Massagem com manobras de deslizamento profundo e modelagem para quebra de gordura localizada, definição de contornos e melhora da circulação.',
    price: 250,
    duration: '60 min',
    category: 'corporal',
    icon: 'accessibility_new',
    image: '/Massagem Modeladora.webp',
  },
  {
    id: 'design-de-sobrancelhas',
    name: 'Design de Sobrancelhas',
    shortDescription: 'Visagismo especializado para realçar a harmonia do seu olhar.',
    description:
      'Mapeamento facial com hilo de seda, colorimetria e definição milimétrica para sobrancelhas que harmonizam perfeitamente com os traços do rosto.',
    price: 90,
    duration: '45 min',
    category: 'estetico',
    icon: 'remove_red_eye',
    image: '/Design de Sombrancelhas.jpg',
  },
]
