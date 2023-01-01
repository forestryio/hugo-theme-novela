/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js,svg}",
    "./assets/**/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': ['poppins','-apple-system','blinkmacsystemfont','neue','helvetica','ubuntu','roboto','noto','segoe ui','arial','sans-serif'],
      'serif': ['Playfair Display', 'ui-serif', 'Georgia, Cambria', "Times New Roman", 'Times', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
