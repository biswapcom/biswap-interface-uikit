import { AnchorHTMLAttributes, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

import { type BaseButtonProps, ButtonScales } from "../Button";

export enum Socials {
  TWITTER = "twitter",
  TELEGRAM = "telegram",
}

export interface SocialShareButtonTypes extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  social: Socials;
  link?: string;
  message?: string;
  scale?: ButtonScales;
  name?: string;
  target?: string;
  width?: string;
  withGift?: boolean;
}

export enum SocialsList {
  "twitter",
  "telegram",
}

export type LinkFunctionProps = { message?: string; link?: string };

export interface SocialLinksProps {
  [key: string]: (props: LinkFunctionProps) => string;
}

export interface SocialStylesProps {
  theme: DefaultTheme;
  size?: string;
  color?: string;
  disabled?: boolean;
}

export interface SocialStylesReturn {
  [key: string]: {
    icon: ReactNode;
    backgroundColor: string;
  };
}
