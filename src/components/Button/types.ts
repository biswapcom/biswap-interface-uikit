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
};

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
};

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
}

export type ButtonProps<P extends ElementType = "button"> =
  PolymorphicComponentProps<P, BaseButtonProps>;
