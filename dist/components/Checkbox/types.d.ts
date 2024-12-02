export declare enum CheckboxScales {
    SM = "sm",
    MD = "md"
}
export interface CheckboxProps {
    scale?: CheckboxScales;
    labelOrientation?: string;
    label?: string;
    colorVariant?: string;
    id?: string;
    defaultChecked?: boolean;
    onChange?: () => void;
    value?: boolean;
    disabled?: boolean;
    inputMargin?: string;
    checkboxPosition?: string;
}
