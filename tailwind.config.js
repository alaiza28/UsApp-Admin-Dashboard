/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1E293B",
        "light-blue": "#73FBFD",
        "light-yellow": "#EAB308",
      }
    },
  },
  plugins: [],
}
