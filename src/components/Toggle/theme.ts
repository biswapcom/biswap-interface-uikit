import { darkColors, lightColors } from "../../theme";

export type ToggleTheme = {
  handleBackground: string;
};

export const light: ToggleTheme = {
  handleBackground: lightColors.white,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.white,
};
