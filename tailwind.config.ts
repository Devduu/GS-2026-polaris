import type { Config } from 'tailwindcss';

/**
 * Tema POLARIS — espelha os design tokens do reference (paleta :root, easings e
 * a tipografia Space Grotesk / Georgia). Cores e easings também vivem como CSS
 * vars em globals.css para uso fora do utilitário Tailwind (ex.: animações JS).
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        fire: '#FF3500',
        black: '#000000',
        lightgray: '#E5E5E5',
        cardlight: '#F2F2F2',
        greyfade: '#707070',
        greysoft: '#CCCCCC',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      transitionTimingFunction: {
        // tokens de easing idênticos ao reference
        ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        flameFlick: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(.55)', opacity: '.7' },
        },
      },
      animation: {
        // cursor piscando do "Mission Live" ticker
        blink: 'blink 1.06s steps(1, end) infinite',
        // chama do foguetinho do preloader
        flame: 'flameFlick 0.18s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
