import { SpaceProps } from "styled-system";
export declare enum Positions {
    TOP = "top",
    BOTTOM = "bottom"
}
export declare enum Variants {
    DARK = "dark",
    LIGHT = "light",
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare enum Scales {
    LG = "lg",
    MD = "md",
    SM = "sm"
}
export interface PositionProps {
    position?: Positions;
}
export interface DropdownButtonProps extends PositionProps, SpaceProps {
    maxWidth?: string;
    minWidth?: string;
    withIcon?: string;
    variant?: Variants;
    scale?: Scales;
    disabled?: boolean;
    options: Array<OptionProps>;
    onChange?: (option: OptionProps) => void;
    hideLabel?: boolean;
    dropDownWidth?: string;
    selectedItem?: OptionProps;
}
export interface OptionProps {
    label: string;
    value: number | string;
    icon?: {
        isAws?: boolean;
        name: string;
        color?: string;
    };
}
