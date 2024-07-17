// theme
import { shadows } from "../../theme/base";
import { darkColors, lightColors } from "../../theme";

// types
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: darkColors.white,
  text: darkColors.gray900,
  boxShadow: shadows.tooltip,
};

export const dark: TooltipTheme = {
  background: lightColors.white,
  text: lightColors.gray900,
  boxShadow: shadows.tooltip,
};
