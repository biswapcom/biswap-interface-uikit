import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

// components
import { Flex } from "../Box";
import MenuItem from "./MenuItem";

// types
import type { MenuItemProps } from "./types";

export default {
  title: "Components/Menu/MenuItem",
  component: MenuItem,
};

export const Default: FC<MenuItemProps> = ({
  isActive = false,
  href = "/",
  children = "Trade",
  variant = "default",
  ...props
}) => {
  return (
    <BrowserRouter>
      <Flex>
        <MenuItem isActive={isActive} href={href} variant={variant} {...props}>
          {children}
        </MenuItem>
      </Flex>
    </BrowserRouter>
  );
};
