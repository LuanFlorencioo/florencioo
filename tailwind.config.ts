import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '100': '#01121E',
          '200': '#0099FF',
          '300': '#49B6FF',
          '400': '#C8E8FE',
          '500': '#F0F9FF',
        },
      }
    },
  },
  plugins: [],
}
export default config;
