import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blob': "url('../assets/backgrounds/blob.svg')"
      },
      colors: {
        brand: {
          '100': '#01121E',
          '200': '#0099FF',
          '300': '#49B6FF',
          '400': '#C8E8FE',
          '500': '#F0F9FF',
        },
      },
      maxWidth: {
        'default': '1200px',
      },
      animation: {
        'button-mobile': 'rotateToRight .4s forwards',
        'navbar': 'fadeIn .4s forwards',
        'header': 'fadeInToBottom .4s forwards 1s',
        'home-hero': 'fadeIn 2s forwards 5s',
        'home-greeting-title': 'fadeIn .4s forwards 2s',
        'home-greeting-text': 'fadeIn .4s forwards 3s',
      },
      keyframes: {
        rotateToRight: {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
        fadeInToBottom: {
          'from': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config;
