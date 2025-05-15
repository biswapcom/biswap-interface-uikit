import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare enum BadgeTypes {
    SUCCESS = "success",
    ERROR = "error",
    ACTIVE = "active",
    NOT_ACTIVE = "notActive",
    PRIMARY = "primary",
    WARNING = "warning",
    CORE = "core",
    LIGHT = "light",
    BOOST = "boost",
    WARNING_OPACITY = "warningOpacity",
    CORE_OPACITY = "badgeCoreOpacity"
}
export declare enum BadgeScales {
    LG = "lg",
    MD = "md",
    SM = "sm"
}
export interface BadgeProps extends SpaceProps {
    badgeType: BadgeTypes;
    scale?: BadgeScales;
    fontWeight?: string;
    isIcon?: string;
    children: ReactNode;
}
