/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const defaultConfig = require('tailwindcss/defaultConfig');
const colors = require('tailwindcss/colors');

const range = (length) => Array.from({ length }, (_, i) => i);
const pixels = range(1000 + 1).map((x) => [x, `calc(${x}rem / 16)`]);
const px0_10 = Object.fromEntries(pixels.slice(0, 10 + 1));
const px0_100 = Object.fromEntries(pixels.slice(0, 100 + 1));
const px0_200 = Object.fromEntries(pixels.slice(0, 200 + 1));
const px0_1000 = Object.fromEntries(pixels);

const isDev = [undefined, 'development'].includes(process.env.NODE_ENV);

module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      minWidth: px0_1000,
      minHeight: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      spacing: px0_200,
      width: px0_1000,
      height: px0_1000,     
    },
  },
  plugins: [  ],
};
