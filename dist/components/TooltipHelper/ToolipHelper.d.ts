import { FC, ReactNode } from "react";
import { Placement } from "@popperjs/core";
import { TriggerType } from "../../hooks";
import { BoxProps } from "../Box";
interface IconProps {
    color?: string;
    size?: string;
}
interface Props extends BoxProps {
    text: string | ReactNode;
    placement?: Placement;
    trigger?: TriggerType;
    size?: string;
    Icon?: FC<IconProps>;
    children?: ReactNode;
    showTooltip?: boolean;
    isLight?: boolean;
}
declare const TooltipHelper: FC<Props>;
export default TooltipHelper;
