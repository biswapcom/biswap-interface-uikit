import React, { FC } from "react";

// components
import * as IconModule from "../Svg";

// types
import { SvgProps } from "../Svg";

const Icons = IconModule as unknown as { [key: string]: FC<SvgProps> };

const IconComponent: FC<{ iconName: string } & SvgProps> = ({ iconName, ...props }) => {
  const IconElement = Icons[`${iconName}Icon`];

  return IconElement ? <IconElement {...props} /> : null;
};

export default IconComponent;
