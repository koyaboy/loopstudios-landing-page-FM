/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'yellow': 'yellow',
      'red': 'red',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)',
      'dark-gray': 'hsl(0, 0%, 55%)',
      'very-dark-gray': 'hsl(0, 0%, 41%)'
    },
  },
  plugins: [],
}