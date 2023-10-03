import { style, styleVariants } from "@vanilla-extract/css";
import { PALETTE } from "../../styles/colors";

const base = style({
  borderRadius: "0.25rem",
  display: "flex",
  alignItems: "center",
  ":disabled": {
    background: "#0000001F",
    color: PALETTE.TEXT.DISABLED,
    cursor: "not-allowed",
  },
});
export const cssObj = styleVariants({
  common: [base],
  primary: {
    color: PALETTE.PRIMARY.MAIN,
    ":hover": { color: PALETTE.PRIMARY.DARK },
  },
  secondary: {
    color: PALETTE.SECONDARY.MAIN,
    ":hover": { color: PALETTE.SECONDARY.DARK },
  },

  error: {
    color: PALETTE.ERROR.MAIN,
    ":hover": { color: PALETTE.ERROR.DARK },
  },
  warning: {
    color: PALETTE.WARNING.MAIN,
    ":hover": { color: PALETTE.WARNING.DARK },
  },
  info: {
    color: PALETTE.INFO.MAIN,
    ":hover": { color: PALETTE.INFO.DARK },
  },
  success: {
    color: PALETTE.SUCCESS.MAIN,
    ":hover": { color: PALETTE.SUCCESS.DARK },
  },
  iconWrapper: {
    marginRight: "0.25rem",
  },
});
