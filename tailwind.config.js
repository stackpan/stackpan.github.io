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
          primary: '#4f4f4f',
          'primary-content': '#ffffff',
          secondary: '#8685ef',
          'secondary-content': '#ffffff',
          accent: '#686576',
          'accent-content': '#ffffff',
          neutral: '#8685ef',
          'base-100': '#FAF7FF',
          'base-200': '#E5E2E9',
          'base-300': '#D0CDD3',
          'base-content': '#000000',
          info: '#0000ff',
          success: '#008000',
          warning: '#a6a659',
          error: '#ff0000',
        },
      },
    ],
  },
};
