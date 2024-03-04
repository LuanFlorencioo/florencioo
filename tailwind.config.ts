import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'dark-1': "url(/backgrounds/dark-1.svg)",
        'dark-2': "url(/backgrounds/dark-2.svg)",
        'dark-3': "url(/backgrounds/dark-3.svg)",
        'dark-4': "url(/backgrounds/dark-4.svg)",
        'dark-5': "url(/backgrounds/dark-5.svg)",
        'light-1': "url(/backgrounds/light-1.svg)",
        'light-2': "url(/backgrounds/light-2.svg)",
        'light-3': "url(/backgrounds/light-3.svg)",
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
