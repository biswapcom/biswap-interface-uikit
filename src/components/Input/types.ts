import { SpaceProps } from "styled-system";

export enum Scales {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum Variants {
  LIGHT = "light",
  LIGHT_WARNING = "lightWarning",
  LIGHT_ERROR = "lightError",
  DARK = "dark",
  DARK_WARNING = "darkWarning",
  DARK_ERROR = "darkError",
  TRANSPARENT = "transparent",
}

export interface InputProps extends SpaceProps {
  scale?: Scales;
  variant?: Variants;
  isWarning?: boolean;
  isError?: boolean;
  maxWidth?: string;
  minWidth?: string;
}

export interface InputGroupProps extends SpaceProps, InputProps {
  disabled?: boolean;
  startIcon?: IconProps;
  startImage?: ImageProps;
  startSizePx?: number;
  endIcon?: IconProps;
  children: JSX.Element;
  description?: string;
  baseAwsUrl?: string;
}

interface IconProps {
  iconName: string;
  color?: string;
}

interface ImageProps {
  imageSrc: string;
}
