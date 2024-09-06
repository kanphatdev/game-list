/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        deepBlue: '#131862',
        mediumBlue: '#2e4482',
        softBlue: '#546bab',
        greyBlue: '#87889c',
        lightPurple: '#bea9de',
        
        // Light mode colors
        lightYellow: '#f1e8b8',
        softYellow: '#f9e784',
        peach: '#e58f65',
        coralRed: '#d05353',
        navyBlue: '#003049',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
