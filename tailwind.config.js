/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          950: '#140105',
          900: '#1F0309',
          800: '#2D060F',
          700: '#3D0914',
          600: '#5A0E1F',
        },
        champagne: {
          100: '#FDF7EC',
          200: '#F8EACF',
          300: '#EBD09F',
          400: '#DDB66F',
          500: '#CFA24D',
          600: '#A87D2E',
        },
        ivory: {
          50: '#FFFDF9',
          100: '#FAF6EE',
          200: '#F4EBD9',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};