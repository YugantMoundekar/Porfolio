/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#79FE0C',
        // secondary: '#1f1f1f',
        // ternary: '#151515',
        // mixture: '#3e3e3e',
        primary: '#79FE0C',
        secondary: '#FFFFFF',
        ternary: '#151515',
        mixture: '#3e3e3e',
        back: '#000000'
      },
      fontFamily: {
        inter: ['Inter', 'sans'], // Use 'Inter' for sans-serif fonts
      },
    },
  },
  plugins: [],
}