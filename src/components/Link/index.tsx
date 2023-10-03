import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { SizeType, StatusType } from "@/styles/type";
import { SizeVariant } from "@/styles/size.css";
import { cssObj } from "./style.css";

interface SharedInternalLinkProps {
  text: string;
  link: string;
  type: "button" | "link";
  theme: StatusType;
  icon?: ReactNode;
  size: SizeType;
}

export const SharedInternalLink: FunctionComponent<SharedInternalLinkProps> = (props) => (
  <Link className={`${cssObj.common} ${SizeVariant[props.size]} ${cssObj[props.theme]}}`} href={props.link}>
    {props.icon && <div className={`${cssObj[props.theme]} ${cssObj.iconWrapper}`}>{props.icon}</div>}
    <p className={cssObj[props.theme]}>{props.text}</p>
  </Link>
);
