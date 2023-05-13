/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pq-primary'    : '#1A1E24',
        'pq-secondary'  : '#2F363F',
        'pq-thrid'      : '#0E1723',
        'pq-orange'     : '#E74C3C',
        'pq-red'        : '#FF0000',
        'pq-yellow'     : '#FFB802',
        'pq-footer'     : '#1E232B',
        'pq-gray'       : '#E5E5E5'
      }
    },
  },
  plugins: [],
}
