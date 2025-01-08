/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ["./templates/**/*.j2"],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--gray-a4)',
      },
    },
  },
  plugins: [],
}
