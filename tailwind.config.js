/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('/public/images/hero1.jpg')",
        'hero2': "url('/public/images/hero2.jpg')",
        'hero3': "url('/public/images/hero3.jpg')",
        'hero4': "url('/public/images/hero4.jpg')",
        'hero5': "url('/public/images/hero5.jpg')",
        'citadel': "url('/public/images/citadel.jpg')",
        'endless': "url('/public/images/endless.jpg')",
        'vr': "url('/public/images/vr.png')",
      },
    },
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1536px',
      '3xl': '2560px',
    }
  },
  plugins: [],
}

