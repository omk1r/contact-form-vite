/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        green200Lighter: 'hsl(148, 38%, 91%)',
        green600Medium: 'hsl(169, 82%, 27%)',
        red: 'hsl(0, 66%, 54%)',
        white: 'hsl(0, 0%, 100%)',
        grey500Medium: 'hsl(186, 15%, 59%)',
        grey900Darker: 'hsl(187, 24%, 22%)',
      },
    },
  },
  plugins: [],
};
