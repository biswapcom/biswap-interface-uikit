import { AlertTheme } from "../components/Alert/types";
import { RadioTheme } from "../components/Radio/types";
import { ToggleTheme } from "../components/Toggle/theme";
import { TooltipTheme } from "../components/Tooltip/types";
import { NavThemeType } from "../widgets/Menu/theme";
import { ModalTheme } from "../widgets/Modal/types";
import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from "./types";
export interface BiswapTheme {
    siteWidth: number;
    isDark: boolean;
    colors: Colors;
    alert: AlertTheme;
    nav: NavThemeType;
    modal: ModalTheme;
    radio: RadioTheme;
    toggle: ToggleTheme;
    tooltip: TooltipTheme;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    shadows: Shadows;
    radii: Radii;
    zIndices: ZIndices;
}
export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";
export { default as ResetCSS } from "./resetCSS";
export * from "./types";
