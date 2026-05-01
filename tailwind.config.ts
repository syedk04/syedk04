import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        flame: {
          orange: '#FF4500',
          red: '#FF6B35',
          dark: '#CC3700',
        },
        frost: {
          cyan: '#00D4FF',
          blue: '#0099CC',
          dark: '#0077AA',
        },
        dark: {
          DEFAULT: '#0D0D0D',
          card: '#1a1a1a',
          surface: '#222222',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-flame-frost': 'linear-gradient(135deg, #FF4500, #FF6B35, #00D4FF, #0099CC)',
        'gradient-flame': 'linear-gradient(135deg, #FF4500, #FF6B35)',
        'gradient-frost': 'linear-gradient(135deg, #00D4FF, #0099CC)',
        'gradient-dark': 'linear-gradient(135deg, #0D0D0D, #1a1a1a)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 69, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 69, 0, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
