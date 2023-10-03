import { PALETTE } from "@/styles/colors";
import { styleVariants } from "@vanilla-extract/css";

export const cssObj = styleVariants({
  containerWrapper: {
    display: "flex",
    height: "49.625rem",
    width: "16.625rem",
    flexShrink: 0,
    flexDirection: "column",
    borderRight: `1px solid ${PALETTE.PRIMARY.MAIN}`,
  },
  accountContainer: {
    padding: "1rem",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: "1rem",
  },
});
