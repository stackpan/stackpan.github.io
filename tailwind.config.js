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
          primary: '#b8b8b8',
          secondary: '#b8b8b8',
          accent: '#b8b8b8',
          neutral: '#ebebeb',
          'base-100': '#ffffff',
          info: '#0000ff',
          success: '#008000',
          warning: '#a6a659',
          error: '#ff0000',
        },
      },
    ],
  },
};
