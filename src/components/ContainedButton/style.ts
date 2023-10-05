import { ComponentStatusType } from "../type";

export const style: {
  [key in ComponentStatusType]: string;
} = {
  PRIMARY: "bg-PRIMARY_MAIN hover:bg-PRIMARY_DARK ",
  SECONDARY: "bg-SECONDARY_MAIN hover:bg-SECONDARY_DARK",
  ERROR: "bg-ERROR_MAIN hover:bg-ERROR_DARK",
  WARNING: "bg-WARNING_MAIN hover:bg-WARNING_DARK",
  INFO: "bg-INFO_MAIN hover:bg-INFO_DARK",
  INHERIT_TEXT: "text-INHERIT",
  INHERIT_WHITE: "text-WHITE",
};
