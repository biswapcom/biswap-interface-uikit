import { ComponentType, ReactNode } from "react";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

export enum HeadTextTags {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  SPAN = "span",
  DIV = "div",
}

export enum BodyTextTags {
  P = "p",
  SPAN = "span",
  DIV = "div",
  A = "a",
}

export enum Scales {
  SIZE72 = "size72",
  SIZE64 = "size64",
  SIZE56 = "size56",
  SIZE40 = "size40",
  SIZE32 = "size32",
  SIZE24 = "size24",
  SIZE20 = "size20",
  SIZE18 = "size18",
  SIZE16 = "size16",
  SIZE14 = "size14",
  SIZE12 = "size12",
  SIZE10 = "size10",
}

export interface ScalesObj {
  xs?: Scales;
  sm?: Scales;
  md?: Scales;
  lg?: Scales;
  xl?: Scales;
  xll?: Scales;
  xxl?: Scales;
  wide?: Scales;
}

export interface HeadTextProps {
  as?: HeadTextTags;
  scale?: Scales | ScalesObj | undefined;
  nowrap?: boolean;
}

export interface BodyTextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  nowrap?: boolean;
  scale?: Scales | ScalesObj | undefined;
  children?: string | ReactNode | JSX.Element;
  as?: string | ReactNode | JSX.Element | ComponentType;
}
