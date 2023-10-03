import { ButtonStatusProps } from "./type";

export const style: {
  [key in ButtonStatusProps]: string;
} = {
  PRIMARY: "bg-PRIMARY_MAIN hover:bg-PRIMARY_DARK",
  SECONDARY: "bg-SECONDARY_MAIN hover:bg-SECONDARY_DARK ",
  ERROR: "bg-RED-40 hover:bg-RED-50 disabled:bg-RED-20",
  WARNING: "bg-YELLOW-40 hover:bg-YELLOW-50 disabled:bg-YELLOW-20",
  INFO: "bg-BLUE-40 hover:bg-BLUE-50 disabled:bg-BLUE-20",
  INHERIT_TEXT: "text-INHERIT",
  INHERIT_WHITE: "text-WHITE",
};
