import { FunctionComponent, ReactNode } from "react";
import { FieldValues, FormState, UseFormRegisterReturn } from "react-hook-form";
import { InputBoxSizeType, PickedInputAttributes } from "./type";
import { cls } from "@/utils";

interface SharedInputProps extends PickedInputAttributes {
  registerObj?: UseFormRegisterReturn;
  size: InputBoxSizeType;
  formState?: FormState<FieldValues>;
  label?: string;
  children?: ReactNode;
}

export const SharedInput: FunctionComponent<SharedInputProps> = (props) => {
  const errorMessage = props.registerObj
    ? props.formState?.errors[props.registerObj.name] &&
      (props.formState?.errors[props.registerObj.name]?.message as string)
    : null;

  const width = {
    small: "w-120",
    medium: "w-240",
    large: "w-320",
  }[props.size[1]];

  const height = {
    small: "h-36",
    medium: "h-40",
    large: "h-46",
  }[props.size[0]];

  return (
    <div className="relative">
      {props.label && <p className={cls("text-14", errorMessage ? "text-ERROR_MAIN" : "")}>{props.label}</p>}
      <div className="relative">
        <input
          className={cls(
            width,
            height,
            errorMessage ? "border-ERROR_MAIN" : "",
            "rounded-8 border px-12 py-14 focus:border-PRIMARY_MAIN"
          )}
          type={props.type}
          placeholder={props.placeholder}
          {...props.registerObj}
        />
        {props.children && (
          <div className="absolute right-14 top-[50%] flex items-center text-20">{props.children}</div>
        )}
      </div>
      <div className="h-12">{errorMessage && <p className="text-12 text-ERROR_MAIN">{errorMessage}</p>}</div>
    </div>
  );
};
