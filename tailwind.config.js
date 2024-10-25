/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./vitalFiles/hero.jpg')",
      },
    },
  },
  plugins: [],
}

