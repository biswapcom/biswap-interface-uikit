import React, { FC } from "react";

// components
import Link from "./Link";
import ArrowUpForward from "../Svg/Icons/Arrows/ArrowUpForward";

// types
import { LinkProps } from "./types";

const LinkExternal: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <ArrowUpForward color={props.color ? props.color : "primary"} width="16px" ml="4px" />
    </Link>
  );
};

export default LinkExternal;
