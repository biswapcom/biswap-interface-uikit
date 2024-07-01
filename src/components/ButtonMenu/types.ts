import { Dispatch, ElementType, ReactElement, ReactNode, RefObject, SetStateAction } from "react";
import { LayoutProps, SpaceProps } from "styled-system";

// theme
import { MarkerType } from "../../theme";

export enum Scales {
  XL = "xl",
  LG = "lg",
  MD = "md",
  SM = "sm",
  XS = "xs",
}

export enum Variants {
  DARK = "dark",
  LIGHT = "light",
  WARNING_LIGHT = "warningLight",
  WARNING_DARK = "warningDark",
}

export type ColorKey = "pastelBlue" | "gray900";
export type HoverKey = "white" | "dark800";

export type IPropertiesType = {
  index: number;
  markerColor?: keyof MarkerType;
  tooltipText?: string;
  dontShowTooltip?: boolean;
};

export interface ButtonMenuItemProps extends BaseButtonMenuItemProps {
  isActive?: boolean;
  setWidth?: Dispatch<SetStateAction<number[]>>;
  itemIndex?: number;
  activeButtonIndex?: number;
  blockOffset?: number;
  elementRef?: RefObject<HTMLButtonElement>;
  onItemClick?: (index: number) => void;
  onClick?: () => void;
  properties?: IPropertiesType;
}

export interface BaseButtonMenuItemProps extends LayoutProps, SpaceProps {
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
  isActive?: boolean;
}

export interface ButtonMenuProps extends SpaceProps {
  variant?: Variants;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scales;
  disabled?: boolean;
  children: ReactElement[];
  fullWidth?: boolean;
  flatBottom?: boolean;
  flatTop?: boolean;
  withoutBackground?: boolean;
  scrollX?: boolean;
  equalElementWidth?: boolean;
  withoutAnimation?: boolean;
  itemsProperties?: IPropertiesType[];
}
