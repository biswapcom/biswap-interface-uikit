import { DefaultTheme } from "styled-components";
declare const getThemeValue: (path: string, fallback?: string) => (theme: DefaultTheme) => string;
export default getThemeValue;
