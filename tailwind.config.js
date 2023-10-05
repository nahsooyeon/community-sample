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
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      colors: {
        BLACK: "#000000",
        WHITE: "#FFFFFF",
        PRIMARY_MAIN: "#2196F3",
        PRIMARY_DARK: "#1E88E5",
        PRIMARY_LIGHT: "#42A5F5",
        PRIAMRY_HOVER: "#2196F314",
        PRIMARY_FOCUS: "#2196F31F",
        PRIMARY_FOCUSVISIBLE: "#2196F34D",
        DISABLED: "#0000001F",
        PRIMARY_SELECTED: "#2196F314",
        PRIMARY_OUTLINED: "#2196F380",
        SECONDARY_MAIN: "#9C27B0",
        SECONDARY_DARK: "#7B1FA2",
        SECONDARY_LIGHT: "#BA68C8",
        ERROR_MAIN: "#D32F2F",
        ERROR_DARK: "#C62828",
        ERROR_LIGHT: "#EF5350",
        WARNING_MAIN: "#ED6C02",
        WARNING_DARK: "#E65100",
        WARNING_LIGHT: "#FF9800",

        INFO_MAIN: "#0288D1",
        INFO_DARK: "#01579B",
        INFO_LIGHT: "#03A9F4",
        INHERIT_MAIN: "#E0E0E0",
        INHERIT_LIGHT: "#F5F5F5",

        SUCCESS_MAIN: "#2E7D32",
        SUCCESS_DARK: "#1B5E20",
        SUCCESS_LIGHT: "#4CAF50",
      },
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
