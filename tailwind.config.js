/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E3A8A',
          'navy-dark': '#172554',
          'navy-light': '#2563EB',
          gold: '#D4AF37',
          'gold-light': '#FDF8E2',
          'gold-muted': '#B8972E',
          emerald: '#10B981',
          'emerald-dark': '#059669',
          'emerald-light': '#D1FAE5',
          bg: '#F9FAFB',
          surface: '#FFFFFF',
          neutral: '#E5E7EB',
          text: '#1F2937',
          'text-muted': '#6B7280'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(30, 58, 138, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -3px rgba(30, 58, 138, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

