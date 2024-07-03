import { AlertTheme } from "../components/Alert/types";
import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from "./types";
export interface BiswapTheme {
    siteWidth: number;
    isDark: boolean;
    colors: Colors;
    alert: AlertTheme;
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
