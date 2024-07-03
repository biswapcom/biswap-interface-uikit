import { SpaceProps } from "styled-system";
export declare enum DropdownPosition {
    TOP = "top",
    BOTTOM = "bottom"
}
export interface DropdownPositionProps {
    position?: DropdownPosition;
}
export declare enum DropdownScales {
    LG = "lg",
    MD = "md",
    SM = "sm"
}
export declare enum DropdownVariants {
    DARK = "dark",
    LIGHT = "light"
}
export interface DropdownProps extends DropdownPositionProps, SpaceProps {
    maxWidth?: string;
    minWidth?: string;
    withIcon?: string;
    variant?: DropdownVariants;
    scale: DropdownScales;
    disabled?: boolean;
    options: Array<OptionProps>;
    onChange?: (option: OptionProps) => void;
    selectedItem?: OptionProps;
}
export interface OptionProps {
    label: string;
    value: string | number;
    icon?: {
        isAws?: boolean;
        name: string;
        color?: string;
    };
}
