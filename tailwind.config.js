/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue': '0 4px 6px rgba(0, 0, 255, 0.2)',
      },
      colors: {
        primary: "#60a5fa",
        secondary: "#EAEAFC",
        background: "#111",
        footer: "#EEEEEE"
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',

        'blue-gradient': 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',

      },
      textColor: {
        'transparent': 'transparent',
      }
    },
  },
  plugins: [],
}