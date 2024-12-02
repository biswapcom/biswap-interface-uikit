import { LayoutProps, SpaceProps } from "styled-system";
export declare enum Animations {
    WAVES = "waves",
    PULSE = "pulse"
}
export declare enum Variants {
    RECT = "rect",
    CIRCLE = "circle",
    SM = "sm",
    MD = "md",
    LG = "lg"
}
export interface SkeletonProps extends SpaceProps, LayoutProps {
    animation?: Animations;
    variant?: Variants;
}
