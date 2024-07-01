import React from "react";
import styled from "styled-components";

// components
import { Box } from "../Box";

const Divider = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.white};
  opacity: 0.16;
`;

const MenuItemDivider = () => <Divider width={0} height={20} />;

export default MenuItemDivider;
