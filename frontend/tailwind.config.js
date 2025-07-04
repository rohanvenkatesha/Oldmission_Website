module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom black background for dark mode
        'dark-bg': '#000000',
      },
    },
  },
  plugins: [],
}
