import { FunctionComponent, ReactNode } from "react";
import { cls } from "@/utils";

import { ButtonSizeProps, PickedButtonAttributes } from "./type";
import { style } from "./style";
import { ComponentStatusType } from "../type";

interface SharedButtonProps extends PickedButtonAttributes {
  size: ButtonSizeProps;
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  text: string;
  status: ComponentStatusType;
  isDisabled?: boolean;
  action: "submit" | (() => void);
}

export const SharedTextButton: FunctionComponent<SharedButtonProps> = (props) => {
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
      className={cls(width, height, style[props.status], "rounded-4 disabled:bg-DISABLED")}
      disabled={props.disabled}
      type={props.action === "submit" ? "submit" : "button"}
      onClick={onClickAction}
    >
      {props.icon && <div className="mr-10 flex items-center justify-center text-18">{props.icon}</div>}
      {props.text}
    </button>
  );
};
