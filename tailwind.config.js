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
          main: '#080B12',
          secondary: '#0D1420',
          card: '#202B3D',
          'card-glass': 'rgba(32, 43, 61, 0.85)',
        },
        border: {
          subtle: '#334155',
          hover: '#00C8FF',
          deloitte: '#A3E635',
          orange: '#FF7139',
        },
        accent: {
          primary: '#00C8FF',     // Electric Blue
          secondary: '#FF7139',   // Vibrant Orange
          achievement: '#A3E635', // Deloitte Lime Green (Exclusively for Deloitte Milestone)
          orange: '#FF7139',
          blue: '#00C8FF',
        },
        text: {
          primary: '#F8FAFC',     // Crisp White
          secondary: '#A0AEC0',   // Clear Cool Gray
          muted: '#64748B',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card-glow': '0 0 25px -5px rgba(0, 200, 255, 0.22)',
        'deloitte-glow': '0 0 25px -5px rgba(163, 230, 53, 0.25)',
        'orange-glow': '0 0 25px -5px rgba(255, 113, 57, 0.22)',
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

