import { FunctionComponent, ReactNode } from "react";
import { cls } from "@/utils";

import { ButtonSizeProps, PickedButtonAttributes } from "./type";
import { ButtonStyle } from "./style";

interface SharedButtonProps extends PickedButtonAttributes {
  size: ButtonSizeProps;
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  text: string;
  theme: "PINK" | "GREY";
  action: "submit" | (() => void);
}

export const SharedButton: FunctionComponent<SharedButtonProps> = (props) => {
  const onClickAction =
    props.action === "submit"
      ? undefined
      : () => {
          if (props.action !== "submit") props.action();
        };
  const width = {
    small: "w-78",
    medium: "w-110",
    large: "w-125",
    auto: "fill-available",
  }[props.size[1]];

  const height = {
    small: "h-20",
    medium: "h-40",
    large: "h-44",
  }[props.size[0]];

  return (
    <button
      className={cls(width, height, "rounded-8 px-14 py-8 text-WHITE", ButtonStyle[props.theme])}
      disabled={props.disabled}
      type={props.action === "submit" ? "submit" : "button"}
      onClick={onClickAction}
    >
      {props.icon && <div className="mr-10 flex items-center justify-center text-18">{props.icon}</div>}
      {props.text}
    </button>
  );
};
