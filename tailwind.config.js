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
          main: '#090A0C',
          secondary: '#111317',
          card: '#17191D',
          elevated: '#202329',
          'card-glass': 'rgba(23, 25, 29, 0.88)',
        },
        border: {
          subtle: '#35383F',
          separator: '#23262D',
          silver: '#C5C8CE',
          crimson: '#B32635',
          hover: '#C5C8CE',
        },
        accent: {
          primary: '#B32635',     // Crimson Red
          hover: '#D13A49',       // Hover Red
          secondary: '#C5C8CE',   // Metallic Silver
          silver: '#C5C8CE',      // Metallic Silver
          crimson: '#B32635',     // Crimson Red
          achievement: '#C5C8CE', // Silver Prestige (Deloitte Milestone)
        },
        silver: {
          DEFAULT: '#C5C8CE',
          metallic: '#C5C8CE',
          platinum: '#F5F5F5',
          steel: '#A4A7AE',
          muted: '#737780',
        },
        text: {
          primary: '#F5F5F5',     // Platinum White
          secondary: '#C5C8CE',   // Metallic Silver
          muted: '#737780',       // Muted Gray
          steel: '#A4A7AE',       // Steel Gray
        }
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card-glow': '0 4px 20px -2px rgba(179, 38, 53, 0.22)',
        'crimson-soft': '0 4px 20px -2px rgba(179, 38, 53, 0.25)',
        'silver-soft': '0 4px 20px -2px rgba(197, 200, 206, 0.12)',
        'deloitte-glow': '0 4px 20px -2px rgba(197, 200, 206, 0.15)',
        'elevated': '0 10px 25px -5px rgba(9, 10, 12, 0.7)',
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

