import { cls } from "@/utils";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { LinkButtonStyle } from "./style";
import { ComponentStatusType } from "../type";

interface SharedInternalLinkProps {
  text: string;
  link: string;
  type: "button" | "link";
  theme: ComponentStatusType;
  icon?: ReactNode;
}

export const SharedInternalLink: FunctionComponent<SharedInternalLinkProps> = (props) => (
  <Link
    href={props.link}
    className={
      props.type === "button"
        ? cls(
            "flex h-40 w-204 items-center justify-center rounded-8 font-bold leading-none",
            LinkButtonStyle[props.theme]
          )
        : cls("flex w-full px-16 py-12 text-14 font-bold leading-24 text-PRIMARY_MAIN hover:text-PRIMARY_DARK")
    }
  >
    {props.icon && <div className="mr-10 flex items-center justify-center text-18">{props.icon}</div>}
    <p>{props.text}</p>
  </Link>
);
