/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const defaultConfig = require("tailwindcss/defaultConfig");
const colors = require("tailwindcss/colors");

const range = (length) => Array.from({ length }, (_, i) => i);
const pixels = range(1000 + 1).map((x) => [x, `calc(${x}rem / 16)`]);
const px0_10 = Object.fromEntries(pixels.slice(0, 10 + 1));
const px0_20 = Object.fromEntries(pixels.slice(0, 20 + 1));
const px0_100 = Object.fromEntries(pixels.slice(0, 100 + 1));
const px0_200 = Object.fromEntries(pixels.slice(0, 200 + 1));
const px0_1000 = Object.fromEntries(pixels);

const isDev = [undefined, "development"].includes(process.env.NODE_ENV);

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      GREY_0: "#F7F7FA",
      GREY_5: "#EDEDF0",
      GREY_10: "#E1E1E3",
      GREY_20: "#D2D2D6",
      GREY_30: "#B4B4BB",
      GREY_40: "#9696A0",
      GREY_50: "#787885",
      GREY_60: "#5A5B6A",
      GREY_70: "#4A4B57",
      GREY_80: " #3A3A44",
      GREY_90: "#292A31",
      GREY_100: "#19191D",
      PINK_0: "#FFF5F6",
      PINK_5: "#FFF1F3",
      PINK_10: "#FFE4E8",
      PINK_20: "#FECDD6",
      PINK_30: "#FECDD6",
      PINK_40: "#FEA3B4",
      PINK_50: "#FD6F8E",
      PINK_60: "#F63D68",
      PINK_70: "#E31B54",
      PINK_80: "#C01048",
      PINK_90: "#A11043",
      PINK_100: "#89123E",
      BLACK: "#000000",
      WHITE: "#FFFFFF",
    },
    extend: {
      borderWidth: px0_10,
      borderRadius: px0_20,
      fontSize: px0_100,
      minWidth: px0_1000,
      minHeight: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      spacing: px0_200,
      lineHeight: px0_100,
      width: px0_1000,
      height: px0_1000,
      margin: px0_1000,
      padding: px0_200,
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".fill-available": {
          width: "-webkit-fill-available",
          width: "-moz-available", // Firefox의 경우
          width: "stretch", // 표준 값
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
