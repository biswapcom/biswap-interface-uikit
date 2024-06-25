import { AnchorHTMLAttributes } from "react";

// components
import { TextProps } from "../Text";

export enum Scales {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

export enum Variants {
  LIGHT = "light",
  DARK = "dark",
}

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  variant?: Variants;
  scale?: Scales;
  disabled?: boolean;
}
