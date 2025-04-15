/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}

