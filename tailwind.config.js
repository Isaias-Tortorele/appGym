/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: {
          50: '#e2e8f0',
          400: '#94a3b8',
          800: '#22d3ee',
          900: '#1c1917',
        },
        text: {
          900: '#111827',
          600: '#475569',
          50: '#fafaf9',
        },
        buttonColor: {
          500: '#06B6D4',
        },
      },
    },
  },
  plugins: [],
};
