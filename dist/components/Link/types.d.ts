import { AnchorHTMLAttributes } from "react";
import { TextProps } from "../Text";
export declare enum Scales {
    LG = "lg",
    MD = "md",
    SM = "sm"
}
export declare enum Variants {
    LIGHT = "light",
    DARK = "dark"
}
export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
    variant?: Variants;
    scale?: Scales;
    disabled?: boolean;
}
