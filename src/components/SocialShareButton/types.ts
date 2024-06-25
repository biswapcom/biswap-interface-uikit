import { AnchorHTMLAttributes, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

import { Scales } from "../Button/types";
import { BaseButtonProps } from "../Button";

export const socials = {
  TWITTER: "twitter",
  TELEGRAM: "telegram",
} as const;

export type Social = (typeof socials)[keyof typeof socials];

export interface SocialShareButtonTypes extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  social: Social;
  link?: string;
  message?: string;
  scale?: Scales;
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
