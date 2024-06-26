import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export enum BadgeButtonTypes {
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

export interface BadgeButtonProps extends SpaceProps {
  fontSize?: string;
  fontWeight?: string;
  isIcon?: string;
  children: ReactNode;
  badgeType: BadgeButtonTypes;
  onClick?: () => void;
  isActive?: boolean;
}
