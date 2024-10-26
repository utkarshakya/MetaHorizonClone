/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('./vitalFiles/images/hero1.jpg')",
        'hero2': "url('./vitalFiles/images/hero2.jpg')",
        'hero3': "url('./vitalFiles/images/hero3.jpg')",
        'hero4': "url('./vitalFiles/images/hero4.jpg')",
        'hero5': "url('./vitalFiles/images/hero5.jpg')",
        'citadel': "url('./vitalFiles/images/citadel.jpg')",
        'endless': "url('./vitalFiles/images/endless.jpg')",
        'vr': "url('./vitalFiles/images/vr.png')"
      }
    }
  },
  plugins: [],
}

