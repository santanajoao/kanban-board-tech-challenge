import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#48409E',
        secondaryPurple: '#BFB9FF',
        primaryGray: '#6F6F6F',
        secondaryGray: '#C4C4C4',
        terciaryGray: '#F1F0FF',
        primaryRed: '#FF7979',
        primaryYellow: '#FFBA53',
        primaryGreen: '#2BA700',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
