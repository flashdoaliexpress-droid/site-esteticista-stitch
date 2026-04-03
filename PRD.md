# PRD — Bella Derma: Site Institucional Premium

**Versão:** 1.0  
**Data:** 2026-04-01  
**Status:** Draft

---

## 1. Visão do Produto

### Problema
Clínicas de estética de alto padrão perdem clientes potenciais por não comunicarem seu nível de excelência digitalmente. O site atual (ou ausência dele) não reflete a qualidade dos serviços, não gera confiança e não converte visitantes em agendamentos.

### Solução
Um site institucional premium de página única (single-page) que posiciona a Bella Derma como referência em estética avançada. O site transmite sofisticação, confiança e credibilidade através de design de alto nível, conteúdo cuidado e experiência fluida.

### Objetivo de Negócio
- Aumentar agendamentos via WhatsApp/contato direto
- Posicionar a marca como clínica premium na região
- Apresentar os serviços com clareza e autoridade
- Humanizar a marca mostrando os proprietários e a história

### Métricas de Sucesso
- Taxa de cliques no CTA principal (botão de agendamento) > 5%
- Tempo médio na página > 2 minutos
- Taxa de rejeição < 60%

---

## 2. Personas

### Persona Principal — "Mariana, 34 anos"
- **Perfil:** Profissional liberal, classe A/B, preocupada com aparência e autoestima
- **Comportamento:** Pesquisa no Instagram e Google antes de decidir; compara clínicas; prioriza qualidade sobre preço
- **Dor:** Desconfia de clínicas sem presença digital profissional; quer saber quem vai tocar em sua pele
- **Motivação:** Sentir-se bem consigo mesma, tratar manchas e flacidez
- **Dispositivo:** Principalmente mobile (70%), desktop (30%)

### Persona Secundária — "Fernanda, 28 anos"
- **Perfil:** Jovem profissional, primeira vez buscando tratamento estético especializado
- **Comportamento:** Influenciada por redes sociais; busca resultados visíveis; quer entender o procedimento antes de agendar
- **Dor:** Insegurança sobre procedimentos; medo de resultados ruins
- **Motivação:** Melhorar autoestima, tratar acne e manchas
- **Dispositivo:** Mobile-first

---

## 3. Escopo — 3 Telas (Seções)

O site é uma **single-page application** com scroll suave entre 3 seções principais.

---

## 4. Funcionalidades Detalhadas por Tela

### TELA 1 — Hero Section (Seção de Abertura)

**Objetivo:** Causar impacto imediato, comunicar o posicionamento premium e direcionar ao agendamento.

#### Componentes:

| Componente | Descrição |
|---|---|
| **Header/Cabeçalho** | Logo Bella Derma à esquerda; navegação com links âncora (Sobre, Serviços, Contato); botão CTA "Agendar Consulta" à direita; transparente sobre o hero, com fundo sólido ao fazer scroll |
| **Imagem de fundo** | Foto de alta qualidade (mínimo 1920×1080px) de ambiente de clínica luxuosa ou modelo com pele impecável; overlay escuro/gradiente para garantir legibilidade |
| **Headline principal** | Texto de alto impacto, fonte serif ou display premium, branca, ~48–64px desktop / ~32px mobile |
| **Subheadline** | Texto complementar, fonte sans-serif, ~18–22px, cor levemente opaca |
| **Botão CTA primário** | "Agendar Agora" ou "Quero Cuidar de Mim" — link para WhatsApp ou âncora para contato; design destacado (cor de acento da marca) |
| **Indicador de scroll** | Seta animada ou texto "Conheça nossa história" para guiar o scroll |

#### Especificações Técnicas:
- Header com comportamento sticky: transparente no topo, fundo sólido com sombra ao scrollar
- Hero com altura 100vh no desktop, mínimo 85vh no mobile
- Imagem com lazy loading e fallback de cor sólida
- Botão CTA abre WhatsApp com mensagem pré-preenchida: "Olá! Gostaria de agendar uma consulta na Bella Derma."

---

### TELA 2 — Sobre a Marca e Proprietários

**Objetivo:** Humanizar a marca, construir confiança e criar conexão emocional com a cliente.

#### Componentes:

| Componente | Descrição |
|---|---|
| **Título da seção** | "Nossa História" ou "Quem Somos" — destaque visual com linha decorativa ou acento de cor |
| **Texto da marca** | 2–3 parágrafos sobre a visão da Bella Derma: missão, valores, diferencial, compromisso com resultados e cuidado personalizado |
| **Valores da marca** | 3–4 cards ou ícones com valores-chave (ex: Excelência, Cuidado, Resultados, Confiança) |
| **Card Proprietário 1** | Foto profissional, nome completo, título/especialidade, mini-bio (3–4 linhas), formação ou certificações destaque |
| **Card Proprietário 2** | Mesma estrutura do Proprietário 1 |
| **Quote/depoimento da marca** | Frase inspiracional dos proprietários em destaque tipográfico |

#### Layout:
- Desktop: texto à esquerda, imagem ou grid de proprietários à direita
- Mobile: stack vertical, foto dos proprietários abaixo do texto
- Fundo levemente diferenciado (off-white, bege suave ou cor da marca) para separar da seção anterior

---

### TELA 3 — Serviços

**Objetivo:** Apresentar todos os serviços de forma clara, atrativa e que gere desejo de agendamento.

#### Serviços a apresentar:

| Serviço | Descrição Curta |
|---|---|
| Limpeza de Pele Profunda | Remoção de impurezas e células mortas com técnicas profissionais para pele renovada |
| Microagulhamento | Estimulação do colágeno para redução de cicatrizes, poros e rejuvenescimento |
| Clareamento de Manchas | Tratamento especializado para uniformizar o tom da pele e eliminar manchas |
| Drenagem Linfática | Técnica manual para redução de inchaço, retenção hídrica e modelagem corporal |
| Massagem Modeladora | Massagem específica para definição dos contornos e redução de medidas |
| Tratamento para Celulite | Protocolo combinado para suavizar a aparência da celulite e melhorar a textura |
| Design de Sobrancelhas | Modelagem personalizada para realçar o olhar e harmonizar o rosto |

#### Componentes por card de serviço:

| Componente | Descrição |
|---|---|
| **Imagem** | Foto do procedimento ou resultado; proporção 4:3 ou 1:1; alta qualidade |
| **Título** | Nome do serviço, fonte semi-bold |
| **Descrição** | 2–3 linhas descrevendo o benefício principal e a indicação |
| **Ícone decorativo** | Ícone sutil relacionado ao serviço (opcional, para enriquecer visualmente) |
| **CTA por card** | Link ou botão "Saiba mais" / "Agendar" — abre WhatsApp com mensagem pré-preenchida com o nome do serviço |

#### Layout:
- Desktop: grid 3 colunas × 3 linhas (7 cards + 1 card CTA geral)
- Tablet: grid 2 colunas
- Mobile: stack de 1 coluna com scroll vertical
- Efeito hover nos cards: elevação sutil com sombra e leve escurecimento da imagem

---

### RODAPÉ (Footer)

| Componente | Descrição |
|---|---|
| Logo | Versão reduzida ou variante branca/escura |
| Links rápidos | Sobre, Serviços, Contato |
| Contato | Telefone/WhatsApp, e-mail, endereço |
| Redes Sociais | Instagram, Facebook (ícones com link) |
| Copyright | "© 2026 Bella Derma. Todos os direitos reservados." |

---

## 5. Estrutura de Dados no LocalStorage

O site persiste dados mínimos no LocalStorage para melhorar a experiência em visitas recorrentes e rastrear comportamento básico sem backend.

### Chaves e Estrutura:

```json
{
  "bella_derma_session": {
    "firstVisit": "2026-04-01T10:00:00Z",     // ISO timestamp da 1ª visita
    "lastVisit": "2026-04-01T10:00:00Z",       // ISO timestamp da última visita
    "visitCount": 1,                            // Número de visitas
    "ctaClicked": false,                        // Se o CTA principal foi clicado
    "servicesViewed": ["microagulhamento"],     // Serviços cujos cards foram clicados
    "scrollDepth": 85                           // Profundidade máxima de scroll (%)
  },
  "bella_derma_preferences": {
    "cookieConsent": true,                      // Consentimento de cookies (LGPD)
    "consentDate": "2026-04-01T10:00:00Z"      // Data do consentimento
  }
}
```

### Regras de Persistência:
- `firstVisit` é gravado apenas uma vez; nunca sobrescrito
- `lastVisit` e `visitCount` são atualizados a cada visita
- `servicesViewed` acumula sem duplicatas (Set → Array)
- Todos os dados expiram após 90 dias (verificação no carregamento)
- Dados são removidos se o usuário revogar consentimento de cookies

---

## 6. Regras de Negócio

### RN-01 — CTA de Agendamento
Todo botão de agendamento deve abrir o WhatsApp da clínica com mensagem pré-preenchida. Nunca direcionar para formulário externo sem fallback.

**Formato da URL:**
```
https://wa.me/55XXXXXXXXXXX?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Bella%20Derma.
```

Para CTAs de serviços específicos:
```
https://wa.me/55XXXXXXXXXXX?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20[NOME_DO_SERVIÇO].
```

### RN-02 — Responsividade Obrigatória
O site deve funcionar perfeitamente em:
- Mobile: 320px–767px
- Tablet: 768px–1023px
- Desktop: 1024px+

Nenhum elemento pode transbordar horizontalmente em nenhum breakpoint.

### RN-03 — Performance
- First Contentful Paint (FCP) < 2s em conexão 4G
- Largest Contentful Paint (LCP) < 3s
- Imagens devem usar formato WebP com fallback JPEG
- Fontes carregadas via `font-display: swap`

### RN-04 — Acessibilidade (mínimo WCAG AA)
- Contraste de texto mínimo 4.5:1
- Todos os botões com `aria-label` descritivo
- Imagens com `alt` text significativo
- Navegação por teclado funcional

### RN-05 — LGPD
- Banner de consentimento de cookies na primeira visita
- Política de privacidade acessível no footer
- LocalStorage só é populado após consentimento
- Usuário pode recusar cookies sem perder funcionalidade

### RN-06 — Conteúdo
- Textos finais (headlines, bios, descrições de serviços) são fornecidos pela cliente
- Imagens de alta resolução são fornecidas pela cliente ou licenciadas de banco de imagens premium
- Placeholders devem ser substituídos antes do go-live

### RN-07 — Links de Redes Sociais
- Links de Instagram e Facebook devem abrir em nova aba (`target="_blank"`)
- Incluir `rel="noopener noreferrer"` por segurança

---

## 7. Critérios de Aceite

### CA-01 — Hero Section
- [ ] Header aparece transparente sobre o hero e muda para fundo sólido ao scroll de 80px
- [ ] Imagem de fundo cobre 100% da largura e altura (100vh) sem distorção
- [ ] Headline e subheadline são legíveis sobre a imagem (contraste ≥ 4.5:1)
- [ ] Botão CTA abre WhatsApp com mensagem pré-preenchida correta
- [ ] Indicador de scroll está visível e animado
- [ ] Hero renderiza corretamente em mobile (375px), tablet (768px) e desktop (1440px)

### CA-02 — Seção Sobre
- [ ] Textos da marca e dos proprietários estão presentes e formatados
- [ ] Fotos dos proprietários carregam com qualidade adequada e sem distorção
- [ ] Cards de valores exibem ícone + título + descrição
- [ ] Layout responde corretamente nos 3 breakpoints definidos
- [ ] Seção tem ID âncora `#sobre` para navegação do header

### CA-03 — Seção de Serviços
- [ ] Todos os 7 serviços estão presentes com imagem, título e descrição
- [ ] Grid exibe 3 colunas no desktop, 2 no tablet, 1 no mobile
- [ ] Hover nos cards exibe efeito visual de elevação
- [ ] CTA de cada card abre WhatsApp com o nome do serviço correto na mensagem
- [ ] Seção tem ID âncora `#servicos` para navegação do header

### CA-04 — Footer
- [ ] Logo, links rápidos, contato e redes sociais presentes
- [ ] Links de redes sociais abrem em nova aba
- [ ] Endereço e contato corretos (preenchidos pela cliente)
- [ ] Copyright com ano correto

### CA-05 — Performance
- [ ] Lighthouse Performance score ≥ 85 em mobile
- [ ] Todas as imagens em formato WebP
- [ ] Nenhum recurso bloqueante acima do fold

### CA-06 — Responsividade
- [ ] Nenhum overflow horizontal em qualquer breakpoint
- [ ] Fontes legíveis em mobile (mínimo 16px para corpo de texto)
- [ ] Botões e links têm área de toque mínima de 44×44px no mobile

### CA-07 — LocalStorage e LGPD
- [ ] Banner de cookies aparece na primeira visita
- [ ] LocalStorage só é escrito após consentimento
- [ ] Dados do LocalStorage seguem o schema definido na seção 5
- [ ] Revogar consentimento limpa os dados do LocalStorage

### CA-08 — Cross-browser
- [ ] Funciona corretamente em Chrome, Firefox, Safari e Edge (versões dos últimos 2 anos)

---

## 8. Stack Tecnológica Recomendada

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Linguagem | HTML5 + CSS3 + JS vanilla ou Next.js | Leveza e performance para site estático/semi-estático |
| Estilização | Tailwind CSS ou CSS Modules | Consistência e velocidade de desenvolvimento |
| Fontes | Google Fonts (Playfair Display + Inter) | Premium sem custo de licença |
| Imagens | WebP com srcset responsivo | Performance e qualidade |
| Deploy | Vercel ou Netlify | CDN global, HTTPS automático, CI/CD |
| Analytics | Google Analytics 4 | Rastreamento de CTAs e comportamento |

---

## 9. Fora de Escopo (v1.0)

- Sistema de agendamento online integrado
- Área de login para clientes
- Blog ou conteúdo dinâmico
- E-commerce ou venda de produtos
- Chat ao vivo (além do WhatsApp)
- Galeria de resultados com antes/depois (pode entrar na v1.1)
- Depoimentos de clientes (pode entrar na v1.1)

---

## 10. Dependências e Informações Necessárias da Cliente

Antes do desenvolvimento começar, a cliente deve fornecer:

- [ ] Número de WhatsApp para os CTAs
- [ ] Logo em alta resolução (SVG preferencial, PNG com fundo transparente)
- [ ] Foto de fundo do Hero (mínimo 1920×1080px, alta qualidade)
- [ ] Fotos profissionais dos proprietários (mínimo 800×800px)
- [ ] Fotos de cada serviço (7 no total, mínimo 800×600px)
- [ ] Textos definitivos: headline, subheadline, sobre a marca, bios dos proprietários, descrições dos serviços
- [ ] Links de Instagram e Facebook
- [ ] Endereço físico da clínica
- [ ] Paleta de cores e preferências de tipografia (ou aprovação do design proposto)
- [ ] Domínio registrado (ex: belladerma.com.br)
