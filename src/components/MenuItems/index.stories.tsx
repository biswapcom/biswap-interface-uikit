import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

// components
import MenuItems from "./MenuItems";

// config
import MenuItemsMock from "./mock";

// types
import type { MenuItemsProps } from "./types";

export default {
  title: "Components/Menu/MenuItems",
  component: MenuItems,
};

export const Default: FC<MenuItemsProps> = ({ items = MenuItemsMock, activeItem = "Trade", ...props }) => {
  return (
    <BrowserRouter>
      <MenuItems items={items} activeItem={activeItem} {...props} />
    </BrowserRouter>
  );
};
