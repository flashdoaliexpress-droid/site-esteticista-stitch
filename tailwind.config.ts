import type { Config } from 'tailwindcss'

// Cores extraídas exatamente do design system do Stitch (projeto 11570269196934740543)
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Superfícies ──────────────────────────────────────────
        'background':                '#FAF8F5',
        'surface':                   '#FAF8F5',
        'surface-bright':            '#fdf8f1',
        'surface-dim':               '#ded9d2',
        'surface-variant':           '#ede1cf',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f6f1e8',
        'surface-container':         '#f0ebe2',
        'surface-container-high':    '#e8e2d9',
        'surface-container-highest': '#e2dcd1',
        'surface-tint':              '#745a27',
        // ── Texto sobre superfícies ──────────────────────────────
        'on-background':             '#1A1A18',
        'on-surface':                '#1A1A18',
        'on-surface-variant':        '#555550',
        'inverse-surface':           '#32302c',
        'inverse-on-surface':        '#f5f0e9',
        // ── Primary (dourado quente — CTAs, ícones, links) ───────
        'primary':                   '#C9A96E',
        'on-primary':                '#ffffff',
        'primary-container':         '#E6D5B8',
        'on-primary-container':      '#261900',
        'primary-fixed':             '#ffdea4',
        'primary-fixed-dim':         '#e6c487',
        'on-primary-fixed':          '#261900',
        'on-primary-fixed-variant':  '#5a4312',
        'inverse-primary':           '#e6c487',
        // ── Secondary (marrom médio — texto secundário) ──────────
        'secondary':                 '#635d54',
        'secondary-container':       '#ece1d4',
        'on-secondary':              '#ffffff',
        'on-secondary-container':    '#201b13',
        'secondary-fixed':           '#ece1d4',
        'secondary-fixed-dim':       '#cfc5b8',
        'on-secondary-fixed':        '#201b13',
        'on-secondary-fixed-variant':'#4c463c',
        // ── Tertiary ─────────────────────────────────────────────
        'tertiary':                  '#5f6059',
        'tertiary-container':        '#e4e2dc',
        'on-tertiary':               '#30312c',
        'on-tertiary-container':     '#1b1c18',
        'tertiary-fixed':            '#e4e2dc',
        'tertiary-fixed-dim':        '#c8c6c0',
        'on-tertiary-fixed':         '#1b1c18',
        'on-tertiary-fixed-variant': '#474742',
        // ── Contornos e divisórias ───────────────────────────────
        'outline':                   '#817666',
        'outline-variant':           '#d0c5b5',
        // ── Estados de erro ──────────────────────────────────────
        'error':                     '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error':                  '#ffffff',
        'on-error-container':        '#ffdad6',
        // ── Tokens das novas telas Stitch (results, benefits, cta-footer) ─
        'bella-gold':                '#B8896A',
        'bella-rose':                '#D4B5A8',
        'bella-cream':               '#FDFAF6',
        'brand-linen':               '#F2ECE4',
        'brand-gold':                '#B8896A',
      },
      fontFamily: {
        // Playfair Display: headlines, títulos, quotes
        'headline': ['"Playfair Display"', 'serif'],
        'serif':    ['"Playfair Display"', 'serif'],
        // Inter: body, labels, UI
        'body':     ['Inter', 'sans-serif'],
        'label':    ['Inter', 'sans-serif'],
        // Noto Serif: corpo editorial (opcional)
        'serif-body': ['"Noto Serif"', 'serif'],
        'cormorant':  ['"Cormorant Garamond"', 'serif'],
        'sans-modern':['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        'lg':    '0.25rem',
        'xl':    '0.5rem',
        'full':  '9999px',
      },
      keyframes: {
        'scroll-line': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'scroll-line': 'scroll-line 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'fade-in':     'fade-in 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
