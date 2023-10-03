import { style, styleVariants } from "@vanilla-extract/css";
import { PALETTE } from "../../styles/colors";

export const labelBase = style({
  fontSize: "0.75rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "0.75rem",
  letterSpacing: "0.00938rem",
});

export const labelVariants = styleVariants({
  error: {
    color: PALETTE.ERROR.MAIN,
  },
  success: {
    color: PALETTE.SUCCESS.MAIN,
  },
  primary: {
    color: PALETTE.TEXT.SECONDARY,
  },
});

export const inputBase = style({
  display: "flex",
  width: "13.75rem",
  flexDirection: "column",
  alignItems: "flex-start",
  outline: 0,
  padding: "0.34rem 0",
  border: "none",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.5rem",
  letterSpacing: "0.00938rem",
  ":disabled": {
    cursor: "not-allowed",
    color: PALETTE.TEXT.DISABLED,
    borderBottom: `0.0625rem solid ${PALETTE.INPUT.ENABLED_BORDER}`,
  },
});
export const inputVariants = styleVariants({
  primary: {
    borderBottom: `0.0625rem solid ${PALETTE.INPUT.ENABLED_BORDER}`,
    ":focus": {
      borderBottom: `0.125rem solid ${PALETTE.INPUT.HOVERED_BORDER}`,
    },
  },
  error: {
    borderBottom: `0.0625rem solid ${PALETTE.ERROR.MAIN}`,
    ":focus": {
      borderBottom: `0.125rem solid ${PALETTE.ERROR.MAIN}`,
    },
  },
  success: {
    borderBottom: `0.0625rem solid ${PALETTE.SUCCESS.MAIN}`,
    ":focus": {
      borderBottom: `0.125rem solid ${PALETTE.SUCCESS.MAIN}`,
    },
  },
});

export const cssObj = styleVariants({
  container: {
    position: "relative",
  },
  labelError: [
    labelBase,
    {
      color: PALETTE.ERROR.MAIN,
    },
  ],
  labelSuccess: [
    labelBase,
    {
      color: PALETTE.SUCCESS.MAIN,
    },
  ],
  labelDefault: [
    labelBase,
    {
      color: PALETTE.TEXT.SECONDARY,
    },
  ],
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
  childrenWrapper: {
    position: "absolute",
    right: "0.875rem",
    top: "50%",
    display: "flex",
    alignItems: "center",
    fontSize: "1.25rem",
  },
});

export const relativeContainer = style({
  position: "relative",
});

export const errorTextContainer = style({
  height: "0.75rem",
});

export const errorTextStyle = style({
  color: PALETTE.ERROR.MAIN,
  fontSize: "0.75rem",
});
