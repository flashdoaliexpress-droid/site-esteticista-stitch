# EST-DESIGN-SYSTEM — Bella Derma
Design system completo extraído do site (React + Vite + Tailwind CSS).  
Fonte de verdade para qualquer nova tela, componente ou prompt de IA.

---

## 1. Paleta de Cores

### Superfícies
| Token | Hex | Uso |
|---|---|---|
| `background` / `surface` | `#FAF8F5` | Fundo padrão de página e seções |
| `surface-bright` | `#fdf8f1` | Fundo alternativo mais claro |
| `surface-dim` | `#ded9d2` | Fundo escurecido / divisórias suaves |
| `surface-variant` | `#ede1cf` | Fundo de cards variantes |
| `surface-container-lowest` | `#ffffff` | Cards e modais — camada mais alta |
| `surface-container-low` | `#f6f1e8` | Containers levemente elevados |
| `surface-container` | `#f0ebe2` | Containers padrão |
| `surface-container-high` | `#e8e2d9` | Containers com mais destaque |
| `surface-container-highest` | `#e2dcd1` | Containers de máximo contraste |
| `surface-tint` | `#745a27` | Tint dourado para elevação |

### Texto
| Token | Hex | Uso |
|---|---|---|
| `on-surface` / `on-background` | `#1A1A18` | Texto principal |
| `on-surface-variant` | `#555550` | Texto secundário / descritivo |
| `secondary` | `#635d54` | Texto de apoio / subtítulos |
| `inverse-surface` | `#32302c` | Fundo inverso (dark panels) |
| `inverse-on-surface` | `#f5f0e9` | Texto sobre fundo inverso |

### Primary — Dourado Quente (CTAs, ícones, links)
| Token | Hex | Uso |
|---|---|---|
| `primary` | `#C9A96E` | Botões principais, links ativos, ícones |
| `on-primary` | `#ffffff` | Texto sobre primary |
| `primary-container` | `#E6D5B8` | Fundo de badges e chips |
| `on-primary-container` | `#261900` | Texto sobre primary-container |
| `primary-fixed` | `#ffdea4` | Variante fixa (não muda no dark mode) |
| `primary-fixed-dim` | `#e6c487` | Variante fixa escurecida |
| `inverse-primary` | `#e6c487` | Primary em contexto inverso |

### Secondary — Marrom Médio
| Token | Hex | Uso |
|---|---|---|
| `secondary-container` | `#ece1d4` | Fundo de elementos secundários |
| `on-secondary-container` | `#201b13` | Texto sobre secondary-container |

### Contornos
| Token | Hex | Uso |
|---|---|---|
| `outline` | `#817666` | Bordas de inputs, divisórias visíveis |
| `outline-variant` | `#d0c5b5` | Bordas sutis, separadores |

### Tokens de Marca (telas Stitch novas)
| Token | Hex | Uso |
|---|---|---|
| `bella-gold` | `#B8896A` | Acentos dourados quentes — resultados, depoimentos |
| `bella-rose` | `#D4B5A8` | Acentos rosê — ícones de citação |
| `bella-cream` | `#FDFAF6` | Fundo da seção de resultados |
| `brand-linen` | `#F2ECE4` | Fundo da seção de benefícios |
| `brand-gold` | `#B8896A` | Ícones e stats na seção de benefícios |

### Cores Fixas (uso inline)
| Valor | Uso |
|---|---|
| `#1E1A17` | Fundo do footer dark |
| `#2C1F14` | Início do dark-gradient (CTA banner) |
| `#745a27` | Início do gold-gradient; surface-tint |
| `#c9a96e` | Fim do gold-gradient |

---

## 2. Tipografia

### Famílias
| Token Tailwind | Família | Peso | Uso |
|---|---|---|---|
| `font-headline` / `font-serif` | Playfair Display | 400, 600, 700, itálico | Títulos H1–H3, pull quotes, logo |
| `font-body` / `font-label` | Inter | 300, 400, 500, 600, 700 | Corpo de texto, botões, labels, UI |
| `font-serif-body` | Noto Serif | 300, 400, 600 | Corpo editorial alternativo |
| `font-cormorant` | Cormorant Garamond | 500, 600, itálico | Títulos elegantes (seção resultados, benefícios) |
| `font-sans-modern` | DM Sans | 400, 500 | Textos descritivos modernos (seção benefícios) |

### Import Google Fonts
```
Playfair Display: ital,wght@0,400;0,600;0,700;1,400;1,700
Inter: wght@300;400;500;600;700
Noto Serif: wght@300;400;600
Cormorant Garamond: ital,wght@0,500;0,600;1,500;1,600
DM Sans: wght@400;500
Material Symbols Outlined: opsz,wght,FILL,GRAD@24,300,0,0
```

### Escala de Tamanhos (padrões usados no site)
| Contexto | Mobile | Desktop |
|---|---|---|
| H1 Hero | `32px` | `72px` |
| H2 seções | `32px` | `44–60px` |
| H3 cards | `20–24px` | `20–24px` |
| Label / eyebrow | `11–12px` | `11–12px` |
| Body | `14–16px` | `16–18px` |
| Caption / legal | `10–11px` | `10–11px` |

### Rastreamento de Letras (letter-spacing)
| Uso | Valor |
|---|---|
| Labels / eyebrows uppercase | `tracking-[0.2em]` a `tracking-[0.4em]` |
| Títulos editoriais comprimidos | `letter-spacing: -0.02em` (classe `.editorial-text`) |
| Headings normais | padrão Tailwind |

---

## 3. Border Radius

| Token | Valor | Uso |
|---|---|---|
| `DEFAULT` | `0.125rem` | Elementos com cantos levíssimos |
| `lg` | `0.25rem` | Cards padrão |
| `xl` | `0.5rem` | Cards maiores, containers |
| `full` | `9999px` | Pills, badges, botões arredondados |

> **Regra:** O site usa cantos intencionalmente pequenos para reforçar sofisticação. Evitar `rounded-2xl` ou maiores fora do contexto de imagens da fundadora.

---

## 4. Gradientes e Efeitos (classes CSS customizadas)

```css
/* Overlay escuro no hero — canto inferior esquerdo */
.hero-gradient {
  background: linear-gradient(to top right,
    rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, transparent 100%);
}

/* Dourado luxuoso — card CTA de serviços */
.luxury-gradient {
  background: linear-gradient(135deg, #e6c487 0%, #c9a96e 100%);
}

/* Dourado escuro — botão principal do CTA banner */
.gold-gradient {
  background: linear-gradient(135deg, #745a27 0%, #c9a96e 100%);
}

/* Escuro espresso — fundo do CTA banner */
.dark-gradient {
  background: linear-gradient(to bottom right, #2C1F14, #1E1A17);
}

/* Sombra de texto sobre foto */
.text-glow {
  text-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
```

---

## 5. Ícones

**Biblioteca:** Material Symbols Outlined  
**Variação padrão:** `FILL 0, wght 300, GRAD 0, opsz 24` (linha fina, elegante)  
**Variação filled:** `font-variation-settings: 'FILL' 1` (usado em estrelas de avaliação)  
**Tamanhos usados:** `text-lg` (18px UI), `text-xl` (20px CTAs), `text-4xl` (40px benefícios)  
**Cor padrão:** `text-primary` (#C9A96E) ou `text-brand-gold` (#B8896A)

### Ícones por serviço
| Serviço | Ícone |
|---|---|
| Limpeza de Pele | `water_drop` |
| Microagulhamento | `grid_view` |
| Clareamento de Manchas | `light_mode` |
| Drenagem Linfática | `waves` |
| Massagem Modeladora | `accessibility_new` |
| Design de Sobrancelhas | `remove_red_eye` |

---

## 6. Sombras

| Classe | Uso |
|---|---|
| `shadow-sm` | Cards de serviço em repouso |
| `shadow-md` | Cards de serviço no hover |
| `shadow-[0_4px_24px_rgba(0,0,0,0.07)]` | Cards de proprietários / perfil |
| `shadow-[0_10px_40px_rgba(27,28,26,0.03)]` | Cards de depoimentos |
| `shadow-[0_8px_32px_rgba(201,169,110,0.3)]` | Botão CTA principal (glow dourado) |
| `shadow-xl` | Botão WhatsApp no CTA banner |
| `shadow-2xl` | Imagem de tratamento na seção de benefícios |

---

## 7. Espaçamento e Layout

| Padrão | Valor | Uso |
|---|---|---|
| Padding horizontal mobile | `px-6` | Todas as seções |
| Padding horizontal desktop | `px-8` a `px-[160px]` | Varia por seção |
| Padding vertical seções | `py-[120px]` | Seções internas (resultados, benefícios) |
| Padding vertical hero | `h-screen` | 100vh |
| Max-width padrão | `max-w-7xl` | Maioria das seções |
| Max-width galeria | `max-w-[1440px]` | Seção de resultados |
| Max-width about | `max-w-[860px]` | Seção sobre |
| Gap grid serviços | `gap-8` | Grid 3 colunas |
| Gap footer grid | `gap-16` | Grid 4 colunas |

---

## 8. Animações

```css
/* Indicador de scroll no hero */
@keyframes scroll-line {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
animation: scroll-line 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;

/* Fade in de entrada */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fade-in 1.2s ease-out forwards;

/* Hover lift em cards de benefícios */
.custom-card {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.custom-card:hover { transform: translateY(-8px); }

/* Pin de localização */
animate-bounce (Tailwind padrão)

/* Hover em cards de serviços */
hover:-translate-y-1 transition-all duration-300
```

---

## 9. Componentes — Padrões Recorrentes

### Eyebrow (label de seção)
```tsx
<div className="flex items-center gap-4 mb-4">
  <div className="h-[1px] w-12 bg-primary" />           {/* ou bg-bella-gold */}
  <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-semibold">
    Label da Seção
  </span>
  <div className="h-[1px] w-12 bg-outline-variant" />   {/* opcional */}
</div>
```

### Botão Primário (WhatsApp CTA)
```tsx
<a href={whatsappUrl} className="gold-gradient text-white px-10 py-4 rounded-lg
  font-semibold tracking-wider flex items-center gap-3
  hover:scale-105 transition-transform duration-300 shadow-xl">
  <span className="material-symbols-outlined text-xl">chat</span>
  AGENDAR VIA WHATSAPP
</a>
```

### Botão Secundário (ghost)
```tsx
<a href="#servicos" className="border border-outline-variant/40 text-surface px-10 py-4
  rounded-lg font-semibold tracking-wider hover:bg-surface/5 transition-colors">
  CONHECER PROCEDIMENTOS
</a>
```

### Botão Outline (contato)
```tsx
<a className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold
  flex items-center gap-3 hover:bg-primary hover:text-white transition-all duration-300">
  <span className="material-symbols-outlined">chat</span>
  INICIAR CONVERSA NO WHATSAPP
</a>
```

### Card de Serviço
```tsx
<div className="bg-surface-container-lowest rounded-xl overflow-hidden
  transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md
  border border-stone-100">
  <img className="w-full h-auto object-contain" />        {/* proporção original */}
  <div className="p-6 flex flex-col gap-3">
    <h3 className="font-headline text-xl font-semibold text-on-surface" />
    <p className="font-body text-sm text-on-surface-variant leading-[1.7]" />
    <button className="self-start font-label text-[13px] text-primary">Agendar →</button>
  </div>
</div>
```

### Card de Benefício
```tsx
<div className="custom-card bg-surface-container-lowest p-10 rounded-lg
  flex flex-col items-start gap-6 border-b border-outline-variant/10">
  <span className="material-symbols-outlined text-brand-gold"
    style={{ fontSize: '40px', fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
    {icon}
  </span>
  <div>
    <h3 className="font-cormorant text-2xl text-on-surface mb-4">{title}</h3>
    <p className="font-sans-modern text-secondary leading-relaxed">{desc}</p>
  </div>
</div>
```

### Card de Depoimento (carrossel)
```tsx
<div className="bg-surface-container-lowest px-8 md:px-14 py-12 rounded-lg
  shadow-[0_10px_40px_rgba(27,28,26,0.03)] flex flex-col items-center text-center">
  <span className="material-symbols-outlined text-bella-rose text-4xl mb-6">format_quote</span>
  <p className="font-cormorant italic text-xl md:text-2xl leading-relaxed text-on-surface-variant mb-8">
    {quote}
  </p>
  <div className="w-8 h-[1px] bg-outline-variant/40 mb-6" />
  <h4 className="font-headline font-bold text-sm tracking-tight mb-1">{name}</h4>
  <p className="text-[10px] uppercase tracking-widest text-secondary mb-4">{service}</p>
  {/* 5 estrelas filled */}
  <div className="flex text-bella-gold gap-0.5">
    {[1,2,3,4,5].map(s => (
      <span key={s} className="material-symbols-outlined text-[16px]"
        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
    ))}
  </div>
</div>
```

### Separador Diamond
```tsx
<div className="relative flex items-center justify-center my-32">
  <div className="absolute w-full h-[1px] bg-outline-variant/30" />
  <div className="relative bg-[#FDFAF6] px-6">
    <div className="w-3 h-3 rotate-45 border border-bella-gold bg-[#FDFAF6]" />
  </div>
</div>
```

### Ícone de Contato (hover colorido)
```tsx
<div className="w-12 h-12 flex items-center justify-center rounded-full
  bg-surface-container-high text-primary
  group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  <span className="material-symbols-outlined">{icon}</span>
</div>
```

---

## 10. Estrutura de Seções

| # | Componente | Fundo | Fonte principal |
|---|---|---|---|
| 1 | `HeroSection` | Foto full-screen + `hero-gradient` | Playfair Display |
| 2 | `AboutSection` | `background` (#FAF8F5) | Playfair Display + Inter |
| 3 | `ServicesSection` | `surface` (#FAF8F5) | Playfair Display + Inter |
| 4 | `ResultsSection` | `bella-cream` (#FDFAF6) | Cormorant Garamond |
| 5 | `BenefitsSection` | `brand-linen` (#F2ECE4) | Cormorant Garamond + DM Sans |
| 6 | `CtaSection` (banner) | `dark-gradient` (#2C1F14→#1E1A17) | Noto Serif |
| 6 | `CtaSection` (localização) | `bella-cream` (#FDFAF6) | Noto Serif + Inter |
| 7 | `Footer` | `#1E1A17` (espresso) | Noto Serif + Inter |

---

## 11. Regras de Design

1. **Sem linhas de borda** — separação por camadas de cor, não por bordas visíveis (exceto outline-variant sutis).
2. **Cantos pequenos** — `rounded-lg` (0.25rem) como máximo em cards; `rounded-xl` apenas em imagens de perfil.
3. **Tipografia serif nos destaques** — Cormorant Garamond em itálico para impacto editorial.
4. **Ícones leves** — sempre `wght 300` ou `200`, nunca filled (exceto estrelas de avaliação).
5. **Dourado quente, não amarelo** — primary `#C9A96E`, brand-gold `#B8896A`; nunca usar amarelos saturados.
6. **Imagens de serviço** — `object-contain` sem corte; fundo `surface-container-low`; sem zoom no hover.
7. **Texto branco sobre fotos** — eyebrow e headline do hero sempre `text-white` ou `text-white/80`.
8. **WhatsApp como único CTA de conversão** — todas as ações de agendamento abrem `wa.me/55XXXXXXXXXXX?text=...`.
9. **Carrosséis com dots estilo pill** — dot ativo: `w-6 h-2 bg-bella-gold`; inativo: `w-2 h-2 bg-outline-variant/50`.
10. **Footer sempre dark** — `bg-[#1E1A17]`; texto `text-surface-variant`; links com `hover:text-primary-container`.
