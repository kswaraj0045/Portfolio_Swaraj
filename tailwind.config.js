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
          main: '#101B2D',
          secondary: '#162337',
          card: '#1C2B40',
          elevated: '#25364A',
          'card-glass': 'rgba(28, 43, 64, 0.88)',
        },
        border: {
          subtle: '#34465B',
          separator: '#293A50',
          hover: '#3D8C87',
          teal: '#3D8C87',
          champagne: '#D6B77A',
        },
        accent: {
          primary: '#3D8C87',     // Muted Teal
          secondary: '#D6B77A',   // Champagne
          achievement: '#D6B77A', // Executive Milestone Champagne (Deloitte Milestone)
          teal: '#3D8C87',
          champagne: '#D6B77A',
        },
        text: {
          primary: '#F1F3F5',     // Platinum White
          secondary: '#B5C0CD',   // Cool Slate Gray
          muted: '#8493A5',       // Muted Slate
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card-glow': '0 4px 20px -2px rgba(61, 140, 135, 0.18)',
        'teal-soft': '0 4px 20px -2px rgba(61, 140, 135, 0.20)',
        'champagne-soft': '0 4px 20px -2px rgba(214, 183, 122, 0.18)',
        'deloitte-glow': '0 4px 20px -2px rgba(214, 183, 122, 0.18)',
        'elevated': '0 10px 25px -5px rgba(16, 27, 45, 0.5)',
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

