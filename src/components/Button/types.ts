import { ElementType, ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";

// types
import type { PolymorphicComponentProps } from "../../util";

export enum Scales {
  XL = "xl",
  LG = "lg",
  MD = "md",
  SM = "sm",
  XS = "xs",
  //redesing
  XLR = "xlr",
  LGR = "lgr",
  MDR = "mdr",
  SMR = "smr",
  SSMR = "ssmr",
  XSR = "xsr",
}

export enum Variants {
  PRIMARY = "primary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
  BOOST = "boost",
  LIGHT_OUT = "lightOut",
  LIGHT = "light",
  TERTIARY = "tertiary",
  TERTIARY_OUT = "tertiaryOut",
  TEXT = "text",
  TEXT_DARK = "textDark",
  LIGHT_BLUE = "lightBlue",
  //redesign
  BLUE = "blue",
  VIOLET = "violet",
  GREEN = "green",
  RED = "red",
  YELLOW = "yellow",
  TRANSPARENT_BLUE = "transparentBlue",
  TEXT_OUTLINE_BLUE = "textOutlineBlue",
  TEXT_OUTLINE_WHITE = "textOutlineWhite",
  TEXT_BLUE = "textBlue",
  TEXT_PASTEL_BLUE = "textPastelBlue",
  TEXT_WHITE = "textWhite",
}

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: "a" | "button" | ElementType;
  external?: boolean;
  isLoading?: boolean;
  loadingTitle?: string;
  scale?: Scales;
  variant?: Variants;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  flatBottom?: boolean;
  flatTop?: boolean;
  flat?: boolean;
  addBubble?: boolean;
  bubbleColor?: string;
  round?: boolean;
}

export type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
