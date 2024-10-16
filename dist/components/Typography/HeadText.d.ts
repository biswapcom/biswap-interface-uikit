import { type HeadTextProps, HeadTextTags } from "./types";
export declare const headTextScaleMap: {
    size40: {
        fontSize: string;
        lineHeight: string;
    };
    size32: {
        fontSize: string;
        lineHeight: string;
    };
    size24: {
        fontSize: string;
        lineHeight: string;
    };
    size20: {
        fontSize: string;
        lineHeight: string;
    };
    size16: {
        fontSize: string;
        lineHeight: string;
    };
    size14: {
        fontSize: string;
        lineHeight: string;
    };
    size12: {
        fontSize: string;
        lineHeight: string;
    };
    size10: {
        fontSize: string;
        lineHeight: string;
    };
};
export declare const HeadText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, (import("../Text").TextProps & ({
    fontSize: string;
    lineHeight: string;
} | {
    fontSize: any[];
    lineHeight: any[];
    as: HeadTextTags;
})) & HeadTextProps, "fontSize" | "lineHeight">;
