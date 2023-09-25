/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: "Karla",
        helvetica: "Helvetica",
      },
      fontWeight: {
        sembold: '500',
      }
    },
  },
  plugins: [],
}

