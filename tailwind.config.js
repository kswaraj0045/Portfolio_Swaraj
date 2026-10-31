/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        bg: {
          main: '#090D18',
          secondary: '#121A2B',
          card: '#151F33',
          'card-glass': 'rgba(21, 31, 51, 0.75)',
        },
        border: {
          subtle: '#26344D',
          hover: '#38BDF8',
          deloitte: '#A3E635',
        },
        accent: {
          primary: '#38BDF8',     // Cyan / Sky
          secondary: '#8B5CF6',   // Violet
          achievement: '#A3E635', // Deloitte Lime Green
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card-glow': '0 0 25px -5px rgba(56, 189, 248, 0.15)',
        'deloitte-glow': '0 0 25px -5px rgba(163, 230, 53, 0.25)',
        'violet-glow': '0 0 25px -5px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

