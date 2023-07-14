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
    }
  },
  plugins: [],
}
