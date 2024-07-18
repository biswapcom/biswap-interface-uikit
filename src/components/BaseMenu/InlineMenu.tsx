import React, { FC } from "react";

// components
import BaseMenu from "./BaseMenu";

// styles
import { InlineMenuContainer } from "./styles";

// types
import { BoxProps } from "../Box";
import { BaseMenuProps } from "./types";

const InlineMenu: FC<BaseMenuProps & BoxProps> = ({ children, component, isOpen = false, ...props }) => {
  return (
    <BaseMenu options={{ placement: "bottom" }} component={component} isOpen={isOpen}>
      <InlineMenuContainer {...props}>{children}</InlineMenuContainer>
    </BaseMenu>
  );
};

export default InlineMenu;
