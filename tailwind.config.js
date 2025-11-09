/**** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bfe0ff',
          300: '#94ceff',
          400: '#5bb0ff',
          500: '#2e8cff',
          600: '#1d6ef0',
          700: '#1758cd',
          800: '#1648a0',
          900: '#143d7f'
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
