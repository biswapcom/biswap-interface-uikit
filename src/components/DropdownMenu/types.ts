import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// theme
import { Colors } from "../../theme";

// types
import type { BoxProps } from "../Box";
import type { MenuItemsType } from "../MenuItems/types";
import { BadgeTypes } from "../Badge";

export interface MobileMenuProps {
  baseAwsUrl: string;
  items: MenuItemsType[];
  mobileMenuCallback?: (s: boolean) => void;
  activeItem?: string;
  isMobileNav?: boolean;
  children: ReactNode;
  mobileLangSelector: ElementType;
}

export interface DropdownMenuProps extends BoxProps {
  items?: DropdownMenuItems[];
  activeItem?: string;
  isExtended?: boolean;
}

export interface StyledDropdownMenuItemProps extends ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  isActive?: boolean;
}

export interface StyledDropdownMenuInnerLinkItemProps extends ComponentPropsWithoutRef<"div"> {}

export interface InternalLink {
  label?: string;
  icon?: string;
  href?: string;
  fill?: string;
  linkType?: DropdownMenuItemType;
  target?: string;
  mobileTarget?: string;
  badgeType?: BadgeTypes;
  badgeTitle?: string;
}

export interface InnerLinksBlockProps {
  links: InternalLink[];
  leftIcon?: string;
  setIsOpen: (o: boolean) => void;
  linkComponent: ElementType;
  lastItem?: boolean;
}

export interface MenuItemContentProps {
  leftIcon?: string;
  label?: string | ReactNode;
  description?: string;
  status?: LinkStatus;
  rightIcon?: string;
  fill?: string;
  badgeType?: BadgeTypes;
  badgeTitle?: string;
  disabled?: boolean;
}

export enum DropdownMenuItemType {
  INTERNAL_LINK,
  EXTERNAL_LINK,
  BUTTON,
  DIVIDER,
  BANNER,
  CONTAINER,
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface DropdownMenuItems {
  label?: string | ReactNode;
  href?: string;
  text?: string;
  onClick?: () => void;
  type?: DropdownMenuItemType;
  status?: LinkStatus;
  disabled?: boolean;
  iconName?: string;
  isMobileOnly?: boolean;
  leftIcon?: string;
  leftIconFill?: string;
  rightIcon?: string;
  rightIconFill?: string;
  description?: string;
  links?: InternalLink[];
  bannerRenderer?: (h?: string, t?: string) => ReactNode;
  target?: string;
  mobileTarget?: string;
  badgeType?: BadgeTypes;
  badgeTitle?: string;
}

export interface DropdownMenuItemContainerProps extends DropdownMenuItems {
  isActive?: boolean;
  getMenuItemContent: (i: string) => ReactNode;
  linkComponent: ElementType;
  setIsOpen: (s: boolean) => void;
  isOpenItem?: boolean;
  lastItem?: boolean;
}
