/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: { cyan: '#22d3ee', red: '#ef4444', green: '#22c55e' }
      }
    }
  },
  plugins: []
}
