/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptsans: ['PT Sans', 'sans-serif'],
      },
      colors: {
        'pikachu': '#ffcb05'
      }
    },
  },
  plugins: [],
}
