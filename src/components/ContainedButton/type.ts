import { ButtonHTMLAttributes } from "react";

type WidthSizeType = "small" | "medium" | "large" | "auto";

type HeightSizeType = "medium" | "large";

export type ButtonSizeProps = [height: HeightSizeType, width: WidthSizeType];

export type PickedButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">;
