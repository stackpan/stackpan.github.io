/* eslint-disable import/no-extraneous-dependencies */
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4C4C4C',
          secondary: '#D9D9D9',
          accent: '#4C4C4C',
          neutral: '#C3C3C3',
          'base-100': '#ACACAC',
          'base-200': '#909090',
          'base-300': '#747474',
          info: '#0000ff',
          success: '#008000',
          warning: '#a6a659',
          error: '#ff0000',
        },
      },
    ],
  },
};
