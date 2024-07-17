import { InputHTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

// theme
import { Colors } from "../../theme";

// types
import { type ScalesObj, Scales as BodyTextScales } from "../Typography";

export enum Scales {
  MD = "md",
}

export enum Variants {
  LIGHT = "light",
  DARK = "dark",
}

export enum ScaleKeys {
  HANDLE_HEIGHT = "handleHeight",
  HANDLE_WIDTH = "handleWidth",
  HANDLE_LEFT = "handleLeft",
  HANDLE_TOP = "handleTop",
  CHECKED_LEFT = "checkedLeft",
  TOGGLE_HEIGHT = "toggleHeight",
  TOGGLE_WIDTH = "toggleWidth",
}

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement>, SpaceProps {
  scale?: Scales;
  checked?: boolean;
  checkedColor?: keyof Colors;
  defaultColor?: keyof Colors;
  disabled?: boolean;
  label?: string;
  labelOrientation?: string;
  labelSize?: BodyTextScales | ScalesObj | undefined;
  gridArea?: string;
  variant?: Variants;
  spaceBetween?: boolean;
}

export interface HandleProps {
  scale: Scales;
  disabled?: boolean;
}

export interface InputProps {
  scale: Scales;
}

export interface StyleToggleProps {
  $checked: boolean;
  $checkedColor: keyof Colors;
  $defaultColor: keyof Colors;
  scale: Scales;
  disabled?: boolean;
}
