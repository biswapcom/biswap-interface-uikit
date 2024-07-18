import React, { FC } from "react";

// types
import { FlexProps } from "../Box";
import { BaseMenuProps } from "./types";

// components
import BaseMenu from "./BaseMenu";

// styles
import { SubMenuContainer } from "./styles";

const SubMenu: FC<BaseMenuProps & FlexProps> = ({ children, component, options, isOpen = false, ...props }) => {
  return (
    <BaseMenu component={component} options={options} isOpen={isOpen}>
      <SubMenuContainer {...props}>{children}</SubMenuContainer>
    </BaseMenu>
  );
};

export default SubMenu;
