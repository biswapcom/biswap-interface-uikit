import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export enum BadgeTypes {
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
}

export enum BadgeScales {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

export interface BadgeProps extends SpaceProps {
  badgeType: BadgeTypes;
  scale?: BadgeScales;
  // fontSize?: string;
  fontWeight?: string;
  isIcon?: string;
  children: ReactNode;
}
