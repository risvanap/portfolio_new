/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#08090D',
          surface: '#111318',
          card: 'rgba(17, 19, 24, 0.75)',
          border: '#27272A',
          muted: '#1E2028',
        },
        accent: {
          DEFAULT: 'var(--accent, #B8FF65)',
          glow: 'var(--accent-glow, rgba(184, 255, 101, 0.35))',
          muted: 'var(--accent-muted, rgba(184, 255, 101, 0.12))',
        },
        cyber: {
          green: '#B8FF65',
          blue: '#0056FF',
          violet: '#8B5CF6',
          emerald: '#10B981',
          coral: '#FF5555',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

