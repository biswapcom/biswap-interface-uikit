/// <reference types="react" />
import { type BodyTextProps } from "./types";
interface ScalesMap {
    [x: string]: {
        fontSize: string;
        lineHeight: string;
    };
}
export declare const bodyTextScaleMap: ScalesMap;
export declare const BodyText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, (import("../Text").TextProps & ({
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: string[];
    lineHeight: string[];
    as: string | number | true | Iterable<import("react").ReactNode> | JSX.Element | import("react").ComponentClass<{}, any> | import("react").FunctionComponent<{}>;
})) & BodyTextProps, "fontSize" | "lineHeight">;
export {};
