import type { BoxProps } from "../Box";
import { ButtonScales, ButtonVariants } from "../Button";
export interface PercentSliderProps extends BoxProps {
    name?: string;
    min?: number;
    max?: number;
    value: number;
    onValueChanged: (newValue: number) => void;
    disabled?: boolean;
    enableShortcuts?: boolean;
    shortcutCheckpoints?: number[];
    shortcutScale?: ButtonScales;
    shortcutVariant?: ButtonVariants;
    withTooltip?: boolean;
    bannerPosition?: "top" | "bottom";
    darkMode?: boolean;
    numberOfPoints?: number;
}
