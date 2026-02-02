/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        'swiss-red': '#DC2626',
        'swiss-black': '#171717',
        'swiss-gray': '#D4D4D4',
        'swiss-muted': '#737373',
      },
    },
  },
  plugins: [],
}
