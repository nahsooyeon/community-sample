import { ComponentStatusType } from "../type";

export const LinkButtonStyle: {
  [key in ComponentStatusType]: string;
} = {
  PRIMARY: "bg-PRIMARY_MAIN hover:bg-PRIMARY_DARK disabled:DISABLED text-WHITE",
  SECONDARY: "bg-SECONDARY_MAIN hover:bg-SECONDARY_DARK disabled:DISABLED text-WHITE",
  ERROR: "bg-ERROR_MAIN hover:bg-ERROR_DARK disabled:DISABLED text-WHITE",
  WARNING: "bg-WARNING_MAIN hover:bg-WARNING_DARK disabled:DISABLED text-WHITE",
  INFO: "bg-INFO_MAIN hover:bg-INFO_DARK disabled:DISABLED text-WHITE",
  INHERIT_TEXT: "bg-transparent hover:bg-gray-200 disabled:DISABLED text-gray-700",
  INHERIT_WHITE: "bg-transparent hover:bg-gray-200 disabled:DISABLED text-gray-700",
};
