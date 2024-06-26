/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Serif Display', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
        cormorant: ['Cormorant', 'sans-serif'],
      },
      colors: {
        card: 'rgba(135, 184, 154, 0.5)',
        card2: 'rgba(135, 157, 184, 0.5)',
        button: 'rgba(9, 150, 66, 0.5)',
      },
    },
  },
  plugins: [],
};
