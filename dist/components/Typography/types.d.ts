import { ReactNode } from "react";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";
export declare enum HeadTextTags {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
    P = "p",
    SPAN = "span",
    DIV = "div"
}
export declare enum BodyTextTags {
    P = "p",
    SPAN = "span",
    DIV = "div",
    A = "a"
}
export declare enum Scales {
    SIZE40 = "size40",
    SIZE32 = "size32",
    SIZE24 = "size24",
    SIZE20 = "size20",
    SIZE16 = "size16",
    SIZE14 = "size14",
    SIZE12 = "size12",
    SIZE10 = "size10"
}
export interface ScalesObj {
    xs?: Scales;
    sm?: Scales;
    md?: Scales;
    lg?: Scales;
    xl?: Scales;
    xll?: Scales;
    xxl?: Scales;
}
export interface HeadTextProps {
    as?: HeadTextTags;
    scale?: Scales;
    nowrap?: boolean;
}
export interface BodyTextProps extends SpaceProps, TypographyProps, LayoutProps {
    color?: string;
    nowrap?: boolean;
    scale?: Scales | ScalesObj | undefined;
    children?: string | ReactNode | JSX.Element;
    as?: BodyTextTags;
}
