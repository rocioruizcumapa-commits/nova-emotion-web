/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: '#0F4C5C',
        turquoise: '#1B9AAA',
        softgreen: '#52B788',
        warmwhite: '#FAFDFC',
        accentgold: '#E09F3E',
      }
    },
  },
  plugins: [],
}
