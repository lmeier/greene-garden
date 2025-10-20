/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,md,markdown}",
    "./_layouts/**/*.{html,md,markdown}",
    "./_includes/**/*.{html,md,markdown}",
    "./_posts/**/*.{html,md,markdown}",
    "./assets/**/*.{html,js,md,markdown}",
    "./**/*.{html,md,markdown}",
    "./_site/*.{html,md,markdown}",
  ],
  theme: {
    extend: {
      colors: {
        'sunflower': '#E8B12D',
        'verdant': '#a3ae6e',
        'violet': '#ccaff2',
        'pumpkin': '#f06d1f',
        'fern': '#4F7942',
      },
      fontFamily: {
        'vienna': ['vienna', 'serif'],
        'kairo': ['kairo', 'serif'],
        'gentle': ['gentle', 'serif'],
        'merriweather': ['merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}