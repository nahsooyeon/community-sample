import { FunctionComponent, ReactNode } from "react";
import { FieldValues, FormState, UseFormRegisterReturn } from "react-hook-form";
import { PickedInputAttributes } from "./type";
import { SizeType } from "@/styles/type";
import {
  cssObj,
  errorTextContainer,
  relativeContainer,
  errorTextStyle,
  labelBase,
  labelVariants,
  inputBase,
  inputVariants,
} from "./style.css";

interface SharedInputProps extends PickedInputAttributes {
  registerObj: UseFormRegisterReturn;
  size: SizeType;
  formState: FormState<FieldValues>;
  label?: string;
  children?: ReactNode;
}

export const SharedInput: FunctionComponent<SharedInputProps> = (props) => {
  const errorMessage =
    props.formState.errors[props.registerObj.name] &&
    (props.formState.errors[props.registerObj.name]?.message as string);

  const isDirty = props.formState.dirtyFields[props.registerObj.name];
  const status = errorMessage ? "error" : isDirty && !errorMessage ? "success" : "primary";

  return (
    <div className={relativeContainer}>
      {props.label && <p className={`${labelBase} ${labelVariants[status]}`}>{props.label}</p>}
      <div className={relativeContainer}>
        <input
          className={`${inputBase} ${inputVariants[status]}`}
          type={props.type}
          placeholder={props.placeholder}
          {...props.registerObj}
        />
        {props.children && <div className={cssObj.childrenWrapper}>{props.children}</div>}
      </div>
      <div className={errorTextContainer}>{errorMessage && <p className={errorTextStyle}>{errorMessage}</p>}</div>
    </div>
  );
};
