import { Dispatch, ElementType, SetStateAction, ReactElement, ReactNode } from "react";
import { SpaceProps } from "styled-system";

// type
import { type PolymorphicComponentProps } from "../../util";

export enum Scales {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

export enum Variants {
  DARK = "dark",
  LIGHT = "light",
}

export interface TabBarProps extends SpaceProps {
  children: ReactElement[];
  variant?: Variants;
  scale?: Scales;
  disabled?: boolean;
  fullWidth?: boolean;
  menuIcons?: Array<string>;
  scrollX?: boolean;
  equalElementWidth?: boolean;
  withoutAnimation?: boolean;
}

export interface TabBarItemProps {
  variant?: string;
  iconName?: string;
  iconColor?: string;
  isActive?: boolean;
  setWidth?: Dispatch<SetStateAction<any>>;
  itemIndex?: number;
  activeButtonIndex?: number;
  blockOffset?: number;
  onItemClick?: (index: number) => void;
  onClick?: () => void;
  as?: "a" | "button" | ElementType;
  scale?: Scales;
  children?: ReactNode;
}
