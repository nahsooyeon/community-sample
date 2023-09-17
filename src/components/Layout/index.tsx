import { FunctionComponent, ReactNode } from "react";

interface SharedPageLayoutProps {
  children: ReactNode;
}

export const SharedPageLayout: FunctionComponent<SharedPageLayoutProps> = (props) => (
  <div className="flex justify-center">
    <div>{props.children}</div>
  </div>
);
