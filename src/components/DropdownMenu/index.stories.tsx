import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

// components
import { Box } from "../Box";
import DropdownMenu from "./DropdownMenu";

// config
import ItemsMock from "./mock";

export default {
  title: "Components/Menu/DropdownMenu",
  component: DropdownMenu,
};

export const Default: FC = () => {
  return (
    <BrowserRouter>
      <Box width="300px">
        <DropdownMenu items={ItemsMock} activeItem="/swap">
          Wallet
        </DropdownMenu>
      </Box>
    </BrowserRouter>
  );
};
