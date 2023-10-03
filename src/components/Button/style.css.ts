import { style, styleVariants } from "@vanilla-extract/css";
import { PALETTE } from "../../styles/colors";

const base = style({
  borderRadius: "0.25rem",
  ":disabled": {
    background: "#0000001F",
    color: "#00000061",
    cursor: "not-allowed",
  },
});

export const cssObj = styleVariants({
  primary: [
    base,
    {
      backgroundColor: PALETTE.PRIMARY.MAIN,
      color: PALETTE.CONTRAST,
      ":hover": { backgroundColor: PALETTE.PRIMARY.DARK },
    },
  ],
  secondary: [
    base,
    {
      background: PALETTE.SECONDARY.MAIN,
      color: PALETTE.CONTRAST,
      ":hover": { backgroundColor: PALETTE.SECONDARY.DARK },
    },
  ],
  error: [
    base,
    { backgroundColor: PALETTE.ERROR.MAIN, color: PALETTE.CONTRAST, ":hover": { backgroundColor: PALETTE.ERROR.DARK } },
  ],
  warning: [
    base,
    {
      backgroundColor: PALETTE.WARNING.MAIN,
      color: PALETTE.CONTRAST,
      ":hover": { backgroundColor: PALETTE.WARNING.DARK },
    },
  ],
  info: [
    base,
    { backgroundColor: PALETTE.INFO.MAIN, color: PALETTE.CONTRAST, ":hover": { backgroundColor: PALETTE.INFO.DARK } },
  ],
  success: [
    base,
    {
      backgroundColor: PALETTE.SUCCESS.MAIN,
      color: PALETTE.CONTRAST,
      ":hover": { backgroundColor: PALETTE.SUCCESS.DARK },
    },
  ],
});
