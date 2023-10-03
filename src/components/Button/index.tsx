import { FunctionComponent, ReactNode } from "react";
import { PickedButtonAttributes } from "./type";
import { SizeType, StatusType } from "@/styles/type";
import { cssObj } from "@/components/Button/style.css";
import { SizeVariant } from "@/styles/size.css";

interface SharedButtonProps extends PickedButtonAttributes {
  size: SizeType;
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  text: string;
  theme: StatusType;
  action: "submit" | (() => void);
}

export const SharedButton: FunctionComponent<SharedButtonProps> = (props) => {
  const onClickAction =
    props.action === "submit"
      ? undefined
      : () => {
          if (props.action !== "submit") props.action();
        };

  return (
    <button
      className={`${cssObj[props.theme]} ${SizeVariant[props.size]}`}
      disabled={props.disabled}
      type={props.action === "submit" ? "submit" : "button"}
      onClick={onClickAction}
    >
      {props.icon && <div className="">{props.icon}</div>}
      {props.text}
    </button>
  );
};
