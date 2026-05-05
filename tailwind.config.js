/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080b12',
          900: '#0f1420',
          800: '#171d2b',
          700: '#232b3a',
        },
        accent: {
          coral: '#ff7a5c',
          mint: '#61d6a3',
          sky: '#6bb7ff',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(97, 214, 163, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
