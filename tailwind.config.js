import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },
      colors: {
        accent: {
          DEFAULT: '#18181b',
          hover: '#27272a',
        },
        'btn-primary': '#242526',
      },
      boxShadow: {
        'btn-primary':
          'inset 0 1.5px 0 rgba(255,255,255,0.15), 0 4px 7px rgba(0,0,0,0.2), 0 0 0 1.5px #000000',
      },
      textShadow: {
        'btn-primary': '0 4px 4px rgba(0,0,0,0.4)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        { ts: (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      );
    }),
  ],
};
