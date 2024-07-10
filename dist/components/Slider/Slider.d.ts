import { FC } from "react";
import type { BoxProps } from "../Box";
interface SliderProps extends BoxProps {
    value: number;
    onValueChanged: (newValue: number) => void;
    valueLabel?: string;
    checkPoints?: Checkpoint[];
    isRobiBoost?: boolean;
    bannerPosition?: "top" | "bottom";
    darkMode?: boolean;
}
interface Checkpoint {
    value: number;
    RB: string;
}
declare const Slider: FC<SliderProps>;
export default Slider;
