import styled, { DefaultTheme } from "styled-components";

// types
import { Variants } from "./types";

// utils
import { getRgba } from "../../util";

// components
import { Box } from "../Box";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps): string => {
  return variant === Variants.DARK ? theme.colors.tooltip : getRgba(theme.colors.pastelBlue, theme, 0.08);
};

const StyledButtonMenu = styled(Box)<{ variant: Variants }>`
  display: inline-flex;
  padding: 4px;
  border-radius: 8px;
  background-color: ${getBackgroundColor};
`;

export default StyledButtonMenu;
