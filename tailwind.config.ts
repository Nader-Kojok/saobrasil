import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker': ['var(--font-permanent-marker)'],
        'inter': ['var(--font-inter)'],
        'playfair': ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};

export default config; 