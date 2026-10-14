/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bronze: {
          50: '#F9F5F1',
          100: '#F2E8DF',
          200: '#E4CFBF',
          300: '#D2B29B',
          400: '#BA8E6D',
          500: '#A47756', // Primary Bronze
          DEFAULT: '#A47756',
          600: '#8E6142',
          700: '#754B31',
          800: '#5C3823',
          900: '#432616',
        },
        charcoal: {
          50: '#F6F5F4',
          100: '#ECE9E6',
          200: '#D5CFC9',
          300: '#BAB1A8',
          400: '#9E9287',
          500: '#827468',
          600: '#685A4E',
          700: '#4F443A',
          800: '#3B332B', // Primary Charcoal
          DEFAULT: '#3B332B',
          900: '#27211B',
          950: '#1A1612',
        },
        ivory: {
          50: '#FCFAF7',
          100: '#F5F0E8', // Warm Ivory / Stone
          DEFAULT: '#F5F0E8',
          200: '#EDE4D6',
          300: '#E0D2BE',
          400: '#CFBC9F',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        'architectural': '0.22em',
        'loose-caps': '0.18em',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'sweep': 'sweep 8s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        sweep: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        }
      }
    },
  },
  plugins: [],
}
