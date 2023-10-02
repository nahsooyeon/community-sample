import { cls } from "@/utils";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { LinkStyle } from "./style";

interface SharedInternalLinkProps {
  text: string;
  link: string;
  type: "button" | "link";
  theme: "PINK" | "GREY";
  icon?: ReactNode;
}

export const SharedInternalLink: FunctionComponent<SharedInternalLinkProps> = (props) => (
  <Link
    href={props.link}
    className={
      props.type === "button"
        ? cls(
            "flex h-40 w-204 items-center justify-center rounded-8 font-bold leading-none",
            LinkStyle[props.type][props.theme]
          )
        : "flex w-full px-16 py-12 text-14 font-bold leading-24 text-PINK_40 hover:text-PINK_70"
    }
  >
    {props.icon && <div className="mr-10 flex items-center justify-center text-18">{props.icon}</div>}
    <p>{props.text}</p>
  </Link>
);
