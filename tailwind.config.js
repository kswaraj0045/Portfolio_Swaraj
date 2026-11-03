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
          primary: '#B32635',       // Primary Crimson: #B32635
          hover: '#D13A49',         // Crimson Hover: #D13A49
          crimson: '#B32635',       // Primary Crimson
          'crimson-hover': '#D13A49',
          silver: '#C5C8CE',        // Silver Accent: #C5C8CE
          secondary: '#C5C8CE',     // Silver Text / Accent
          'steel-blue': '#527DAA',  // Steel Blue: #527DAA
          champagne: '#B99A6B',     // Champagne Gold: #B99A6B
          gold: '#B99A6B',          // Champagne Gold alias
          deloitte: '#86BC25',      // Deloitte Green: #86BC25
          teal: '#4E9B83',          // Muted Teal: #4E9B83
          achievement: '#B99A6B',   // Achievements Champagne Gold Accent
        },
        silver: {
          DEFAULT: '#C5C8CE',
          metallic: '#C5C8CE',
          platinum: '#F5F5F5',
          steel: '#A4A7AE',
          muted: '#858992',
        },
        text: {
          primary: '#F5F5F5',       // Primary text: Platinum White (#F5F5F5)
          secondary: '#C5C8CE',     // Silver text: Metallic Silver (#C5C8CE)
          silver: '#C5C8CE',        // Silver text alias
          muted: '#858992',         // Muted text: Slate Gray (#858992)
          steel: '#A4A7AE',         // Steel Gray (#A4A7AE)
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
        'deloitte-glow': '0 4px 20px -2px rgba(134, 188, 37, 0.2)',
        'champagne-glow': '0 4px 20px -2px rgba(185, 154, 107, 0.22)',
        'steelblue-glow': '0 4px 20px -2px rgba(82, 125, 170, 0.22)',
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

