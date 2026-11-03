/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F5',
          100: '#E5EDE7',
          200: '#C9DBCF',
          500: '#4A7C59',
          700: '#2A573F',
          800: '#1E3F35',
          900: '#132822',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F0ECE1',
          200: '#E2DBCF',
          300: '#CFC5B2',
          500: '#C48B54',
          600: '#A66E3A',
        },
        charcoal: {
          800: '#2D3748',
          900: '#19201D',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
