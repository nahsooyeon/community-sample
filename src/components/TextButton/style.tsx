import { ButtonStatusProps } from "./type";

export const style: {
  [key in ButtonStatusProps]: string;
} = {
  PRIMARY: "text-PRIMARY_MAIN hover:text-PRIMARY_DARK border border-PRIMARY_OUTLINED hover:bg-PRIMARY_HOVERED",
  SECONDARY: "text-SECONDARY_MAIN hover:bg-SECONDARY_DARK",
  ERROR: "text-ERROR_MAIN hover:bg-RED-50 disabled:bg-RED-20",
  WARNING: "text-WARNING_MAIN hover:bg-YELLOW-50 disabled:bg-YELLOW-20",
  INFO: "text-INFO hover:bg-BLUE-50 disabled:bg-BLUE-20",
  INHERIT_TEXT: "text-INHERIT",
  INHERIT_WHITE: "text-WHITE",
};
