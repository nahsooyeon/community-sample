import { InputHTMLAttributes } from "react";

type WidthSizeType = "small" | "medium" | "large";

type HeightSizeType = "medium" | "large";

export type InputBoxSizeType = [height: HeightSizeType, width: WidthSizeType];

export type PickedInputAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "placeholder" | "disabled" | "type" | "aria-label" | "defaultValue"
>;
