/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css}'],  // ✅ ok

  theme: {
    extend: {
      colors: {
        brand: '#B6FF24',  // ✅ ok
        dark: {            // ✅ ok
          10: '#121212',
          20: '#2B2B2B',
          30: '#4B4B4B',
          40: '#7B7B7B',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],  // ✅ ok
      },
    },
  },
  plugins: [],  // ✅ ok
}
