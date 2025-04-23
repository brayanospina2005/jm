/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E2F23',
        secondary: '#1B263B',
        neutral: {
          custom: '#6e6e6e',
        },
        off: {
          white: '#FFFFFA',
        },
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};