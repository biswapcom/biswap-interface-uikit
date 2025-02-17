import { SpaceProps } from "styled-system";
export type RadioTheme = {
    handleBackground: string;
};
export declare enum Scales {
    SM = "sm",
    MD = "md"
}
export declare enum Variants {
    DARK = "dark",
    LIGHT = "light"
}
export interface RadioProps extends SpaceProps {
    scale?: Scales;
    labelOrientation?: string;
    label?: string;
    radioName?: string;
    onChange: any;
    colorVariant?: Variants;
    checked?: boolean;
}
