/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mesh': "url('/background.png')",
      },
      boxShadow: {
        nav: '0 50px 60px #00000095',
      },
      animation: {
        'navbar': 'show-navbar .4s forwards',
      }
    },
    colors: {
      'white': '#FFFFFF',
      'orange': '#FF5500',
      'gray': {
        '100': '#151515',
        '200': '#1A1919',
        '300': '#202020',
        '400': '#555555',
        '500': '#7F7979',
      }
    },
    fontFamily: {
      'lexend': ["Lexend", "sans-serif"],
      'inter': ["Inter", "sans-serif"],
    }
  },
  plugins: [],
}
