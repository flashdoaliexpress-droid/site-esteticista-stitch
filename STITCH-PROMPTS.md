# STITCH PROMPTS — Bella Derma (v2 — Paleta Clara)

Prompts otimizados para Google Stitch (UI Design com IA).
Paleta revisada: tons claros, femininos e premium.
Copie e cole um prompt por vez no Stitch.

---

## SISTEMA DE DESIGN (referência para os 3 prompts)

**Paleta de cores:**
- `#FDFAF6` — Creme principal (background hero e seções)
- `#F2ECE4` — Linho suave (background alternado, cards)
- `#FFFFFF` — Branco puro (cards, superfícies elevadas)
- `#B8896A` — Terracota dourado (cor de acento principal, CTAs, detalhes)
- `#D4B5A8` — Rosa empoeirado (acento secundário, hover states, ícones)
- `#1E1A17` — Marrom escuro quente (texto primário, nunca preto puro)
- `#7A6E66` — Taupe médio (texto secundário, legendas)
- `#C4B4A8` — Taupe claro (bordas, divisórias, linhas decorativas)

**Tipografia:**
- Display / Títulos: `Cormorant Garamond` — serif elegante, refinado
- Corpo / UI: `DM Sans` — sans-serif moderno, leveza
- Estilo: espaçamento generoso, letras com ar, nunca comprimido

**Mood:** Clínica premium de dia — luz natural, linho, mármore branco, rosa seco. Referências visuais: Augustinus Bader, Tatcha, Aesop (mas feminino e claro).

---

## PROMPT 1 — Hero Section

```
Design a full-screen hero section for a premium Brazilian aesthetics clinic called "Bella Derma". Desktop layout, 1440px wide, 900px tall viewport. Light, airy, premium aesthetic.

OVERALL FEEL: This is NOT a dark dramatic hero. Think natural light pouring through a window in a luxury clinic. Clean, editorial, calm confidence.

BACKGROUND: Split layout — left 55% is a soft cream solid color #FDFAF6. Right 45% is a tall portrait-cropped photograph placeholder of a woman with glowing, healthy skin, soft natural light hitting her face from the left. The photo has rounded corners only on the left side (border-radius 32px on top-left and bottom-left). The photo extends edge-to-edge on the right side of the viewport. A very subtle warm overlay on the photo: linear-gradient from rgba(253,250,246,0.12) to transparent, to gently blend with the left panel.

HEADER (positioned at the top of the full width, 40px from top, 64px horizontal padding):
- Left: Logotype "Bella Derma" in Cormorant Garamond, 24px, font-weight 600, letter-spacing 4px, color #1E1A17. Below the logotype, a subtitle line: "Clínica de Estética" in DM Sans, 10px, letter-spacing 5px, all caps, color #B8896A.
- Center: navigation links "Sobre", "Serviços", "Contato" in DM Sans, 13px, font-weight 400, letter-spacing 1px, color #7A6E66, 48px gap between each.
- Right: pill button "Agendar Consulta" — border 1.5px solid #B8896A, background transparent, text #B8896A, DM Sans 13px font-weight 500, padding 11px 26px, border-radius 100px. On the far right of the pill, a tiny WhatsApp icon outline 14px in #B8896A.

HERO CONTENT (left panel, vertically centered, padding-left 96px, max-width 520px):
- Eyebrow text: "Tratamentos Estéticos Avançados" in DM Sans 11px, font-weight 500, letter-spacing 5px, all caps, color #B8896A. Before the text, a short horizontal line 32px, 1.5px height, color #D4B5A8, vertically centered with the text, 12px gap.
- Main headline H1 (margin-top 20px): "Sua pele merece o melhor cuidado." in Cormorant Garamond, 68px, font-weight 300, line-height 1.05, color #1E1A17. The word "melhor" is in font-weight 600 italic.
- Subheadline (margin-top 20px): "Protocolos personalizados com tecnologia de ponta, em um ambiente pensado para o seu bem-estar." in DM Sans 17px, font-weight 300, line-height 1.8, color #7A6E66, max-width 420px.
- CTA group (margin-top 44px, flex row, align-items center, gap 28px):
  - Primary button: "Quero Agendar" — background #B8896A, text #FFFFFF, DM Sans 15px font-weight 500, padding 16px 40px, border-radius 100px. Very subtle shadow: 0 8px 28px rgba(184,137,106,0.35).
  - Secondary text link: "Ver nossos serviços" with a thin right arrow (→) in DM Sans 14px, color #7A6E66. Arrow color #B8896A.
- Below the CTA group (margin-top 48px): a horizontal row of 3 small social proof stats. Each stat: number in Cormorant Garamond 28px font-weight 600 color #1E1A17, label below in DM Sans 11px color #7A6E66 letter-spacing 1px. Stats: "8 anos · de experiência", "2.400+ · clientes atendidas", "7 · especialidades". Separated by thin 1px vertical dividers in #C4B4A8, 32px tall.

BOTTOM-LEFT DECORATION: A very faint watermark-style circle, 320px diameter, stroke only 1px #D4B5A8, 8% opacity, partially cropped by the bottom edge, far bottom-left of the screen.

COLOR PALETTE SUMMARY: Background #FDFAF6, accent #B8896A, secondary accent #D4B5A8, text #1E1A17, muted #7A6E66, dividers #C4B4A8, white #FFFFFF.
TYPOGRAPHY: Cormorant Garamond for all display text, DM Sans for all body/UI.
NO dark overlays. NO black backgrounds. Bright, spa-editorial, natural light luxury.
```

---

## PROMPT 2 — Seção Sobre a Marca e Proprietárias

```
Design a full-width "About" section for a premium aesthetics clinic called "Bella Derma". Desktop layout, 1440px wide. This is section 2 of a single-page site. Light, editorial, warm and human.

SECTION BACKGROUND: Solid white #FFFFFF. Vertical padding 128px top and bottom. Horizontal padding 96px on each side.

LAYOUT: Two asymmetric columns. Left column 45% width, right column 55% width, 80px gap.

--- LEFT COLUMN — Brand Story ---

Top decorative element: two horizontal lines stacked. Line 1: 64px wide, 2px height, color #B8896A. Line 2 below it (6px gap): 32px wide, 1px height, color #D4B5A8.

Section label (margin-top 20px): "Nossa História" in DM Sans, 11px, font-weight 500, letter-spacing 5px, all caps, color #B8896A.

Section title H2 (margin-top 14px): "Cuidado que vai além da pele." in Cormorant Garamond, 48px, font-weight 300, line-height 1.1, color #1E1A17. Max-width 380px. The word "além" is font-weight 600 italic.

Body text (margin-top 28px): 3 short paragraphs in DM Sans, 15px, font-weight 300, line-height 1.9, color #7A6E66, max-width 400px. Paragraph spacing: 18px. Placeholder text about Bella Derma's mission: personalized protocols, premium materials, science-backed treatments, welcoming environment.

Brand value list (margin-top 44px): 4 horizontal rows stacked with 14px gap each. Each row: a thin full-width separator line 1px #F2ECE4 above it (except the first), then a flex row with icon left and text right. Icon: 20px minimal line icon in #D4B5A8. Text: label in DM Sans 14px font-weight 500 color #1E1A17, followed by a short descriptor in DM Sans 13px color #7A6E66 font-weight 300, separated by a middle dot (·). Values: "Excelência · Protocolos clínicos de alta performance", "Personalização · Cada pele tratada de forma única", "Resultados · Transformações visíveis e duradouras", "Acolhimento · Ambiente criado para o seu conforto".

--- RIGHT COLUMN — Owner Cards ---

Two portrait cards side by side with 20px gap between them.

Each owner card:
- Background: #FDFAF6 (warm cream surface), border-radius 20px, padding 32px, no border, subtle shadow: 0 2px 20px rgba(30,26,23,0.06).
- Top: a square photo placeholder 100% width, aspect-ratio 3:4, border-radius 14px. Fill the placeholder with a warm gradient: linear-gradient 160deg from #F2ECE4 to #E4D5C8. In the center of the placeholder, a small delicate floral or leaf line icon 32px in rgba(184,137,106,0.3) — representing where the professional headshot will go.
- Name (margin-top 20px): Cormorant Garamond, 24px, font-weight 600, color #1E1A17.
- Title (margin-top 4px): DM Sans, 12px, font-weight 500, letter-spacing 3px, all caps, color #B8896A.
- Thin divider: 1px solid #E8DDD6, full width, margin 16px 0.
- Bio text: DM Sans, 13px, font-weight 300, line-height 1.8, color #7A6E66, 3 lines max.
- Credential badge (margin-top 16px): small inline pill, background #F2ECE4, border-radius 100px, padding 5px 14px, DM Sans 11px color #7A6E66. Example: "CREFITO · Estética Avançada".

Below the two cards, a pull-quote block (margin-top 40px):
- Large opening quote mark: Cormorant Garamond, 96px, font-weight 300, color #D4B5A8, line-height 0.6, display block.
- Quote text: "Cada cliente que entra aqui sai diferente — não só a pele, mas a autoestima." in Cormorant Garamond italic, 22px, color #1E1A17, line-height 1.5.
- Attribution line below: "— Fundadoras da Bella Derma" in DM Sans, 12px, letter-spacing 2px, color #B8896A, margin-top 12px.

FULL-WIDTH BOTTOM STRIP (below both columns, margin-top 100px): Background #F2ECE4, border-radius 20px, padding 40px 64px. Flex row, space-between. Shows 3 stat counters: each with a large number in Cormorant Garamond 52px font-weight 300 color #1E1A17, and a small label below in DM Sans 12px color #7A6E66 letter-spacing 1px. Numbers: "8 anos", "2.400+", "7 especialidades". Separated by 1px vertical dividers in #C4B4A8, 40px tall, vertically centered.

COLOR PALETTE: White #FFFFFF, warm cream #FDFAF6, soft linen #F2ECE4, terracotta accent #B8896A, blush secondary #D4B5A8, dark text #1E1A17, muted text #7A6E66, border #C4B4A8.
TYPOGRAPHY: Cormorant Garamond (display, names, quotes), DM Sans (body, labels, UI).
MOOD: Warm editorial, Vogue Wellness, human connection, trust. Natural light. No cold tones.
```

---

## PROMPT 3 — Seção de Serviços + Footer

```
Design a full-width services section plus footer for a premium aesthetics clinic called "Bella Derma". Desktop layout, 1440px wide. Light palette, editorial grid. This is the final section of the page.

SECTION BACKGROUND: Warm linen #F2ECE4. Vertical padding 120px top and bottom. Horizontal padding 96px on each side.

SECTION HEADER (centered, margin-bottom 72px):
- Centered decorative pair of lines (same as section 2 style): 64px line 2px #B8896A above, 32px line 1px #D4B5A8 below, 6px gap. Centered horizontally.
- Section label (margin-top 20px): "Nossas Especialidades" in DM Sans 11px font-weight 500 letter-spacing 5px all caps color #B8896A, centered.
- Title H2 (margin-top 14px): "Tratamentos que revelam a sua melhor versão." in Cormorant Garamond 52px font-weight 300 line-height 1.1 color #1E1A17, centered, max-width 580px, margin-left auto, margin-right auto. The word "revelam" is font-weight 600 italic.

SERVICES GRID: 3 columns, 3 rows, gap 20px. 7 service cards plus 1 CTA card (8 total filling the 3×3 grid minus one slot).

Each service card:
- Background: #FFFFFF, border-radius 20px, overflow hidden. No border. Shadow: 0 2px 16px rgba(30,26,23,0.05).
- Image area (top portion, 48% of card height): a warm-toned rectangular image placeholder. Fill with a soft gradient: linear-gradient 135deg from #FAF3EE to #EDE0D4. In the center, a 28px minimal line icon in #B8896A (1.5px stroke) representing the treatment. The icon style is delicate, not bold.
- Content area (bottom portion, 52% of card height): padding 24px 28px.
  - Treatment name: Cormorant Garamond 22px font-weight 600 color #1E1A17, line-height 1.1.
  - Short description: DM Sans 13px font-weight 300 color #7A6E66 line-height 1.75 margin-top 8px. 2 lines max.
  - Bottom of card content: flex row, space-between, align-items center, margin-top 20px.
    - Left: text link "Agendar" in DM Sans 13px font-weight 500 color #B8896A with a thin right arrow → in same color. No underline.
    - Right: small circular icon button 32px, border 1px solid #D4B5A8, border-radius 50%, background transparent, with a 14px WhatsApp outline icon in #B8896A.

The 7 service cards (in grid order left-to-right, top-to-bottom):
1. Limpeza de Pele Profunda — icon: water drop outline
2. Microagulhamento — icon: fine crosshatch grid (representing micro-needles)
3. Clareamento de Manchas — icon: sun/radiant lines
4. Drenagem Linfática — icon: flowing wave curves
5. Massagem Modeladora — icon: hourglass silhouette
6. Tratamento para Celulite — icon: layered texture circles
7. Design de Sobrancelhas — icon: elegant arch brow line

8TH CARD (CTA highlight card — same grid position as slot 8): 
- Background: linear-gradient 145deg from #B8896A to #C9A070. Border-radius 20px. Same size as other cards.
- Vertically and horizontally centered content.
- Top: a small 32px decorative floral/leaf line icon in rgba(255,255,255,0.4).
- Heading: "Não sabe por onde começar?" in Cormorant Garamond 24px font-weight 600 italic color #FFFFFF, centered, max-width 180px, margin auto.
- Subtext (margin-top 10px): "Nossa equipe te orienta sem compromisso." in DM Sans 13px font-weight 300 color rgba(255,255,255,0.8), centered, max-width 180px, margin auto.
- Button (margin-top 24px): "Falar com a Equipe" — background #FFFFFF, text #B8896A, DM Sans 13px font-weight 600, padding 12px 24px, border-radius 100px, centered.

--- FOOTER ---

FOOTER BACKGROUND: #1E1A17 (warm near-black). No top border. Padding 72px 96px 48px.

Top footer section (flex row, space-between, align-items flex-start):

Left block (max-width 280px):
- Logotype "Bella Derma" in Cormorant Garamond 26px font-weight 600 letter-spacing 3px color #FDFAF6.
- Subtitle: "Clínica de Estética" in DM Sans 10px letter-spacing 5px all caps color #B8896A, margin-top 4px.
- Divider: 1px solid rgba(255,255,255,0.08), full width, margin 24px 0.
- Short brand tagline: "Cuidado que transforma." in Cormorant Garamond italic 17px color rgba(253,250,246,0.5), line-height 1.6.
- Social row (margin-top 24px): 2 icon buttons 36x36px each with border 1px solid rgba(255,255,255,0.12), border-radius 10px, background rgba(255,255,255,0.04). Icons: Instagram and Facebook, 16px, color rgba(253,250,246,0.5). Gap between: 10px.

Center block:
- Label "Navegação" in DM Sans 10px letter-spacing 4px all caps color #B8896A, margin-bottom 20px.
- 3 links stacked: "Sobre nós", "Serviços", "Contato" — DM Sans 14px font-weight 300 color rgba(253,250,246,0.55), 14px gap. On hover indicator: small dot 4px in #B8896A to the left of the active link.

Right block (max-width 260px):
- Label "Contato" same style as center label.
- 3 info lines stacked with 14px gap: phone, email, address. Each: a tiny 14px line icon on the left in #B8896A, then text in DM Sans 13px font-weight 300 color rgba(253,250,246,0.55), 10px gap from icon.

FOOTER BOTTOM BAR (margin-top 64px): thin 1px divider rgba(255,255,255,0.06) full width, then below it 28px padding, flex row space-between.
- Left: "© 2026 Bella Derma. Todos os direitos reservados." DM Sans 12px color rgba(253,250,246,0.25).
- Right: "Política de Privacidade" DM Sans 12px color rgba(253,250,246,0.25). Separator dot between if they were on the same line.

COLOR PALETTE for services section: linen #F2ECE4, white cards #FFFFFF, accent #B8896A, blush #D4B5A8, gold warm #C9A070, dark text #1E1A17, muted text #7A6E66.
Footer palette: dark warm #1E1A17, cream text #FDFAF6, gold #B8896A, muted rgba.
TYPOGRAPHY: Cormorant Garamond (display, headings), DM Sans (body, labels, UI).
MOOD: Light editorial grid giving way to a warm dark footer — like the last page of a luxury magazine. Clean, airy, premium feminine.
```

---
---
---

# ═══════════════════════════════════════════════
# PROMPTS v2 — NOVAS SEÇÕES (4, 5 e 6)
# ═══════════════════════════════════════════════

> Mesma identidade visual dos prompts anteriores.
> Paleta clara, fontes Cormorant Garamond + DM Sans,
> acento #B8896A, fundo #FDFAF6 / #F2ECE4 / branco.

---

## PROMPT 4 — Resultados das Clientes (Galeria + Depoimentos)

```
Design a full-width "Results & Testimonials" section for a premium Brazilian aesthetics clinic called "Bella Derma". Desktop layout, 1440px wide. This is a single cohesive section divided into two clearly separated visual blocks — first the results gallery, then the testimonials — with no page break between them. Light, editorial, high-end spa aesthetic.

SECTION BACKGROUND: Solid warm cream #FDFAF6. Vertical padding 128px top, 120px bottom. Horizontal padding 96px on each side.

────────────────────────────────────────────
BLOCK 1 — RESULTS GALLERY (top of the section)
────────────────────────────────────────────

SECTION HEADER (centered):
- Small decorative double-line: 64px line 2px in #B8896A, then 32px line 1px in #D4B5A8, 6px gap between them, centered horizontally.
- Section label (margin-top 20px): "Transformações Reais" in DM Sans, 11px, font-weight 500, letter-spacing 5px, all caps, color #B8896A, centered.
- Section title H2 (margin-top 14px): "Resultados que falam por si." in Cormorant Garamond, 52px, font-weight 300, color #1E1A17, centered, line-height 1.1, max-width 520px, margin auto. The word "falam" is font-weight 600 italic.
- Subtitle (margin-top 16px): "Cada resultado é único. Cada transformação, real." in DM Sans, 16px, font-weight 300, color #7A6E66, centered, margin auto.

RESULTS GRID (margin-top 64px): A 2-row asymmetric layout.

ROW 1 — 3-column grid, gap 20px:
- Left card (wide): width 50%, aspect-ratio 3:2, border-radius 16px, overflow hidden. Image placeholder: warm gradient from #F0E8DF to #E0D0C2 with a centered label "Antes / Depois" in DM Sans 13px color rgba(30,26,23,0.35) letter-spacing 2px. Top-left corner chip: "Limpeza de Pele" — small pill, background #B8896A, text white, DM Sans 10px font-weight 600 letter-spacing 2px, padding 5px 12px, border-radius 100px, margin 16px.
- Center card (tall): width 25%, aspect-ratio 2:3, border-radius 16px, overflow hidden. Same gradient placeholder. Top-left chip: "Microagulhamento" — same pill style.
- Right card (tall): width 25%, aspect-ratio 2:3, border-radius 16px, overflow hidden. Same gradient. Top-left chip: "Clareamento".

ROW 2 — 4-column grid, gap 20px, margin-top 20px:
- Four equal-width cards, each aspect-ratio 4:3, border-radius 16px, overflow hidden. Same gradient placeholder. Chips: "Drenagem Linfática", "Massagem Modeladora", "Tratamento Celulite", "Design de Sobrancelhas".

All image cards have a very subtle hover state: on hover, a soft white overlay rgba(255,255,255,0.08) appears over the card, and a thin 1.5px border in #B8896A fades in around the border-radius.

────────────────────────────────────────────
BLOCK 2 — TESTIMONIALS (below the gallery, same section)
────────────────────────────────────────────

VISUAL SEPARATOR (margin 72px 0): A full-width thin line 1px solid #E5DDD5, with a small diamond shape ◆ centered on it, 10px in #D4B5A8, vertically centered on the line. This acts as a visual breath between gallery and testimonials, not a section break.

TESTIMONIALS HEADER (centered, margin-bottom 48px):
- Small label: "O que nossas clientes dizem" in DM Sans 11px font-weight 500 letter-spacing 4px all caps color #B8896A, centered.
- No H2 needed here — the label is enough to transition cleanly.

TESTIMONIALS GRID: 3 columns, gap 24px.

Each testimonial card:
- Background: #FFFFFF, border-radius 20px, padding 32px, shadow: 0 2px 20px rgba(30,26,23,0.05). No visible border.
- TOP: A decorative opening large quote mark in Cormorant Garamond, 64px, font-weight 300, color #D4B5A8, line-height 0.8, display block. This floats at the top of the card, left-aligned.
- QUOTE TEXT (margin-top 12px): Cormorant Garamond italic, 19px, font-weight 400, color #1E1A17, line-height 1.7. 2–3 lines maximum. Sample texts:
  Card 1: "Minha pele nunca esteve tão bonita. O microagulhamento mudou minha autoestima de verdade."
  Card 2: "Atendimento impecável, ambiente sofisticado. A drenagem linfática fez a diferença no pós-operatório."
  Card 3: "Resultado surpreendente desde a primeira sessão de limpeza de pele. Voltei para mais três."
- DIVIDER (margin 20px 0): 1px line, full width, color #F2ECE4.
- AUTHOR ROW (flex, align-items center, gap 14px):
  - Avatar: 44px circle, background gradient #E8DDD0 to #D4C4B0 (representing a woman's photo placeholder).
  - Text block: Name in DM Sans 14px font-weight 600 color #1E1A17. Below: service name in DM Sans 12px color #B8896A.
- STAR RATING (margin-top 12px): 5 filled star icons, 14px each, color #B8896A. Stars are simple ★ characters or SVG, not Material Icons.

BOTTOM of section: A small centered text (margin-top 64px): "Mais de 2.400 clientes transformadas" in Cormorant Garamond italic 22px color #7A6E66, centered. Before and after this text: thin 40px horizontal lines 1px #D4B5A8, centered inline.

COLOR PALETTE: Background #FDFAF6, card white #FFFFFF, accent #B8896A, blush secondary #D4B5A8, dark text #1E1A17, muted text #7A6E66, soft linen #F2ECE4, image placeholder #E0D0C2.
TYPOGRAPHY: Cormorant Garamond (quotes, title, italic text), DM Sans (labels, names, meta).
MOOD: Editorial beauty magazine meets trusted testimonials. Clean, warm, credible. Think Vogue Beauty meets real-person authenticity. NOT a dark section — stays fully light and airy.
```

---

## PROMPT 5 — Benefícios com Ícones Personalizados

```
Design a full-width "Benefits" section for a premium Brazilian aesthetics clinic called "Bella Derma". Desktop layout, 1440px wide. This section communicates the clinic's unique differentials using CUSTOM ILLUSTRATED ICONS — not generic Material Design icons, but artisanal line-art icons that feel hand-crafted and specific to aesthetic medicine. Light background, editorial layout.

SECTION BACKGROUND: Soft linen #F2ECE4. Vertical padding 120px top and bottom. Horizontal padding 96px on each side.

SECTION HEADER (centered, margin-bottom 80px):
- Decorative double-line (same as other sections): 64px line 2px #B8896A, then 32px line 1px #D4B5A8, 6px gap, centered.
- Label (margin-top 20px): "Por que escolher a Bella Derma" in DM Sans 11px font-weight 500 letter-spacing 5px all caps color #B8896A, centered.
- H2 (margin-top 14px): "Uma experiência única, do início ao fim." in Cormorant Garamond 52px font-weight 300 color #1E1A17 centered, line-height 1.1, max-width 540px, margin auto. The word "única" is font-weight 600 italic.

BENEFITS GRID: 2 rows × 3 columns, gap 32px. 6 benefit cards total.

Each benefit card:
- Background: #FFFFFF, border-radius 20px, padding 40px 36px, no border, shadow: 0 2px 24px rgba(30,26,23,0.05).
- Icon area (top of card): a 64px × 64px custom line-art icon, drawn with 1.5px strokes, color #B8896A. Each icon is UNIQUE and specific — see descriptions below. Below the icon: 8px gap.
- Benefit title: Cormorant Garamond, 24px, font-weight 600, color #1E1A17, margin-top 20px, line-height 1.2.
- Benefit description: DM Sans, 14px, font-weight 300, color #7A6E66, line-height 1.8, margin-top 10px.

THE 6 BENEFITS AND THEIR CUSTOM ICONS:

1. "Protocolos 100% Personalizados"
Description: "Nenhum tratamento é igual ao outro. Cada plano é desenvolvido após anamnese completa da sua pele."
CUSTOM ICON: A delicate line drawing of a face silhouette (just the chin/jaw outline, no features) with a fine dotted path tracing from the face outward to a small asterisk/star — representing individualized mapping. Thin 1.5px strokes, warm terracotta #B8896A.

2. "Tecnologia de Ponta"
Description: "Equipamentos certificados pelas principais agências de saúde internacionais, renovados anualmente."
CUSTOM ICON: A stylized illustration of a skincare device — a small handheld roller/pen-like device with radiating fine lines around its tip (representing energy emission). Like a laser pen drawn in minimal line art style. NOT a generic lightning bolt.

3. "Ambiente Planejado para Você"
Description: "Cada detalhe do espaço foi pensado para gerar relaxamento, privacidade e bem-estar durante o atendimento."
CUSTOM ICON: A minimal line drawing of a reclining treatment chair (side view, with a slight headrest elevation and a simple curved silhouette) — recognizable as a clinic chair, not a generic sofa. 1.5px stroke, terracotta.

4. "Higiene e Segurança Rigorosas"
Description: "Materiais descartáveis, esterilização certificada e protocolos clínicos que seguem as normas da ANVISA."
CUSTOM ICON: A line drawing of two gloved hands (just the outlines, no fingers detail) positioned in a gentle "protection" gesture — like cradling without touching. NOT generic shield or checkmark.

5. "Profissionais Especializados"
Description: "Nossa equipe possui formação em dermatologia, biomedicina e estética avançada, com atualização constante."
CUSTOM ICON: A minimal illustration of a graduation/specialization concept specific to medical aesthetics: a stylized diploma scroll overlapping with a fine-line face profile, both in the same 1.5px terracotta stroke — referencing expertise applied to the face.

6. "Resultados Comprovados"
Description: "Acompanhamos cada cliente com protocolos de avaliação e fotodocumentação para medir e celebrar os resultados."
CUSTOM ICON: A line drawing of a smartphone held horizontally at slight angle, showing a before/after split screen on its display (represented by a vertical line dividing the screen into two halves) — literally referencing before/after photo documentation. Minimal, 1.5px strokes.

BOTTOM ACCENT ROW (below the grid, margin-top 64px): A centered horizontal row of 3 stats separated by thin vertical lines 1px #C4B4A8, 32px tall. Each stat: large number in Cormorant Garamond 48px font-weight 300 color #1E1A17, label below in DM Sans 11px color #7A6E66 letter-spacing 1px all caps. Stats: "8 anos · de clínica", "97% · de satisfação", "4.9★ · no Google".

COLOR PALETTE: Linen background #F2ECE4, white cards #FFFFFF, icon and accent color #B8896A, title #1E1A17, body #7A6E66, dividers #C4B4A8.
TYPOGRAPHY: Cormorant Garamond (H2, card titles), DM Sans (labels, descriptions, stats).
MOOD: Warm confidence. A luxury brochure page that communicates clinical authority without being cold or corporate. Custom icons are the centerpiece — they must feel hand-crafted and bespoke, not stock.
```

---

## PROMPT 6 — CTA Final + Localização + Rodapé

```
Design a full-width final section of a single-page website for a premium Brazilian aesthetics clinic called "Bella Derma". Desktop layout, 1440px wide. This section contains three distinct visual blocks stacked vertically: (1) a closing CTA banner, (2) a location/contact block, and (3) the footer. All three flow seamlessly without hard breaks.

════════════════════════════════
BLOCK 1 — CLOSING CTA BANNER
════════════════════════════════

BACKGROUND: Full bleed image placeholder — warm gradient from #2C1F14 to #1E1A17, with a very faint botanical texture overlay (thin repeating lines at 3% opacity suggesting rose petals or leaves). Width 100%, height 480px.

CONTENT (vertically and horizontally centered):
- Small eyebrow pill (centered): background rgba(201,169,110,0.2), border 1px solid rgba(201,169,110,0.4), border-radius 100px, padding 6px 20px. Text: "Agende sua consulta" in DM Sans 11px letter-spacing 4px all caps color #C9A070.
- Main headline H2 (margin-top 24px): "Sua melhor versão começa com uma consulta." in Cormorant Garamond 56px font-weight 300 color #FFFFFF, centered, max-width 640px, margin auto, line-height 1.1. The word "começa" is font-weight 600 italic.
- Subtext (margin-top 16px): "Primeira avaliação gratuita. Sem compromisso." in DM Sans 16px font-weight 300 color rgba(255,255,255,0.65), centered.
- CTA button group (margin-top 40px, flex row centered, gap 16px):
  - Primary button: "Agendar pelo WhatsApp" — background linear-gradient 135deg from #C9A070 to #B8896A, text white, DM Sans 15px font-weight 600, padding 18px 48px, border-radius 100px. Left of text: small WhatsApp icon outline 18px in white. Shadow: 0 12px 40px rgba(184,137,106,0.4).
  - Secondary button: "Ver nossos serviços" — background transparent, border 1.5px solid rgba(255,255,255,0.3), text white/75, DM Sans 14px font-weight 400, padding 17px 36px, border-radius 100px. Hover: border becomes white/60.

════════════════════════════════
BLOCK 2 — LOCATION + CONTACT
════════════════════════════════

BACKGROUND: Off-white #FDFAF6. Padding 96px on each side, 80px vertical.

LAYOUT: Two-column grid, 55% / 45% split, 80px gap, align-items stretch.

LEFT COLUMN — Map placeholder:
- A rectangular block 100% height, minimum 380px, border-radius 20px, overflow hidden.
- Fill with a warm-toned map illustration placeholder: background #F2ECE4 with a subtle grid of very thin lines 1px rgba(30,26,23,0.06) in a street-map pattern. In the center: a custom map pin icon — a circle 48px border-radius 50% background #B8896A with a small inner white diamond shape 12px. Below the pin: a small text label "Bella Derma" in DM Sans 11px color #1E1A17 font-weight 600 on a white pill, shadow 0 2px 8px rgba(0,0,0,0.12).

RIGHT COLUMN — Contact information:
- At the very top: small double-line decoration (48px line 2px #B8896A, 28px line 1px #D4B5A8, 6px gap).
- Label (margin-top 16px): "Visite-nos" in DM Sans 11px letter-spacing 5px all caps color #B8896A.
- H3 (margin-top 12px): "Venha nos conhecer pessoalmente." in Cormorant Garamond 36px font-weight 300 color #1E1A17, line-height 1.2, max-width 340px.
- Contact info block (margin-top 32px): 4 rows stacked with 20px gap each. Each row: flex, align-items flex-start, gap 16px.
  - Icon: 40px × 40px circle, background #F2ECE4, border-radius 50%, flex-shrink 0. Inside: a 20px minimal line icon in #B8896A.
  - Text: Label in DM Sans 11px font-weight 600 letter-spacing 2px all caps color #B8896A. Value below in DM Sans 14px font-weight 300 color #7A6E66, line-height 1.5.
  Row 1 — icon: location pin · Label: "Endereço" · Value: "Av. Paulista, 1000 — Jardins, São Paulo - SP"
  Row 2 — icon: phone receiver · Label: "Telefone" · Value: "+55 (11) 99999-8888"
  Row 3 — icon: clock/schedule · Label: "Horários" · Value: "Seg – Sex: 08h às 20h · Sáb: 09h às 14h"
  Row 4 — icon: at-sign/email · Label: "E-mail" · Value: "contato@belladerma.com.br"
- WhatsApp CTA (margin-top 40px): pill button, background #B8896A, text white, DM Sans 14px font-weight 600, padding 16px 36px, border-radius 100px. Left icon: small WhatsApp outline 16px white. Text: "Chamar no WhatsApp". Shadow: 0 8px 24px rgba(184,137,106,0.3).

════════════════════════════════
BLOCK 3 — FOOTER
════════════════════════════════

BACKGROUND: #1E1A17 (warm near-black). Padding 72px 96px 48px. No top border — transitions naturally from the FDFAF6 above via the section boundary.

TOP ROW (flex, space-between, align-items flex-start):

LEFT BLOCK (max-width 300px):
- Logotype: "Bella Derma" in Cormorant Garamond 26px font-weight 600 letter-spacing 3px color #FDFAF6.
- Tagline: "Clínica de Estética Avançada" in DM Sans 10px letter-spacing 5px all caps color #B8896A, margin-top 6px.
- Brand description (margin-top 20px): "Onde a ciência encontra o cuidado. Transformamos sua pele com precisão, tecnologia e afeto." in DM Sans 13px font-weight 300 color rgba(253,250,246,0.45), line-height 1.8, max-width 260px.
- Social icons row (margin-top 24px): Instagram + Facebook icon buttons, 36x36px, border 1px solid rgba(255,255,255,0.1), border-radius 10px, background rgba(255,255,255,0.04), icon 16px color rgba(253,250,246,0.5), gap 10px.

CENTER-LEFT BLOCK:
- Column label "Navegação" in DM Sans 10px letter-spacing 4px all caps color #B8896A, margin-bottom 20px.
- Links stacked: "Sobre nós", "Serviços", "Resultados", "Contato" — DM Sans 14px font-weight 300 color rgba(253,250,246,0.5), 14px gap. On hover: color shifts to #B8896A.

CENTER-RIGHT BLOCK:
- Column label "Serviços" same style.
- Links stacked: "Limpeza de Pele", "Microagulhamento", "Clareamento", "Drenagem Linfática", "Design de Sobrancelhas" — same style as navigation links.

RIGHT BLOCK:
- Column label "Contato" same style.
- Three info lines: phone, email, address — each with a tiny 12px terracotta icon left and DM Sans 13px color rgba(253,250,246,0.5) text.
- Below the contact info (margin-top 20px): small trust badge row — two inline pills side by side. Each pill: border 1px solid rgba(255,255,255,0.1), border-radius 100px, padding 6px 14px, DM Sans 10px color rgba(253,250,246,0.35). Badge 1: "ANVISA Regulamentada". Badge 2: "CREFITO Certificada".

FOOTER BOTTOM BAR: Full-width 1px divider rgba(255,255,255,0.06), then 28px padding below. Flex row space-between.
- Left: "© 2026 Bella Derma. Todos os direitos reservados." DM Sans 12px color rgba(253,250,246,0.2).
- Right: "Política de Privacidade · Termos de Uso" DM Sans 12px color rgba(253,250,246,0.2), with · separator.

COLOR PALETTE (entire section): CTA banner: dark charcoal #1E1A17 + gold #C9A070; Location block: cream #FDFAF6, linen #F2ECE4, accent #B8896A; Footer: dark #1E1A17, cream text #FDFAF6, gold #B8896A, muted rgba.
TYPOGRAPHY: Cormorant Garamond (display, H2, H3, logotype), DM Sans (body, labels, buttons, meta).
MOOD: Closes the page with warmth and authority. The dark CTA banner creates urgency without aggression. The location block is human and inviting. The dark footer feels like closing a luxury magazine — sophisticated, complete.
```
