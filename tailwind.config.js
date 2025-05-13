/ ** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        opalLight: 'rgb(243 244 246 / 0.6)',
      },
    },
  },
  plugins: [],
};