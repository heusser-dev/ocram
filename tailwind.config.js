/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

module.exports = {
  "darkMode": "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0d47a1',
      },
    },
  },
  plugins: [animations],
}