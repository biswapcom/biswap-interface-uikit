import { SpaceProps } from "styled-system";

export type RadioTheme = {
  handleBackground: string;
};

export enum Scales {
  SM = "sm",
  MD = "md",
}

export enum Variants {
  DARK = "dark",
  LIGHT = "light",
}

export interface RadioProps extends SpaceProps {
  scale?: Scales;
  labelOrientation?: string;
  label?: string;
  radioName?: string;
  onChange: any;
  colorVariant?: Variants;
  checked?: boolean;
}
