/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1754CF',
          50: '#EEF3FC',
          100: '#D5E1F7',
          200: '#ACC4EF',
          300: '#82A6E7',
          400: '#5989DF',
          500: '#1754CF',
          600: '#1244A6',
          700: '#0D337C',
          800: '#082153',
          900: '#041029',
        },
        gold: {
          DEFAULT: '#B8962E',
          50: '#FBF6E8',
          100: '#F5E9C5',
          200: '#EBD38B',
          300: '#E1BD51',
          400: '#D6A717',
          500: '#B8962E',
          600: '#937825',
          700: '#6E5A1C',
          800: '#483C12',
          900: '#241E09',
        },
        surface: '#FFFFFF',
        background: '#F6F6F8',
        textPrimary: '#1C1917',
        textSecondary: '#78716C',
        border: '#E7E5E4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
