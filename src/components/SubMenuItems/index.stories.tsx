import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

// components
import SubMenuItems from "./SubMenuItems";

// mock
import SubMenuItemsMock from "./mock";

// types
import { SubMenuItemsProps } from "./types";

export default {
  title: "Components/Menu/SubMenuItems",
  component: SubMenuItems,
  args: {
    items: SubMenuItemsMock,
    activeItem: "/swap",
  },
};

export const Default: FC<SubMenuItemsProps> = (args) => {
  return (
    <BrowserRouter>
      <SubMenuItems {...args} />
    </BrowserRouter>
  );
};
