import { LinkStatusProps } from "./type";

export const LinkButtonStyle: {
  [key in LinkStatusProps]: string;
} = {
  PRIMARY: "bg-PRIMARY_MAIN hover:bg-PRIMARY_DARK disabled:DISABLED text-WHITE",
  SECONDARY: "bg-SECONDARY_MAIN hover:bg-SECONDARY_DARK disabled:DISABLED text-WHITE",
};
